import React from 'react';

import {
  Badge,
  Button,
  ButtonGroup,
  FabulaProvider,
  FabulaUtils,
  Icon,
  UtilsProvider,
  Wrapper
} from '../lib';

export default {
  title: 'Button',
  component: Button,
};

export const Examples = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Button mr={1}>Button</Button>
      <Button color="primary" mr={1}>Button</Button>
      <Button color="lavender" mr={1}>Button</Button>
      <Button color="hot" mr={1}>Button</Button>
      <Button color="aux" mr={1}>Button</Button>
      <Button color="dark">Button</Button>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropBorder = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Button border={true} mr={1}>Button</Button>
      <Button border={true} color="primary" mr={1}>Button</Button>
      <Button border={true} color="lavender" mr={1}>Button</Button>
      <Button border={true} color="hot" mr={1}>Button</Button>
      <Button border={true} color="aux" mr={1}>Button</Button>
      <Button border={true} color="dark">Button</Button>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropCircle = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Button color="primary" circle={true} mr={1} size="xs">
        <Icon name="file" />
      </Button>
      <Button color="primary" circle={true} mr={1} size="sm">
        <Icon name="file" />
      </Button>
      <Button color="primary" circle={true} mr={1} size="md">
        <Icon name="file" />
      </Button>
      <Button color="primary" circle={true} mr={1} size="lg">
        <Icon name="file" />
      </Button>
      <Button color="primary" circle={true} mr={1} size="xl">
        <Icon name="file" />
      </Button>
      <Button color="primary" circle={true} size="xxl">
        <Icon name="file" />
      </Button>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropClear = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button clear={true} mr={1}>Button</Button>
        <Button clear={true} color="primary" mr={1}>Button</Button>
        <Button clear={true} color="lavender" mr={1}>Button</Button>
        <Button clear={true} color="hot" mr={1}>Button</Button>
        <Button clear={true} color="aux" mr={1}>Button</Button>
        <Button clear={true} color="dark">Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} clear={true} mr={1}>Button</Button>
        <Button border={true} clear={true} color="primary" mr={1}>Button</Button>
        <Button border={true} clear={true} color="lavender" mr={1}>Button</Button>
        <Button border={true} clear={true} color="hot" mr={1}>Button</Button>
        <Button border={true} clear={true} color="aux" mr={1}>Button</Button>
        <Button border={true} clear={true} color="dark">Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button mr={1}>Button</Button>
        <Button color="primary" mr={1}>Button</Button>
        <Button color="lavender" mr={1}>Button</Button>
        <Button color="hot" mr={1}>Button</Button>
        <Button color="aux" mr={1}>Button</Button>
        <Button color="dark">Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} mr={1}>Button</Button>
        <Button border={true} color="primary" mr={1}>Button</Button>
        <Button border={true} color="lavender" mr={1}>Button</Button>
        <Button border={true} color="hot" mr={1}>Button</Button>
        <Button border={true} color="aux" mr={1}>Button</Button>
        <Button border={true} color="dark">Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropCompact = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Button color="primary" mr={1}>Normal</Button>
      <Button color="primary" compact={true}>Compact</Button>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropDarken = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button darken={true} mr={1}>Button</Button>
        <Button color="primary" darken={true} mr={1}>Button</Button>
        <Button color="lavender" darken={true} mr={1}>Button</Button>
        <Button color="hot" darken={true} mr={1}>Button</Button>
        <Button color="aux" darken={true} mr={1}>Button</Button>
        <Button color="dark" darken={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} darken={true} mr={1}>Button</Button>
        <Button border={true} color="primary" darken={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" darken={true} mr={1}>Button</Button>
        <Button border={true} color="hot" darken={true} mr={1}>Button</Button>
        <Button border={true} color="aux" darken={true} mr={1}>Button</Button>
        <Button border={true} color="dark" darken={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropDisabled = () => (
  <FabulaProvider utils={true}>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button clear={true} disabled={true} mr={1}>Clear</Button>
        <Button clear={true} color="primary" disabled={true} mr={1}>Clear</Button>
        <Button clear={true} color="lavender" disabled={true} mr={1}>Clear</Button>
        <Button clear={true} color="hot" disabled={true} mr={1}>Clear</Button>
        <Button clear={true} color="aux" disabled={true} mr={1}>Clear</Button>
        <Button clear={true} color="dark" disabled={true}>Clear</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} mr={1}>Color</Button>
        <Button color="primary" disabled={true} mr={1}>Color</Button>
        <Button color="lavender" disabled={true} mr={1}>Color</Button>
        <Button color="hot" disabled={true} mr={1}>Color</Button>
        <Button color="aux" disabled={true} mr={1}>Color</Button>
        <Button color="dark" disabled={true}>Color</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} darken={true} mr={1}>Darken</Button>
        <Button color="primary" disabled={true} darken={true} mr={1}>Darken</Button>
        <Button color="lavender" disabled={true} darken={true} mr={1}>Darken</Button>
        <Button color="hot" disabled={true} darken={true} mr={1}>Darken</Button>
        <Button color="aux" disabled={true} darken={true} mr={1}>Darken</Button>
        <Button color="dark" disabled={true} darken={true}>Darken</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} faded={true} mr={1}>Faded</Button>
        <Button color="primary" disabled={true} faded={true} mr={1}>Faded</Button>
        <Button color="lavender" disabled={true} faded={true} mr={1}>Faded</Button>
        <Button color="hot" disabled={true} faded={true} mr={1}>Faded</Button>
        <Button color="aux" disabled={true} faded={true} mr={1}>Faded</Button>
        <Button color="dark" disabled={true} faded={true}>Faded</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} gradient={true} mr={1}>Gradient</Button>
        <Button color="primary" disabled={true} gradient={true} mr={1}>Gradient</Button>
        <Button color="lavender" disabled={true} gradient={true} mr={1}>Gradient</Button>
        <Button color="hot" disabled={true} gradient={true} mr={1}>Gradient</Button>
        <Button color="aux" disabled={true} gradient={true} mr={1}>Gradient</Button>
        <Button color="dark" disabled={true} gradient={true}>Gradient</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} invert={true} mr={1}>Invert</Button>
        <Button color="primary" disabled={true} invert={true} mr={1}>Invert</Button>
        <Button color="lavender" disabled={true} invert={true} mr={1}>Invert</Button>
        <Button color="hot" disabled={true} invert={true} mr={1}>Invert</Button>
        <Button color="aux" disabled={true} invert={true} mr={1}>Invert</Button>
        <Button color="dark" disabled={true} invert={true}>Invert</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} lighten={true} mr={1}>Lighten</Button>
        <Button color="primary" disabled={true} lighten={true} mr={1}>Lighten</Button>
        <Button color="lavender" disabled={true} lighten={true} mr={1}>Lighten</Button>
        <Button color="hot" disabled={true} lighten={true} mr={1}>Lighten</Button>
        <Button color="aux" disabled={true} lighten={true} mr={1}>Lighten</Button>
        <Button color="dark" disabled={true} lighten={true}>Lighten</Button>
      </Wrapper>

      <Wrapper mb={1}>
        <Button disabled={true} outline={true} mr={1}>Outline</Button>
        <Button color="primary" disabled={true} outline={true} mr={1}>Outline</Button>
        <Button color="lavender" disabled={true} outline={true} mr={1}>Outline</Button>
        <Button color="hot" disabled={true} outline={true} mr={1}>Outline</Button>
        <Button color="aux" disabled={true} outline={true} mr={1}>Outline</Button>
        <Button color="dark" disabled={true} outline={true}>Outline</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropExpand = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button color="primary">Normal</Button>
      </Wrapper>
      <Wrapper>
        <Button color="primary" expand={true}>Expand</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropFaded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button faded={true} mr={1}>Button</Button>
        <Button color="primary" faded={true} mr={1}>Button</Button>
        <Button color="lavender" faded={true} mr={1}>Button</Button>
        <Button color="hot" faded={true} mr={1}>Button</Button>
        <Button color="aux" faded={true} mr={1}>Button</Button>
        <Button color="dark" faded={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} faded={true} mr={1}>Button</Button>
        <Button border={true} color="primary" faded={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" faded={true} mr={1}>Button</Button>
        <Button border={true} color="hot" faded={true} mr={1}>Button</Button>
        <Button border={true} color="aux" faded={true} mr={1}>Button</Button>
        <Button border={true} color="dark" faded={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropGlow = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button glow={true} mr={1}>Button</Button>
        <Button color="primary" glow={true} mr={1}>Button</Button>
        <Button color="lavender" glow={true} mr={1}>Button</Button>
        <Button color="hot" glow={true} mr={1}>Button</Button>
        <Button color="aux" glow={true} mr={1}>Button</Button>
        <Button color="dark" glow={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} glow={true} mr={1}>Button</Button>
        <Button border={true} color="primary" glow={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" glow={true} mr={1}>Button</Button>
        <Button border={true} color="hot" glow={true} mr={1}>Button</Button>
        <Button border={true} color="aux" glow={true} mr={1}>Button</Button>
        <Button border={true} color="dark" glow={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropGradient = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button gradient={true} mr={1}>Button</Button>
        <Button color="primary" gradient={true} mr={1}>Button</Button>
        <Button color="lavender" gradient={true} mr={1}>Button</Button>
        <Button color="hot" gradient={true} mr={1}>Button</Button>
        <Button color="aux" gradient={true} mr={1}>Button</Button>
        <Button color="dark" gradient={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} gradient={true} mr={1}>Button</Button>
        <Button border={true} color="primary" gradient={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" gradient={true} mr={1}>Button</Button>
        <Button border={true} color="hot" gradient={true} mr={1}>Button</Button>
        <Button border={true} color="aux" gradient={true} mr={1}>Button</Button>
        <Button border={true} color="dark" gradient={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropInvert = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button invert={true} mr={1}>Button</Button>
        <Button color="primary" invert={true} mr={1}>Button</Button>
        <Button color="lavender" invert={true} mr={1}>Button</Button>
        <Button color="hot" invert={true} mr={1}>Button</Button>
        <Button color="aux" invert={true} mr={1}>Button</Button>
        <Button color="dark" invert={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} invert={true} mr={1}>Button</Button>
        <Button border={true} color="primary" invert={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" invert={true} mr={1}>Button</Button>
        <Button border={true} color="hot" invert={true} mr={1}>Button</Button>
        <Button border={true} color="aux" invert={true} mr={1}>Button</Button>
        <Button border={true} color="dark" invert={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropOutline = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button outline={true} mr={1}>Button</Button>
        <Button color="primary" outline={true} mr={1}>Button</Button>
        <Button color="lavender" outline={true} mr={1}>Button</Button>
        <Button color="hot" outline={true} mr={1}>Button</Button>
        <Button color="aux" outline={true} mr={1}>Button</Button>
        <Button color="dark" outline={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} outline={true} mr={1}>Button</Button>
        <Button border={true} color="primary" outline={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" outline={true} mr={1}>Button</Button>
        <Button border={true} color="hot" outline={true} mr={1}>Button</Button>
        <Button border={true} color="aux" outline={true} mr={1}>Button</Button>
        <Button border={true} color="dark" outline={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropRounded = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper mb={1}>
        <Button rounded={true} mr={1}>Button</Button>
        <Button color="primary" rounded={true} mr={1}>Button</Button>
        <Button color="lavender" rounded={true} mr={1}>Button</Button>
        <Button color="hot" rounded={true} mr={1}>Button</Button>
        <Button color="aux" rounded={true} mr={1}>Button</Button>
        <Button color="dark" rounded={true}>Button</Button>
      </Wrapper>
      <Wrapper>
        <Button border={true} rounded={true} mr={1}>Button</Button>
        <Button border={true} color="primary" rounded={true} mr={1}>Button</Button>
        <Button border={true} color="lavender" rounded={true} mr={1}>Button</Button>
        <Button border={true} color="hot" rounded={true} mr={1}>Button</Button>
        <Button border={true} color="aux" rounded={true} mr={1}>Button</Button>
        <Button border={true} color="dark" rounded={true}>Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropSize = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Wrapper>
        <Button color="primary" mr={1} size="xs">Extra-small Button</Button>
        <Button color="primary" mr={1} size="sm">Small Button</Button>
        <Button color="primary" mr={1}>Medium Button</Button>
        <Button color="primary" mr={1} size="lg">Large Button</Button>
        <Button color="primary" mr={1} size="xl">Extra-large Button</Button>
        <Button color="primary" size="xxl">2x Extra-large Button</Button>
      </Wrapper>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropWide = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Button color="primary" mr={1}>Normal</Button>
      <Button color="primary" wide={true}>Wide</Button>
    </UtilsProvider>
  </FabulaProvider>
)
