import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Drawer from './Drawer';

describe('Drawer Component', () => {
    it('Should create', () => {
        const { container } = render(<Drawer />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Drawer />);
        const closeButtonElement = container.querySelector('.fab-drawer__close-btn');
        const drawerElement = container.querySelector('.fab-drawer');
        const iconElement = container.querySelector('.fab-icon');
        const wrapperElement = container.querySelector('.fab-drawer-wrapper');

        expect(closeButtonElement).toBeTruthy();
        expect(drawerElement).toBeTruthy();
        expect(iconElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Drawer>Content</Drawer>);
        const drawerElement = container.querySelector('.fab-drawer');

        expect(drawerElement.textContent).toBe('Content');
    });

    it('Should be closed by default', () => {
        const { container } = render(<Drawer />);
        const wrapperElement = container.querySelector('.fab-drawer-wrapper');

        expect(wrapperElement.getAttribute('data-open')).toBe(null);
    });

    it('Should open drawer', () => {
        const { container } = render(<Drawer open={true} />);
        const wrapperElement = container.querySelector('.fab-drawer-wrapper');

        expect(wrapperElement.getAttribute('data-open')).toBe('true');
    });

    it('Should close drawer', () => {
        const { container } = render(<Drawer open={true} />);
        const closeButtonElement = container.querySelector('.fab-drawer__close-btn');
        const wrapperElement = container.querySelector('.fab-drawer-wrapper');

        fireEvent.click(closeButtonElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(closeButtonElement).toBeTruthy();
        expect(wrapperElement.getAttribute('data-open')).toBe('false');
    });
});