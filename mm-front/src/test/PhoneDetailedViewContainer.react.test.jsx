import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhoneDetailedViewContainer from '../containers/PhoneDetailedViewContainer';
import { Provider } from 'react-redux';
import { stateForDetailedView, storeForDetailedView } from './constants';

configure({ adapter: new Adapter() });

describe('PhoneDetailedViewContainer', () => {
    let mountedPhoneDetailedViewContainer;

    const phoneDetailedViewContainer = () => {
        if (!mountedPhoneDetailedViewContainer)
            mountedPhoneDetailedViewContainer = mount(
                <Provider store={ storeForDetailedView }>
                    <PhoneDetailedViewContainer />
                </Provider>
            );

        return mountedPhoneDetailedViewContainer;
    }

    beforeEach(() => {
        mountedPhoneDetailedViewContainer = undefined;
    });

    // Elements
    it('always renders 1 section when it is visible', () => {
        const section = phoneDetailedViewContainer().find('section').first();
        expect(section.length).toBe(1);
    });

    it('always renders 1 img element', () => {
        const img = phoneDetailedViewContainer().find('img');
        expect(img.length).toBe(1);
    });

    it('always renders the phone name as h1 element', () => {
        const h1 = phoneDetailedViewContainer().find('h1');
        expect(h1.length).toBe(1);
        expect(h1.first().text()).toBe(stateForDetailedView.phonesData[1].name);
    });

    it('always renders the description as p element', () => {
        const p = phoneDetailedViewContainer().find('p');
        expect(p.length).toBe(1);
        expect(p.first().text()).toBe(stateForDetailedView.phonesData[1].desc);
    });

    it('always renders 1 FooterIconsComponent', () => {
        const footer = phoneDetailedViewContainer().find('FooterIconsComponent');
        expect(footer.length).toBe(1);
    });

    // Classes
    it('always renders a separator', () => {
        const separator = phoneDetailedViewContainer().find('.separator');
        expect(separator.length).toBe(1);
    });

    it('always renders a \'back button\'', () => {
        const backButton = phoneDetailedViewContainer().find('.back-button');
        expect(backButton.length).toBe(1);
    });
});
