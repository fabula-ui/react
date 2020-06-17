import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    Button,
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
            <Dropdown>
                <DropdownToggle color="primary" icon="map-pin" compact={true} label="Dropdown Toggle" />
                <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
            </Dropdown>
        </FabulaUtils>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="primary" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="primary" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="secondary" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="secondary" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="success" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="success" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle color="danger" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="danger" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="warning" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="warning" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="hot" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="hot" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="cold" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="cold" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle color="dark" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="dark" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="light" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="light" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="aux" expand={true} icon="map-pin" label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="aux" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
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
                    <DropdownItem alV="center" clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 1</Text>
                        <Tag color="success">
                            <strong>Done</strong>
                        </Tag>
                    </DropdownItem>

                    <DropdownItem alV="center" clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 2</Text>
                        <Tag color="danger">
                            <Icon name="alert-triangle" />
                            <strong>Done</strong>
                        </Tag>
                    </DropdownItem>

                    <DropdownItem alV="center" clickToClose={true} flex>
                        <Text grow={1} weight={600}>List Item 3</Text>
                        <Tag color="hot">
                            <Icon name="sun" />
                            <strong>Hot</strong>
                        </Tag>
                    </DropdownItem>

                    <DropdownItem alV="center" clickToClose={true} flex>
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
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown direction="up">
                    <DropdownToggle color="primary" icon="arrow-up" compact={true} label="Going Up" />
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
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
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown expand={true}>
                    <DropdownToggle color="primary" icon="map-pin" compact={true} label="Expand" />
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Glow = () => (
    <FabulaProvider>
        <FabulaUtils>
            <Dropdown mr="1">
                <DropdownToggle icon={{ color: 'hot', name: 'sun' }} compact={true} label="With Glow" />
                <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
            </Dropdown>

            <Dropdown mr="1">
                <DropdownToggle glow={false} icon={{ color: 'cold', name: 'moon' }} compact={true} label="Without Glow" />
                <DropdownMenu clickToClose={true} glow={false} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
            </Dropdown>
        </FabulaUtils>
    </FabulaProvider>
)