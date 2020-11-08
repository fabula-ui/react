import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Tab from './Tab';
import Tabs from '../Tabs/Tabs';

describe('Tab Component', () => {
    it('Should create', () => {
        const { container } = render(<Tab />);

        expect(container).toBeTruthy();
    });

    it('Should be a button by default', () => {
        const { container } = render(<Tab />);
        const buttonElement = container.querySelector('button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should be an anchor', () => {
        const { container } = render(<Tab href="href" />);
        const anchorElement = container.querySelector('a');

        expect(anchorElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Tab onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-tab'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should toggle', () => {
        const { container } = render(<Tabs><Tab name="tab"></Tab></Tabs>);
        const tabElement = container.querySelector('.fab-tab');

        expect(tabElement.getAttribute('data-active')).toBe('false');

        fireEvent.click(container.querySelector('.fab-tab'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(tabElement.getAttribute('data-active')).toBe('true');
    });
});