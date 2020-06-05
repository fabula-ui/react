import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Button,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    Icon,
    Input,
    InputGroup,
    Text,
    UtilsProvider,
} from '../lib';

export default {
    title: 'InputGroup',
    component: InputGroup,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>

            <InputGroup mb="1">
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} message={{ color: 'primary', text: 'Example of an input message' }} placeholder="Type something..." />
                <Button color="primary">
                    <Text color="inherit" weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>

            <InputGroup glued={true}>
                <Dropdown>
                    <DropdownToggle border={true} color="light" compact={true} glow={false} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]}></DropdownMenu>
                </Dropdown>
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                <Button border={true} color="light">
                    <Text color="inherit" weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>

        </UtilsProvider>
    </FabulaProvider>
)

export const Glued = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <InputGroup col="4" glued>
                    <Input iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button border={true} compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="primary" iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="primary" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="secondary" iconStart={{ color: 'secondary', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="secondary" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>

            <div mb="1" row>
                <InputGroup col="4" glued>
                    <Input color="success" iconStart={{ color: 'success', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="success" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="danger" iconStart={{ color: 'danger', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="danger" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="warning" iconStart={{ color: 'warning', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="warning" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>

            <div mb="1" row>
                <InputGroup col="4" glued>
                    <Input color="hot" iconStart={{ color: 'hot', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="hot" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="cold" iconStart={{ color: 'cold', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="cold" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="dark" iconStart={{ color: 'dark', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button color="dark" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>

            <div mb="1" row>
                <InputGroup col="4" glued>
                    <Input color="light" iconStart={{ color: 'light', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button border={true} color="light" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col="4" glued>
                    <Input color="aux" iconStart={{ color: 'aux', name: 'battery-charging' }} placeholder="Type something..." />
                    <Button border={true} color="aux" compact={true} glow={false}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>

        </UtilsProvider>

    </FabulaProvider>
)

export const Sizes = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <InputGroup col={4} glued={true}>
                    <Input placeholder="Type something..." size="xxl" />
                    <Button color="primary" compact={true} size="xxl">
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col={4} glued={true}>
                    <Input placeholder="Type something..." size="xl" />
                    <Button color="primary" compact={true} size="xl">
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col={4} glued={true}>
                    <Input placeholder="Type something..." size="lg" />
                    <Button color="primary" compact={true} size="lg">
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>

            <div mb="1" row>
                <InputGroup col={4} glued={true}>
                    <Input placeholder="Type something..." size="md" />
                    <Button color="primary" compact={true} size="md">
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col={4} glued={true}>
                    <Input placeholder="Type something..." size="sm" />
                    <Button color="primary" compact={true} size="sm">
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col={4} glued={true}>
                    <Input placeholder="Type something..." size="xs" />
                    <Button color="primary" compact={true} size="xs">
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Spacing = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <InputGroup col={4}>
                    <Input placeholder="Type something..." />
                    <Button color="primary" compact={true}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col={4} spacing={1}>
                    <Input placeholder="Type something..." />
                    <Button color="primary" compact={true}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>

                <InputGroup col={4} spacing="3rem">
                    <Input placeholder="Type something..." />
                    <Button color="primary" compact={true}>
                        <Text color="inherit" weight={600}>Button</Text>
                        <Icon name="arrow-right" />
                    </Button>
                </InputGroup>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)