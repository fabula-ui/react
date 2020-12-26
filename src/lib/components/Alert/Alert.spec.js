import React, { cloneElement } from 'react';
import { act } from 'react-dom/test-utils';
import Color from 'color';
import { mount, shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

// Fabula
import { getBorderColor } from '@fabula/core/styles/methods/color/getBorderColor';
import { getComponentColors } from '@fabula/core/styles/methods/misc/getComponentColors';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';
import { getGlowColor } from '@fabula/core/styles/methods/color/getGlowColor';
import { getTextColor } from '@fabula/core/styles/methods/color/getTextColor';

// Component
import { Alert } from './Alert';
import { CloseButton } from '../CloseButton/CloseButton';

// Providers
import { FabulaProvider } from '../../providers/FabulaProvider';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';

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

// Common tests
const testColorUtil = prop => {
    it(`Should set ${prop} prop`, () => {
        const props = {};
        let alertElement;
        let alertStyle;
        let colors = [];
        let wrappers = [];

        // Default: no color
        props[prop] = true;

        wrappers[0] = mount(cloneElement(<Alert />, props));
        colors[0] = getComponentColors('alert', wrappers[0].props());

        alertElement = wrappers[0].find('.fab-alert');
        alertStyle = getComputedStyle(alertElement.getDOMNode());

        expect(wrappers[0].props().color).toBeFalsy();
        expect(wrappers[0].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(alertStyle.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(colors[0].bgColor);
        }

        if (prop === 'clear') {
            expect(alertStyle.getPropertyValue('border-color')).toBe('transparent');
        } else {
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors[0].borderColor);
        }

        expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(colors[0].textColor);

        // Color + theme color
        props.color = 'primary';
        props[prop] = true;

        wrappers[1] = mount(cloneElement(<Alert />, props));
        colors[1] = getComponentColors('alert', wrappers[1].props());

        alertElement = wrappers[1].find('.fab-alert');
        alertStyle = getComputedStyle(alertElement.getDOMNode());

        expect(wrappers[1].props().color).toBe('primary');
        expect(wrappers[1].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(alertStyle.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(colors[1].bgColor);
        }

        if (prop === 'clear') {
            expect(alertStyle.getPropertyValue('border-color')).toBe('transparent');
        } else {
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors[1].borderColor);
        }

        expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(colors[1].textColor);

        // Color + custom color
        props.color = 'blue';
        props[prop] = true;

        wrappers[2] = mount(cloneElement(<Alert />, props));
        colors[2] = getComponentColors('alert', wrappers[2].props());

        alertElement = wrappers[2].find('.fab-alert');
        alertStyle = getComputedStyle(alertElement.getDOMNode());

        expect(wrappers[2].props().color).toBe('blue');
        expect(wrappers[2].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(alertStyle.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(colors[2].bgColor);
        }

        if (prop === 'clear') {
            expect(alertStyle.getPropertyValue('border-color')).toBe('transparent');
        } else {
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors[2].borderColor);
        }

        expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(colors[2].textColor);
    });
}

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
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor(alertVars.color));
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
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let alertElement;
            let alertStyle;
            let colors;
            let wrapper;

            // Border true + no color
            wrapper = mount(<Alert border={true} />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(wrapper.props().border).toBeTruthy();
            expect(wrapper.props().color).toBeFalsy();
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);

            // Border true + primary color
            wrapper = mount(<Alert border={true} color="primary" />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(wrapper.props().border).toBeTruthy();
            expect(wrapper.props().color).toBe('primary');
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);

            // Border true + blue color
            wrapper = mount(<Alert border={true} color="blue" />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(wrapper.props().border).toBeTruthy();
            expect(wrapper.props().color).toBe('blue');
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);

            // No border
            wrapper = mount(<Alert border={false} />);

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(alertStyle.getPropertyValue('border-color')).toBe('transparent');
        });

        testColorUtil('clear');

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
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            const alertVars = getComponentVars('alert');
            let alertElement;
            let alertStyle;
            let colors;
            let wrapper;

            // Default: no color
            wrapper = mount(<Alert />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(colors.bgColor).toBe(Color(alertVars.color).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);
            expect(colors.borderColor).toBe(Color(getBorderColor(alertVars.color)).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);
            expect(colors.textColor).toBe(Color(alertVars.textColor).hex());

            // Color + theme color
            wrapper = mount(<Alert color="primary" icon={{ name: 'cloud' }} title="Title" />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(colors.bgColor).toBe(Color(primaryColor).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);
            expect(colors.borderColor).toBe(Color(getBorderColor(primaryColor)).hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);
            expect(colors.textColor).toBe(Color(getTextColor(primaryColor)).hex());

            // Color + custom color
            wrapper = mount(<Alert color="blue" />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color('blue').hex());
            expect(colors.bgColor).toBe(Color('blue').hex());
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'fill')).hex());
            expect(colors.borderColor).toBe(Color(getBorderColor('blue')).hex());
            expect(Color(alertStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor('blue', 'fill'));
            expect(colors.textColor).toBe(Color(getTextColor('blue')).hex());

            // Should not break when not using a real color
            wrapper = mount(<Alert color="xsei" />);
            colors = getComponentColors('alert', wrapper.props());

            alertElement = wrapper.find('.fab-alert');
            alertStyle = getComputedStyle(alertElement.getDOMNode());

            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(alertStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);
        });

        testColorUtil('darken');
        testColorUtil('faded');

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

        testColorUtil('invert');
        testColorUtil('lighten');

        it('Should set marker prop', () => {
            const { container } = render(<Alert marker="primary" />);
            const alertElement = container.querySelector('.fab-alert');

            // TODO: fix this
        });

        testColorUtil('outline');

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

    describe('Events', () => {
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
    });

    // Utils
    testUtils({
        component: <Alert />,
        componentClassName: '.fab-alert',
        provider: <UtilsProvider />
    })

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
            expect(Color(alertStyle.getPropertyValue('background-color')).hex()).toBe(Color(theme.components.alert.color).hex());
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