import React from 'react';
import { render } from '@testing-library/react';

// Component
import Tooltip from './Tooltip';

describe('Tooltip Component', () => {
    it('Should create', () => {
        const { container } = render(<Tooltip />);

        expect(container).toBeTruthy();
    });
});