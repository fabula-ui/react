import React from 'react';

import {
    Card,
    Column,
    Container,
    Div,
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
const BaseComponent = ({ alignment, color, expand, faded, grow, stacked, stretch, type }) => (
    <Tabs alignment={alignment} color={color} expand={expand} faded={faded} grow={grow} stacked={stacked} stretch={stretch} type={type}>
        <Tab active={true} name="docs">Tab 1</Tab>
        <Tab name="components">Tab 2</Tab>
        <Tab name="showcase">Tab 3</Tab>
    </Tabs>
)

// Stories
export const Example = () => (
    <FabulaProvider>
        <Container>
            <BaseComponent expand={true} />
        </Container>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="primary" grow={1} stretch={true} />
                <BaseComponent alignment="center" color="primary" grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="primary" grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="primary" grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="lavender" grow={1} stretch={true} />
                <BaseComponent alignment="center" color="lavender" grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="lavender" grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="lavender" grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="hot" grow={1} stretch={true} />
                <BaseComponent alignment="center" color="hot" grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="hot" grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="hot" grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="aux" grow={1} stretch={true} />
                <BaseComponent alignment="center" color="aux" grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="aux" grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="aux" grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="dark" grow={1} stretch={true} />
                <BaseComponent alignment="center" color="dark" grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="dark" grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="dark" grow={1} stretch={true} type="pill" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropExpand = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container mb={1}>
                <Tabs expand={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Container>

            <Container mb={1}>
                <Tabs expand={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Container>

            <Container mb={1}>
                <Tabs expand={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Container>

            <Container mb={1}>
                <Tabs expand={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Container>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="primary" faded={true} grow={1} stretch={true} />
                <BaseComponent alignment="center" color="primary" faded={true} grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="primary" faded={true} grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="primary" faded={true} grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="lavender" faded={true} grow={1} stretch={true} />
                <BaseComponent alignment="center" color="lavender" faded={true} grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="lavender" faded={true} grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="lavender" faded={true} grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="hot" faded={true} grow={1} stretch={true} />
                <BaseComponent alignment="center" color="hot" faded={true} grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="hot" faded={true} grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="hot" faded={true} grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="aux" faded={true} grow={1} stretch={true} />
                <BaseComponent alignment="center" color="aux" faded={true} grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="aux" faded={true} grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="aux" faded={true} grow={1} stretch={true} type="pill" />
            </Wrapper>
            <Wrapper flex={true} mb={1}>
                <BaseComponent alignment="center" color="dark" faded={true} grow={1} stretch={true} />
                <BaseComponent alignment="center" color="dark" faded={true} grow={1} stretch={true} type="block" />
                <BaseComponent alignment="center" color="dark" faded={true} grow={1} stretch={true} type="float" />
                <BaseComponent alignment="center" color="dark" faded={true} grow={1} stretch={true} type="pill" />
            </Wrapper>
        </UtilsProvider>
    </FabulaProvider>
)

export const Icons = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true}>
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Invert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} invert={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropLayout = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} layout="horizontal" col="4">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>

                <Tabs alH="center" flex={true} layout="vertical" col="4">
                    <Tab active={true} name="docs">
                        <Icon name="file-text" />
                        <span>Docs</span>
                    </Tab>
                    <Tab name="components">
                        <Icon name="tool" />
                        <span>Components</span>
                    </Tab>
                    <Tab name="showcase">
                        <Icon name="camera" />
                        <span>Showcase</span>
                    </Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropStacked = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Row mb={1}>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent stacked={true} type="block" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent stacked={true} type="float" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent stacked={true} type="pill" />
                    </Card>
                </Column>
            </Row>

            <Row>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent color="primary" stacked={true} type="block" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent color="primary" stacked={true} type="float" />
                    </Card>
                </Column>
                <Column col={4}>
                    <Card ov="hidden">
                        <BaseComponent color="primary" stacked={true} type="pill" />
                    </Card>
                </Column>
            </Row>
        </UtilsProvider>
    </FabulaProvider>
)

export const PropStretch = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Container>
                <Wrapper flex={true} height={75} mb={1}>
                    <BaseComponent color="aux" expand={true} stretch={true} />
                </Wrapper>

                <Wrapper flex={true} height={75} mb={1}>
                    <BaseComponent color="aux" expand={true} stretch={true} type="block" />
                </Wrapper>

                <Wrapper flex={true} height={75} mb={1}>
                    <BaseComponent color="aux" expand={true} stretch={true} type="float" />
                </Wrapper>

                <Wrapper flex={true} height={75} mb={1}>
                    <BaseComponent color="aux" expand={true} stretch={true} type="pill" />
                </Wrapper>
            </Container>
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