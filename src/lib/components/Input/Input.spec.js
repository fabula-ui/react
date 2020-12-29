import React from 'react';
import { render } from '@testing-library/react';

// Component
import { Button } from '../Button/Button';
import Input from './Input';

describe('Input Component', () => {
    it('Should create', () => {
        const { container } = render(<Input />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Input />);
        const inputElement = container.querySelector('.fab-input');
        const inputFieldElement = container.querySelector('input.fab-input__field');
        const messageElement = container.querySelector('.fab-input__message');
        const textareaElement = container.querySelector('textarea.fab-input__field');
        const toggleElement = container.querySelector('.fab-input__password-toggle');
        const wrapperElement = container.querySelector('.fab-input-wrapper');

        expect(inputElement).toBeTruthy();
        expect(inputFieldElement).toBeTruthy();
        expect(messageElement).toBeFalsy();
        expect(textareaElement).toBeFalsy();
        expect(toggleElement).toBeFalsy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should be disabled', () => {
        const { container } = render(<Input disabled={true} />);
        const inputElement = container.querySelector('.fab-input');
        const inputFieldElement = container.querySelector('.fab-input__field');

        expect(inputElement.getAttribute('data-disabled')).toBe('true');
        expect(inputFieldElement.getAttribute('disabled')).toBe('');
    });

    it('Should have an icon', () => {
        let component = render(<Input icon={{ name: 'icon' }} />);
        let iconElement = component.container.querySelector('.fab-input__icon');
        let toggleElement = component.container.querySelector('.fab-input__password-toggle');

        expect(iconElement).toBeTruthy();
        expect(toggleElement).toBeFalsy();

        // Icon start
        component = render(<Input iconStart={{ name: 'icon' }} />);
        iconElement = component.container.querySelector('.fab-input__icon');
        toggleElement = component.container.querySelector('.fab-input__password-toggle');

        expect(iconElement).toBeTruthy();
        expect(toggleElement).toBeFalsy();

        // Icon end
        component = render(<Input iconEnd={{ name: 'icon' }} />);
        iconElement = component.container.querySelector('.fab-input__icon');
        toggleElement = component.container.querySelector('.fab-input__password-toggle');

        expect(iconElement).toBeTruthy();
        expect(toggleElement).toBeFalsy();
    });

    it('Should have password toggle', () => {
        const { container } = render(<Input passwordToggle={true} />);
        const iconElement = container.querySelector('.fab-input__icon');
        const toggleElement = container.querySelector('.fab-input__password-toggle');

        expect(iconElement).toBeFalsy();
        expect(toggleElement).toBeTruthy();
    });

    it('Should have elements inside of it', () => {
        const { container } = render(<Input><Button /></Input>);
        const buttonElement = container.querySelector('.fab-input__elements .fab-button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should have a message', () => {
        const { container } = render(<Input message="Message" />);
        const messageElement = container.querySelector('.fab-input__message');

        expect(messageElement.textContent).toBe('Message');
    });

    it('Should change to a textarea', () => {
        const { container } = render(<Input textarea={true} />);
        const inputFieldElement = container.querySelector('input.fab-input__field');
        const textareaElement = container.querySelector('textarea.fab-input__field');

        expect(inputFieldElement).toBeFalsy();
        expect(textareaElement).toBeTruthy();
    });

    it('Should change input type', () => {
        let component = render(<Input type="text" />);
        let inputFieldElement = component.container.querySelector('.fab-input__field');

        expect(inputFieldElement.getAttribute('type')).toBe('text');

        // Email
        component = render(<Input type="email" />);
        inputFieldElement = component.container.querySelector('.fab-input__field');

        expect(inputFieldElement.getAttribute('type')).toBe('email');

        // Password
        component = render(<Input type="password" />);
        inputFieldElement = component.container.querySelector('.fab-input__field');

        expect(inputFieldElement.getAttribute('type')).toBe('password');
    });
});