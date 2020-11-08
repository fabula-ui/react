import React from 'react';
import { render } from '@testing-library/react';

// Component
import Wrapper from './Wrapper';

describe('Wrapper Component', () => {
    it('Should create', () => {
        const { container } = render(<Wrapper />);

        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Wrapper>Content</Wrapper>);
        const element = container.querySelector('.fab-wrapper');

        expect(element.textContent).toBe('Content');
    });
});