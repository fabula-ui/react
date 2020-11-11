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

    it('Should have dropdown menu closed by default', () => {
        const { container } = render(<DropdownExample />);
        const menuElement = container.querySelector('.fab-dropdown-menu');
        const toggleElement = container.querySelector('.fab-dropdown-toggle');

        expect(menuElement.getAttribute('data-open')).toBe('false');
        expect(toggleElement.getAttribute('data-open')).toBe('false');
    });

    // TODO: fix these tests
    // it('Should open and close dropdown when clicking dropdown toggle', () => {
    //     const { container } = render(<DropdownExample />);
    //     const menuElement = container.querySelector('.fab-dropdown-menu');
    //     const toggleElement = container.querySelector('.fab-dropdown-toggle');

    //     fireEvent.click(toggleElement, new MouseEvent('click', {
    //         bubbles: true,
    //         cancelable: true,
    //     }));

    //     expect(menuElement.getAttribute('data-open')).toBe('true');
    //     expect(toggleElement.getAttribute('data-open')).toBe('true');

    //     fireEvent.click(toggleElement, new MouseEvent('click', {
    //         bubbles: true,
    //         cancelable: true,
    //     }));

    //     expect(menuElement.getAttribute('data-open')).toBe('false');
    //     expect(toggleElement.getAttribute('data-open')).toBe('false');
    // });
});