import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import CloseButton from './CloseButton';

describe('CloseButton Component', () => {
    it('Should create', () => {
        const { container } = render(<CloseButton />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<CloseButton />);
        const buttonElement = container.querySelector('button.fab-close-button');
        const iconElement = container.querySelector('.fab-icon');

        expect(buttonElement).toBeTruthy();
        expect(iconElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<CloseButton onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-close-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});