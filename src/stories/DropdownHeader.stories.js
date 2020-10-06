import React from 'react';

import {
	Divider,
	Dropdown,
	DropdownHeader,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	FabulaProvider,
	UtilsProvider
} from '../lib';

export default {
	title: 'Dropdown Header',
	component: DropdownHeader
};

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