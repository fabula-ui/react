import React from 'react';

import {
    Button,
    FabulaProvider,
    Navbar,
    NavbarLogo,
    SearchInput,
    Tab,
    Tabs,
    Icon,
    NavbarSection,
    ButtonGroup,
    UtilsProvider
} from '../lib';

export default {
    title: 'Search Input',
    component: SearchInput,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <SearchInput col="4" />
                <SearchInput button={true} col="4" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Autocomplete = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <SearchInput autocomplete={true} col="4" />
                <SearchInput autocomplete={true} button={{ color: 'primary' }} col="4" />
                <SearchInput autocomplete={true} button={{ color: 'primary', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const ButtonColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <SearchInput button={{ color: '' }} col="4" />
                <SearchInput button={{ color: 'primary' }} col="4" />
                <SearchInput button={{ color: 'secondary' }} col="4" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'success' }} col="4" />
                <SearchInput button={{ color: 'danger' }} col="4" />
                <SearchInput button={{ color: 'warning' }} col="4" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'hot' }} col="4" />
                <SearchInput button={{ color: 'cold' }} col="4" />
                <SearchInput button={{ color: 'dark' }} col="4" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'light' }} col="4" />
                <SearchInput button={{ color: 'aux' }} col="4" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const ButtonLabel = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <SearchInput button={{ color: '', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'primary', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'secondary', label: 'Go' }} col="4" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'success', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'danger', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'warning', label: 'Go' }} col="4" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'hot', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'cold', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'dark', label: 'Go' }} col="4" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'light', label: 'Go' }} col="4" />
                <SearchInput button={{ color: 'aux', label: 'Go' }} col="4" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const ButtonTypes = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <SearchInput col="4" />
                <SearchInput button={true} col="4" />
                <SearchInput col="4">
                    <Button circle={true} color="primary" smashed={true}>
                        <Icon name="search" />
                    </Button>
                </SearchInput>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const InputColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <SearchInput button={true} col="4" />
                <SearchInput button={true} col="4" color="primary" />
                <SearchInput button={{ color: 'secondary' }} col="4" color="secondary" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'success' }} col="4" color="success" />
                <SearchInput button={{ color: 'danger' }} col="4" color="danger" />
                <SearchInput button={{ color: 'warning' }} col="4" color="warning" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'hot' }} col="4" color="hot" />
                <SearchInput button={{ color: 'cold' }} col="4" color="cold" />
                <SearchInput button={{ color: 'dark' }} col="4" color="dark" />
            </div>

            <div row>
                <SearchInput button={{ color: 'light' }} col="4" color="light" />
                <SearchInput button={{ color: 'aux' }} col="4" color="aux" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Rounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <SearchInput button={{ color: '', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'primary', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'secondary', rounded: true }} col="4" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'success', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'danger', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'warning', rounded: true }} col="4" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'hot', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'cold', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'dark', rounded: true }} col="4" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'light', rounded: true }} col="4" rounded={true} />
                <SearchInput button={{ color: 'aux', rounded: true }} col="4" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: '', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'primary', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'secondary', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'success', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'danger', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'warning', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'hot', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'cold', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'dark', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
            </div>

            <div row>
                <SearchInput button={{ color: 'light', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
                <SearchInput button={{ color: 'aux', circle: true, icon: { name: 'search' } }} col="4" rounded={true} />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Size = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <SearchInput button={{ color: 'primary' }} col="4" placeholder="Extra-large input field" size="xl" />
                <SearchInput button={{ color: 'primary' }} col="4" placeholder="Large input field" size="lg" />
                <SearchInput button={{ color: 'primary' }} col="4" placeholder="Medium input field" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'primary' }} col="4" placeholder="Small input field" size="sm" />
                <SearchInput button={{ color: 'primary' }} col="4" placeholder="Extra-small input field" size="xs" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'primary', rounded: true }} col="4" placeholder="Extra-large input field" rounded={true} size="xl" />
                <SearchInput button={{ color: 'primary', rounded: true }} col="4" placeholder="Large input field" rounded={true} size="lg" />
                <SearchInput button={{ color: 'primary', rounded: true }} col="4" placeholder="Medium input field" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'primary', rounded: true }} col="4" placeholder="Small input field" rounded={true} size="sm" />
                <SearchInput button={{ color: 'primary', rounded: true }} col="4" placeholder="Extra-small input field" rounded={true} size="xs" />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'primary', icon: { name: 'search' }, circle: true }} col="4" placeholder="Extra-large input field" rounded={true} size="xl" />
                <SearchInput button={{ color: 'primary', icon: { name: 'search' }, circle: true }} col="4" placeholder="Large input field" rounded={true} size="lg" />
                <SearchInput button={{ color: 'primary', icon: { name: 'search' }, circle: true }} col="4" placeholder="Medium input field" rounded={true} />
            </div>

            <div mb="1" row>
                <SearchInput button={{ color: 'primary', icon: { name: 'search' }, circle: true }} col="4" placeholder="Small input field" rounded={true} size="sm" />
                <SearchInput button={{ color: 'primary', icon: { name: 'search' }, circle: true }} col="4" placeholder="Extra-small input field" rounded={true} size="xs" />
            </div>
        </UtilsProvider>
    </FabulaProvider>
)