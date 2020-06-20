import React, { useEffect, forwardRef, useRef, Fragment } from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    FabulaProvider,
    FileInput,
    FabulaUtils,
    Tooltip,
    TooltipWrapper,
    ButtonGroup,
    TooltipProvider
} from '../lib';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

export const Test = () => {
    return (
        <FabulaProvider>
            <TooltipProvider>
                <FabulaUtils>
                    <ButtonGroup mt="3">
                        <Tooltip placement="top">
                            <Button color="primary">Top</Button>
                        </Tooltip>
                        <Tooltip placement="right">
                            <Button color="primary">Right</Button>
                        </Tooltip>
                        <Tooltip placement="bottom">
                            <Button color="primary">Bottom</Button>
                        </Tooltip>
                        <Tooltip placement="left">
                            <Button color="primary">Left</Button>
                        </Tooltip>
                    </ButtonGroup>
                </FabulaUtils>
            </TooltipProvider>
        </FabulaProvider>
    )
}