import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Dropdown from './Dropdown';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownToggle from '../DropdownToggle/DropdownToggle';

const DropdownExample = () => {
    return (
        <Dropdown>
            <DropdownToggle></DropdownToggle>
            <DropdownMenu></DropdownMenu>
        </Dropdown>
    )
}

describe('Dropdown Component', () => {
    it('Should create', () => {
        const { container } = render(<Dropdown />);

        expect(container).toBeTruthy();
    });

    it('Should have a dropdown toggle', () => {
        const { container } = render(<DropdownExample />);
        const toggleElement = container.querySelector('.fab-dropdown-toggle');

        expect(toggleElement).toBeTruthy();
    });

    it('Should have a dropdown menu', () => {
        const { container } = render(<DropdownExample />);
        const menuElement = container.querySelector('.fab-dropdown-menu');

        expect(menuElement).toBeTruthy();
    });

    it('Should pass props to children', () => {
        const { container } = render(<DropdownExample />);
        const toggleElement = container.querySelector('.fab-dropdown-toggle');

        expect(toggleElement.getAttribute('data-direction')).toBe('down');
        expect(toggleElement.getAttribute('data-open')).toBeFalsy();
    });
});