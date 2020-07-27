import React from 'react';

import {
  Card,
  Div,
  FabulaProvider,
  UtilsProvider,
  Segment,
  SegmentContent,
  Segments,
  Text
} from '../lib';

export default {
  title: 'Segments',
  component: Segments,
};

export const Examples = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div row>
        <Segments active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="primary" faded={true}>
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="primary" >
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const ActiveFillColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" activeFillColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" activeFillColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="success" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="danger" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="warning" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="hot" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="cold" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="dark" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="light" color="aux" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="aux" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const ActiveTextColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" activeTextColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" activeTextColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeTextColor="success" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="danger" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="warning" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeTextColor="hot" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="cold" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="dark" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="dark" activeTextColor="light" color="aux" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="aux" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Clear = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" clear={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="primary" active="docs" clear={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="secondary" active="docs" clear={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="success" active="docs" clear={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="danger" active="docs" clear={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="warning" active="docs" clear={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="hot" active="docs" clear={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="cold" active="docs" clear={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="dark" active="docs" clear={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments activeFillColor="light" color="aux" active="docs" clear={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="aux" active="docs" clear={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments color="aux" active="docs" col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Content = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div row>
        <Div col="4">
          <Segments active="docs" mb={1} scope="scope1">
            <Segment name="docs">Docs</Segment>
            <Segment name="components">Components</Segment>
            <Segment name="showcase">Showcase</Segment>
          </Segments>

          <SegmentContent active={true} name="docs" scope="scope1">
            <Card padding>
              <Text size="xl" weight="600">Docs</Text>
              <Text>This content is related to docs</Text>
            </Card>
          </SegmentContent>

          <SegmentContent name="components" scope="scope1">
            <Card padding>
              <Text size="xl" weight="600">Components</Text>
              <Text>This content is related to components</Text>
            </Card>
          </SegmentContent>

          <SegmentContent name="showcase" scope="scope1">
            <Card padding>
              <Text size="xl" weight="600">Showcase</Text>
              <Text>This content is related to showcase</Text>
            </Card>
          </SegmentContent>
        </Div>

        <Div col="4">
          <Segments active="docs" color="primary" faded={true} mb={1} scope="scope2">
            <Segment name="docs">Docs</Segment>
            <Segment name="components">Components</Segment>
            <Segment name="showcase">Showcase</Segment>
          </Segments>

          <SegmentContent active={true} name="docs" scope="scope2">
            <Card padding>
              <Text size="xl" weight="600">Docs</Text>
              <Text>This content is related to docs</Text>
            </Card>
          </SegmentContent>

          <SegmentContent name="components" scope="scope2">
            <Card padding>
              <Text size="xl" weight="600">Components</Text>
              <Text>This content is related to components</Text>
            </Card>
          </SegmentContent>

          <SegmentContent name="showcase" scope="scope2">
            <Card padding>
              <Text size="xl" weight="600">Showcase</Text>
              <Text>This content is related to showcase</Text>
            </Card>
          </SegmentContent>
        </Div>

        <Div col="4">
          <Segments active="docs" color="primary" mb={1} scope="scope3">
            <Segment name="docs">Docs</Segment>
            <Segment name="components">Components</Segment>
            <Segment name="showcase">Showcase</Segment>
          </Segments>

          <SegmentContent active={true} name="docs" scope="scope3">
            <Card padding>
              <Text size="xl" weight="600">Docs</Text>
              <Text>This content is related to docs</Text>
            </Card>
          </SegmentContent>

          <SegmentContent name="components" scope="scope3">
            <Card padding>
              <Text size="xl" weight="600">Components</Text>
              <Text>This content is related to components</Text>
            </Card>
          </SegmentContent>

          <SegmentContent name="showcase" scope="scope3">
            <Card padding>
              <Text size="xl" weight="600">Showcase</Text>
              <Text>This content is related to showcase</Text>
            </Card>
          </SegmentContent>
        </Div>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Faded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" faded={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" faded={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" faded={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments color="aux" active="docs" faded={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" faded={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const InactiveFillColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" inactiveFillColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" inactiveFillColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments inactiveFillColor="success" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="danger" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="warning" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments inactiveFillColor="hot" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="cold" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="dark" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments inactiveFillColor="light" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="aux" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const InactiveTextColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" inactiveTextColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" inactiveTextColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments inactiveTextColor="success" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="danger" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="warning" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments inactiveTextColor="hot" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="cold" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="dark" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments inactiveTextColor="light" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="aux" active="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Invert = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" invert={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" invert={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" invert={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments color="aux" active="docs" invert={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" invert={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Outline = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" outline={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" outline={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" outline={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments color="aux" active="docs" outline={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" outline={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Rounded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Div mb="1" row>
        <Segments active="docs" rounded={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" rounded={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments active="docs" rounded={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>

      <Div mb="1" row>
        <Segments color="aux" active="docs" rounded={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments active="docs" rounded={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </Div>
    </UtilsProvider>
  </FabulaProvider>
)