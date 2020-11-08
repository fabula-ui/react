import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarMenuItem from './NavbarMenuItem';

describe('NavbarMenuItem Component', () => {
    it('Should create', () => {
        const { container } = render(<NavbarMenuItem />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure when mobile', () => {
        const { container } = render(<NavbarMenu mobile={true}><NavbarMenuItem /></NavbarMenu>);
        const listItemElement = container.querySelector('.fab-list-item');

        expect(listItemElement).toBeTruthy();
    });

    it('Should have a defined structure when not on mobile', () => {
        const { container } = render(<NavbarMenu><NavbarMenuItem /></NavbarMenu>);
        const tabElement = container.querySelector('.fab-tab');

        expect(tabElement).toBeTruthy();
    });
});