import React, { cloneElement } from 'react';
import Color from 'color';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';

// Fabula
import { FabulaProvider } from '../../providers/FabulaProvider';
import { getComponentColors } from '@fabula/core/styles/methods/misc/getComponentColors';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Component
import { Badge } from './Badge';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';
import { getTextColor } from '@fabula/core/styles/methods/color/getTextColor';
import { getBorderColor } from '@fabula/core/styles/methods/color/getBorderColor';

// Theme changes
const theme = {
    components: {
        badge: {
            color: 'red',
            borderRadius: 5,
            borderWidth: '1rem',
            fontFamily: 'Roboto',
            fontSize: '2rem',
            fontWeight: 900,
            paddingBottom: '50px',
            paddingLeft: .25,
            paddingRight: '2rem',
            paddingTop: 0,
            textColor: 'blue'
        }
    }
}

const testColorUtil = prop => {
    it(`Should set ${prop} prop`, () => {
        const props = {};
        let colors = [];
        let element;
        let style;
        let wrappers = [];

        // Default: no color
        props[prop] = true;

        wrappers[0] = mount(cloneElement(<Badge />, props));
        colors[0] = getComponentColors('badge', wrappers[0].props());

        element = wrappers[0].find('.fab-badge').getDOMNode();
        style = getComputedStyle(element);

        expect(wrappers[0].props().color).toBeFalsy();
        expect(wrappers[0].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(style.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[0].bgColor);
        }

        if (prop === 'clear') {
            expect(style.getPropertyValue('border-color')).toBe('transparent');
        } else if (prop === 'outline') {
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors[0].borderColor);
        }

        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[0].textColor);

        // Color + theme color
        props.color = 'primary';
        props[prop] = true;

        wrappers[1] = mount(cloneElement(<Badge />, props));
        colors[1] = getComponentColors('badge', wrappers[1].props());

        element = wrappers[1].find('.fab-badge').getDOMNode();
        style = getComputedStyle(element);

        expect(wrappers[1].props().color).toBe('primary');
        expect(wrappers[1].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(style.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[1].bgColor);
        }

        if (prop === 'clear') {
            expect(style.getPropertyValue('border-color')).toBe('transparent');
        } else if (prop === 'outline') {
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors[1].borderColor);
        }

        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[1].textColor);


        // Color + custom color
        props.color = 'blue';
        props[prop] = true;

        wrappers[2] = mount(cloneElement(<Badge />, props));
        colors[2] = getComponentColors('badge', wrappers[2].props());

        element = wrappers[2].find('.fab-badge').getDOMNode();
        style = getComputedStyle(element);

        expect(wrappers[2].props().color).toBe('blue');
        expect(wrappers[2].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(style.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[2].bgColor);
        }

        if (prop === 'clear') {
            expect(style.getPropertyValue('border-color')).toBe('transparent');
        } else if (prop === 'outline') {
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors[2].borderColor);
        }

        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[2].textColor);
    });
}

const BadgeWithChanges = props => (
    <FabulaProvider theme={theme}>
        <Badge {...props} />
    </FabulaProvider>
)

