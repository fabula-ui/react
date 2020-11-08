import React, { Fragment } from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Segment from '../Segment/Segment';
import SegmentContent from './SegmentContent';
import Segments from '../Segments/Segments';

const Example = () => (
    <Fragment>
        <Segments scope="segment">
            <Segment active={true} name="segment1" />
            <Segment name="segment2" />
            <Segment name="segment3" />
        </Segments>
        <SegmentContent active={true} name="segment1" scope="segment" />
        <SegmentContent name="segment2" scope="segment" />
        <SegmentContent name="segment3" scope="segment" />
    </Fragment>
)

describe('SegmentContent Component', () => {
    it('Should create', () => {
        const { container } = render(<SegmentContent />);

        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<SegmentContent>Content</SegmentContent>);
        const element = container.querySelector('.fab-segment-content');

        expect(element.textContent).toBe('Content');
    });

    it('Should have a scope', () => {
        const { container } = render(<SegmentContent scope="scope" />);
        const element = container.querySelector('.fab-segment-content');

        expect(element.getAttribute('data-scope')).toBe('scope');
    });

    it('Should toggle visibility via segment', () => {
        const { container } = render(<Example />);
        const content1 = container.querySelector('.fab-segment-content[data-name="segment1"]');
        const content2 = container.querySelector('.fab-segment-content[data-name="segment2"]');
        const content3 = container.querySelector('.fab-segment-content[data-name="segment3"]');
        const segment1 = container.querySelector('.fab-segment[data-name="segment1"]');
        const segment2 = container.querySelector('.fab-segment[data-name="segment2"]');
        const segment3 = container.querySelector('.fab-segment[data-name="segment3"]');

        expect(content1.getAttribute('data-active')).toBe('true');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(segment1.getAttribute('data-active')).toBe('true');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('false');

        fireEvent.click(segment2, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('true');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('true');
        expect(segment3.getAttribute('data-active')).toBe('false');

        fireEvent.click(segment3, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('true');

        expect(segment1.getAttribute('data-active')).toBe('false');
        expect(segment2.getAttribute('data-active')).toBe('false');
        expect(segment3.getAttribute('data-active')).toBe('true');
    });
});