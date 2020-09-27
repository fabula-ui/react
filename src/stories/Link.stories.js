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
      <Link block={true} mb={1}>Link with Underline</Link>
      <Link block={true} underline={false}>Link with Underline</Link>
    </UtilsProvider>
  </FabulaProvider>
)