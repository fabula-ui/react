import React from 'react';

import {
    Card,
    Column,
    Container,
    FabulaProvider,
    Row,
    Tab,
    TabContent,
    Tabs,
    Text,
    UtilsProvider,
    Icon,
    Wrapper
} from '../lib';

export default {
    title: 'Tabs',
    component: Tabs,
};

// Base Component
const BaseComponent = props => (
    <Tabs {...props} onChange={e => console.log(e)}>
        <Tab active={true} name="docs">
            <Icon name="file-text" />
            <span>Tab 1</span>
        </Tab>
        <Tab name="components">
            <Icon name="tool" />
            <span>Tab 2</span>
        </Tab>
        <Tab name="showcase">
            <Icon name="camera" />
            <span>Tab 3</span>
        </Tab>
    </Tabs>
)

// Example
export const Example = () => (
    <FabulaProvider>
        <Container>
            <BaseComponent expand={true} />
        </Container>
    </FabulaProvider>
)

// Properties
export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} />
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} type="block" />
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} type="float" />
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} />
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} type="block" />
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} type="float" />
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} />
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} type="block" />
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} type="float" />
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} />
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} type="block" />
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} type="float" />
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} />
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} type="block" />
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} type="float" />
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} type="pill" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropExpand = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row>
                <Column col={6}>
                    <Wrapper flex={true} mb={1}>
                        <BaseComponent color="aux" expand="h" />
                    </Wrapper>

                    <Wrapper flex={true} mb={1}>
                        <BaseComponent color="aux" expand="h" type="block" />
                    </Wrapper>

                    <Wrapper flex={true} mb={1}>
                        <BaseComponent color="aux" expand="h" type="float" />
                    </Wrapper>

                    <Wrapper flex={true} mb={1}>
                        <BaseComponent color="aux" expand="h" type="pill" />
                    </Wrapper>
                </Column>

                <Column col={6}>
                    <Wrapper flex={true} height={75} mb={1}>
                        <BaseComponent color="aux" expand="both" />
                    </Wrapper>

                    <Wrapper flex={true} height={75} mb={1}>
                        <BaseComponent color="aux" expand="both" type="block" />
                    </Wrapper>

                    <Wrapper flex={true} height={75} mb={1}>
                        <BaseComponent color="aux" expand="both" type="float" />
                    </Wrapper>

                    <Wrapper flex={true} height={75} mb={1}>
                        <BaseComponent color="aux" expand="both" type="pill" />
                    </Wrapper>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="primary" expand="v" faded={true} grow={1} />
                <BaseComponent alignment="center" color="primary" expand="v" faded={true} grow={1} type="block" />
                <BaseComponent alignment="center" color="primary" expand="v" faded={true} grow={1} type="float" />
                <BaseComponent alignment="center" color="primary" expand="v" faded={true} grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="lavender" expand="v" faded={true} grow={1} />
                <BaseComponent alignment="center" color="lavender" expand="v" faded={true} grow={1} type="block" />
                <BaseComponent alignment="center" color="lavender" expand="v" faded={true} grow={1} type="float" />
                <BaseComponent alignment="center" color="lavender" expand="v" faded={true} grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="hot" expand="v" faded={true} grow={1} />
                <BaseComponent alignment="center" color="hot" expand="v" faded={true} grow={1} type="block" />
                <BaseComponent alignment="center" color="hot" expand="v" faded={true} grow={1} type="float" />
                <BaseComponent alignment="center" color="hot" expand="v" faded={true} grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="aux" expand="v" faded={true} grow={1} />
                <BaseComponent alignment="center" color="aux" expand="v" faded={true} grow={1} type="block" />
                <BaseComponent alignment="center" color="aux" expand="v" faded={true} grow={1} type="float" />
                <BaseComponent alignment="center" color="aux" expand="v" faded={true} grow={1} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="dark" expand="v" faded={true} grow={1} />
                <BaseComponent alignment="center" color="dark" expand="v" faded={true} grow={1} type="block" />
                <BaseComponent alignment="center" color="dark" expand="v" faded={true} grow={1} type="float" />
                <BaseComponent alignment="center" color="dark" expand="v" faded={true} grow={1} type="pill" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInvert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} invert={true} />
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} invert={true} type="block" />
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} invert={true} type="float" />
                <BaseComponent alignment="center" color="primary" expand="v" grow={1} invert={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} invert={true} />
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} invert={true} type="block" />
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} invert={true} type="float" />
                <BaseComponent alignment="center" color="lavender" expand="v" grow={1} invert={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} invert={true} />
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} invert={true} type="block" />
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} invert={true} type="float" />
                <BaseComponent alignment="center" color="hot" expand="v" grow={1} invert={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} invert={true} />
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} invert={true} type="block" />
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} invert={true} type="float" />
                <BaseComponent alignment="center" color="aux" expand="v" grow={1} invert={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} height={50} mb={1}>
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} invert={true} />
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} invert={true} type="block" />
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} invert={true} type="float" />
                <BaseComponent alignment="center" color="dark" expand="v" grow={1} invert={true} type="pill" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLayout = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper al="center" flex={true}>
                    <BaseComponent mr={1} />
                    <BaseComponent layout="v" />
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropStacked = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent expand="h" layout="h" stacked={true} type="block" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent expand="h" layout="h" stacked={true} type="float" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent expand="h" layout="h" stacked={true} type="pill" />
                    </Card>
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent color="primary" expand="h" layout="h" stacked={true} type="block" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent color="primary" expand="h" layout="h" stacked={true} type="float" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent color="primary" expand="h" layout="h" stacked={true} type="pill" />
                    </Card>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropType = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Row mb={1}>
                    <Column col={8}>
                        <BaseComponent color="aux" expand={true} />
                    </Column>
                    <Column col={4}>
                        <BaseComponent color="aux" expand={true} />
                    </Column>
                </Row>

                <Row mb={1}>
                    <Column col={8}>
                        <BaseComponent color="aux" expand={true} type="block" />
                    </Column>
                    <Column col={4}>
                        <BaseComponent color="aux" expand={true} type="block" />
                    </Column>
                </Row>

                <Row mb={1}>
                    <Column col={8}>
                        <BaseComponent color="aux" expand={true} type="float" />
                    </Column>
                    <Column col={4}>
                        <BaseComponent color="aux" expand={true} type="float" />
                    </Column>
                </Row>

                <Row mb={1}>
                    <Column col={8}>
                        <BaseComponent color="aux" expand={true} type="pill" />
                    </Column>
                    <Column col={4}>
                        <BaseComponent color="aux" expand={true} type="pill" />
                    </Column>
                </Row>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const HandleContent = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper>
                    <Tabs active="docs" mb={1} scope="scope1">
                        <Tab name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>

                    <TabContent active={true} name="docs" scope="scope1">
                        <Card padding>
                            <Text size="xl" weight="600">Docs</Text>
                            <Text>This content is related to docs</Text>
                        </Card>
                    </TabContent>

                    <TabContent name="components" scope="scope1">
                        <Card padding>
                            <Text size="xl" weight="600">Components</Text>
                            <Text>This content is related to components</Text>
                        </Card>
                    </TabContent>

                    <TabContent name="showcase" scope="scope1">
                        <Card padding>
                            <Text size="xl" weight="600">Showcase</Text>
                            <Text>This content is related to showcase</Text>
                        </Card>
                    </TabContent>
                </Wrapper>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

