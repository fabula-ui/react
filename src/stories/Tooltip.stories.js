import React, { useEffect, forwardRef, useRef, Fragment } from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    FabulaProvider,
    FileInput,
    FabulaUtils,
    TooltipWrapper,
    ButtonGroup,
    TooltipProvider
} from '../lib';

export default {
    title: 'Tooltip',
    component: TooltipWrapper,
};

export const Test = () => {
    return (
        <FabulaProvider>
            <TooltipProvider>
                <FabulaUtils>
                    <ButtonGroup>
                        <TooltipWrapper>
                            <Button color="primary" mt="5">Button</Button>
                        </TooltipWrapper>
                        <TooltipWrapper>
                            <div>Teste</div>
                        </TooltipWrapper>
                    </ButtonGroup>
                </FabulaUtils>
            </TooltipProvider>
        </FabulaProvider>
    )
}