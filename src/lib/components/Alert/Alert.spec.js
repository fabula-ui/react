import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';

// Component
import Alert from './Alert';
import { act } from 'react-dom/test-utils';

describe('Alert Component', () => {
    it('Should create', () => {
        const { container } = render(<Alert />);

        expect(container).toBeTruthy();
    });

    it('Should have an icon', () => {
        const { container } = render(<Alert icon={{ name: 'icon' }} />);
        const element = container.querySelector('.fab-icon');

        expect(element).toBeTruthy();
    });

    it('Should have a text', () => {
        const text = 'This is a text';
        const { container } = render(<Alert text={text} />);
        const element = container.querySelector('.fab-alert__text');

        expect(element.textContent).toBe(text);
    });

    it('Should have a title', () => {
        const title = 'This is a title';
        const { container } = render(<Alert title={title} />);
        const element = container.querySelector('.fab-alert__title');

        expect(element.textContent).toBe(title);
    });

    it('Should have a close button', () => {
        const { container } = render(<Alert closeButton={true} />);
        const element = container.querySelector('.fab-close-button');

        expect(element).toBeTruthy();
    });

    it('Should call onClose', () => {
        let output = '';
        const closeFn = () => { output = 'called' };
        const { container } = render(<Alert closeButton={true} onClose={closeFn} />);

        act(() => {
            fireEvent.click(container.querySelector('.fab-close-button'), new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }));

            expect(output).toBe('called');
        });
    });
});