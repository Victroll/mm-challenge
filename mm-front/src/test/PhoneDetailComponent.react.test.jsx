import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhoneDetailComponent from '../components/PhoneDetailComponent';
import { Provider } from 'react-redux';
import { initState, store } from './constants';

configure({ adapter: new Adapter() });

describe('PhoneDetailComponent', () => {
    let mountedPhoneDetailComponent;

    const phoneDetailComponent = () => {
        if (!mountedPhoneDetailComponent)
            mountedPhoneDetailComponent = mount(
                <Provider store={ store }>
                    <PhoneDetailComponent
                    key={ 0 }
                    data={ initState.phonesData[0] }
                    order={ 0 } />
                </Provider>
            );
        
        return mountedPhoneDetailComponent;
    }

    beforeEach(() => {
        mountedPhoneDetailComponent = undefined;
    });

    // Elements
    it('always renders 1 list item', () => {
        const li = phoneDetailComponent().find('li');
        expect(li.length).toBe(1);
    });

    it('always renders, at least, 1 button inside a list item', () => {
        const button = phoneDetailComponent().find('button');
        expect(button.length).toBeGreaterThanOrEqual(1);
    });

    it('always renders the phone name as h1 element', () => {
        const h1 = phoneDetailComponent().find('h1');
        expect(h1.length).toBeGreaterThanOrEqual(1);
        expect(h1.first().text()).toBe(initState.phonesData[0].name);
    });

    it('always renders the phone description as p element', () => {
        const p = phoneDetailComponent().find('p');
        expect(p.length).toBeGreaterThanOrEqual(1);
        expect(p.first().text()).toBe(initState.phonesData[0].desc);
    });

    it('always renders 1 FooterIconsComponent', () => {
        const footer = phoneDetailComponent().find('FooterIconsComponent');
        expect(footer.length).toBe(1);
    });

    it('always renders 1 img inside the button', () => {
        const button = phoneDetailComponent().find('button');
        const img = button.first().find('img');
        expect(img.length).toBe(1);
    });

    it('always renders h1, p, and FooterIconsComponent inside a section', () => {
        const section = phoneDetailComponent().find('section');
        expect(section.length).toBeGreaterThanOrEqual(1);
        
        const h1 = section.first().find('h1');
        const p = section.first().find('p');
        const footer = section.first().find('FooterIconsComponent');

        expect(h1.length).toBeGreaterThanOrEqual(1);
        expect(p.length).toBeGreaterThanOrEqual(1);
        expect(footer.length).toBe(1);
    });

    // Classes
    it('always renders the li element with the class .phone-detail', () => {
        const li = phoneDetailComponent().find('li');
        const className = li.find('.phone-detail');
        expect(className.length).toBe(1);
    });

    it('always renders the first button element with the class .mobile-img', () => {
        const button = phoneDetailComponent().find('button');
        const className = button.first().find('.mobile-img');
        expect(className.length).toBe(1);
    });

    it('always renders the first section with the class .detail-text', () => {
        const section = phoneDetailComponent().find('section');
        const className = section.first().find('.detail-text');
        expect(className.length).toBe(1);
    });
});