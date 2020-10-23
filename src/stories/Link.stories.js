import React from 'react';

import {
  FabulaProvider,
  Link,
  Text,
  UtilsProvider,
  Wrapper
} from '../lib';

export default {
  title: 'Link',
  component: Link,
};

// Example
export const Example = () => (
  <Text>
    Hello, you! This is a <Link href="http://www.fabulaui.com" target="_blank">link</Link> inside a text component.
  </Text>
)

// Properties
export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Link block={true} color="primary" mb={1}>Link with color: primary</Link>
      <Link block={true} color="lavender" mb={1}>Link with color: lavender</Link>
      <Link block={true} color="hot" mb={1}>Link with color: hot</Link>
      <Link block={true} color="aux" mb={1}>Link with color: aux</Link>
      <Link block={true} color="dark" mb={1}>Link with color: dark</Link>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropSize = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Link block={true} mb={1} size="xs">Extra-Small Link</Link>
      <Link block={true} mb={1} size="sm">Small Link</Link>
      <Link block={true} mb={1} size="md">Medium Link</Link>
      <Link block={true} mb={1} size="lg">Large Link</Link>
      <Link block={true} mb={1} size="lg">Extra-Large Link</Link>
      <Link block={true} size="xxl">Double Extra-Large Link</Link>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropUnderline = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Link block={true} mb={1}>Link with underline</Link>
      <Link block={true} mb={1} underline="hover">Link with underline on hover</Link>
      <Link block={true} underline={false}>Link without underline</Link>
    </UtilsProvider>
  </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
  <FabulaProvider>
      <UtilsProvider>
          <Wrapper al="center" flex={true} mb={1}>
              <Link mr={.5}>Link</Link>
              <Link mx={.5}>Link</Link>
              <Link ml={.5}>Link</Link>
          </Wrapper>

          <Wrapper al="center" direction="column" flex={true} mb={1}>
              <Link mb={.5}>Link</Link>
              <Link my={.5}>Link</Link>
              <Link mt={.5}>Link</Link>
          </Wrapper>

          <Wrapper al="center" direction="column" flex={true}>
              <Link>Link</Link>
              <Wrapper al="center" flex={true}>
                  <Link>Link</Link>
                  <Link m={1}>Link</Link>
                  <Link>Link</Link>
              </Wrapper>
              <Link>Link</Link>
          </Wrapper>
      </UtilsProvider>
  </FabulaProvider>
)

export const UtilPadding = () => (
  <FabulaProvider>
      <UtilsProvider>
          <Link mr={1} p={2}>Link</Link>
          <Link mr={1} pb={2}>Link</Link>
          <Link mr={1} pl={2}>Link</Link>
          <Link mr={1} pr={2}>Link</Link>
          <Link mr={1} pt={2}>Link</Link>
          <Link mr={1} px={2}>Link</Link>
          <Link mr={1} py={2}>Link</Link>
      </UtilsProvider>
  </FabulaProvider>
)

export const UtilVisibility = () => (
  <FabulaProvider>
      <UtilsProvider>
          <Link hidden={true}>Link</Link>
          <Link visible={true}>Link</Link>
      </UtilsProvider>
  </FabulaProvider>
)