import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  FabulaProvider,
  FabulaUtils,
  Tag,
  TagGroup
} from '../lib';

export default {
  title: 'Tag Group',
  component: TagGroup,
};

export const Color = () => (
  <FabulaProvider>
    <FabulaUtils>
      <TagGroup mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="primary" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="secondary" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="success" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="danger" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="warning" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="hot" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="cold" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="dark" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="light" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>

      <TagGroup color="aux" mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag color="#FFF">Tag 3</Tag>
      </TagGroup>
    </FabulaUtils>
  </FabulaProvider>
)

export const Spacing = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div flex>
        <TagGroup color="primary" mr={2}>
          <Tag>Tag 1</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 3</Tag>
        </TagGroup>

        <TagGroup color="primary" spacing={1}>
          <Tag>Tag 1</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 3</Tag>
        </TagGroup>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)