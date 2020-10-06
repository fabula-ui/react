import React from 'react';

import {
	Avatar,
	Badge,
	Button,
	Divider,
	Dropdown,
	DropdownHeader,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Element,
	FabulaProvider,
	Icon,
	List,
	ListItem,
	Tag,
	Text,
	UtilsProvider,
	Wrapper
} from '../lib';

export default {
	title: 'Dropdown',
	component: Dropdown
};

export const Example = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Dropdown>
				<DropdownToggle color="primary" compact={true}>
					<Icon mr={.5} name="map-pin" />
					<span>Dropdown Toggle</span>
				</DropdownToggle>
				<DropdownMenu clickToClose={true} onClickItem={() => console.log('Parent onClick')}>
					<DropdownHeader>
						<Icon mr={0.3} name="database" />
						<Element>Dropdown Header</Element>
					</DropdownHeader>
					<DropdownItem>Dropdown Item 1</DropdownItem>
					<DropdownItem>Dropdown Item 2</DropdownItem>
					<DropdownItem>Dropdown Item 3</DropdownItem>
					<Divider />
					<DropdownItem>
						<Icon color="primary" mr={.5} name="database" />
						<Element grow={1} mr={1}>
							Dropdown Item 4
							</Element>
						<Badge color="primary">New</Badge>
					</DropdownItem>
					<Divider />
					<DropdownItem color="primary">
						<Icon mr=".5" name="database" />
						<Element grow={1} mr={1}>
							Dropdown Item 5
						</Element>
						<Badge color="primary" invert={true} rounded={true} size="sm">
							1
						</Badge>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</UtilsProvider>
	</FabulaProvider>
);

export const PropAlignment = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Wrapper flex={true}>
				<Dropdown alignment="left" mr={1}>
					<DropdownToggle color="primary" compact={true}>
						<Icon mr={.5} name="arrow-left-circle" />
						<span>Alignment: Left</span>
					</DropdownToggle>
					<DropdownMenu clickToClose={true}>
						<DropdownItem button={true}>This dropdown is aligned to the left</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Dropdown alignment="right">
					<DropdownToggle color="primary" compact={true}>
						<Icon mr={.5} name="arrow-right-circle" />
						<span>Alignment: Right</span>
					</DropdownToggle>
					<DropdownMenu clickToClose={true}>
						<DropdownItem button={true}>This dropdown is aligned to the right</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Wrapper>
		</UtilsProvider>
	</FabulaProvider>
);

export const PropDirection = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Wrapper flex={true} mt={5}>
				<Dropdown direction="down" mr={1}>
					<DropdownToggle color="primary" compact={true}>
						<Icon mr={.5} name="arrow-down-circle" />
						<span>Direction: Down</span>
					</DropdownToggle>
					<DropdownMenu clickToClose={true}>
						<DropdownItem button={true}>Dropdown Item</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Dropdown direction="up">
				<DropdownToggle color="primary" compact={true}>
						<Icon mr={.5} name="arrow-up-circle" />
						<span>Direction: Up</span>
					</DropdownToggle>
					<DropdownMenu clickToClose={true}>
						<DropdownItem button={true}>Dropdown Item</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Wrapper>
		</UtilsProvider>
	</FabulaProvider>
)

export const PropExpand = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Dropdown expand={true}>
				<DropdownToggle color="primary">Expand</DropdownToggle>
				<DropdownMenu clickToClose={true}>
					<DropdownItem button={true}>Dropdown Item</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</UtilsProvider>
	</FabulaProvider>
)

export const CustomContent = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Dropdown mr="1">
				<DropdownToggle color="primary" wide={true}>Custom Content 1</DropdownToggle>
				<DropdownMenu padding={false}>
					<List padding={true} striped={true}>
						<ListItem alV="center" flex>
							<Text inline={true} grow={1} weight={600}>
								List Item 1
							</Text>
							<Tag color="success">
								<Icon name="check" />
								<Text strong={true}>Done</Text>
							</Tag>
						</ListItem>

						<ListItem alV="center" flex>
							<Text inline={true} grow={1} weight={600}>
								List Item 2
							</Text>
							<Tag color="danger">
								<Icon name="alert-triangle" />
								<Text strong={true}>Cancelled</Text>
							</Tag>
						</ListItem>

						<ListItem alV="center" flex>
							<Text inline={true} grow={1} weight={600}>
								List Item 3
							</Text>
							<Tag color="hot">
								<Icon name="sun" />
								<Text strong={true}>Hot</Text>
							</Tag>
						</ListItem>

						<ListItem alV="center" flex>
							<Text inline={true} grow={1} weight={600}>
								List Item 4
							</Text>
							<Tag color="warning">
								<Icon name="clock" />
								<Text strong={true}>Waiting</Text>
							</Tag>
						</ListItem>
					</List>
				</DropdownMenu>
			</Dropdown>

			<Dropdown mr={1}>
				<DropdownToggle color="primary" compact={true} wide={true}>
					Custom Content 2
				</DropdownToggle>
				<DropdownMenu padding={false}>
					<DropdownItem alV="center" button={true} clickToClose={true} flex>
						<Text grow={1} weight={600}>
							List Item 1
						</Text>
						<Tag color="success">
							<Icon name="check" />
							<strong>Done</strong>
						</Tag>
					</DropdownItem>

					<Divider />

					<DropdownItem alV="center" button={true} clickToClose={true} flex>
						<Text grow={1} weight={600}>
							List Item 2
						</Text>
						<Tag color="danger">
							<Icon name="alert-triangle" />
							<strong>Cancelled</strong>
						</Tag>
					</DropdownItem>

					<Divider />

					<DropdownItem alV="center" button={true} clickToClose={true} flex>
						<Text grow={1} weight={600}>
							List Item 3
						</Text>
						<Tag color="hot">
							<Icon name="sun" />
							<strong>Hot</strong>
						</Tag>
					</DropdownItem>

					<Divider />

					<DropdownItem alV="center" button={true} clickToClose={true} flex>
						<Text grow={1} weight={600}>
							List Item 4
						</Text>
						<Tag color="warning">
							<Icon name="clock" />
							<strong>Waiting</strong>
						</Tag>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>

			<Dropdown>
				<DropdownToggle color="primary" compact={true} wide={true}>
					Custom Content 3
				</DropdownToggle>
				<DropdownMenu clickToClose={true} padding={false}>
					<List padding={true}>
						<ListItem flex={true}>
							<Avatar mr={.75} rounded={true} size="sm" />
							<Wrapper grow={1} pr={1}>
								<Text block={true} size="md" strong={true}>User 1</Text>
								<Text aux={true} mt={-.2} size="sm">@username1</Text>
							</Wrapper>
							<Button color="primary" size="sm">Follow</Button>
						</ListItem>
						<ListItem flex={true}>
							<Avatar mr={.75} rounded={true} size="sm" />
							<Wrapper grow={1} pr={2}>
								<Text block={true} size="md" strong={true}>User 2</Text>
								<Text aux={true} mt={-.2} size="sm">@username2</Text>
							</Wrapper>
							<Button color="aux" size="sm">Following</Button>
						</ListItem>
					</List>
				</DropdownMenu>
			</Dropdown>
		</UtilsProvider>
	</FabulaProvider>
);