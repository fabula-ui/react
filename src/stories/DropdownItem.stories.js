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
    Wrapper
} from '../lib';

export default {
    title: 'Dropdown Item',
    component: DropdownItem
};

// Example
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

// Properties
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

// Utilities
const UtilBaseComponent = props => (
	<FabulaProvider>
		<UtilsProvider>
			<Dropdown>
				<DropdownToggle color="primary">Dropdown Toggle</DropdownToggle>
				<DropdownMenu>
					<DropdownItem {...props}>Dropdown Item 1</DropdownItem>
                    <DropdownItem>Dropdown Item 2</DropdownItem>
                    <DropdownItem>Dropdown Item 3</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</UtilsProvider>
	</FabulaProvider>
)

export const UtilMargin = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Wrapper mb={1}>
				<UtilBaseComponent m={1} />
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