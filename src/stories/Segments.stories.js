import React from 'react';

import {
  Card,
  Column,
  Container,
  FabulaProvider,
  Row,
  Segment,
  SegmentContent,
  Segments,
  Text,
  UtilsProvider,
  Wrapper
} from '../lib';

export default {
  title: 'Segments',
  component: Segments,
};

// Base component
const BaseComponent = props => (
  <Segments active="docs" {...props}>
    <Segment name="docs">Docs</Segment>
    <Segment name="components">Components</Segment>
    <Segment name="showcase">Showcase</Segment>
  </Segments>
)

// Example
export const Example = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" faded={true} />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

// Properties
export const PropActiveColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent activeColor="primary" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent activeColor="lavender" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent activeColor="hot" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent activeColor="aux" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent activeColor="dark" />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropActiveTextColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={6}>
          <BaseComponent activeTextColor="primary" />
        </Column>

        <Column col={6}>
          <BaseComponent activeColor="dark" activeTextColor="primary" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent activeTextColor="lavender" />
        </Column>

        <Column col={6}>
          <BaseComponent activeColor="dark" activeTextColor="lavender" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent activeTextColor="hot" />
        </Column>

        <Column col={6}>
          <BaseComponent activeColor="dark" activeTextColor="hot" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent activeTextColor="aux" />
        </Column>

        <Column col={6}>
          <BaseComponent activeColor="dark" activeTextColor="aux" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent activeTextColor="dark" />
        </Column>

        <Column col={6}>
          <BaseComponent activeColor="aux" activeTextColor="dark" />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropBorder = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent border={false} color="primary" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent border={false} color="lavender" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent border={false} color="hot" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent border={false} color="aux" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent border={false} color="dark" />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropClear = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent clear={true} color="primary" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent clear={true} color="lavender" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent clear={true} color="hot" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent clear={true} color="aux" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent clear={true} color="dark" />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="lavender" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="hot" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="aux" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="dark" />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropFaded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" faded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="lavender" faded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="hot" faded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="aux" faded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="dark" faded={true} />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropInactiveColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent inactiveColor="primary" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent inactiveColor="lavender" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent inactiveColor="hot" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent inactiveColor="aux" />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent inactiveColor="dark" />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropInactiveTextColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={6}>
          <BaseComponent inactiveTextColor="primary" />
        </Column>

        <Column col={6}>
          <BaseComponent inactiveColor="dark" inactiveTextColor="primary" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent inactiveTextColor="lavender" />
        </Column>

        <Column col={6}>
          <BaseComponent inactiveColor="dark" inactiveTextColor="lavender" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent inactiveTextColor="hot" />
        </Column>

        <Column col={6}>
          <BaseComponent inactiveColor="dark" inactiveTextColor="hot" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent inactiveTextColor="aux" />
        </Column>

        <Column col={6}>
          <BaseComponent inactiveColor="dark" inactiveTextColor="aux" />
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={6}>
          <BaseComponent inactiveTextColor="dark" />
        </Column>

        <Column col={6}>
          <BaseComponent inactiveColor="aux" inactiveTextColor="dark" />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropInvert = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" invert={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="lavender" invert={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="hot" invert={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="aux" invert={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="dark" invert={true} />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropOutline = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" outline={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="lavender" outline={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="hot" outline={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="aux" outline={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="dark" outline={true} />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropRounded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="primary" rounded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="lavender" rounded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="hot" rounded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="aux" rounded={true} />
        </Container>
      </Wrapper>

      <Wrapper alH="center" flex={true} mb={1}>
        <Container>
          <BaseComponent color="dark" rounded={true} />
        </Container>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper al="center" flex={true} mb={1}>
        <BaseComponent mr={.5} width={400} />
        <BaseComponent mx={.5} width={400} />
        <BaseComponent ml={.5} width={400} />
      </Wrapper>

      <Wrapper al="center" direction="column" flex={true} mb={1}>
        <BaseComponent mb={.5} width={400} />
        <BaseComponent my={.5} width={400} />
        <BaseComponent mt={.5} width={400} />
      </Wrapper>

      <Wrapper al="center" direction="column" flex={true}>
        <BaseComponent width={400} />
        <Wrapper al="center" flex={true}>
          <BaseComponent width={400} />
          <BaseComponent m={1} width={400} />
          <BaseComponent width={400} />
        </Wrapper>
        <BaseComponent width={400} />
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const UtilPadding = () => (
  <FabulaProvider>
    <UtilsProvider>
      <BaseComponent mb={1} p={2} />
      <BaseComponent mb={1} pb={2} />
      <BaseComponent mb={1} pl={2} />
      <BaseComponent mb={1} pr={2} />
      <BaseComponent mb={1} pt={2} />
      <BaseComponent mb={1} px={2} />
      <BaseComponent mb={1} py={2} />
    </UtilsProvider>
  </FabulaProvider>
)

export const UtilVisibility = () => (
  <FabulaProvider>
    <UtilsProvider>
      <BaseComponent hidden={true} />
      <BaseComponent visible={true} />
    </UtilsProvider>
  </FabulaProvider>
)

// Other
export const HandleContent = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Container>
        <Wrapper>
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
        </Wrapper>
      </Container>
    </UtilsProvider>
  </FabulaProvider>
)