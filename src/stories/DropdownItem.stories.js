import React from 'react';

import {
    Badge,
    Divider,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    Text,
    UtilsProvider,
} from '../lib';

export default {
    title: 'Dropdown Item',
    component: DropdownItem
};

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Dropdown>
                <DropdownToggle color="primary">
                    Dropdown Toggle
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem button={true}>Dropdown Item 1</DropdownItem>
                    <DropdownItem button={true}>Dropdown Item 2</DropdownItem>
                    <Divider />
                    <DropdownItem button={true}>Dropdown Item 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </UtilsProvider>
    </FabulaProvider>
);

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Dropdown>
                <DropdownToggle color="primary">
                    Dropdown Toggle
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownHeader>Dropdown Header</DropdownHeader>
                    <DropdownItem button={true}>Dropdown Item 1</DropdownItem>
                    <DropdownItem button={true}>Dropdown Item 2</DropdownItem>
                    <Divider />
                    <DropdownItem button={true} color="primary">
                        <Text grow={1}>Dropdown Item 3</Text>
                        <Badge color="primary" invert={true} rounded={true}>1</Badge>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </UtilsProvider>
    </FabulaProvider>
);

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Dropdown>
                <DropdownToggle color="primary">
                    Dropdown Toggle
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem button={true} size="xs">
                        <Badge color="aux" mr={.5}>xs</Badge>
                        <Text grow={1} >Extra-small item</Text>
                    </DropdownItem>
                    <DropdownItem button={true} size="sm">
                        <Badge color="aux" mr={.5}>sm</Badge>
                        <Text grow={1}>Small item</Text>
                    </DropdownItem>
                    <DropdownItem button={true} size="md">
                        <Badge color="aux" mr={.5}>md</Badge>
                        <Text grow={1}>Medium item</Text>
                    </DropdownItem>
                    <DropdownItem button={true} size="lg">
                        <Badge color="aux" mr={.5}>lg</Badge>
                        <Text grow={1}>Large item</Text>
                    </DropdownItem>
                    <DropdownItem button={true} size="xl">
                        <Badge color="aux" mr={.5}>xl</Badge>
                        <Text grow={1}>Extra-large item</Text>
                    </DropdownItem>
                    <DropdownItem button={true} size="xxl">
                        <Badge color="aux" mr={.5}>xxl</Badge>
                        <Text grow={1}>2x Extra-large item</Text>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </UtilsProvider>
    </FabulaProvider>
)