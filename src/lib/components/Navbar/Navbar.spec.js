import React from 'react';
import { render } from '@testing-library/react';

// Component
import Navbar from './Navbar';

describe('Navbar Component', () => {
    it('Should create', () => {
        const { container } = render(<Navbar />);
        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Navbar>Content</Navbar>);
        const element = container.querySelector('.fab-navbar');

        expect(element.textContent).toBe('Content');
    });
});