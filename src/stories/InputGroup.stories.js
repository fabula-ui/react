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
    UtilsProvider,
    Wrapper
} from '../lib';

export default {
    title: 'Input Group',
    component: InputGroup,
};

// Example
export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <InputGroup mb={1}>
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} message={{ color: 'primary', text: 'Example of an input message' }} placeholder="Type something..." />
                <Button color="primary">
                    <Text color="inherit" inline={true} mr={.5} weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>

            <InputGroup>
                <Dropdown>
                    <DropdownToggle border={true} color="light" compact={true} glow={false}>Dropdown Toggle</DropdownToggle>
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]}></DropdownMenu>
                </Dropdown>
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} message={{ text: 'Example of an input message' }} placeholder="Type something..." />
                <Button border={true} color="light">
                    <Text color="inherit" inline={true} mr={.5} weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>
        </UtilsProvider>
    </FabulaProvider>
)

// Properties
export const PropLayout = () => (
    <FabulaProvider>
        <UtilsProvider>
            <InputGroup mb={1}>
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                <Button color="primary">
                    <Text color="inherit" inline={true} mr={.5} weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>

            <InputGroup layout="v">
                <Input iconStart={{ color: 'primary', name: 'battery-charging' }} placeholder="Type something..." />
                <Button border={true}>
                    <Text color="inherit" inline={true} mr={.5} weight={600}>Button</Text>
                    <Icon name="arrow-right" />
                </Button>
            </InputGroup>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
const UtilBaseComponent = props => (
    <InputGroup {...props}>
        <Input iconStart={{ color: 'primary', name: 'battery-charging' }} message={{ color: 'primary', text: 'Example of an input message' }} placeholder="Type something..." />
        <Button color="primary">
            <Text color="inherit" inline={true} mr={.5} weight={600}>Button</Text>
            <Icon name="arrow-right" />
        </Button>
    </InputGroup>
)

export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <UtilBaseComponent mr={.5} width={400} />
                <UtilBaseComponent mx={.5} width={400} />
                <UtilBaseComponent ml={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <UtilBaseComponent mb={.5} width={400} />
                <UtilBaseComponent my={.5} width={400} />
                <UtilBaseComponent mt={.5} width={400} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <UtilBaseComponent width={400} />
                <Wrapper al="center" flex={true}>
                    <UtilBaseComponent width={400} />
                    <UtilBaseComponent m={1} width={400} />
                    <UtilBaseComponent width={400} />
                </Wrapper>
                <UtilBaseComponent width={400} />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent hidden={true} />
            <UtilBaseComponent visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)