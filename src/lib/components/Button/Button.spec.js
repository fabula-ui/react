import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Button from './Button';

describe('Button Component', () => {
    it('Should create', () => {
        const { container } = render(<Button />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Button />);
        const anchorElement = container.querySelector('a.fab-button');
        const buttonElement = container.querySelector('button.fab-button');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
    });

    it('Should have a label', () => {
        const { container } = render(<Button label="Label" />);

        expect(container.textContent).toBe('Label');
    });

    it('Should have inner text as children', () => {
        const { container } = render(<Button>Label</Button>);

        expect(container.textContent).toBe('Label');
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

    it('Should have an anchor', () => {
        const { container } = render(<Button href="href" rel="rel" target="target" />);
        const anchorElement = container.querySelector('a.fab-button');
        const buttonElement = container.querySelector('button.fab-button');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
        expect(buttonElement).toBeFalsy();
    });
});