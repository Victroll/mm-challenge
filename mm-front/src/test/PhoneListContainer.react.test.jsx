import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhoneListContainer from '../containers/PhoneListContainer';
import PhoneDetailComponent from '../components/PhoneDetailComponent';
import { Provider } from 'react-redux';
import { initState, store } from './constants';

configure({ adapter: new Adapter() });

describe('PhoneListContainer', () => {
    let mountedPhoneListContainer;

    const phoneListContainer = () => {
        if (!mountedPhoneListContainer)
            mountedPhoneListContainer = mount(
                <Provider store={ store }>
                    <PhoneListContainer />
                </Provider>
            );

        return mountedPhoneListContainer;
    }

    beforeEach(() => {
        mountedPhoneListContainer = undefined;
    });

    // Elements
    it('always renders a list', () => {
        const ul = phoneListContainer().find('ul');
        expect(ul.length).toBe(1);
    });

    it('always renders as much PhoneDetailComponent as the store has', () => {
        const phoneDetailComponent = phoneListContainer().find(PhoneDetailComponent);
        expect(phoneDetailComponent.length).toBe(initState.phonesData.length);
    });

    // Classes
    it('always renders a list with the class .phone-list', () => {
        const ul = phoneListContainer().find('ul');
        const className = ul.find('.phone-list');
        expect(className.length).toBe(1);
    });
});