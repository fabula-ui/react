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
	Icon,
	List,
	ListItem,
	Tag,
	Text,
	FabulaUtils
} from '../lib';

export default {
	title: 'Dropdown',
	component: Dropdown
};

export const Examples = () => (
	<FabulaProvider>
		<FabulaUtils>
			<div flex>
				<Dropdown mb={1} mr={1}>
					<DropdownToggle color="primary" icon="map-pin" compact={true} label="Button" />
					<DropdownMenu clickToClose={true} onClickItem={() => console.log('Parent onClick')}>
						<DropdownHeader>
							<Icon mr={0.3} name="database" />
							<span>Dropdown Header</span>
						</DropdownHeader>
						<DropdownItem>Dropdown Item 1</DropdownItem>
						<DropdownItem>Dropdown Item 2</DropdownItem>
						<DropdownItem>Dropdown Item 3</DropdownItem>
						<Divider />
						<DropdownItem>
							<div flex>
								<Icon color="primary" mr=".5" name="database" />
								<span grow={1} mr="1">
									Dropdown Item 4
								</span>
								<Badge color="primary">New</Badge>
							</div>
						</DropdownItem>
						<Divider />
						<DropdownItem color="primary">
							<div flex>
								<Icon mr=".5" name="database" />
								<span grow={1} mr="1">
									Dropdown Item 5
								</span>
								<Badge color="primary" invert={true} rounded={true} size="sm">
									1
								</Badge>
							</div>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Dropdown mb={1} mr={1}>
                    <DropdownToggle color="primary" icon="map-pin" compact={true} label="Button" />
                    <DropdownMenu clickToClose={true} color="primary" onClickItem={() => console.log('Parent onClick')}>
                        <DropdownHeader>
                            <Icon mr={.3} name="database" />
                            <span>Dropdown Header</span>
                        </DropdownHeader>
                        <DropdownItem>Dropdown Item 1</DropdownItem>
                        <DropdownItem>Dropdown Item 2</DropdownItem>
                        <DropdownItem>Dropdown Item 3</DropdownItem>
                        <Divider />
                        <DropdownItem>
                            <div flex>
                                <Icon mr=".5" name="database" />
                                <span grow={1} mr="1">Dropdown Item 4</span>
                                <Badge color="primary" invert={true}>New</Badge>
                            </div>
                        </DropdownItem>
                        <Divider />
                        <DropdownItem color="primary" invert={true}>
                            <div flex>
                                <Icon mr=".5" name="database" />
                                <span grow={1} mr="1">Dropdown Item 5</span>
                                <Badge color="primary" rounded={true} size="sm">1</Badge>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown>
                    <DropdownToggle color="primary" icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} divider={false} items={[{ color: '', label: 'Default' }, { color: 'primary', label: 'Primary' }, { color: 'secondary', label: 'Secondary' }, { color: 'success', label: 'Success' }, { color: 'danger', label: 'Danger' }]}></DropdownMenu>
                </Dropdown>
			</div>
		</FabulaUtils>
	</FabulaProvider>
);

