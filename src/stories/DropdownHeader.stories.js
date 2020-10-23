import React from 'react';

import {
	Divider,
	Dropdown,
	DropdownHeader,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	FabulaProvider,
	UtilsProvider,
	Wrapper
} from '../lib';

export default {
	title: 'Dropdown Header',
	component: DropdownHeader
};

// Examples
export const Example = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Dropdown>
				<DropdownToggle color="primary">Dropdown Toggle</DropdownToggle>
				<DropdownMenu>
					<DropdownHeader pl={1}>Dropdown Header</DropdownHeader>
					<DropdownItem button={true}>Dropdown Item 1</DropdownItem>
					<DropdownItem button={true}>Dropdown Item 2</DropdownItem>
					<Divider />
					<DropdownItem>Dropdown Item 3</DropdownItem>
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
				<DropdownToggle color="primary">Dropdown Toggle</DropdownToggle>
				<DropdownMenu>
					<DropdownHeader color="primary">Dropdown Header</DropdownHeader>
					<DropdownItem button={true}>Dropdown Item 1</DropdownItem>
					<DropdownItem button={true}>Dropdown Item 2</DropdownItem>
					<Divider />
					<DropdownItem>Dropdown Item 3</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</UtilsProvider>
	</FabulaProvider>
);

// Utilities
const UtilBaseComponent = props => (
	<FabulaProvider>
		<UtilsProvider>
			<Dropdown>
				<DropdownToggle color="primary">Dropdown Toggle</DropdownToggle>
				<DropdownMenu>
					<DropdownHeader {...props}>Dropdown Header</DropdownHeader>
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