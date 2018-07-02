import reducer from '../reducer/reducer';
import { createStore } from 'redux';

export const initState = {
    phonesData: [
        {
            id: 0,
            name: 'Movil 0',
            price: 400,
            desc: '1'
        },
        {
            id: 1,
            name: 'Movil 1',
            price: 200,
            desc: 'b'
        },
        {
            id: 2,
            name: 'Movil 2',
            price: 340,
            desc: 'c'
        },
        {
            id: 3,
            name: 'Movil 3',
            price: 800,
            desc: 'd'
        },
        {
            id: 4,
            name: 'Movil 4',
            price: 250,
            desc: 'e'
        },
        {
            id: 5,
            name: 'Movil 5',
            price: 450,
            desc: 'f'
        }
    ],
    favs: [],
    anim: {
        listItem: '',
        detailedView: ''
    },
    detailedView: {
        id: -1,
        visible: false
    },
    itemsInScreen: 4
};

export const stateForDetailedView = {
    phonesData: [
        {
            id: 0,
            name: 'Movil 0',
            price: 400,
            desc: '1'
        },
        {
            id: 1,
            name: 'Movil 1',
            price: 200,
            desc: 'b'
        }
    ],
    favs: [],
    anim: {
        listItem: '',
        detailedView: ''
    },
    detailedView: {
        id: 1,
        visible: true
    },
    itemsInScreen: 4
};

export const store = createStore(
    reducer,
    initState
);

export const storeForDetailedView = createStore(
    reducer,
    stateForDetailedView
);