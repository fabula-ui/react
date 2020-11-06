import React from 'react';
import { render } from '@testing-library/react';

// Component
import ListHeader from './ListHeader';

describe('List Header Component', () => {
    it('Should create', () => {
        const { container } = render(<ListHeader />);
        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<ListHeader>Content</ListHeader>);
        const headerElement = container.querySelector('.fab-list-header');

        expect(headerElement.textContent).toBe('Content');
    });

    it('Should set color', () => {
        const { container } = render(<ListHeader color="blue" />);
        const headerElement = container.querySelector('.fab-list-header');
        const headerStyle = window.getComputedStyle(headerElement);

        expect(headerStyle.color).toBe('blue');
    });
});