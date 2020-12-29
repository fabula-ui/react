import React from 'react';
import { render } from '@testing-library/react';

// Component
import { Button } from '../Button/Button';
import ButtonGroup from './ButtonGroup';

describe('Button Group Component', () => {
    it('Should create', () => {
        const { container } = render(<ButtonGroup />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<ButtonGroup />);
        const buttonGroupElement = container.querySelector('.fab-button-group');
        const wrapperElement = container.querySelector('.fab-button-group-wrapper');

        expect(buttonGroupElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have buttons as children', () => {
        const { container } = render(<ButtonGroup><Button /><Button /><Button /></ButtonGroup>);
        const buttonElements = container.querySelectorAll('.fab-button');

        expect(buttonElements.length).toBe(3);
    });
});
