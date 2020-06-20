import React, { useEffect, forwardRef, useRef, Fragment } from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    FabulaProvider,
    FabulaUtils,
    Tooltip,
    ButtonGroup,
    TooltipProvider
} from '../lib';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

export const Color = () => (
    <FabulaProvider>
        <TooltipProvider>
            <FabulaUtils>
                <ButtonGroup mt="3">
                    <Tooltip placement="top">
                        <Button border={true}>Default</Button>
                    </Tooltip>
                    <Tooltip color="primary" placement="top">
                        <Button color="primary">Primary</Button>
                    </Tooltip>
                    <Tooltip color="secondary" placement="top">
                        <Button color="secondary">Secondary</Button>
                    </Tooltip>
                    <Tooltip color="success" placement="top">
                        <Button color="success">Success</Button>
                    </Tooltip>
                    <Tooltip color="danger" placement="top">
                        <Button color="danger">Danger</Button>
                    </Tooltip>
                    <Tooltip color="warning" placement="top">
                        <Button color="warning">Warning</Button>
                    </Tooltip>
                    <Tooltip color="hot" placement="top">
                        <Button color="hot">Hot</Button>
                    </Tooltip>
                    <Tooltip color="cold" placement="top">
                        <Button color="cold">Cold</Button>
                    </Tooltip>
                    <Tooltip color="dark" placement="top">
                        <Button color="dark">Dark</Button>
                    </Tooltip>
                    <Tooltip color="light" placement="top">
                        <Button color="light">Light</Button>
                    </Tooltip>
                    <Tooltip color="aux" placement="top">
                        <Button color="aux">Aux</Button>
                    </Tooltip>
                </ButtonGroup>
            </FabulaUtils>
        </TooltipProvider>
    </FabulaProvider>
)

export const Offset = () => (
    <FabulaProvider>
        <TooltipProvider>
            <FabulaUtils>
                <ButtonGroup mt="5">
                    <Tooltip placement="top">
                        <Button color="primary">Default</Button>
                    </Tooltip>

                    <Tooltip offset={1} placement="top">
                        <Button color="primary">1</Button>
                    </Tooltip>

                    <Tooltip offset="1rem" placement="top">
                        <Button color="primary">1rem</Button>
                    </Tooltip>

                    <Tooltip offset="30px" placement="top">
                        <Button color="primary">30px</Button>
                    </Tooltip>
                </ButtonGroup>
            </FabulaUtils>
        </TooltipProvider>
    </FabulaProvider>
)

export const Placement = () => {
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
