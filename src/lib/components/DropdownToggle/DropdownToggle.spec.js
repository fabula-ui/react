import React from 'react';
import { render } from '@testing-library/react';

// Component
import DropdownToggle from './DropdownToggle';

describe('Dropdown Toggle Component', () => {
    it('Should create', () => {
        const { container } = render(<DropdownToggle />);

        expect(container).toBeTruthy();
    });

    it('Should have a label', () => {
        const { container } = render(<DropdownToggle label="Label" />);
        const toggleElement = container.querySelector('.fab-dropdown-toggle');

        expect(toggleElement.textContent).toBe('Label');
    });

    it('Should have inner content as label', () => {
        const { container } = render(<DropdownToggle>Content</DropdownToggle>);

        expect(container.textContent).toBe('Content');
    });

    it('Should set color', () => {
        const { container } = render(<DropdownToggle color="blue" label="Label" />);
        const buttonElement = container.querySelector('.fab-button');
        const buttonStyle = window.getComputedStyle(buttonElement);

        expect(buttonStyle.backgroundColor).toBe('blue');
    });

    // TODO: fix this test
    // it('Should be able to hide arrow', () => {
    //     let component = render(<DropdownToggle arrow={true} label="Label" />);
    //     let arrowElement = component.container.querySelector('.fab-dropdown-toggle__chevron');

    //     expect(arrowElement).toBeTruthy();

    //     component = render(<DropdownToggle arrow={false} label="Label" />)
    //     arrowElement = component.container.querySelector('.fab-dropdown-toggle__chevron');

    //     expect(arrowElement).toBeFalsy();
    // });
});