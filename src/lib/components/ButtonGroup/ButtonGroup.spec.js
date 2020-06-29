import React from 'react';
import { render } from '@testing-library/react';

// Component
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

describe('Button Group Component', () => {
    it('Should create', () => {
        const { container } = render(<ButtonGroup />);

        expect(container).toBeTruthy();
    });

    it('Should have button as children', () => {
        const { container } = render(<ButtonGroup><Button>Label</Button></ButtonGroup>);
        const buttonElement = container.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });
});
