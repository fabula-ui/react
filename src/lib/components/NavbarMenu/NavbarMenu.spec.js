import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import { Button } from '../Button/Button';
import NavbarMenu from './NavbarMenu';

describe('NavbarMenu Component', () => {
    it('Should create', () => {
        const { container } = render(<NavbarMenu />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure when mobile', () => {
        const { container } = render(<NavbarMenu mobile={true}>Content</NavbarMenu>);
        const buttonElement = container.querySelector('.fab-button');
        const drawerElement = container.querySelector('.fab-drawer-wrapper');
        const listElement = container.querySelector('.fab-list');
        const menuElement = container.querySelector('.fab-navbar-menu');

        expect(buttonElement).toBeTruthy();
        expect(drawerElement.getAttribute('data-open')).toBe('false');
        expect(listElement.textContent).toBe('Content');
        expect(menuElement.getAttribute('data-mobile')).toBe('true');
    });

    it('Should have a defined structure when not mobile', () => {
        const { container } = render(<NavbarMenu><Button /></NavbarMenu>);
        const buttonElement = container.querySelector('.fab-button');
        const menuElement = container.querySelector('.fab-navbar-menu');
        const tabsElement = container.querySelector('.fab-tabs');

        expect(buttonElement).toBeTruthy();
        expect(tabsElement).toBeTruthy();
        expect(menuElement.getAttribute('data-mobile')).toBe('false');
    });

    it('Should open and close menu when mobile', () => {
        const { container } = render(<NavbarMenu mobile={true} />);
        const buttonElement = container.querySelector('.fab-button');
        const closeButtonElement = container.querySelector('.fab-drawer__close-button');
        const drawerElement = container.querySelector('.fab-drawer-wrapper');

        expect(drawerElement.getAttribute('data-open')).toBe('false');

        fireEvent.click(buttonElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(drawerElement.getAttribute('data-open')).toBe('true');

        fireEvent.click(closeButtonElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(drawerElement.getAttribute('data-open')).toBe('false');
    });
});