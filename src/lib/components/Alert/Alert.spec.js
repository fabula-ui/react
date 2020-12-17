import React from 'react';
import { act } from 'react-dom/test-utils';
import Color from 'color';
import { mount, shallow } from 'enzyme';
import { matchers } from '@emotion/jest';
import { render, fireEvent } from '@testing-library/react';

// Fabula
import getComponentVars from '@fabula/core/styles/methods/misc/getComponentVars';
import getDividerColor from '@fabula/core/styles/methods/color/getDividerColor';
import getGlobalVars from '@fabula/core/styles/methods/misc/getGlobalVars';
import getTextColor from '@fabula/core/styles/methods/color/getTextColor';

// Component
import { Alert } from './Alert';
import CloseButton from '../CloseButton/CloseButton';
import Icon from '../Icon/Icon';

// Providers
import FabulaProvider from '../../providers/FabulaProvider';

// Extend matchers
expect.extend(matchers);

// Theme changes
const theme = {
    components: {
        alert: {
            borderRadius: 5,
            borderWidth: '1rem',
            fontFamily: 'Roboto',
            glowRadius: '1px',
            glowSpread: '5',
            glowX: 1,
            glowY: '2rem',
            paddingBottom: '50px',
            paddingLeft: .25,
            paddingRight: '2rem',
            paddingTop: 0,
            spacingX: 5,
            spacingY: 5,
            textFontSize: '2rem',
            textFontWeight: 400,
            titleFontSize: '3rem',
            titleFontWeight: 900
        }
    }
};

const AlertWithChanges = () => (
    <FabulaProvider theme={theme}>
        <Alert
            glow={true}
            icon={{ name: 'cloud' }}
            marker="primary"
            text="Text"
            title="Title" />
    </FabulaProvider>
)

