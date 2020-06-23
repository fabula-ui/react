import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';

// Component
import Alert from './Alert';

describe('Alert Component', () => {
    it('Should have an icon as an object', () => {
        const { container } = render(<Alert icon={{name: 'icon'}} />);
        const element = container.querySelector('.fab-icon');

        expect(element).toHaveAttribute('data-name', 'icon');
    });

    it('Should have an icon as a string', () => {
        const { container } = render(<Alert icon="icon" />);
        const element = container.querySelector('.fab-icon');

        expect(element).toHaveAttribute('data-name', 'icon');
    });

    it('Should have a text as an object', () => {
        const { container } = render(<Alert text={{content: 'This is a text'}} />);
        const element = container.querySelector('.fab-alert__text');

        expect(element.textContent).toBe('This is a text');
    });

    it('Should have a text as a string', () => {
        const { container } = render(<Alert text="This is a text" />);
        const element = container.querySelector('.fab-alert__text');

        expect(element.textContent).toBe('This is a text');
    });

    it('Should have a title as an object', () => {
        const { container } = render(<Alert title={{content: 'This is a title'}} />);
        const element = container.querySelector('.fab-alert__title');

        expect(element.textContent).toBe('This is a title');
    });

    it('Should have a text as a string', () => {
        const { container } = render(<Alert title="This is a title" />);
        const element = container.querySelector('.fab-alert__title');

        expect(element.textContent).toBe('This is a title');
    });

    it('Should call onClose', () => {
        let output = '';
        const closeFn = () => { output = 'called' };
        const { container } = render(<Alert closeButton="Close" onClose={closeFn} />);

        fireEvent.click(container.querySelector('.fab-close-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});