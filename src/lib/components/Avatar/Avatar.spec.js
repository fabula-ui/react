import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Component
import Avatar from './Avatar';

describe('Alert Component', () => {
    it('Should create', () => {
        const { container } = render(<Avatar />);

        expect(container).toBeTruthy();
    });

    it('Should have an icon as an object', () => {
        const { container } = render(<Avatar icon={{name: 'icon'}} />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toHaveAttribute('data-name', 'icon');
    });

    it('Should have an icon as a string', () => {
        const { container } = render(<Avatar icon="icon" />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toHaveAttribute('data-name', 'icon');
    });

    it('Should show initials', () => {
        const { container } = render(<Avatar showInitials="Show Initials" />);
        const initialsElement = container.querySelector('.fab-avatar__initials');

        expect(initialsElement.textContent).toBe('SI');
    });

    it('Should hide icon when showing initials', () => {
        const { container } = render(<Avatar showInitials="Show Initials" />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toBeFalsy();
    });
});