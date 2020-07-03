import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    List,
    ListItem,
    Tag,
    Text,
    FabulaUtils,
    Icon
} from '../lib';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

export const Examples = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div flex>
                <Dropdown mr={1}>
                    <DropdownToggle color="primary" icon="map-pin" compact={true} label="Button" />
                    <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Extra-small label', size: 'xs' }, { button: true, label: 'Small label' }, { button: true, label: 'Medium label', size: 'md' }, { button: true, label: 'Large label', size: 'lg' }, { button: true, label: 'Extra-large label', size: 'xl' }]} onClickItem={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown mr={1}>
                    <DropdownToggle color="primary" icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} divider={false} items={[{ button: true, color: '', label: 'Default' }, { button: true, color: 'primary', label: 'Primary' }, { button: true, color: 'secondary', label: 'Secondary' }, { button: true, color: 'success', label: 'Success' }, { button: true, color: 'danger', label: 'Danger' }]} onClickItem={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="primary" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="primary" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="secondary" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="secondary" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="success" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="success" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle color="danger" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="danger" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="warning" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="warning" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="hot" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="hot" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="cold" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="cold" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle color="dark" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="dark" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="light" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="light" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="aux" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="aux" items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

        </FabulaUtils>
    </FabulaProvider>
)

export const CustomContent = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Dropdown mr="1">
                <DropdownToggle color="primary" icon="map-pin" label="Dropdown Toggle" wide={true} />
                <DropdownMenu>
                    <List padding={true} striped={true}>
                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 1</Text>
                            <Tag color="success">
                                <Icon name="check" />
                                <strong>Done</strong>
                            </Tag>
                        </ListItem>

                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 2</Text>
                            <Tag color="danger">
                                <Icon name="alert-triangle" />
                                <strong>Done</strong>
                            </Tag>
                        </ListItem>

                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 3</Text>
                            <Tag color="hot">
                                <Icon name="sun" />
                                <strong>Hot</strong>
                            </Tag>
                        </ListItem>

                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 4</Text>
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
                <DropdownMenu list={true}>
                    <DropdownItem alV="center" button={true} clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 1</Text>
                        <Tag color="success">
                            <strong>Done</strong>
                        </Tag>
                    </DropdownItem>

                    <DropdownItem alV="center" button={true} clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 2</Text>
                        <Tag color="danger">
                            <Icon name="alert-triangle" />
                            <strong>Done</strong>
                        </Tag>
                    </DropdownItem>

                    <DropdownItem alV="center" button={true} clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 3</Text>
                        <Tag color="hot">
                            <Icon name="sun" />
                            <strong>Hot</strong>
                        </Tag>
                    </DropdownItem>

                    <DropdownItem alV="center" button={true} clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 4</Text>
                        <Tag color="warning">
                            <Icon name="clock" />
                            <strong>Waiting</strong>
                        </Tag>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </FabulaUtils>
    </FabulaProvider >
)


export const Direction = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mt="10">
                <Dropdown mr="1">
                    <DropdownToggle color="primary" icon="arrow-down" compact={true} label="Going Down" />
                    <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown direction="up">
                    <DropdownToggle color="primary" icon="arrow-up" compact={true} label="Going Up" />
                    <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Expand = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div>
                <Dropdown mb="1">
                    <DropdownToggle align="left" color="primary" icon="map-pin" compact={true} label="Normal" />
                    <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown expand={true}>
                    <DropdownToggle color="primary" icon="map-pin" compact={true} label="Expand" />
                    <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Dropdown mr="1">
                <DropdownToggle icon={{ color: 'hot', name: 'sun' }} compact={true} glow={true} label="With Glow" />
                <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
            </Dropdown>

            <Dropdown mr="1">
                <DropdownToggle glow={false} icon={{ color: 'cold', name: 'moon' }} compact={true} label="Without Glow" />
                <DropdownMenu clickToClose={true} glow={false} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
            </Dropdown>
        </FabulaUtils>
    </FabulaProvider>
)