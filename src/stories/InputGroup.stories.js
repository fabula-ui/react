import React from 'react';

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
    UtilsProvider
} from '../lib';

export default {
    title: 'Input Group',
    component: InputGroup,
};

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <InputGroup mb={1}>
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
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} message="Example of an input message" placeholder="Type something..." />
                <Button border={true} color="light">
                    <Text color="inherit" weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>

        </UtilsProvider>
    </FabulaProvider>
)

export const PropLayout = () => (
    <FabulaProvider>
        <UtilsProvider>
            <InputGroup mb={1}>
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                <Button color="primary">
                    <Text color="inherit" weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>

            <InputGroup layout="v">
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                <Button border={true}>
                    <Text color="inherit" weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>
        </UtilsProvider>
    </FabulaProvider>
)