import React, { useEffect, forwardRef, useRef, Fragment } from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    Div,
    FabulaProvider,
    UtilsProvider,
    Tooltip,
    ButtonGroup,
    TooltipProvider,
    Text
} from '../lib';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

export const Color = () => {
    return (
        <FabulaProvider>
            <TooltipProvider>
                <UtilsProvider>
                    <ButtonGroup mt={3}>
                        <Tooltip label="Default" placement="top">
                            <Button border={true}>Default</Button>
                        </Tooltip>
                        <Tooltip color="primary" label="Primary" placement="top">
                            <Button color="primary">Primary</Button>
                        </Tooltip>
                        <Tooltip color="secondary" label="Secondary" placement="top">
                            <Button color="secondary">Secondary</Button>
                        </Tooltip>
                        <Tooltip color="success" label="Success" placement="top">
                            <Button color="success">Success</Button>
                        </Tooltip>
                        <Tooltip color="danger" label="Danger" placement="top">
                            <Button color="danger">Danger</Button>
                        </Tooltip>
                        <Tooltip color="warning" label="Warning" placement="top">
                            <Button color="warning">Warning</Button>
                        </Tooltip>
                        <Tooltip color="hot" label="Hot" placement="top">
                            <Button color="hot">Hot</Button>
                        </Tooltip>
                        <Tooltip color="cold" label="Cold" placement="top">
                            <Button color="cold">Cold</Button>
                        </Tooltip>
                        <Tooltip color="dark" label="Dark" placement="top">
                            <Button color="dark">Dark</Button>
                        </Tooltip>
                        <Tooltip color="light" label="Light" placement="top">
                            <Button color="light">Light</Button>
                        </Tooltip>
                        <Tooltip color="aux" label="Aux" placement="top">
                            <Button color="aux">Aux</Button>
                        </Tooltip>
                    </ButtonGroup>
                </UtilsProvider>
            </TooltipProvider>
        </FabulaProvider>
    )
}

export const Label = () => (
    <FabulaProvider>
        <TooltipProvider>
            <UtilsProvider>
                <ButtonGroup mt="5">
                    <Tooltip label="Label 1" placement="top">
                        <Button color="primary">Label 1</Button>
                    </Tooltip>
                    <Tooltip label="Label 2" placement="top">
                        <Button color="primary">Label 2</Button>
                    </Tooltip>
                    <Tooltip label="Label 3" placement="top">
                        <Button color="primary">Label 3</Button>
                    </Tooltip>
                </ButtonGroup>
            </UtilsProvider>
        </TooltipProvider>
    </FabulaProvider>
)

export const Offset = () => (
    <FabulaProvider>
        <TooltipProvider>
            <UtilsProvider>
                <ButtonGroup mt="5">
                    <Tooltip label="Default" placement="top">
                        <Button color="primary">Default</Button>
                    </Tooltip>

                    <Tooltip offset={1} label="1" placement="top">
                        <Button color="primary">1</Button>
                    </Tooltip>

                    <Tooltip offset="1rem" label="1rem" placement="top">
                        <Button color="primary">1rem</Button>
                    </Tooltip>

                    <Tooltip offset="30px" label="30px" placement="top">
                        <Button color="primary">30px</Button>
                    </Tooltip>
                </ButtonGroup>
            </UtilsProvider>
        </TooltipProvider>
    </FabulaProvider>
)

export const Placement = () => {
    return (
        <FabulaProvider>
            <TooltipProvider>
                <UtilsProvider>
                    <ButtonGroup mt="3">
                        <Tooltip label="Top" placement="top">
                            <Button color="primary">Top</Button>
                        </Tooltip>
                        <Tooltip label="Right" placement="right">
                            <Button color="primary">Right</Button>
                        </Tooltip>
                        <Tooltip label="Bottom" placement="bottom">
                            <Button color="primary">Bottom</Button>
                        </Tooltip>
                        <Tooltip label="Left" placement="left">
                            <Button color="primary">Left</Button>
                        </Tooltip>
                    </ButtonGroup>
                </UtilsProvider>
            </TooltipProvider>
        </FabulaProvider>
    )
}
