import React from 'react';
import Color from 'color';
import { render } from '@testing-library/react';

// Fabula
import { FabulaProvider } from '../../providers/FabulaProvider';
import { getBgColor } from '@fabula/core/styles/methods/color/getBgColor';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getDividerColor } from '@fabula/core/styles/methods/color/getDividerColor';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Component
import { Badge } from './Badge';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';
import { getTextColor } from '@fabula/core/styles/methods/color/getTextColor';

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

            expect(Color(badgeStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(badgeVars.color, 'fill'));

            // Border true + primary color
            component = render(<Badge border={true} color="primary" />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'fill'));

            // Border true + custom color
            component = render(<Badge border={true} color="blue" />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'fill'));

            // No border
            component = render(<Badge border={false} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);

            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
        });

        it('Should set clear prop', async () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let wrapper;
        
            // Default: no clear prop
            wrapper = render(<Badge />);
        
            badgeElement = wrapper.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(badgeVars.color).hex());
            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(badgeVars.textColor).hex());
        
            // Clear: true
            wrapper = render(<Badge clear={true} />);
        
            badgeElement = wrapper.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(badgeStyle.getPropertyValue('background-color')).toBe('transparent');
            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(badgeVars.textColor).hex());
        
            // Clear + theme color
            wrapper = render(<Badge clear={true} color="primary" />);
        
            badgeElement = wrapper.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(badgeStyle.getPropertyValue('background-color')).toBe('transparent');
            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(primaryColor).hex());
        
            // Clear + custom color
            wrapper = render(<Badge clear={true} color="blue" />);
        
            badgeElement = wrapper.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(badgeStyle.getPropertyValue('background-color')).toBe('transparent');
            expect(badgeStyle.getPropertyValue('border-color')).toBe('transparent');
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color('blue').hex());
        });

        it('Should set color prop', () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let component;
        
            // Default: no color
            component = render(<Badge />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(badgeVars.color, 'fill')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(badgeVars.textColor);
        
            // Color + theme color
            component = render(<Badge color="primary" />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'fill'));
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'fill')).hex());
        
            // Color + custom color
            component = render(<Badge color="blue" />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'fill')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'fill')).hex());
        
            // Should not break when not using a real color
            component = render(<Badge color="xsei" />);
        
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(badgeVars.color, 'fill')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(getTextColor(badgeVars.color, 'fill'));
        });

        it('Should set darken prop', () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let component;

            // Default: no color
            component = render(<Badge darken={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(badgeVars.color, 'fill')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(badgeVars.textColor);
        
            // Darken + theme color
            component = render(<Badge color="primary" darken={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'darken'));
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'darken')).hex());
        
            // Darken + custom color
            component = render(<Badge color="blue" darken={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'darken')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'darken')).hex());
        });

        it('Should set faded prop', () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let component;

            // Default: no color
            component = render(<Badge faded={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(badgeVars.color, 'fill')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(badgeVars.textColor);
        
            // Darken + theme color
            component = render(<Badge color="primary" faded={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'faded'));
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'faded')).hex());
        
            // Darken + custom color
            component = render(<Badge color="blue" faded={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'faded')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'faded')).hex());
        });

        it('Should set invert prop', () => {
            const badgeVars = getComponentVars('badge');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let badgeElement;
            let badgeStyle;
            let component;

            // Default: no color
            component = render(<Badge invert={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(badgeVars.color, 'fill')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(badgeVars.textColor);
        
            // Darken + theme color
            component = render(<Badge color="primary" invert={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor(primaryColor, 'invert')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'invert')).hex());
        
            // Darken + custom color
            component = render(<Badge color="blue" invert={true} />);
            badgeElement = component.container.querySelector('.fab-badge');
            badgeStyle = getComputedStyle(badgeElement);
        
            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'invert')).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'invert')).hex());
        });
    });

    // Utils
    testUtils({
        component: <Badge />,
        componentClassName: '.fab-badge',
        provider: <UtilsProvider />
    })

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
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(Color(newThemeVars.textColor).hex());
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