const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({});

const phonesData = JSON.parse(fs.readFileSync('./mocked_data/phones.json', 'utf8'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    res.setHeader('Access-Control-Allow-Credentials', false);

    next();
});

app.use('/phones', express.static(`${__dirname}/public`));

app.get('/phones', jsonParser, function (req, res) {
    setTimeout(() => res.send(phonesData), 2500);
});

app.listen(3210, function () {
    console.log('Listening on port 3210');
});
