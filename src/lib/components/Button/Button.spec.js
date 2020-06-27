import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Button from './Button';

describe('Button Component', () => {
    it('Should create', () => {
        const { container } = render(<Button />);

        expect(container).toBeTruthy();
    });

    it('Should have a label', () => {
        const { container } = render(<Button label="Label" />);

        expect(container.textContent).toBe('Label');
    });

    it('Should have inner text as children', () => {
        const { container } = render(<Button>Label</Button>);

        expect(container.textContent).toBe('Label');
    });

    it('Should have an icon as an object', () => {
        const { container } = render(<Button icon={{name: 'icon'}} />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toHaveAttribute('data-name', 'icon');
    });

    it('Should have an icon as a string', () => {
        const { container } = render(<Button icon="icon" />);
        const iconElement = container.querySelector('.fab-icon');

        expect(iconElement).toHaveAttribute('data-name', 'icon');
    });

    it('Should be disabled', () => {
        const { container } = render(<Button disabled={true} />);
        const buttonElement = container.querySelector('.fab-button');

        expect(buttonElement).toHaveAttribute('disabled', '');
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Button onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});