export const Alignment = () => (
	<FabulaProvider>
		<FabulaUtils>
			<div>
				<Dropdown alignment="left" mr="5">
					<DropdownToggle color="primary" icon="arrow-left" compact={true} label="Left" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Dropdown Item 1' },
							{ button: true, label: 'Dropdown Item 2' },
							{ button: true, label: 'Dropdown Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown alignment="right">
					<DropdownToggle color="primary" icon="arrow-right" compact={true} label="Right" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Dropdown Item 1' },
							{ button: true, label: 'Dropdown Item 2' },
							{ button: true, label: 'Dropdown Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>
			</div>
		</FabulaUtils>
	</FabulaProvider>
);

export const Colors = () => (
	<FabulaProvider>
		<FabulaUtils>
			<div mb="1" row>
				<Dropdown col="3" expand={true}>
					<DropdownToggle icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="primary" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="primary"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="secondary" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="secondary"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="success" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="success"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>
			</div>

			<div mb="1" row>
				<Dropdown col="3" expand={true}>
					<DropdownToggle color="danger" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="danger"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="warning" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="warning"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="hot" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="hot"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="cold" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="cold"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>
			</div>

			<div mb="1" row>
				<Dropdown col="3" expand={true}>
					<DropdownToggle color="dark" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="dark"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="light" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="light"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown col="3" expand={true}>
					<DropdownToggle color="aux" icon="map-pin" label="Dropdown Toggle" />
					<DropdownMenu
						clickToClose={true}
						color="aux"
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>
			</div>
		</FabulaUtils>
	</FabulaProvider>
);

export const CustomContent = () => (
	<FabulaProvider>
		<FabulaUtils>
			<Dropdown mr="1">
				<DropdownToggle color="primary" icon="map-pin" label="Dropdown Toggle" wide={true} />
				<DropdownMenu padding={false}>
					<List padding={true} striped={true}>
						<ListItem alV="center" flex>
							<Text grow={1} weight={600}>
								List Item 1
							</Text>
							<Tag color="success">
								<Icon name="check" />
								<strong>Done</strong>
							</Tag>
						</ListItem>

						<ListItem alV="center" flex>
							<Text grow={1} weight={600}>
								List Item 2
							</Text>
							<Tag color="danger">
								<Icon name="alert-triangle" />
								<strong>Done</strong>
							</Tag>
						</ListItem>

						<ListItem alV="center" flex>
							<Text grow={1} weight={600}>
								List Item 3
							</Text>
							<Tag color="hot">
								<Icon name="sun" />
								<strong>Hot</strong>
							</Tag>
						</ListItem>

						<ListItem alV="center" flex>
							<Text grow={1} weight={600}>
								List Item 4
							</Text>
							<Tag color="warning">
								<Icon name="clock" />
								<strong>Waiting</strong>
							</Tag>
						</ListItem>
					</List>
				</DropdownMenu>
			</Dropdown>

			<Dropdown>
				<DropdownToggle color="primary" icon="map-pin" compact={true} label="Dropdown Toggle" wide={true} />
				<DropdownMenu padding={false}>
					<DropdownItem alV="center" button={true} clickToClose={true} flex>
						<Text grow={1} weight={600}>
							List Item 1
						</Text>
						<Tag color="success">
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
							<strong>Done</strong>
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
		</FabulaUtils>
	</FabulaProvider>
);

export const Direction = () => (
	<FabulaProvider>
		<FabulaUtils>
			<div mt="10">
				<Dropdown mr="1">
					<DropdownToggle color="primary" icon="arrow-down" compact={true} label="Going Down" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown direction="up">
					<DropdownToggle color="primary" icon="arrow-up" compact={true} label="Going Up" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>
			</div>
		</FabulaUtils>
	</FabulaProvider>
);

export const Expand = () => (
	<FabulaProvider>
		<FabulaUtils>
			<div flex>
				<Dropdown mr="1">
					<DropdownToggle align="left" color="primary" icon="map-pin" compact={true} label="Normal" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>

				<Dropdown expand={true}>
					<DropdownToggle color="primary" icon="map-pin" compact={true} label="Expand" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
					/>
				</Dropdown>
			</div>
		</FabulaUtils>
	</FabulaProvider>
);

export const Glow = () => (
	<FabulaProvider>
		<FabulaUtils>
			<Dropdown mr="1">
				<DropdownToggle icon={{ color: 'hot', name: 'sun' }} compact={true} glow={true} label="With Glow" />
				<DropdownMenu
					clickToClose={true}
					items={[
						{ button: true, label: 'Item 1' },
						{ button: true, label: 'Item 2' },
						{ button: true, label: 'Item 3' }
					]}
					onClick={() => alert('It works!')}
				/>
			</Dropdown>

			<Dropdown mr="1">
				<DropdownToggle
					glow={false}
					icon={{ color: 'cold', name: 'moon' }}
					compact={true}
					label="Without Glow"
				/>
				<DropdownMenu
					clickToClose={true}
					glow={false}
					items={[
						{ button: true, label: 'Item 1' },
						{ button: true, label: 'Item 2' },
						{ button: true, label: 'Item 3' }
					]}
					onClick={() => alert('It works!')}
				/>
			</Dropdown>
		</FabulaUtils>
	</FabulaProvider>
);

export const Size = () => (
	<FabulaProvider>
		<FabulaUtils>
			<div flex>
				<Dropdown mr="1">
					<DropdownToggle color="aux" icon="map-pin" compact={true} label="Extra-small" size="xs" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
						size="xs"
					/>
				</Dropdown>

				<Dropdown mr="1">
					<DropdownToggle color="aux" icon="map-pin" compact={true} label="Small" size="sm" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
						size="sm"
					/>
				</Dropdown>

				<Dropdown mr="1">
					<DropdownToggle color="aux" icon="map-pin" compact={true} label="Medium" size="md" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
						size="md"
					/>
				</Dropdown>

				<Dropdown mr="1">
					<DropdownToggle color="aux" icon="map-pin" compact={true} label="Large" size="lg" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
						size="lg"
					/>
				</Dropdown>

				<Dropdown mr="1">
					<DropdownToggle color="aux" icon="map-pin" compact={true} label="Extra-Large" size="xl" />
					<DropdownMenu
						clickToClose={true}
						items={[
							{ button: true, label: 'Item 1' },
							{ button: true, label: 'Item 2' },
							{ button: true, label: 'Item 3' }
						]}
						onClick={() => alert('It works!')}
						size="xl"
					/>
				</Dropdown>
			</div>
		</FabulaUtils>
	</FabulaProvider>
);
