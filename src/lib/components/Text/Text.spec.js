import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Text from './Text';

describe('Text Component', () => {
    it('Should create', () => {
        const { container } = render(<Text />);
        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Text>Content</Text>);
        const element = container.querySelector('.fab-text');

        expect(element.textContent).toBe('Content');
    });

    it('Should have prop content as inner content', () => {
        const { container } = render(<Text content="Content" />);
        const element = container.querySelector('.fab-text');

        expect(element.textContent).toBe('Content');
    });

    it('Should change weight', () => {
        let component = render(<Text />);
        let element = component.container.querySelector('.fab-text');

        expect(getComputedStyle(element).fontWeight).toBe('');

        // Weight: 700
        component = render(<Text weight={700} />);
        element = component.container.querySelector('.fab-text');

        expect(getComputedStyle(element).fontWeight).toBe('700');

        // Bold
        component = render(<Text bold={true} />);
        element = component.container.querySelector('.fab-text');

        expect(getComputedStyle(element).fontWeight).toBe('700');

        // Medium
        component = render(<Text medium={true} />);
        element = component.container.querySelector('.fab-text');

        expect(getComputedStyle(element).fontWeight).toBe('500');

        // Semibold
        component = render(<Text semibold={true} />);
        element = component.container.querySelector('.fab-text');

        expect(getComputedStyle(element).fontWeight).toBe('600');

        // Strong
        component = render(<Text strong={true} />);
        element = component.container.querySelector('.fab-text');

        expect(getComputedStyle(element).fontWeight).toBe('700');
    });

    it('Should be block as default', () => {
        const { container } = render(<Text />);
        const element = container.querySelector('.fab-text');

        expect(getComputedStyle(element).display).toBe('block');
    });

    // it('Should change to inline', () => {
    //     const { container } = render(<Text inline={true} />);
    //     const element = container.querySelector('.fab-text');
        
    //     expect(getComputedStyle(element).display).toBe('inline-block');
    // });
});