import React from 'react';

import {
    Column,
    Divider,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    Row,
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Dropdown Menu',
    component: DropdownMenu
};

// Base component
const BaseComponent = ({ color, expand }) => (
    <Dropdown expand={expand}>
        <DropdownToggle color={color || 'primary'} expand={expand}>
            Dropdown Toggle
        </DropdownToggle>
        <DropdownMenu clickToClose={true} color={color}>
            <DropdownItem>Dropdown Item 1</DropdownItem>
            <DropdownItem>Dropdown Item 2</DropdownItem>
            <Divider />
            <DropdownItem>Dropdown Item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>
)

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent />
        </UtilsProvider>
    </FabulaProvider>
);

// Properties
export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col="3">
                    <BaseComponent color="primary" expand={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="lavender" expand={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="hot" expand={true} />
                </Column>
                <Column col="3">
                    <BaseComponent color="aux" expand={true} />
                </Column>
            </Row>
            <Row>
                <Column col="3">
                    <BaseComponent color="dark" expand={true} />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
);

// Utilities
const UtilBaseComponent = props => (
    <FabulaProvider>
        <UtilsProvider>
            <Dropdown>
                <DropdownToggle color="primary">Dropdown Toggle</DropdownToggle>
                <DropdownMenu {...props}>
                    <DropdownHeader>Dropdown Header</DropdownHeader>
                    <DropdownItem>Dropdown Item 1</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <UtilBaseComponent m={.5} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mb={.5} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent ml={.5} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mr={.5} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mt={.5} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent mx={.5} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent my={.5} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilPadding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <UtilBaseComponent p={2} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pb={2} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pl={2} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pr={2} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent pt={2} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent px={2} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent py={2} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper mb={1}>
                <UtilBaseComponent hidden={true} />
            </Wrapper>
            <Wrapper mb={1}>
                <UtilBaseComponent visible={true} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)