import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Segment from '../Segment/Segment';
import Segments from './Segments';

const Example = () => (
    <Segments scope="segment">
        <Segment active={true} name="segment1" />
        <Segment name="segment2" />
        <Segment name="segment3" />
    </Segments>
)

describe('Segments Component', () => {
    it('Should create', () => {
        const { container } = render(<Segments />);

        expect(container).toBeTruthy();
    });

    it('Should have segments as content', () => {
        const { container } = render(<Segments><Segment /></Segments>);
        const segmentElement = container.querySelector('.fab-segment');

        expect(segmentElement).toBeTruthy();
    });

    it('Should toggle visibility via segment', () => {
        const { container } = render(<Example />);
        const segment1 = container.querySelector('.fab-segment[data-name="segment1"]');
        const segment2 = container.querySelector('.fab-segment[data-name="segment2"]');
        const segment3 = container.querySelector('.fab-segment[data-name="segment3"]');

        expect(segment1.getAttribute('data-active')).toBe('true');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('false');

        fireEvent.click(segment2, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('true');
        expect(segment3.getAttribute('data-active')).toBe('false');

        fireEvent.click(segment3, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('true');
    });
});