import React from 'react';

import {
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FabulaProvider,
    UtilsProvider,
} from '../lib';

export default {
    title: 'Dropdown Item',
    component: DropdownItem
};

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Dropdown>
                <DropdownToggle color="primary" label="Dropdown Toggle" />
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