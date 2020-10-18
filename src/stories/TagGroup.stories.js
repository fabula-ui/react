import React from 'react';

import {
  FabulaProvider,
  Tag,
  TagGroup,
  UtilsProvider
} from '../lib';

export default {
  title: 'Tag Group',
  component: TagGroup,
};

const BaseComponent = props => (
  <TagGroup {...props}>
    <Tag>Tag 1</Tag>
    <Tag>Tag 2</Tag>
    <Tag color="#FFF">Tag 3</Tag>
  </TagGroup>
)

export const Example = () => (
  <FabulaProvider>
    <UtilsProvider>
      <TagGroup>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag>Tag 3</Tag>
      </TagGroup>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <BaseComponent mb={.5} />
      <BaseComponent color="lavender" mb={.5} />
      <BaseComponent color="hot" mb={.5} />
      <BaseComponent color="aux" mb={.5} />
      <BaseComponent color="dark" mb={.5} />
    </UtilsProvider>
  </FabulaProvider>
)

export const PropSpacing = () => (
  <FabulaProvider>
    <UtilsProvider>
      <TagGroup color="primary" mb={1}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag>Tag 3</Tag>
      </TagGroup>

      <TagGroup color="primary" spacing={1}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag>Tag 3</Tag>
      </TagGroup>
    </UtilsProvider>
  </FabulaProvider>
)