import React from 'react';
import { render } from '@testing-library/react';

// Component
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import InputGroup from './InputGroup';

describe('Input Group Component', () => {
    it('Should create', () => {
        const { container } = render(<InputGroup />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<InputGroup />);
        const inputGroupElement = container.querySelector('.fab-input-group');
        const wrapperElement = container.querySelector('.fab-input-group-wrapper');

        expect(inputGroupElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have components as inner content', () => {
        const { container } = render(<InputGroup><Button /><Input /></InputGroup>);
        const buttonElement = container.querySelector('.fab-button');
        const inputElement = container.querySelector('.fab-input');

        expect(buttonElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
    });
});