import React from 'react';
import ReactDOM from 'react-dom';
import './themes/index.css';
import App from './containers/App';
import LoadingScreen from './components/LoadingScreen';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import { get } from 'axios';

// Get viewport height
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

(function fetchData() {
    get('http://localhost:3210/phones')
        .then((response) => {
            const initState = {
                phonesData: response.data.phones,
                favs: window.localStorage.getItem('mm_challenge_favs') ? 
                    JSON.parse(window.localStorage.getItem('mm_challenge_favs'))
                    : [],
                anim: {
                    listItem: '',
                    detailedView: ''
                },
                detailedView: {
                    id: -1,
                    visible: false
                },
                itemsInScreen: Math.ceil(vh / 200)
            };
            
            const store = createStore(
                reducer,
                initState
            );

            ReactDOM.render(
                <Provider store={ store }>
                    <App />
                </Provider>, 
                document.getElementById('root')
            );            
        })
        .catch((error) => console.log(error))
})();

ReactDOM.render(<LoadingScreen />, document.getElementById('root'));

registerServiceWorker();
