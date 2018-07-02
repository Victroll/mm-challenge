import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FooterIconsComponent from '../components/FooterIconsComponent';
import { Provider } from 'react-redux';
import { stateForDetailedView, storeForDetailedView } from './constants';

configure({adapter: new Adapter() });

describe('FooterIconsComponent', () => {
    let mountedFooterIconsComponent;

    const footerIconsComponent = () => {
        if (!mountedFooterIconsComponent)
            mountedFooterIconsComponent = mount(
                <Provider store={ storeForDetailedView }>
                    <FooterIconsComponent
                    id={ 1 }
                    price={ stateForDetailedView.phonesData[1].price } />
                </Provider>
            );

        return mountedFooterIconsComponent;
    }

    beforeEach(() => {
        mountedFooterIconsComponent = undefined;
    });

    // Elements
    it('always renders 2 sections', () => {
        const section = footerIconsComponent().find('section');
        expect(section.length).toBe(2);
    });

    it('always renders just 1 button', () => {
        const button = footerIconsComponent().find('button');
        expect(button.length).toBe(1);
    });

    it('always renders the price as h2 element', () => {
        const price = footerIconsComponent().find('h2');
        expect(price.first().text())
            .toBe(`Price: ${stateForDetailedView.phonesData[1].price}€`);
    });

    // Classes
    it('always renders a FB link', () => {
        const link = footerIconsComponent().find('.icons').find('a').first().prop('href');
        expect(link).toEqual(expect.stringContaining('facebook.com'));
        const fb = footerIconsComponent().find('.fa-facebook-square');
        expect(fb.length).toBe(1);
    });

    it('always renders a Twitter link', () => {
        const link = footerIconsComponent().find('.icons').find('a').at(1).prop('href');
        expect(link).toEqual(expect.stringContaining('twitter.com'));
        const fb = footerIconsComponent().find('.fa-twitter-square');
        expect(fb.length).toBe(1);
    });
});