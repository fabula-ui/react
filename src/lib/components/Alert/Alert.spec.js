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

    it('Should have a defined structure', () => {
        const { container } = render(<Alert />);
        const alertElement = container.querySelector('.fab-alert');
        const stageElement = container.querySelector('.fab-alert__stage');

        expect(alertElement).toBeTruthy();
        expect(stageElement).toBeTruthy();
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

    it('Should have an icon', () => {
        const { container } = render(<Alert icon={{ name: 'icon' }} />);
        const element = container.querySelector('.fab-icon');

        expect(element).toBeTruthy();
    });

    it('Should have an icon if there is a type', () => {
        const { container } = render(<Alert type="success" />);
        const element = container.querySelector('.fab-icon');

        expect(element).toBeTruthy();
    });

    // it('Should have border', () => {
    //     const borderfulComponent = render(<Alert />);
    //     const borderlessComponent = render(<Alert border={false} />);
    //     const borderfulAlert = borderfulComponent.container.querySelector('.fab-alert');
    //     const borderlessAlert = borderlessComponent.container.querySelector('.fab-alert');

    //     expect(getComputedStyle(borderfulAlert).borderColor).not.toBe('transparent');
    //     expect(getComputedStyle(borderlessAlert).borderColor).toBe('transparent');
    // });

    it('Should have a close button', () => {
        const { container } = render(<Alert closeButton={true} />);
        const element = container.querySelector('.fab-close-button');

        expect(element).toBeTruthy();
    });

    it('Should call onClose', async done => {
        let output = '';
        let component;
        let closeFn = () => { output = 'called' };

        await act(async () => {
            component = await render(<Alert closeButton={true} onClose={closeFn} />);

            fireEvent.click(component.container.querySelector('.fab-close-button'), new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }));
        });

        setTimeout(() => {
            expect(output).toBe('called');
            done();
        }, 1000);
    });
});