describe('Badge Component', () => {
    describe('Basic', () => {
        it('Should create', () => {
            const { container } = render(<Badge />);

            expect(container).toBeTruthy();
        });

        it('Should have a defined structure', () => {
            const { container } = render(<Badge />);
            const badgeElement = container.querySelector('.fab-badge');

            expect(badgeElement).toBeTruthy();

            // Check data-fab-component attribute
            expect(badgeElement.getAttribute('data-fab-component')).toBe('badge');
        });

        it('Should have a default look', () => {
            const badgeVars = getComponentVars('badge');
            const { container } = render(<Badge />);

            // Elements
            const badgeElement = container.querySelector('.fab-badge');
            const wrapperElement = container.querySelector('.fab-badge-wrapper');

            // Styles
            const badgeStyle = getComputedStyle(badgeElement);
            const wrapperStyle = getComputedStyle(wrapperElement);

            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(badgeVars.color).hex());
            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
            expect(badgeStyle.getPropertyValue('border-width')).toBe(badgeVars.borderWidth);
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(badgeVars.textColor);
            expect(badgeStyle.getPropertyValue('font-family')).toBe(badgeVars.fontFamily);
            expect(badgeStyle.getPropertyValue('font-size')).toBe(`calc(${badgeVars.fontSize} * 1)`);
            expect(badgeStyle.getPropertyValue('font-weight')).toBe(`${badgeVars.fontWeight}`);
            expect(badgeStyle.getPropertyValue('padding-bottom')).toBe(badgeVars.paddingBottom);
            expect(badgeStyle.getPropertyValue('padding-left')).toBe(badgeVars.paddingLeft);
            expect(badgeStyle.getPropertyValue('padding-right')).toBe(badgeVars.paddingRight);
            expect(badgeStyle.getPropertyValue('padding-top')).toBe(badgeVars.paddingTop);
            expect(wrapperStyle.getPropertyValue('display')).toBe('inline-block');
        });

        it('Should have a label', () => {
            const { container } = render(<Badge label="Label" />);

            expect(container.textContent).toBe('Label');
        });

        it('Should have inner text as children', () => {
            const { container } = render(<Badge>Label</Badge>);

            expect(container.textContent).toBe('Label');
        });
    });

    describe('Props', () => {
        it('Should set border prop', () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let component;

            // Border true + no color
            component = render(<Badge border={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor(badgeVars.color, 'fill'));

            // Border true + primary color
            component = render(<Badge border={true} color="primary" />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor(primaryColor, 'fill'));

            // Border true + custom color
            component = render(<Badge border={true} color="blue" />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('border-color')).hex()).toBe(getBorderColor('blue', 'fill'));

            // No border
            component = render(<Badge border={false} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
        });

        testColorUtil('clear');

        it('Should set color prop', () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let colors;
            let wrapper;

            // Default: no color
            wrapper = mount(<Badge />);
            colors = getComponentColors('badge', wrapper.props());

            badgeElement = wrapper.find('.fab-badge').getDOMNode();
            badgeStyle = getComputedStyle(badgeElement);

            expect(wrapper.prop('color')).toBeFalsy();
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);

            // Color + theme color
            wrapper = mount(<Badge color="primary" />);
            colors = getComponentColors('badge', wrapper.props());

            badgeElement = wrapper.find('.fab-badge').getDOMNode();
            badgeStyle = getComputedStyle(badgeElement);

            expect(wrapper.prop('color')).toBe('primary');
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);

            // Color + custom color
            wrapper = mount(<Badge color="blue" />);
            colors = getComponentColors('badge', wrapper.props());

            badgeElement = wrapper.find('.fab-badge').getDOMNode();
            badgeStyle = getComputedStyle(badgeElement);

            expect(wrapper.prop('color')).toBe('blue');
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);

            // Should not break when not using a real color
            wrapper = mount(<Badge color="xsei" />);
            colors = getComponentColors('badge', wrapper.props());

            badgeElement = wrapper.find('.fab-badge').getDOMNode();
            badgeStyle = getComputedStyle(badgeElement);

            expect(wrapper.prop('color')).toBe('xsei');
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);
        });

        testColorUtil('darken');
        testColorUtil('faded');
        testColorUtil('invert');
        testColorUtil('lighten');
        testColorUtil('outline');

        it('Should set rounded prop', () => {
            const badgeVars = getComponentVars('badge');
            let badgeElement;
            let badgeStyle;
            let component;

            // Default: false
            component = render(<Badge />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(badgeStyle.getPropertyValue('border-radius')).toBe(badgeVars.borderRadius);

            // Border: true
            component = render(<Badge rounded={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(badgeStyle.getPropertyValue('border-radius')).toBe('999px');
        });

        it('Should set size prop', () => {
            const badgeVars = getComponentVars('badge');
            let badgeElement;
            let badgeStyle;
            let component;

            // Default: md
            component = render(<Badge />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(badgeStyle.getPropertyValue('font-size')).toBe(`calc(${badgeVars.fontSize} * 1)`);

            for (let i = 0; i < Object.keys(badgeVars.sizeMultipliers).length; i++) {
                const size = Object.keys(badgeVars.sizeMultipliers)[i];
                const multiplier = badgeVars.sizeMultipliers[size];

                component = render(<Badge size={size} />);
                badgeElement = component.container.querySelector('.fab-badge');
                badgeStyle = getComputedStyle(badgeElement);

                expect(badgeStyle.getPropertyValue('font-size')).toBe(`calc(${badgeVars.fontSize} * ${multiplier})`);
            }
        });
    });

    // Utils
    testUtils({
        component: <Badge />,
        componentClassName: '.fab-badge',
        provider: <UtilsProvider />
    })

    // Customization
    describe('Customization', () => {
        it('Should change css according to new theme', () => {
            const newThemeVars = theme.components.badge;
            let badgeElement;
            let badgeStyle;
            let component = render(<BadgeWithChanges />);

            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(newThemeVars.color).hex());
            expect(badgeStyle.getPropertyValue('border-radius')).toBe(`${newThemeVars.borderRadius}px`);
            expect(badgeStyle.getPropertyValue('border-width')).toBe(newThemeVars.borderWidth);
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(newThemeVars.color, 'fill')).hex());
            expect(badgeStyle.getPropertyValue('font-family')).toBe(newThemeVars.fontFamily);
            expect(badgeStyle.getPropertyValue('font-size')).toBe(`calc(${newThemeVars.fontSize} * 1)`);
            expect(badgeStyle.getPropertyValue('font-weight')).toBe(`${newThemeVars.fontWeight}`);
            expect(badgeStyle.getPropertyValue('padding-bottom')).toBe(newThemeVars.paddingBottom);
            expect(badgeStyle.getPropertyValue('padding-left')).toBe(`${newThemeVars.paddingLeft}em`);
            expect(badgeStyle.getPropertyValue('padding-right')).toBe(newThemeVars.paddingRight);
            expect(badgeStyle.getPropertyValue('padding-top')).toBe(`${newThemeVars.paddingTop}px`);
        });
    });
});