// Utilities
const UtilBaseComponent = props => (
    <Tabs {...props}>
        <Tab active={true} name="docs">
            <span>Tab 1</span>
        </Tab>
        <Tab name="components">
            <span>Tab 2</span>
        </Tab>
        <Tab name="showcase">
            <span>Tab 3</span>
        </Tab>
    </Tabs>
)

export const UtilMargin = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper al="center" flex={true} mb={1}>
                <UtilBaseComponent color="light" mr={.5} />
                <UtilBaseComponent color="light" mx={.5} />
                <UtilBaseComponent color="light" ml={.5} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true} mb={1}>
                <UtilBaseComponent color="light" mb={.5} />
                <UtilBaseComponent color="light" my={.5} />
                <UtilBaseComponent color="light" mt={.5} />
            </Wrapper>

            <Wrapper al="center" direction="column" flex={true}>
                <UtilBaseComponent color="light" />
                <Wrapper al="center" flex={true}>
                    <UtilBaseComponent color="light" />
                    <UtilBaseComponent color="light" m={1} />
                    <UtilBaseComponent color="light" />
                </Wrapper>
                <UtilBaseComponent color="light" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const UtilVisibility = () => (
    <FabulaProvider>
        <UtilsProvider>
            <UtilBaseComponent hidden={true} />
            <UtilBaseComponent visible={true} />
        </UtilsProvider>
    </FabulaProvider>
)