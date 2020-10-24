import React from 'react';

import {
    Avatar,
    Button,
    ButtonGroup,
    Card,
    CardImage,
    CardSection,
    FabulaProvider,
    Input,
    Link,
    Text,
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
                <Wrapper mt="3">
                    <TooltipProvider>
                        <Wrapper al="center" direction="column" flex={true}>
                            <Wrapper mb={1}>
                                <Tooltip label="Tooltip">
                                    <Avatar />
                                </Tooltip>
                            </Wrapper>

                            <Wrapper mb={1}>
                                <Tooltip label="Tooltip">
                                    <Button>Button</Button>
                                </Tooltip>
                            </Wrapper>

                            <Wrapper mb={1}>
                                <ButtonGroup>
                                    <Tooltip label="Tooltip">
                                        <Button>Button 1</Button>
                                    </Tooltip>

                                    <Tooltip label="Tooltip">
                                        <Button>Button 2</Button>
                                    </Tooltip>

                                    <Tooltip label="Tooltip">
                                        <Button>Button 3</Button>
                                    </Tooltip>
                                </ButtonGroup>
                            </Wrapper>

                            <Card mb={1} width={300}>
                                <Tooltip label="Tooltip">
                                    <CardImage height={200} />
                                </Tooltip>

                                <CardSection padding={true}>
                                    <Wrapper>
                                        <Tooltip label="Tooltip">
                                            <Text inline={true} strong={true} size="lg">
                                                Card Title
                                        </Text>
                                        </Tooltip>
                                    </Wrapper>
                                    <Tooltip label="Tooltip">
                                        <Link mb={1}>This is a link</Link>
                                    </Tooltip>
                                    <Tooltip label="Tooltip">
                                        <Button color="primary" expand={true}>Button</Button>
                                    </Tooltip>
                                </CardSection>
                            </Card>

                            <Tooltip label="Tooltip">
                                <Input placeholder="Input" width={300} />
                            </Tooltip>
                        </Wrapper>
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
