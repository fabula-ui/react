import React from 'react';

import {
  FabulaProvider,
  FabulaUtils,
  Heading,
  Text
} from '../lib';

export default {
  title: 'Heading',
  component: Heading,
};

export const Example = () => (
  <FabulaProvider>
    <FabulaUtils>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </FabulaUtils>
  </FabulaProvider>
)

export const PropColor = () => (
  <FabulaProvider>
    <FabulaUtils>
      <Heading color="primary" level={1}>Heading 1</Heading>
      <Heading color="lavender" level={1}>Heading 1</Heading>
      <Heading color="hot" level={1}>Heading 1</Heading>
      <Heading color="aux" level={1}>Heading 1</Heading>
      <Heading color="dark" level={1}>Heading 1</Heading>
    </FabulaUtils>
  </FabulaProvider>
)

export const PropLevel = () => (
  <FabulaProvider>
    <FabulaUtils>
      <Heading level={1}>Heading 1</Heading>
      <Text aux={true}>This is an example of heading level 1</Text>
      <Heading level={2}>Heading 2</Heading>
      <Text aux={true}>This is an example of heading level 2</Text>
      <Heading level={3}>Heading 3</Heading>
      <Text aux={true}>This is an example of heading level 3</Text>
      <Heading level={4}>Heading 4</Heading>
      <Text aux={true}>This is an example of heading level 4</Text>
      <Heading level={5}>Heading 5</Heading>
      <Text aux={true}>This is an example of heading level 5</Text>
      <Heading level={6}>Heading 6</Heading>
      <Text aux={true}>This is an example of heading level 6</Text>
    </FabulaUtils>
  </FabulaProvider>
)

export const PropWeight = () => (
  <FabulaProvider>
    <FabulaUtils>
      <Heading level={1} mt={0} mb={1} weight={400}>Heading Weight: 400</Heading>
      <Heading level={1} mt={0} mb={1} weight={500}>Heading Weight: 500</Heading>
      <Heading level={1} mt={0} mb={1} weight={600}>Heading Weight: 600</Heading>
      <Heading level={1} mt={0} mb={1} weight={700}>Heading Weight: 700</Heading>
      <Heading level={1} mt={0} mb={1} weight={800}>Heading Weight: 800</Heading>
      <Heading level={1} mt={0} weight={900}>Heading Weight: 900</Heading>
    </FabulaUtils>
  </FabulaProvider>
)