describe('Alert Component', () => {
    it('Should create', () => {
        const { container } = render(<Alert />);

        expect(container).toBeTruthy();
    });

    it('Should have a pre-defined structure', () => {
        const { container } = render(<Alert />);
        const alertElement = container.querySelector('.fab-alert');
        const stageElement = container.querySelector('.fab-alert__stage');

        expect(alertElement).toBeTruthy();
        expect(stageElement).toBeTruthy();
    });

    it('Should have a default look', () => {
        const wrapper = mount(<Alert text="Text" title="Title" />);
        const wrapperWithIcon = mount(<Alert icon={{ name: 'cloud' }} text="Text" title="Title" />);
        const wrapperWithoutText = mount(<Alert title="Title" />);

        // Elements
        const alertElement = wrapper.find('.fab-alert');
        const stageElement = wrapper.find('.fab-alert__stage');
        const stageWithIconElement = wrapperWithIcon.find('.fab-alert__stage');
        const textElement = wrapper.find('.fab-alert__text');
        const titleElement = wrapper.find('.fab-alert__title');
        const titleWithoutTextElement = wrapperWithoutText.find('.fab-alert__title');

        // Vars
        const alertVars = getComponentVars('alert');
        const globalVars = getGlobalVars();

        // Styles
        const alertStyle = getComputedStyle(alertElement.getDOMNode());
        const stageStyle = getComputedStyle(stageElement.getDOMNode());
        const stageWithIconStyle = getComputedStyle(stageWithIconElement.getDOMNode());
        const textStyle = getComputedStyle(textElement.getDOMNode());
        const titleStyle = getComputedStyle(titleElement.getDOMNode());
        const titleWithoutTextStyle = getComputedStyle(titleWithoutTextElement.getDOMNode());

        // Alert
        expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
        expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(globalVars.baseColor).hex());
        expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color).hex());
        expect(alertStyle.getPropertyValue('border-radius')).toBe(alertVars.borderRadius);
        expect(alertStyle.getPropertyValue('border-width')).toBe(alertVars.borderWidth);
        expect(alertStyle.getPropertyValue('border-width')).toBe(globalVars.borderWidth);
        expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(globalVars.textColor);
        expect(alertStyle.getPropertyValue('display')).toBe('flex');
        expect(alertStyle.getPropertyValue('font-family')).toBe(alertVars.fontFamily);
        expect(alertStyle.getPropertyValue('font-size')).toBe(alertVars.fontSize);
        expect(alertStyle.getPropertyValue('padding-bottom')).toBe(alertVars.paddingBottom);
        expect(alertStyle.getPropertyValue('padding-left')).toBe(alertVars.paddingLeft);
        expect(alertStyle.getPropertyValue('padding-right')).toBe(alertVars.paddingRight);
        expect(alertStyle.getPropertyValue('padding-top')).toBe(alertVars.paddingTop);
        expect(alertStyle.getPropertyValue('position')).toBe('relative');
        expect(alertStyle.getPropertyValue('transition')).toBeDefined();

        // Stage
        expect(stageStyle.getPropertyValue('display')).toBe('flex');
        expect(stageStyle.getPropertyValue('flex-direction')).toBe('column');
        expect(stageStyle.getPropertyValue('flex-grow')).toBe('1');
        expect(stageStyle.getPropertyValue('margin-left')).toBeFalsy();
        expect(stageWithIconStyle.getPropertyValue('margin-left')).toBe(alertVars.spacingX);

        // Text
        expect(textStyle.getPropertyValue('font-family')).toBe('');
        expect(textStyle.getPropertyValue('font-size')).toBe(alertVars.textFontSize);
        expect(textStyle.getPropertyValue('font-weight')).toBe(`${alertVars.textFontWeight}`);
        expect(textStyle.getPropertyValue('letter-spacing')).toBe(alertVars.letterSpacing);
        expect(textStyle.getPropertyValue('letter-spacing')).toBe(globalVars.letterSpacing);

        // Title
        expect(titleStyle.getPropertyValue('font-family')).toBe('');
        expect(titleStyle.getPropertyValue('font-size')).toBe(alertVars.titleFontSize);
        expect(titleStyle.getPropertyValue('font-weight')).toBe(`${alertVars.titleFontWeight}`);
        expect(titleStyle.getPropertyValue('letter-spacing')).toBe(alertVars.letterSpacing);
        expect(titleStyle.getPropertyValue('letter-spacing')).toBe(globalVars.letterSpacing);
        expect(titleStyle.getPropertyValue('line-height')).toBe('1');
        expect(titleStyle.getPropertyValue('margin-bottom')).toBe(alertVars.spacingY);
        expect(titleWithoutTextStyle.getPropertyValue('margin-bottom')).toBeFalsy();
    });

    it('Should change css according to new theme', () => {
        const wrapper = mount(<AlertWithChanges />);

        let alertElement;
        let alertStyle;
        let stageElement;
        let stageStyle;
        let textElement;
        let textStyle;
        let titleElement;
        let titleStyle;

        wrapper.update();

        // Elements
        alertElement = wrapper.find('.fab-alert');
        stageElement = wrapper.find('.fab-alert__stage');
        textElement = wrapper.find('.fab-alert__text');
        titleElement = wrapper.find('.fab-alert__title');

        // Styles
        alertStyle = getComputedStyle(alertElement.getDOMNode());
        stageStyle = getComputedStyle(stageElement.getDOMNode());
        textStyle = getComputedStyle(textElement.getDOMNode());
        titleStyle = getComputedStyle(titleElement.getDOMNode());

        // Alert
        expect(alertStyle.getPropertyValue('border-radius')).toBe(`${theme.components.alert.borderRadius}px`);
        expect(alertStyle.getPropertyValue('border-width')).toBe(theme.components.alert.borderWidth);
        expect(alertStyle.getPropertyValue('box-shadow').split(' ')[0]).toBe(`${theme.components.alert.glowX}px`);
        expect(alertStyle.getPropertyValue('box-shadow').split(' ')[1]).toBe(theme.components.alert.glowY);
        expect(alertStyle.getPropertyValue('box-shadow').split(' ')[2]).toBe(theme.components.alert.glowRadius);
        expect(alertStyle.getPropertyValue('box-shadow').split(' ')[3]).toBe(`${theme.components.alert.glowSpread}px`);
        expect(alertStyle.getPropertyValue('font-family')).toBe(theme.components.alert.fontFamily);
        expect(alertStyle.getPropertyValue('padding-bottom')).toBe(theme.components.alert.paddingBottom);
        expect(alertStyle.getPropertyValue('padding-left')).toBe(`${theme.components.alert.paddingLeft}rem`);
        expect(alertStyle.getPropertyValue('padding-right')).toBe(theme.components.alert.paddingRight);
        expect(alertStyle.getPropertyValue('padding-top')).toBe(`${theme.components.alert.paddingTop}px`);

        // Stage
        expect(stageStyle.getPropertyValue('margin-left')).toBe(`${theme.components.alert.spacingX}px`);

        // Text
        expect(textStyle.getPropertyValue('font-size')).toBe(theme.components.alert.textFontSize);
        expect(textStyle.getPropertyValue('font-weight')).toBe(`${theme.components.alert.textFontWeight}`);

        // Title
        expect(titleStyle.getPropertyValue('font-size')).toBe(theme.components.alert.titleFontSize);
        expect(titleStyle.getPropertyValue('font-weight')).toBe(`${theme.components.alert.titleFontWeight}`);
        expect(titleStyle.getPropertyValue('margin-bottom')).toBe(`${theme.components.alert.spacingY}em`);
    });

    describe('Props', () => {
        it('Should set clear prop', () => {
            let alertElement;
            let alertStyle;
            let iconElement;
            let iconStyle;
            let shallowWrappers = [];
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no clear prop
            shallowWrappers[0] = shallow(<Alert icon={{ name: 'cloud' }} />)
            wrappers[0] = mount(<Alert />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());
            iconElement = mount(shallowWrappers[0].find(Icon).first().getElement());
            iconStyle = getComputedStyle(iconElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            // expect(iconStyle.getPropertyValue('color')).toBe('inherit');

            // Clear: true
            wrappers[1] = mount(<Alert clear={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('background-color')).toBeFalsy();
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());

            // Clear + theme color
            wrappers[2] = mount(<Alert clear={true} color="primary" />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('background-color')).toBeFalsy();
            // expect(alertStyle.getPropertyValue('border-color')).toBe(getDividerColor(primaryColor, 'fill').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(primaryColor).hex());

            // Clear + custom color
            wrappers[3] = mount(<Alert clear={true} color="blue" />);

            alertElement = wrappers[3].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('background-color')).toBeFalsy();
            // expect(alertStyle.getPropertyValue('border-color')).toBe(getDividerColor(primaryColor, 'fill').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color('blue').hex());
        });

        it('Should set closeButton prop', () => {
            let alertElement;
            let alertStyle;
            let closeButtonElement;
            let closeButtonStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            act(() => {
                // Default: no color
                wrappers[0] = shallow(<Alert closeButton={true} />);
                wrappers[0].update();

                closeButtonElement = mount(wrappers[0].find(CloseButton).getElement());
                closeButtonStyle = getComputedStyle(closeButtonElement.getDOMNode());

                expect(closeButtonStyle.getPropertyValue('margin-left')).toBe(`calc(-${alertVars.paddingLeft} / 4)`);
            });


            // expect(closeButtonStyle.getPropertyValue('margin-right')).toBe(`calc(-${alertVars.paddingRight} / 4)`);
            // expect(closeButtonStyle.getPropertyValue('margin-top')).toBe(`calc(-${alertVars.paddingTop} / 4)`);
        });

        it('Should set color prop', () => {
            let alertElement;
            let alertStyle;
            let iconElement;
            let iconStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert icon={{ name: 'cloud' }} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());
            // iconElement = wrappers[0].find('.fab-icon');
            // iconStyle = getComputedStyle(iconElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            // expect(Color(iconStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" icon={{ name: 'cloud' }} title="Title" />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(primaryColor).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).not.toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'fill')).hex());

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color('blue').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).not.toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'fill')).hex());

            // Should not break when not using a real color
            wrappers[3] = mount(<Alert color="xsei" />);

            alertElement = wrappers[3].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).not.toBe(Color(alertVars.textColor).hex());

            // TODO: find a way to add tests with icon
        });
    });

    it('Should have a text', () => {
        const text = 'This is a text';
        const { container } = render(<Alert text={text} />);
        const element = container.querySelector('.fab-alert__text');

        expect(element.textContent).toBe(text);
    });

    it('Should have a title', () => {
        const title = 'This is a title';
        const { container } = render(<Alert title={title} />);
        const element = container.querySelector('.fab-alert__title');

        expect(element.textContent).toBe(title);
    });

    it('Should have an icon', () => {
        const { container } = render(<Alert icon={{ name: 'icon' }} />);
        const element = container.querySelector('.fab-icon');

        expect(element).toBeTruthy();
    });

    it('Should have an icon if there is a type', () => {
        const { container } = render(<Alert type="success" />);
        const element = container.querySelector('.fab-icon');

        expect(element).toBeTruthy();
    });

    // it('Should have border', () => {
    //     const borderfulComponent = render(<Alert />);
    //     const borderlessComponent = render(<Alert border={false} />);
    //     const borderfulAlert = borderfulComponent.container.querySelector('.fab-alert');
    //     const borderlessAlert = borderlessComponent.container.querySelector('.fab-alert');

    //     expect(getComputedStyle(borderfulAlert).borderColor).not.toBe('transparent');
    //     expect(getComputedStyle(borderlessAlert).borderColor).toBe('transparent');
    // });

    it('Should have a close button', () => {
        const { container } = render(<Alert closeButton={true} />);
        const element = container.querySelector('.fab-close-button');

        expect(element).toBeTruthy();
    });

    it('Should call onClose', async done => {
        let output = '';
        let component;
        let closeFn = () => { output = 'called' };

        await act(async () => {
            component = await render(<Alert closeButton={true} onClose={closeFn} />);

            fireEvent.click(component.container.querySelector('.fab-close-button'), new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }));
        });

        setTimeout(() => {
            expect(output).toBe('called');
            done();
        }, 1000);
    });
});