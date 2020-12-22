import React from 'react';
import Color from 'color';
import { render } from '@testing-library/react';

// Fabula
import { FabulaProvider } from '../../providers/FabulaProvider';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Component
import { Badge } from './Badge';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';

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