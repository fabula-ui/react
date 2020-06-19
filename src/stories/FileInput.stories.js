import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  FabulaProvider,
  FileInput,
  FabulaUtils
} from '../lib';

export default {
  title: 'FileInput',
  component: FileInput,
};

export const Test = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div row>
        <FileInput col="6" />
      </div>
    </FabulaUtils>
  </FabulaProvider>
)