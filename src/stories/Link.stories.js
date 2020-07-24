import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  FabulaProvider,
  FabulaUtils,
  Link,
  Text
} from '../lib';

export default {
  title: 'Link',
  component: Link,
};

export const Size = () => (
  <FabulaProvider>
    <FabulaUtils>
      <Link block={true} size="xs">Extra-Small Link</Link>
      <Link block={true} size="sm">Small Link</Link>
      <Link block={true} size="md">Medium Link</Link>
      <Link block={true} size="lg">Large Link</Link>
      <Link block={true} size="lg">Extra-Large Link</Link>
      <Link block={true} size="xxl">Double Extra-Large Link</Link>
    </FabulaUtils>
  </FabulaProvider>
)