import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    Button,
    UtilsProvider
} from '../lib';

export default {
    title: 'Dropdown',
    component: Dropdown,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Dropdown>
                <DropdownToggle color="primary" icon="map-pin" compact={true} label="Dropdown Toggle" />
                <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
            </Dropdown>
        </UtilsProvider>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="primary" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="primary" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="secondary" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="secondary" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="success" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="success" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle color="danger" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="danger" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="warning" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="warning" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="hot" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="hot" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="cold" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="cold" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

            <div mb="1" row>
                <Dropdown col="3">
                    <DropdownToggle color="dark" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="dark" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="light" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="light" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>

                <Dropdown col="3">
                    <DropdownToggle color="aux" expand={true} icon="map-pin" compact={true} label="Dropdown Toggle" />
                    <DropdownMenu clickToClose={true} color="aux" items={[{ label: 'Item 1' }, { label: 'Item 2' }, { label: 'Item 3' }]} onClick={() => alert('It works!')}></DropdownMenu>
                </Dropdown>
            </div>

        </UtilsProvider>
    </FabulaProvider>
)