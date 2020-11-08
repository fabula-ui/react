import React from 'react';
import { render } from '@testing-library/react';

// Component
import Row from './Row';

describe('Row Component', () => {
    it('Should create', () => {
        const { container } = render(<Row />);

        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Row>Content</Row>);
        const element = container.querySelector('.fab-row');

        expect(element.textContent).toBe('Content');
    });
});