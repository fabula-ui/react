import React from 'react';
import { render } from '@testing-library/react';

// Component
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
    it('Should create', () => {
        const { container } = render(<SearchInput />);

        expect(container).toBeTruthy();
    });

    it('Should have an input', () => {
        const { container } = render(<SearchInput />);
        const element = container.querySelector('.fab-input');

        expect(element).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<SearchInput>Content</SearchInput>);
        const element = container.querySelector('.fab-search-input');

        expect(element.textContent).toBe('Content');
    });
});