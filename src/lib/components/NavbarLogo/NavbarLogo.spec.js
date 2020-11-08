import React from 'react';
import { render } from '@testing-library/react';

// Component
import NavbarLogo from './NavbarLogo';

describe('NavbarLogo Component', () => {
    it('Should create', () => {
        const { container } = render(<NavbarLogo />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<NavbarLogo />);
        const imageElement = container.querySelector('.fab-navbar-logo__image');
        const logoElement = container.querySelector('.fab-navbar-logo');

        expect(imageElement).toBeFalsy();
        expect(logoElement).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<NavbarLogo>Content</NavbarLogo>);
        const element = container.querySelector('.fab-navbar-logo');

        expect(element.textContent).toBe('Content');
    });

    it('Should have an image', () => {
        const { container } = render(<NavbarLogo src="src" />);
        const imageElement = container.querySelector('.fab-navbar-logo__image');

        expect(imageElement).toBeTruthy();
    });
});