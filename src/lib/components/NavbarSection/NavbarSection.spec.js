import React from 'react';
import { render } from '@testing-library/react';

// Component
import NavbarSection from './NavbarSection';

describe('NavbarSection Component', () => {
    it('Should create', () => {
        const { container } = render(<NavbarSection />);

        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<NavbarSection>Content</NavbarSection>);
        const element = container.querySelector('.fab-navbar-section');

        expect(element.textContent).toBe('Content');
    });

    it('Should toggle mobile on and off', () => {
        let component = render(<NavbarSection />);
        let element = component.container.querySelector('.fab-navbar-section');

        expect(element.getAttribute('data-mobile')).toBe(null);

        component = render(<NavbarSection mobile={true} />);
        element = component.container.querySelector('.fab-navbar-section');

        expect(element.getAttribute('data-mobile')).toBe('true');
    });
});