import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  FabulaProvider,
  FabulaUtils,
  Heading,
  Text
} from '../lib';

export default {
  title: 'Heading',
  component: Heading,
};

export const Size = () => (
  <FabulaProvider>
    <FabulaUtils>
      <Heading level={1} weight={800}>Heading 1</Heading>
      <Text block>This is an example of heading level 1</Text>
      <Heading level={2} weight={800}>Heading 2</Heading>
      <Text block>This is an example of heading level 2</Text>
      <Heading level={3} weight={800}>Heading 3</Heading>
      <Text block>This is an example of heading level 3</Text>
      <Heading level={4} weight={800}>Heading 4</Heading>
      <Text block>This is an example of heading level 4</Text>
      <Heading level={5} weight={800}>Heading 5</Heading>
      <Text block>This is an example of heading level 5</Text>
      <Heading level={6} weight={800}>Heading 6</Heading>
      <Text block>This is an example of heading level 6</Text>
    </FabulaUtils>
  </FabulaProvider>
)