import React from 'react';
import Color from 'color';
import { render } from '@testing-library/react';

// Fabula
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';

// Component
import { Badge } from './Badge';

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

            // Styles
            const badgeStyle = getComputedStyle(badgeElement);

            expect(Color(badgeStyle.getPropertyValue('background-color')).hex()).toBe(Color(badgeVars.color).hex());
            expect(Color(badgeStyle.getPropertyValue('color')).hex()).toBe(badgeVars.textColor);
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
});