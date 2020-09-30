import React from 'react';

import {
    Button,
    FabulaProvider,
    Tooltip,
    TooltipProvider,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Tooltip',
    component: Tooltip,
};

// Base component
const BaseComponent = ({ buttonColor, color, label, mr, ...rest }) => (
    <Tooltip color={color} label={label} placement="top" {...rest}>
        <Button color={buttonColor || color} mr={mr}>
            {label}
        </Button>
    </Tooltip>
)

// Stories
export const Example = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <Wrapper mt={5}>
                    <TooltipProvider>
                        <BaseComponent label="Tooltip" mr={1} />
                    </TooltipProvider>
                </Wrapper>
            </UtilsProvider>
        </FabulaProvider>
    )
}

export const PropColor = () => {
    return (
        <FabulaProvider>
            <UtilsProvider>
                <TooltipProvider>
                    <Wrapper mt={5}>
                        <BaseComponent label="Default" mr={1} />
                        <BaseComponent color="primary" label="Primary" mr={1} />
                        <BaseComponent color="lavender" label="Lavender" mr={1} />
                        <BaseComponent color="hot" label="Hot" mr={1} />
                        <BaseComponent color="aux" label="Aux" mr={1} />
                        <BaseComponent color="dark" label="Dark" />
                    </Wrapper>
                </TooltipProvider>
            </UtilsProvider>
        </FabulaProvider>
    )
}

export const PropOffset = () => (
    <FabulaProvider>
        <TooltipProvider>
            <UtilsProvider>
                <Wrapper mt={5}>
                    <BaseComponent buttonColor="primary" label="Default" mr={1} />
                    <BaseComponent buttonColor="primary" label="Offset: 1" mr={1} offset={1} />
                    <BaseComponent buttonColor="primary" label="Offset: 1.5rem" mr={1} offset="1.5rem" />
                    <BaseComponent buttonColor="primary" label="Offset: 30px" mr={1} offset="30px" />
                </Wrapper>
            </UtilsProvider>
        </TooltipProvider>
    </FabulaProvider>
)

export const PropPlacement = () => {
    return (
        <FabulaProvider>
            <TooltipProvider>
                <UtilsProvider>
                    <Wrapper mt={5}>
                        <BaseComponent buttonColor="primary" label="Top" mr={1} />
                        <BaseComponent buttonColor="primary" label="Right" placement="right" mr={1} />
                        <BaseComponent buttonColor="primary" label="Bottom" placement="bottom" mr={1} />
                        <BaseComponent buttonColor="primary" label="Left" placement="left" />
                    </Wrapper>
                </UtilsProvider>
            </TooltipProvider>
        </FabulaProvider>
    )
}
