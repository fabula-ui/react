import React from 'react';
import { render } from '@testing-library/react';

// Component
import Heading from './Heading';

describe('Heading Component', () => {
    it('Should create', () => {
        const { container } = render(<Heading />);

        expect(container).toBeTruthy();
    });

    it('Should have levels', () => {
        let component = render(<Heading />);
        
        expect(component.container.querySelector('h1')).toBeTruthy();

        // H2
        component = render(<Heading level={2} />);
        expect(component.container.querySelector('h1')).toBeFalsy();
        expect(component.container.querySelector('h2')).toBeTruthy();

        // H3
        component = render(<Heading level={3} />);
        expect(component.container.querySelector('h2')).toBeFalsy();
        expect(component.container.querySelector('h3')).toBeTruthy();

        // H4
        component = render(<Heading level={4} />);
        expect(component.container.querySelector('h3')).toBeFalsy();
        expect(component.container.querySelector('h4')).toBeTruthy();

        // H5
        component = render(<Heading level={5} />);
        expect(component.container.querySelector('h4')).toBeFalsy();
        expect(component.container.querySelector('h5')).toBeTruthy();

        // H6
        component = render(<Heading level={6} />);
        expect(component.container.querySelector('h5')).toBeFalsy();
        expect(component.container.querySelector('h6')).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Heading>Content</Heading>);

        expect(container.textContent).toBe('Content');
    });

    it('Should set color', () => {
        const { container } = render(<Heading color="blue" />);
        const headingElement = container.querySelector('.fab-heading');
        const style = window.getComputedStyle(headingElement);

        expect(style.color).toBe('blue');
    });
});