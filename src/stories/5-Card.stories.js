import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardImage,
  CardSection,
  FabulaProvider,
  UtilsProvider,
  Text,
} from '../lib';

export default {
  title: 'Card',
  component: Card,
};

export const Examples = () => (
  <FabulaProvider>
    <UtilsProvider>
      <div row>
        <Card col="3">
          <CardImage height={200} />
          <CardSection divider="top" padding>
            <Text block size="lg" strong>
              <Text mr=".5">Card Title</Text>
              <Badge color="primary">New</Badge>
            </Text>
            <Text aux block mb="1" size="sm" span>Card subtitle</Text>
            <Text mb="1">This is some text inside this card. You can add whatever content in here.</Text>
          </CardSection>
          <CardSection divider="top" padding>
            <Button color="primary" expand>Card Button</Button>
          </CardSection>
        </Card>
        <Card col="9">
          <CardImage height={120} />
          <CardSection padding>
            <Text block size="xl" weight="600">Card Title</Text>
            <Text aux block>Card subtitle</Text>
          </CardSection>
          <CardSection alH="right" flex padding>
            <ButtonGroup>
              <Button color="primary" wide>Confirm</Button>
              <Button color="light" wide>Cancel</Button>
            </ButtonGroup>
          </CardSection>
        </Card>
      </div>
    </UtilsProvider>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <UtilsProvider>
      <div mb="2" row>
        <Card col="3">
          <CardImage height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block mb="1" size="sm">Card subtitle</Text>
            <Button color="primary" expand>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="primary">
          <CardImage adaptColor={true} color="primary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="primary" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="secondary">
          <CardImage adaptColor={true} color="secondary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="secondary" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="success">
          <CardImage adaptColor={true} color="success" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="success" expand invert>Button</Button>
          </CardSection>
        </Card>
      </div>

      <div mb="2" row>
        <Card col="3" color="danger">
          <CardImage adaptColor={true} color="danger" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="danger" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="hot">
          <CardImage adaptColor={true} color="hot" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="hot" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="cold">
          <CardImage adaptColor={true} color="cold" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="cold" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="dark">
          <CardImage adaptColor={true} color="dark" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="dark" expand invert>Button</Button>
          </CardSection>
        </Card>
      </div>

      <div row mb="2">
        <Card col="3" color="light">
          <CardImage adaptColor={true} color="light" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
            <Button color="light" expand invert>Button</Button>
          </CardSection>
        </Card>

        <Card col="3" color="aux">
          <CardImage adaptColor={true} color="aux" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" mb="1" size="sm">Card subtitle</Text>
          </CardSection>
          <CardSection color="aux" divider="top" padding>
            <Button color="aux" expand invert>Button</Button>
          </CardSection>
        </Card>
      </div>
    </UtilsProvider>

  </FabulaProvider>
)