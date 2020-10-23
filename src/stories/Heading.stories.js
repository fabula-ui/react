import React from 'react';

import {
  FabulaProvider,
  Heading,
  Text,
  UtilsProvider,
  Wrapper
} from '../lib';

export default {
  title: 'Heading',
  component: Heading,
};

// Example
export const Example = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </UtilsProvider>
  </FabulaProvider>
)

// Properties
export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Heading color="primary" level={1}>Heading 1</Heading>
      <Heading color="lavender" level={1}>Heading 1</Heading>
      <Heading color="hot" level={1}>Heading 1</Heading>
      <Heading color="aux" level={1}>Heading 1</Heading>
      <Heading color="dark" level={1}>Heading 1</Heading>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropLevel = () => (
  <FabulaProvider>
    <UtilsProvider>
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
    </UtilsProvider>
  </FabulaProvider>
)

export const PropWeight = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Heading level={1} mt={0} mb={1} weight={400}>Heading Weight: 400</Heading>
      <Heading level={1} mt={0} mb={1} weight={500}>Heading Weight: 500</Heading>
      <Heading level={1} mt={0} mb={1} weight={600}>Heading Weight: 600</Heading>
      <Heading level={1} mt={0} mb={1} weight={700}>Heading Weight: 700</Heading>
      <Heading level={1} mt={0} mb={1} weight={800}>Heading Weight: 800</Heading>
      <Heading level={1} mt={0} weight={900}>Heading Weight: 900</Heading>
    </UtilsProvider>
  </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper al="center" flex={true} mb={1}>
        <Heading mr={.5} my={0}>Heading</Heading>
        <Heading mx={.5} my={0}>Heading</Heading>
        <Heading ml={.5} my={0}>Heading</Heading>
      </Wrapper>

      <Wrapper al="center" direction="column" flex={true} mb={1}>
        <Heading mb={.5} mt={0}>Heading</Heading>
        <Heading my={.5}>Heading</Heading>
        <Heading mb={0} mt={.5}>Heading</Heading>
      </Wrapper>

      <Wrapper al="center" direction="column" flex={true}>
        <Heading my={0}>Heading</Heading>
        <Wrapper al="center" flex={true}>
          <Heading my={0}>Heading</Heading>
          <Heading m={1}>Heading</Heading>
          <Heading my={0}>Heading</Heading>
        </Wrapper>
        <Heading my={0}>Heading</Heading>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const UtilPadding = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Heading mb={1} p={2} mt={0}>Heading</Heading>
      <Heading mb={1} pb={2} mt={0}>Heading</Heading>
      <Heading mb={1} pl={2} mt={0}>Heading</Heading>
      <Heading mb={1} pr={2} mt={0}>Heading</Heading>
      <Heading mb={1} pt={2} mt={0}>Heading</Heading>
      <Heading mb={1} px={2} mt={0}>Heading</Heading>
      <Heading mb={1} py={2} mt={0}>Heading</Heading>
    </UtilsProvider>
  </FabulaProvider>
)

export const UtilVisibility = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Heading hidden={true}>Heading</Heading>
      <Heading visible={true}>Heading</Heading>
    </UtilsProvider>
  </FabulaProvider>
)