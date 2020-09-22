import React from 'react';

import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    FabulaUtils,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Button Group',
    component: ButtonGroup,
};

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

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
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
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLayout = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true}>
                <Wrapper>
                    <ButtonGroup flex={true} mb={1}>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                    </ButtonGroup>
                    <ButtonGroup color="primary" flex={true} mr={1}>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                        <Button color="primary">Button</Button>
                    </ButtonGroup>
                </Wrapper>

                <Wrapper>
                    <ButtonGroup layout="v" mr={1}>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
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
                <Button border={true} compact={true}>Button without action</Button>
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