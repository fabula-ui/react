import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Toggle from './Toggle';

describe('Toggle Component', () => {
    it('Should create', () => {
        const { container } = render(<Toggle />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<Toggle />);
        const labelElement = container.querySelector('.fab-toggle__label');
        const toggleElement = container.querySelector('.fab-toggle');
        const wrapperElement = container.querySelector('.fab-toggle-wrapper');

        expect(labelElement).toBeTruthy();
        expect(toggleElement).toBeTruthy();
        expect(wrapperElement.getAttribute('data-disabled')).toBe(null);
    });

    it('Should have a label', () => {
        const { container } = render(<Toggle label="Label" />);

        expect(container.textContent).toBe('Label');
    });

    it('Should have inner content as children', () => {
        const { container } = render(<Toggle>Content</Toggle>);

        expect(container.textContent).toBe('Content');
    });

    it('Should be disabled', () => {
        const { container } = render(<Toggle disabled={true} />);
        const wrapperElement = container.querySelector('.fab-toggle-wrapper');

        expect(wrapperElement.getAttribute('data-disabled')).toBe('true');
    });

    it('Should toggle', () => {
        const { container } = render(<Toggle />);
        const labelElement = container.querySelector('.fab-toggle__label');
        const toggleElement = container.querySelector('.fab-toggle');
        const wrapperElement = container.querySelector('.fab-toggle-wrapper');

        expect(wrapperElement.getAttribute('data-active')).toBe(null);

        fireEvent.click(toggleElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(wrapperElement.getAttribute('data-active')).toBe('true');

        fireEvent.click(labelElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(wrapperElement.getAttribute('data-active')).toBe('false');

        fireEvent.click(labelElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(wrapperElement.getAttribute('data-active')).toBe('true');
    });

    it('Should call onToggle', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Toggle onToggle={clickFn} />);
        const toggleElement = container.querySelector('.fab-toggle');

        fireEvent.click(toggleElement, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});