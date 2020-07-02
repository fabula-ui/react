import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
    it('Should create', () => {
        const { container } = render(<Checkbox />);

        expect(container).toBeTruthy();
    });

    it('Should have label', () => {
        const { container } = render(<Checkbox label="Label" />);
        const labelElement = container.querySelector('.fab-checkbox__label');

        expect(labelElement.textContent).toBe('Label');
    });

    it('Should have children as label', () => {
        const { container } = render(<Checkbox>Label</Checkbox>);
        const labelElement = container.querySelector('.fab-checkbox__label');

        expect(labelElement.textContent).toBe('Label');
    });

    it('Should have checked attribute', () => {
        const { container } = render(<Checkbox checked={true} />);
        const inputElement = container.querySelector('input');
        const wrapperElement = container.querySelector('.fab-checkbox-wrapper');

        expect(inputElement.checked).toBeTruthy();
        expect(wrapperElement.getAttribute('data-checked')).toBe('true');
    });

    it('Should have indeterminate attribute', () => {
        const { container } = render(<Checkbox indeterminate={true} />);
        const inputElement = container.querySelector('input');
        const wrapperElement = container.querySelector('.fab-checkbox-wrapper');

        expect(wrapperElement.getAttribute('data-indeterminate')).toBe('true');
    });

    it('Should call onChange clicking checkbox', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Checkbox onChange={clickFn} />);

        fireEvent.click(container.querySelector('.fab-checkbox'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call onChange clicking label', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Checkbox onChange={clickFn} />);

        fireEvent.click(container.querySelector('.fab-checkbox__label'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call onCheck clicking checkbox', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Checkbox onCheck={clickFn} />);

        fireEvent.click(container.querySelector('.fab-checkbox'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call onCheck clicking label', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Checkbox onCheck={clickFn} />);

        fireEvent.click(container.querySelector('.fab-checkbox__label'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call onUncheck clicking checkbox', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Checkbox checked={true} onUncheck={clickFn} />);

        fireEvent.click(container.querySelector('.fab-checkbox'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call onUncheck clicking label', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Checkbox checked={true} onUncheck={clickFn} />);

        fireEvent.click(container.querySelector('.fab-checkbox__label'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});