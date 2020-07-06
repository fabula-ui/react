import React from 'react';
import { render } from '@testing-library/react';

// Component
import DropdownMenu from './DropdownMenu';

describe('Dropdown Menu Component', () => {
    it('Should create', () => {
        const { container } = render(<DropdownMenu />);

        expect(container).toBeTruthy();
    });

    it('Should have items', () => {
        const { container } = render(<DropdownMenu items={[ { label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' } ]} />);
        const items = container.querySelectorAll('.fab-dropdown-item');

        expect(items.length).toBe(3);
        expect(items[0].textContent).toBe('Item 1');
        expect(items[1].textContent).toBe('Item 2');
        expect(items[2].textContent).toBe('Item 3');
    });

    it('Should have custom content', () => {
        const { container } = render(<DropdownMenu>Custom Content</DropdownMenu>);
        
        expect(container.textContent).toBe('Custom Content');
    });

    it('Should set color', () => {
        const { container } = render(<DropdownMenu color="blue">Menu</DropdownMenu>);
        const menuElement = container.querySelector('.fab-dropdown-menu');
        const menuStyle = window.getComputedStyle(menuElement);

        expect(menuStyle.backgroundColor).toBe('blue');
    });
});