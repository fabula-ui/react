import React from 'react';
import { render } from '@testing-library/react';

// Component
import Toast from './Toast';

describe('Toast Component', () => {
    it('Should create', () => {
        const { container } = render(<Toast />);
        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Toast />);
        const toastElement = container.querySelector('.fab-toast');
        const wrapperElement = container.querySelector('.fab-toast-wrapper');

        expect(toastElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have an icon', () => {
        const { container } = render(<Toast icon="icon" />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toBeTruthy();
    });

    it('Should have a message', () => {
        const { container } = render(<Toast message="message" />);
        const messageElement = container.querySelector('.fab-toast__message');

        expect(messageElement.textContent).toBe('message');
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Toast>Content</Toast>);
        const toastElement = container.querySelector('.fab-toast');

        expect(toastElement.textContent).toBe('Content');
    });

    it('Should have a button', () => {
        const { container } = render(<Toast button={{color: 'primary'}} />);
        const buttonElement = container.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should have a hide button', () => {
        const { container } = render(<Toast hideButton={true} />);
        const buttonElement = container.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });

    // TODO: test show toast method
});