import React from 'react';
import { render } from '@testing-library/react';

// Component
import Link from './Link';

describe('Link Component', () => {
    it('Should create', () => {
        const { container } = render(<Link />);

        expect(container).toBeTruthy();
    });

    it('Should have an anchor', () => {
        const { container } = render(<Link href="href" rel="rel" target="target" />);
        const anchorElement = container.querySelector('a.fab-link');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
    });

    it('Should have a label', () => {
        const { container } = render(<Link label="Label" />);
        const linkElement = container.querySelector('.fab-link');

        expect(linkElement.textContent).toBe('Label');
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Link>Content</Link>);
        const linkElement = container.querySelector('.fab-link');

        expect(linkElement.textContent).toBe('Content');
    });
});