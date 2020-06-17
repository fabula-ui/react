import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Card,
  CardImage,
  CardSection,
  FabulaProvider,
  Icon,
  Tag,
  Text,
  FabulaUtils
} from '../lib';

export default {
  title: 'CardImage',
  component: CardImage,
};

export const AdaptColor = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="2" row>
        <Card col="3" glow={true}>
          <CardImage adaptColor={true} height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="primary" glow={true}>
          <CardImage adaptColor={true} color="primary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="secondary" glow={true}>
          <CardImage adaptColor={true} color="secondary" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="success" glow={true}>
          <CardImage adaptColor={true} color="success" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>

      <div mb="2" row>
        <Card col="3" color="danger" glow={true}>
          <CardImage adaptColor={true} color="danger" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="warning" glow={true}>
          <CardImage adaptColor={true} color="warning" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="hot" glow={true}>
          <CardImage adaptColor={true} color="hot" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="cold" glow={true}>
          <CardImage adaptColor={true} color="cold" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>

      <div row mb="2">
        <Card col="3" color="dark" glow={true}>
          <CardImage adaptColor={true} color="dark" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="light" glow={true}>
          <CardImage adaptColor={true} color="light" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" color="aux" glow={true}>
          <CardImage adaptColor={true} color="aux" height="120" />
          <CardSection padding>
            <Text block color="inherit" size="lg" strong>Card Title</Text>
            <Text aux block color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="2" row>
        <Card col="3" glow={true}>
          <CardImage height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="primary" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="secondary" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="success" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>

      <div mb="2" row>
        <Card col="3" glow={true}>
          <CardImage color="danger" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="warning" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="hot" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="cold" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>

      <div mb="2" row>
        <Card col="3" glow={true}>
          <CardImage color="dark" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="light" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3" glow={true}>
          <CardImage color="aux" height="120" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const CustomIcon = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="2" row>
        <Card col="3">
          <CardImage height={160} />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3">
          <CardImage icon="file" height={160} />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3">
          <CardImage icon="toggle-right" height={160} />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Height = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="2" row>
        <Card col="3">
          <CardImage src="https://placehold.it/800x300" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3">
          <CardImage height="240" src="https://placehold.it/800x300" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3">
          <CardImage height="160" src="https://placehold.it/800x300" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="3">
          <CardImage height="80" src="https://placehold.it/800x300" />
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const ExternalTag = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="2" row>
        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'left', y: 'top' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'left', y: 'center' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'left', y: 'bottom' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>

      <div mb="2" row>
        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'center', y: 'top' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'center', y: 'center' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'center', y: 'bottom' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>

      <div mb="2" row>
        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'right', y: 'top' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'right', y: 'center' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Card col="4">
          <CardImage src="https://placehold.it/800x300">
            <Tag color="primary" placement={{ x: 'right', y: 'bottom' }}>
              <Icon name="cloud" />
              <Text color="inherit" strong>Online</Text>
            </Tag>
          </CardImage>
          <CardSection padding>
            <Text block size="lg" strong>Card Title</Text>
            <Text aux block size="sm">Card subtitle</Text>
          </CardSection>
        </Card>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)