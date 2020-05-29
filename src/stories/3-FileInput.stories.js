import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  FabulaProvider,
  FileInput
} from '../lib';

export default {
  title: 'FileInput',
  component: FileInput,
};

export const Test = () => (
    <FabulaProvider>
        <FileInput />
    </FabulaProvider>
)