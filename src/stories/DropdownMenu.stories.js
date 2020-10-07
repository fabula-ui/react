import React from 'react';

import {
    Column,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    Row,
    UtilsProvider,
} from '../lib';

export default {
    title: 'Dropdown Menu',
    component: DropdownMenu
};

const items = [
    {
        label: 'Dropdown Item 1'
    },
    {
        label: 'Dropdown Item 2'
    },
    {
        label: 'Dropdown Item 3'
    }
]

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

// Stories
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent />
        </UtilsProvider>
    </FabulaProvider>
);

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