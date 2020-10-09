import React from 'react';

import {
  FabulaProvider,
  Link,
  Text,
  UtilsProvider
} from '../lib';

export default {
  title: 'Link',
  component: Link,
};

export const Example = () => (
  <Text>
    Hello, you! This is a <Link href="http://www.fabulaui.com" target="_blank">link</Link> inside a text component.
  </Text>
)

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