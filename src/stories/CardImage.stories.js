import React from 'react';

import {
  Card,
  CardImage,
  CardSection,
  Column,
  FabulaProvider,
  Icon,
  Row,
  Tag,
  Text,
  UtilsProvider
} from '../lib';

export default {
  title: 'Card Image',
  component: CardImage,
};

// Base component
const BaseComponent = props => (
  <Card glow={true}>
    <CardImage height="120" {...props} />
    <CardSection padding>
      <Text block size="lg"><strong>Card Title</strong></Text>
      <Text aux block size="sm">Card subtitle</Text>
    </CardSection>
  </Card>
)

// Example
export const Example = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row>
        <Column col={3}>
          <BaseComponent />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

// Properties
export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={3}>
          <BaseComponent />
        </Column>
        <Column col={3}>
          <BaseComponent color="primary" />
        </Column>
        <Column col={3}>
          <BaseComponent color="lavender" />
        </Column>
        <Column col={3}>
          <BaseComponent color="hot" />
        </Column>
      </Row>
      <Row>
        <Column col={3}>
          <BaseComponent color="aux" />
        </Column>
        <Column col={3}>
          <BaseComponent color="dark" />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropDarken = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={3}>
          <BaseComponent darken={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="primary" darken={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="lavender" darken={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="hot" darken={true} />
        </Column>
      </Row>
      <Row>
        <Column col={3}>
          <BaseComponent color="aux" darken={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="dark" darken={true} />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropFaded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={3}>
          <BaseComponent faded={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="primary" faded={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="lavender" faded={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="hot" faded={true} />
        </Column>
      </Row>
      <Row>
        <Column col={3}>
          <BaseComponent color="aux" faded={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="dark" faded={true} />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropHeight = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row>
        <Column col={3}>
          <BaseComponent src="https://placehold.it/800x300" />
        </Column>
        <Column col={3}>
          <BaseComponent height="240" src="https://placehold.it/800x300" />
        </Column>
        <Column col={3}>
          <BaseComponent height="160" src="https://placehold.it/800x300" />
        </Column>
        <Column col={3}>
          <BaseComponent height="80" src="https://placehold.it/800x300" />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropIcon = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row>
        <Column col={4}>
          <BaseComponent />
        </Column>
        <Column col={4}>
          <BaseComponent icon="file" />
        </Column>
        <Column col={4}>
          <BaseComponent icon="toggle-right" />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropLighten = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={3}>
          <BaseComponent lighten={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="primary" lighten={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="lavender" lighten={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="hot" lighten={true} />
        </Column>
      </Row>
      <Row>
        <Column col={3}>
          <BaseComponent color="aux" lighten={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="dark" lighten={true} />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const ExternalTag = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'left', y: 'top' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>

        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'center', y: 'top' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>

        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'right', y: 'top' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>
      </Row>

      <Row mb={1}>
        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'left', y: 'center' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>

        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'center', y: 'center' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>

        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'right', y: 'center' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>
      </Row>

      <Row>
        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'left', y: 'bottom' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>

        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'center', y: 'bottom' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>

        <Column col={4}>
          <BaseComponent>
            <Tag color="primary" placement={{ x: 'right', y: 'bottom' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </BaseComponent>
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

// Utilities
export const UtilVisibility = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row>
        <Column col={4}>
          <BaseComponent hidden={true} />
        </Column>
        <Column col={4}>
          <BaseComponent visible={true} />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)