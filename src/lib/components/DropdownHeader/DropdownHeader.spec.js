import React from 'react';
import { render } from '@testing-library/react';

// Component
import DropdownHeader from './DropdownHeader';

describe('DropdownHeader Component', () => {
    it('Should create', () => {
        const { container } = render(<DropdownHeader />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<DropdownHeader />);
        const containerElement = container.querySelector('.fab-dropdown-header');

        expect(containerElement).toBeTruthy();
    });

    it('Should have a label', () => {
        const { container } = render(<DropdownHeader label="Label" />);
        const headerElement = container.querySelector('.fab-dropdown-header');

        expect(headerElement.textContent).toBe('Label');
    });

    it('Should have children as label', () => {
        const { container } = render(<DropdownHeader>Label</DropdownHeader>);
        const headerElement = container.querySelector('.fab-dropdown-header');

        expect(headerElement.textContent).toBe('Label');
    });
});