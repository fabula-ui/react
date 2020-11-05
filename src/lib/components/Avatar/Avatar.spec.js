import React from 'react';
import { render } from '@testing-library/react';

// Component
import Avatar from './Avatar';
import Badge from '../Badge/Badge';

describe('Avatar Component', () => {
    it('Should create', () => {
        const { container } = render(<Avatar />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Avatar />);
        const avatarElement = container.querySelector('.fab-avatar');
        const wrapperElement = container.querySelector('.fab-avatar-wrapper');

        expect(avatarElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have an image', () => {
        const { container } = render(<Avatar src="image" />);
        const imageElement = container.querySelector('.fab-avatar__image');

        expect(imageElement).toBeTruthy();
        expect(getComputedStyle(imageElement).backgroundImage).toBe(`url(image)`);
    });

    it('Should have an icon', () => {
        const { container } = render(<Avatar icon={{ name: 'icon' }} />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toBeTruthy();
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

    it('Should accept external components - eg: badge', () => {
        const { container } = render(<Avatar><Badge>1</Badge></Avatar>);
        const badgeElement = container.querySelector('.fab-badge');

        expect(badgeElement).toBeTruthy();
    });
});