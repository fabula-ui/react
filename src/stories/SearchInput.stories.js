import React from 'react';

import {
    Button,
    Column,
    FabulaProvider,
    SearchInput,
    Icon,
    Row,
    UtilsProvider
} from '../lib';

export default {
    title: 'Search Input',
    component: SearchInput,
};

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row>
                <Column col={4}>
                    <SearchInput />
                </Column>
                <Column col={4}>
                    <SearchInput button={true} />
                </Column>
                <Column col={4}>
                    <SearchInput rounded={true}>
                        <Button color="primary" circle={true}>
                            <Icon name="search" />
                        </Button>
                    </SearchInput>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row>
                <Column col={4}>
                    <SearchInput button="Search" />
                </Column>

                <Column col={4}>
                    <SearchInput button={{ label: 'Search' }} />
                </Column>

                <Column col={4}>
                    <SearchInput rounded={true}>
                        <Button circle={true} color="primary">
                            <Icon name="search" />
                        </Button>
                    </SearchInput>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropGlow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row>
                <Column col={4}>
                    <SearchInput button="Search" glow={true} />
                </Column>

                <Column col={4}>
                    <SearchInput button={{ label: 'Search' }} glow={true} />
                </Column>

                <Column col={4}>
                    <SearchInput rounded={true} glow={true}>
                        <Button circle={true} color="primary">
                            <Icon name="search" />
                        </Button>
                    </SearchInput>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropRounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={6}>
                    <SearchInput button={{ color: '', rounded: true }} rounded={true} />
                </Column>
                <Column col={6}>
                    <SearchInput rounded={true}>
                        <Button circle={true}>
                            <Icon name="search" />
                        </Button>
                    </SearchInput>
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={6}>
                    <SearchInput button={{ color: 'primary', rounded: true }} rounded={true} />
                </Column>
                <Column col={6}>
                    <SearchInput rounded={true}>
                        <Button color="primary" circle={true}>
                            <Icon name="search" />
                        </Button>
                    </SearchInput>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary' }} placeholder="2x Extra-large input field" size="xxl" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="2x Extra-large input field" rounded={true} size="xxl" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="2x Extra-large input field" rounded={true} size="xxl" variant="fill" />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary' }} placeholder="Extra-large input field" size="xl" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Extra-large input field" rounded={true} size="xl" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Extra-large input field" rounded={true} size="xl" variant="fill" />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary' }} placeholder="Large input field" size="lg" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Large input field" rounded={true} size="lg" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Large input field" rounded={true} size="lg" variant="fill" />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary' }} placeholder="Medium input field" size="md" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Medium input field" rounded={true} size="md" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Medium input field" rounded={true} size="md" variant="fill" />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary' }} placeholder="Small input field" size="sm" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Small input field" rounded={true} size="sm" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Small input field" rounded={true} size="sm" variant="fill" />
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary' }} placeholder="Extra-small input field" size="xs" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Extra-small input field" rounded={true} size="xs" />
                </Column>
                <Column col={4}>
                    <SearchInput button={{ color: 'primary', rounded: true }} placeholder="Extra-small input field" rounded={true} size="xs" variant="fill" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropVariant = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={true} variant="default" />
                </Column>

                <Column col={4}>
                    <SearchInput button={true} variant="clear" />
                </Column>

                <Column col={4}>
                    <SearchInput button={true} variant="fill" />
                </Column>
            </Row>

            <Row mb={1}>
                <Column col={4}>
                    <SearchInput button={{ rounded: true }} rounded={true} variant="default" />
                </Column>

                <Column col={4}>
                    <SearchInput button={{ rounded: true }} rounded={true} variant="clear" />
                </Column>

                <Column col={4}>
                    <SearchInput button={{ rounded: true }} rounded={true} variant="fill" />
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)