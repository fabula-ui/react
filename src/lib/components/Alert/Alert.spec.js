import React from 'react';
import { act } from 'react-dom/test-utils';
import Color from 'color';
import { mount, shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

// Fabula
import { getBgColor } from '@fabula/core/styles/methods/color/getBgColor';
import { getBorderColor } from '@fabula/core/styles/methods/color/getBorderColor';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getDividerColor } from '@fabula/core/styles/methods/color/getDividerColor';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';
import { getGlowColor } from '@fabula/core/styles/methods/color/getGlowColor';
import { getTextColor } from '@fabula/core/styles/methods/color/getTextColor';

// Component
import { Alert } from './Alert';
import { CloseButton } from '../CloseButton/CloseButton';

// Providers
import { FabulaProvider } from '../../providers/FabulaProvider';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Theme changes
const theme = {
    components: {
        alert: {
            borderRadius: 5,
            borderWidth: '1rem',
            color: 'red',
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
    describe('Basic', () => {
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
    
            // Check data-fab-component attribute
            expect(alertElement.getAttribute('data-fab-component')).toBe('alert');
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
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color));
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
    });

    describe('Props', () => {
        it('Should set border prop', async () => {
            let alertElement;
            let alertStyle;
            let wrapper;
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Border true + no color
            wrapper = mount(<Alert border={true} />);

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));

            // Border true + primary color
            wrapper = mount(<Alert border={true} color="primary" />);

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'fill'));
        
            // Border true + blue color
            wrapper = mount(<Alert border={true} color="blue" />);

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'fill'));
        
            // No border
            wrapper = mount(<Alert border={false} />);

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('border-color')).toBe('transparent');
        });

        it('Should set clear prop', async () => {
            let alertElement;
            let alertStyle;
            let shallowWrappers = [];
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no clear prop
            shallowWrappers[0] = shallow(<Alert icon={{ name: 'cloud' }} />);
            shallowWrappers[0].update();

            wrappers[0] = mount(<Alert />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());

            // Clear: true
            wrappers[1] = mount(<Alert clear={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());

            // Clear + theme color
            wrappers[2] = mount(<Alert clear={true} color="primary" />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('background-color')).toBe('transparent');
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(primaryColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'clear'));

            // Clear + custom color
            wrappers[3] = mount(<Alert clear={true} color="blue" />);

            alertElement = wrappers[3].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('background-color')).toBe('transparent');
            // expect(alertStyle.getPropertyValue('border-color')).toBe(getDividerColor(primaryColor, 'fill').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color('blue').hex());
        });

        it('Should set closeButton prop', () => {
            const alertVars = getComponentVars('alert');
            let closeButtonElement;
            let closeButtonStyle;
            let wrappers = [];

            wrappers[0] = shallow(<Alert closeButton={true} />);

            closeButtonElement = mount(wrappers[0].find(CloseButton).dive().getElement());
            closeButtonStyle = getComputedStyle(closeButtonElement.getDOMNode());

            // No color
            expect(Color(closeButtonStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());

            // With color
            wrappers[0] = shallow(<Alert color="primary" closeButton={true} />);

            closeButtonElement = mount(wrappers[0].find(CloseButton).dive().getElement());
            closeButtonStyle = getComputedStyle(closeButtonElement.getDOMNode());

            expect(Color(closeButtonStyle.getPropertyValue('background-color')).hex()).not.toBe(Color(alertVars.color).hex());
        });

        it('Should set color prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" icon={{ name: 'cloud' }} title="Title" />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(primaryColor).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'fill')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'fill'));

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color('blue').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'fill')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'fill'));

            // Should not break when not using a real color
            wrappers[3] = mount(<Alert color="xsei" />);

            alertElement = wrappers[3].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).not.toBe(Color(alertVars.textColor).hex());
        });

        it('Should set darken prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert darken={true} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" darken={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'darken'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'darken')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'darken'));

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" darken={true} />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor('blue', 'darken'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'darken')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'darken'));
        });

        it('Should set faded prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert faded={true} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" faded={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'faded'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(getTextColor(primaryColor, 'faded'));
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'faded'));

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" faded={true} />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor('blue', 'faded'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(getTextColor('blue', 'faded'));
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'faded'));
        });

        it('Should set glow prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert glow={true} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('box-shadow').split(' ')[0]).toBe(`${alertVars.glowX}`);
            expect(alertStyle.getPropertyValue('box-shadow').split(' ')[1]).toBe(alertVars.glowY);
            expect(alertStyle.getPropertyValue('box-shadow').split(' ')[2]).toBe(alertVars.glowRadius);
            expect(alertStyle.getPropertyValue('box-shadow').split(' ')[3]).toBe(`${alertVars.glowSpread}`);
            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor(alertVars.color, 'fill')).hex());

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" glow={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor(primaryColor, 'fill')).hex());

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" glow={true} />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor('blue', 'fill')).hex());
        });

        it('Should set icon prop', () => {
            const { container } = render(<Alert icon={{ name: 'icon' }} />);
            const element = container.querySelector('.fab-icon');

            expect(element).toBeTruthy();
        });

        it('Should set invert prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert invert={true} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" invert={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(primaryColor, 'invert')).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(getTextColor(primaryColor, 'invert'));
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'invert'));

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" invert={true} />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'invert')).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'invert')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'invert'));
        });

        it('Should set lighten prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert lighten={true} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(alertVars.color, 'fill'));

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" lighten={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'lighten'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'lighten')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'lighten'));

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" lighten={true} />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor('blue', 'lighten'));
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'lighten')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'lighten'));
        });

        it('Should set marker prop', () => {
            const { container } = render(<Alert marker="primary" />);
            const alertElement = container.querySelector('.fab-alert');

            // TODO: fix this
        });

        it('Should set outline prop', () => {
            let alertElement;
            let alertStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');

            // Default: no color
            wrappers[0] = mount(<Alert outline={true} />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(alertVars.textColor).hex());
            // TODO: fix this test
            // expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor(alertVars.color, 'outline'));

            // Color + theme color
            wrappers[1] = mount(<Alert color="primary" outline={true} />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(primaryColor, 'outline')).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(getTextColor(primaryColor, 'outline'));
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor(primaryColor, 'outline'));

            // Color + custom color
            wrappers[2] = mount(<Alert color="blue" outline={true} />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'outline')).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'outline')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor('blue', 'outline'));
        });

        it('Should set text prop', () => {
            const text = 'This is a text';
            const { container } = render(<Alert text={text} />);
            const element = container.querySelector('.fab-alert__text');

            expect(element.textContent).toBe(text);
        });

        it('Should set text color prop', () => {
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let textElement;
            let textStyle;
            let wrappers = [];

            // Theme color
            wrappers[0] = mount(<Alert text="Text" textColor="primary" />);
            textElement = wrappers[0].find('.fab-alert__text');
            textStyle = getComputedStyle(textElement.getDOMNode());

            expect(Color(textStyle.getPropertyValue('color')).hex()).toBe(Color(primaryColor).hex());

            // Custom color
            wrappers[0] = mount(<Alert text="Text" textColor="blue" />);
            textElement = wrappers[0].find('.fab-alert__text');
            textStyle = getComputedStyle(textElement.getDOMNode());

            expect(Color(textStyle.getPropertyValue('color')).hex()).toBe(Color('blue').hex());
        });

        it('Should set title prop', () => {
            const title = 'This is a title';
            const { container } = render(<Alert title={title} />);
            const element = container.querySelector('.fab-alert__title');

            expect(element.textContent).toBe(title);
        });

        it('Should set title color prop', () => {
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let titleElement;
            let titleStyle;
            let wrappers = [];

            // Theme color
            wrappers[0] = mount(<Alert title="Text" titleColor="primary" />);
            titleElement = wrappers[0].find('.fab-alert__title');
            titleStyle = getComputedStyle(titleElement.getDOMNode());

            expect(Color(titleStyle.getPropertyValue('color')).hex()).toBe(Color(primaryColor).hex());

            // Custom color
            wrappers[0] = mount(<Alert title="Text" titleColor="blue" />);
            titleElement = wrappers[0].find('.fab-alert__title');
            titleStyle = getComputedStyle(titleElement.getDOMNode());

            expect(Color(titleStyle.getPropertyValue('color')).hex()).toBe(Color('blue').hex());
        });

        it('Should set type prop', () => {
            const { container } = render(<Alert type="success" />);
            let alertElement;
            let alertStyle;
            let iconElement;
            let titleElement;
            let titleStyle;
            let wrappers = [];
            const globalVars = getGlobalVars();

            // Check if icon exists
            iconElement = container.querySelector('.fab-icon');

            expect(iconElement).toBeTruthy();

            // Danger type
            wrappers[0] = mount(<Alert glow={true} title="Title" type="danger" />);

            alertElement = wrappers[0].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());
            titleElement = wrappers[0].find('.fab-alert__title');
            titleStyle = getComputedStyle(titleElement.getDOMNode());

            // expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor(globalVars.colors.danger, 'faded'));
            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor(globalVars.colors.danger, 'fill')).hex());
            expect(Color(titleStyle.getPropertyValue('color')).hex()).toBe(Color(globalVars.colors.danger).hex());


            // Info type
            wrappers[1] = mount(<Alert glow={true} title="Title" type="info" />);

            alertElement = wrappers[1].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());
            titleElement = wrappers[1].find('.fab-alert__title');
            titleStyle = getComputedStyle(titleElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor(globalVars.colors.info, 'fill')).hex());
            expect(Color(titleStyle.getPropertyValue('color')).hex()).toBe(Color(globalVars.colors.info).hex());

            // Success type
            wrappers[2] = mount(<Alert glow={true} title="Title" type="success" />);

            alertElement = wrappers[2].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());
            titleElement = wrappers[2].find('.fab-alert__title');
            titleStyle = getComputedStyle(titleElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor(globalVars.colors.success, 'fill')).hex());
            expect(Color(titleStyle.getPropertyValue('color')).hex()).toBe(Color(globalVars.colors.success).hex());

            // Warning type
            wrappers[3] = mount(<Alert glow={true} title="Title" type="warning" />);

            alertElement = wrappers[3].find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());
            titleElement = wrappers[3].find('.fab-alert__title');
            titleStyle = getComputedStyle(titleElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('box-shadow').split(' ')[4]).hex()).toBe(Color(getGlowColor(globalVars.colors.warning, 'fill')).hex());
            expect(Color(titleStyle.getPropertyValue('color')).hex()).toBe(Color(globalVars.colors.warning).hex());
        });
    });

    describe('Utils', () => {
        describe('Alignment util', () => {
            it('Should set al prop', () => {
                const wrapper = mount(<UtilsProvider><Alert al="center" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('align-items')).toBe('center');
                expect(alertStyle.getPropertyValue('justify-content')).toBe('center');
            });

            it('Should set alH prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // Default - flex row
                wrappers[0] = mount(<UtilsProvider><Alert alH="center" /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('justify-content')).toBe('center');

                // Default - flex column
                wrappers[0] = mount(<UtilsProvider><Alert alH="center" direction="column" /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('align-items')).toBe('center');
            });

            it('Should set alV prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // Default - flex row
                wrappers[0] = mount(<UtilsProvider><Alert alV="center" /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('align-items')).toBe('center');

                // Default - flex column
                wrappers[1] = mount(<UtilsProvider><Alert alV="center" direction="column" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('justify-content')).toBe('center');
            });
        });

        describe('Display util', () => {
            it('Should set d prop', () => {
                const wrapper = mount(<UtilsProvider><Alert d="inline-block" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('display')).toBe('inline-block');
            });
        });

        describe('Flex util', () => {
            it('Should set basis prop', () => {
                const wrapper = mount(<UtilsProvider><Alert basis="50%" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-basis')).toBe('50%');
            });

            it('Should set direction prop', () => {
                const wrapper = mount(<UtilsProvider><Alert direction="column" flex={true} /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-direction')).toBe('column');
            });

            it('Should set flex prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // Boolean
                wrappers[0] = mount(<UtilsProvider><Alert flex={true} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('display')).toBe('flex');

                // String
                wrappers[1] = mount(<UtilsProvider><Alert flex="1 0 auto" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex')).toBe('1 0 auto');
            });

            it('Should set flow prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // Horizontal
                wrappers[0] = mount(<UtilsProvider><Alert flex={true} flow="horizontal" /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-direction')).toBe('row');

                // H
                wrappers[0] = mount(<UtilsProvider><Alert flex={true} flow="h" /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-direction')).toBe('row');

                // Vertical
                wrappers[1] = mount(<UtilsProvider><Alert flex={true} flow="vertical" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-direction')).toBe('column');

                // V
                wrappers[1] = mount(<UtilsProvider><Alert flex={true} flow="v" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-direction')).toBe('column');
            });

            it('Should set grow prop', () => {
                const wrapper = mount(<UtilsProvider><Alert grow="1" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-grow')).toBe('1');
            });

            it('Should set shrink prop', () => {
                const wrapper = mount(<UtilsProvider><Alert shrink="1" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-shrink')).toBe('1');
            });

            it('Should set wrap prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // False
                wrappers[0] = mount(<UtilsProvider><Alert wrap={false} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-wrap')).toBe('');

                // True
                wrappers[0] = mount(<UtilsProvider><Alert wrap={true} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('flex-wrap')).toBe('wrap');
            });
        });

        describe('Margin util', () => {
            it('Should set m prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert m={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert m="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert m={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin')).toBe('0px');
            });

            it('Should set mb prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert mb={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-bottom')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert mb="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-bottom')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert mb={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-bottom')).toBe('0px');
            });

            it('Should set ml prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert ml={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-left')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert ml="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-left')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert ml={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-left')).toBe('0px');
            });

            it('Should set mr prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert mr={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert mr="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-right')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert mr={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-right')).toBe('0px');
            });

            it('Should set mt prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert mt={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert mt="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-top')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert mt={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-top')).toBe('0px');
            });

            it('Should set mx prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert mx={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-left')).toBe('1rem');
                expect(alertStyle.getPropertyValue('margin-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert mx="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-left')).toBe('15px');
                expect(alertStyle.getPropertyValue('margin-right')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert mx={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-left')).toBe('0px');
                expect(alertStyle.getPropertyValue('margin-right')).toBe('0px');
            });

            it('Should set my prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert my={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-bottom')).toBe('1rem');
                expect(alertStyle.getPropertyValue('margin-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert my="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-bottom')).toBe('15px');
                expect(alertStyle.getPropertyValue('margin-top')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert my={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('margin-bottom')).toBe('0px');
                expect(alertStyle.getPropertyValue('margin-top')).toBe('0px');
            });
        });

        describe('Overflow util', () => {
            it('Should set ov prop', () => {
                const wrapper = mount(<UtilsProvider><Alert ov="hidden" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('overflow')).toBe('hidden');
            });

            it('Should set ovX prop', () => {
                const wrapper = mount(<UtilsProvider><Alert ovX="hidden" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('overflow-x')).toBe('hidden');
            });

            it('Should set ovY prop', () => {
                const wrapper = mount(<UtilsProvider><Alert ovY="hidden" /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('overflow-y')).toBe('hidden');
            });
        });

        describe('Padding util', () => {
            it('Should set p prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert p={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert p="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert p={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding')).toBe('0px');
            });

            it('Should set pb prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert pb={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-bottom')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert pb="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-bottom')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert pb={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-bottom')).toBe('0px');
            });

            it('Should set pl prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert pl={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-left')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert pl="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-left')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert pl={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-left')).toBe('0px');
            });

            it('Should set pr prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert pr={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert pr="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-right')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert pr={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-right')).toBe('0px');
            });

            it('Should set pt prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert pt={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert pt="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-top')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert pt={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-top')).toBe('0px');
            });

            it('Should set px prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert px={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-left')).toBe('1rem');
                expect(alertStyle.getPropertyValue('padding-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert px="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-left')).toBe('15px');
                expect(alertStyle.getPropertyValue('padding-right')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert px={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-left')).toBe('0px');
                expect(alertStyle.getPropertyValue('padding-right')).toBe('0px');
            });

            it('Should set py prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert py={1} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-bottom')).toBe('1rem');
                expect(alertStyle.getPropertyValue('padding-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert py="15px" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-bottom')).toBe('15px');
                expect(alertStyle.getPropertyValue('padding-top')).toBe('15px');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert py={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('padding-bottom')).toBe('0px');
                expect(alertStyle.getPropertyValue('padding-top')).toBe('0px');
            });
        });

        describe('Size util', () => {
            it('Should set height prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert height={30} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('height')).toBe('30px');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert height="2rem" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('height')).toBe('2rem');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert height={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('height')).toBe('0px');
            });

            it('Should set max height prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert maxHeight={30} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('max-height')).toBe('30px');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert maxHeight="2rem" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('max-height')).toBe('2rem');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert maxHeight={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('max-height')).toBe('0');
            });

            it('Should set max width prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert maxWidth={30} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('max-width')).toBe('30px');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert maxWidth="2rem" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('max-width')).toBe('2rem');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert maxWidth={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('max-width')).toBe('0');
            });

            it('Should set min height prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert minHeight={30} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('min-height')).toBe('30px');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert minHeight="2rem" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('min-height')).toBe('2rem');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert minHeight={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('min-height')).toBe('0');
            });

            it('Should set min width prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert minWidth={30} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('min-width')).toBe('30px');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert minWidth="2rem" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('min-width')).toBe('2rem');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert minWidth={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('min-width')).toBe('0');
            });

            it('Should set width prop', () => {
                let alertElement;
                let alertStyle;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(<UtilsProvider><Alert width={30} /></UtilsProvider>);
                alertElement = wrappers[0].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('width')).toBe('30px');

                // With unit
                wrappers[1] = mount(<UtilsProvider><Alert width="2rem" /></UtilsProvider>);
                alertElement = wrappers[1].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('width')).toBe('2rem');

                // 0
                wrappers[2] = mount(<UtilsProvider><Alert width={0} /></UtilsProvider>);
                alertElement = wrappers[2].find('.fab-alert');
                alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('width')).toBe('0px');
            });
        });

        describe('Visibility util', () => {
            it('Should set hidden prop', () => {
                const wrapper = mount(<UtilsProvider><Alert hidden={true} /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('display')).toBe('none');
            });

            it('Should set visible prop', () => {
                const wrapper = mount(<UtilsProvider><Alert visible={true} /></UtilsProvider>);
                const alertElement = wrapper.find('.fab-alert');
                const alertStyle = getComputedStyle(alertElement.getDOMNode());

                expect(alertStyle.getPropertyValue('display')).toBe('flex');
            });
        });
    });

    it('Should call onClose', async done => {
        const mockCallBack = jest.fn();
        let component;

        await act(async () => {
            component = await render(<Alert closeButton={true} onClose={mockCallBack} />);

            fireEvent.click(component.container.querySelector('.fab-close-button'), new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }));
        });

        setTimeout(() => {
            expect(mockCallBack.mock.calls.length).toEqual(1);
            done();
        }, 1000);
    });

    describe('Customization', () => {
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
            expect(alertStyle.getPropertyValue('background-color')).toBe(theme.components.alert.color);
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
    });
});