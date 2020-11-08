import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Segment from './Segment';
import Segments from '../Segments/Segments';

describe('Segment Component', () => {
    it('Should create', () => {
        const { container } = render(<Segment />);

        expect(container).toBeTruthy();
    });

    it('Should be a button by default', () => {
        const { container } = render(<Segment />);
        const buttonElement = container.querySelector('button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should be an anchor', () => {
        const { container } = render(<Segment href="href" />);
        const anchorElement = container.querySelector('a');

        expect(anchorElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Segment onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-segment'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should toggle', () => {
        const { container } = render(<Segments><Segment name="segment"></Segment></Segments>);
        const segmentElement = container.querySelector('.fab-segment');

        expect(segmentElement.getAttribute('data-active')).toBe('false');

        fireEvent.click(container.querySelector('.fab-segment'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(segmentElement.getAttribute('data-active')).toBe('true');
    });
});