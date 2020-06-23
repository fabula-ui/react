import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';

// Component
import Alert from './Alert';

describe('Alert Component', () => {
    it('Should render correctly', () => {
        let n = 0;
        const closeFn = () => { n = n + 1 };
        const { container } = render(<Alert closeButton="Close" onClose={closeFn} />);

        fireEvent.click(container.querySelector('.fab-close-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(n).toEqual(1);
    });
});