import React from 'react';

import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Button Group',
    component: ButtonGroup,
};

// Base component
export const BaseComponent = ({ color, ...rest }) => (
    <ButtonGroup color={color} {...rest}>
        <Button color={color}>Button</Button>
        <Button color={color}>Button</Button>
        <Button color={color}>Button</Button>
    </ButtonGroup>
)

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true}>
                <ButtonGroup mr={1}>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </ButtonGroup>
                <ButtonGroup mr={1}>
                    <Button border={true}>Button</Button>
                    <Button border={true}>Button</Button>
                    <Button border={true}>Button</Button>
                </ButtonGroup>
                <ButtonGroup color="primary" mr={1}>
                    <Button color="primary">Button</Button>
                    <Button color="primary">Button</Button>
                    <Button color="primary">Button</Button>
                </ButtonGroup>
                <ButtonGroup color="primary">
                    <Button color="primary">Button</Button>
                    <Dropdown alignment="right">
                        <DropdownToggle color="primary" compact={true} />
                        <DropdownMenu>
                            <DropdownItem>Dropdown Item</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ButtonGroup>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true}>
                <Wrapper mr={1}>
                    <ButtonGroup flex={true} mb={1}>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="primary" flex={true} mb={1}>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="lavender" flex={true} mb={1}>
                        <Button color="lavender">Button</Button>
                        <Button color="lavender">Button</Button>
                        <Button color="lavender">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="hot" flex={true} mb={1}>
                        <Button color="hot">Button</Button>
                        <Button color="hot">Button</Button>
                        <Button color="hot">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="aux" flex={true} mb={1}>
                        <Button color="aux">Button</Button>
                        <Button color="aux">Button</Button>
                        <Button color="aux">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="dark" flex={true}>
                        <Button color="dark">Button</Button>
                        <Button color="dark">Button</Button>
                        <Button color="dark">Button</Button>
                    </ButtonGroup>
                </Wrapper>

                <Wrapper>
                    <ButtonGroup flex={true} mb={1}>
                        <Button border={true}>Button</Button>
                        <Button border={true}>Button</Button>
                        <Button border={true}>Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="primary" flex={true} mb={1}>
                        <Button border={true} color="primary">Button</Button>
                        <Button border={true} color="primary">Button</Button>
                        <Button border={true} color="primary">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="lavender" flex={true} mb={1}>
                        <Button border={true} color="lavender">Button</Button>
                        <Button border={true} color="lavender">Button</Button>
                        <Button border={true} color="lavender">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="hot" flex={true} mb={1}>
                        <Button border={true} color="hot">Button</Button>
                        <Button border={true} color="hot">Button</Button>
                        <Button border={true} color="hot">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="aux" flex={true} mb={1}>
                        <Button border={true} color="aux">Button</Button>
                        <Button border={true} color="aux">Button</Button>
                        <Button border={true} color="aux">Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="dark" flex={true}>
                        <Button border={true} color="dark">Button</Button>
                        <Button border={true} color="dark">Button</Button>
                        <Button border={true} color="dark">Button</Button>
                    </ButtonGroup>
                </Wrapper>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLayout = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true}>
                <Wrapper>
                    <ButtonGroup mb={1} mr={1}>
                        <Button border={true}>Button</Button>
                        <Button border={true}>Button</Button>
                        <Button border={true}>Button</Button>
                    </ButtonGroup>

                    <ButtonGroup color="primary" mr={1}>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                    </ButtonGroup>
                </Wrapper>

                <Wrapper>
                    <ButtonGroup layout="v" mr={1}>
                        <Button border={true}>Button</Button>
                        <Button border={true}>Button</Button>
                        <Button border={true}>Button</Button>
                    </ButtonGroup>

                    <ButtonGroup color="primary" layout="v">
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                    </ButtonGroup>
                </Wrapper>
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
);

// Utilities
export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <BaseComponent color="aux" mr={.5} />
                <BaseComponent color="aux" mx={.5} />
                <BaseComponent color="aux" ml={.5} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <BaseComponent color="aux" mb={.5} />
                <BaseComponent color="aux" my={.5} />
                <BaseComponent color="aux" mt={.5} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <BaseComponent color="aux" />
                <Wrapper al="center" flex={true}>
                    <BaseComponent color="aux" />
                    <BaseComponent color="aux" m={1} />
                    <BaseComponent color="aux" />
                </Wrapper>
                <BaseComponent color="aux" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent color="aux" hidden={true} />
            <BaseComponent color="aux" visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)

// Other
export const ExternalDropdown = () => (
    <FabulaProvider>
        <UtilsProvider>
            <ButtonGroup>
                <Dropdown>
                    <DropdownToggle border={true} color="light" compact={true}>Dropdown Label</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Dropdown Item</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Button border={true}>Button without action</Button>
                <Dropdown alignment="right">
                    <DropdownToggle border={true} color="light" compact={true} />
                    <DropdownMenu>
                        <DropdownItem>Dropdown Item</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
        </UtilsProvider>
    </FabulaProvider>
)