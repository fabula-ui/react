import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Components
import { Button } from '../Button/Button';
import TooltipWrapper from './TooltipWrapper';
import Tooltip from '../Tooltip/Tooltip';

// Provider
import TooltipProvider from '../../providers/TooltipProvider';


const App = () => {
    return (
        <TooltipProvider>
            <TooltipExample />
        </TooltipProvider>
    );
}

const TooltipExample = () => {
    return (
        <TooltipWrapper>
            <Button />
        </TooltipWrapper>
    )
}

describe('Tooltip Component', () => {
    it('Should create', () => {
        const { container } = render(<Tooltip />);

        expect(container).toBeTruthy();
    });

    it('Should not have tooltip visible by default', () => {
        const { container } = render(<App />);
        const tooltipElement = container.querySelector('.fab-tooltip');

        expect(tooltipElement).toBeFalsy();
    });

    it('Should show tooltip on mouse over', () => {
        const { container } = render(<App />);
        const buttonElement = container.querySelector('.fab-button');
        let tooltipElement;

        fireEvent.mouseEnter(buttonElement, {
            bubbles: true,
            cancelable: true
        });

        tooltipElement = container.querySelector('.fab-tooltip');

        expect(tooltipElement).toBeTruthy();

        fireEvent.mouseLeave(buttonElement, {
            bubbles: true,
            cancelable: true
        });

        tooltipElement = container.querySelector('.fab-tooltip');

        expect(tooltipElement).toBeFalsy();
    });
});