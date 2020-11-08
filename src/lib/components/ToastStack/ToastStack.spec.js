import React from 'react';
import { render } from '@testing-library/react';

// Component
import ToastStack from './ToastStack';

describe('ToastStack Component', () => {
    it('Should create', () => {
        const { container } = render(<ToastStack />);
        expect(container).toBeTruthy();
    });
});