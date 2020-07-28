import React from 'react';

import {
    Card,
    Div,
    FabulaProvider,
    Tab,
    TabContent,
    Tabs,
    Text,
    UtilsProvider,
    Icon
} from '../lib';

export default {
    title: 'Tabs',
    component: Tabs,
};

export const Examples = () => (
    <FabulaProvider>
        <Tabs>
            <Tab active={true} name="docs">Docs</Tab>
            <Tab name="components">Components</Tab>
            <Tab name="showcase">Showcase</Tab>
        </Tabs>
    </FabulaProvider>
)

export const Block = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} type="block">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Content = () => (
    <FabulaProvider>
      <UtilsProvider>
        <Div row>
          <Div col="4">
            <Tabs active="docs" mb={1} scope="scope1">
              <Tab name="docs">Docs</Tab>
              <Tab name="components">Components</Tab>
              <Tab name="showcase">Showcase</Tab>
            </Tabs>
  
            <TabContent active={true} name="docs" scope="scope1">
              <Card padding>
                <Text block={true} size="xl" weight="600">Docs</Text>
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
          </Div>
  
          <Div col="4">
            <Tabs active="docs" color="primary" faded={true} mb={1} scope="scope2">
              <Tab name="docs">Docs</Tab>
              <Tab name="components">Components</Tab>
              <Tab name="showcase">Showcase</Tab>
            </Tabs>
  
            <TabContent active={true} name="docs" scope="scope2">
              <Card padding>
                <Text size="xl" weight="600">Docs</Text>
                <Text>This content is related to docs</Text>
              </Card>
            </TabContent>
  
            <TabContent name="components" scope="scope2">
              <Card padding>
                <Text size="xl" weight="600">Components</Text>
                <Text>This content is related to components</Text>
              </Card>
            </TabContent>
  
            <TabContent name="showcase" scope="scope2">
              <Card padding>
                <Text size="xl" weight="600">Showcase</Text>
                <Text>This content is related to showcase</Text>
              </Card>
            </TabContent>
          </Div>
  
          <Div col="4">
            <Tabs active="docs" color="primary" mb={1} scope="scope3">
              <Tab name="docs">Docs</Tab>
              <Tab name="components">Components</Tab>
              <Tab name="showcase">Showcase</Tab>
            </Tabs>
  
            <TabContent active={true} name="docs" scope="scope3">
              <Card padding>
                <Text size="xl" weight="600">Docs</Text>
                <Text>This content is related to docs</Text>
              </Card>
            </TabContent>
  
            <TabContent name="components" scope="scope3">
              <Card padding>
                <Text size="xl" weight="600">Components</Text>
                <Text>This content is related to components</Text>
              </Card>
            </TabContent>
  
            <TabContent name="showcase" scope="scope3">
              <Card padding>
                <Text size="xl" weight="600">Showcase</Text>
                <Text>This content is related to showcase</Text>
              </Card>
            </TabContent>
          </Div>
        </Div>
      </UtilsProvider>
    </FabulaProvider>
  )

export const Expand = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Tabs expand={true} mb={1}>
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>

            <Tabs expand={true} mb={1} type="block">
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>

            <Tabs expand={true} mb={1} type="float">
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>

            <Tabs expand={true} mb={1} type="pill">
                <Tab active={true} name="docs">Docs</Tab>
                <Tab name="components">Components</Tab>
                <Tab name="showcase">Showcase</Tab>
            </Tabs>
        </UtilsProvider>
    </FabulaProvider>
)

export const Faded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} faded={true}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Float = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} type="float">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>
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

export const Layout = () => (
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

export const Pill = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="primary" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="secondary" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="success" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="danger" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="warning" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="hot" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="cold" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="dark" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>

            <Div mb={1} row>
                <Tabs alH="center" flex={true} col="4" color="light" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>

                <Tabs alH="center" col="4" color="aux" flex={true} type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Stacked = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="primary" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="secondary" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </Div>

            <Div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs color="success" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="danger" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="warning" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </Div>

            <Div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs color="hot" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="cold" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="dark" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </Div>

            <Div mb={1} row>
                <Card col="4" ov="hidden">
                    <Tabs color="light" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>

                <Card col="4" ov="hidden">
                    <Tabs color="aux" stacked={true} type="float">
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                    </Tabs>
                </Card>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)
