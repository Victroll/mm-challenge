# mm-challenge
**NOTE**: This COMPONENT has been designed to better be seen in a cell phone screen.
## Building it
This application is meant to be used with docker so before any further step, you have to be sure of having docker and docker-compose installed in your machine.

Done?

First, download the code with the following command:
```
$ git clone https://github.com/Victroll/mm-challenge.git
```
This will download all the code to the folder `mm-challenge`. Now, build and run the application with:
```
$ cd mm-challenge
$ sudo docker-compose up --build
```
It is important to use the flag `--build`. Otherwise, the application could crash. This could take a while, so be patient :smile:

## Running it
In order to start the application, just open any browser (preferably Chrome) and go to `http://localhost:3000`.

### Features
This application is designed as a COMPONENT so the only feature it has is to show a list of cell phones and a detailed view of each one. Althoug this is just a COMPONENT, some minor actions have been developed:
* Share on Facebook
* Share on Twitter
* Add a phone to favorites (favs will be stored in local)

## Testing it
Since the back-end part is so tiny, only tests have been added in the front-end.
### Unit test
Unit tests have been done using Jest + Enzyme. In order to run them, you should run the following commands (inside the `mm-challenge` folder):
```
$ cd mm-front
$ npm install
$ npm test
```
(`npm install` is mandatory because libs from Jest, Enzyme and Cypress are needed)
This could take a while. When tests have passed, a lot of green will be shown in the console log.
### e2e test
Although this could be discussed as a *real* e2e test, with Cypress, here is being tested the real operation of the application. In order to run this test, the application must be running (see [Building it](#building-it)). 

Once the application is running, launch the following command inside the `mm-challenge` folder):
```
$ cd mm-front
$ npm run cypress:open
```
This will open the Cypress client. Inside it, just click on `test.js`.