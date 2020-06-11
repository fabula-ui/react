import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Badge,
  Button,
  ButtonGroup,
  FabulaProvider,
  UtilsProvider,
} from '../lib';

export default {
  title: 'Button',
  component: Button,
};

export const Clear = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup mb="1">
      <Button clear>Button</Button>
      <Button clear color="primary">Button</Button>
      <Button clear color="secondary">Button</Button>
      <Button clear color="success">Button</Button>
      <Button clear color="danger">Button</Button>
      <Button clear color="warning">Button</Button>
      <Button clear color="hot">Button</Button>
      <Button clear color="cold">Button</Button>
      <Button clear color="dark">Button</Button>
      <Button clear color="light">Button</Button>
      <Button clear color="aux">Button</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button border clear>Border</Button>
      <Button border clear color="primary">Border</Button>
      <Button border clear color="secondary">Border</Button>
      <Button border clear color="success">Border</Button>
      <Button border clear color="danger">Border</Button>
      <Button border clear color="warning">Border</Button>
      <Button border clear color="hot">Border</Button>
      <Button border clear color="cold">Border</Button>
      <Button border clear color="dark">Border</Button>
      <Button border clear color="light">Border</Button>
      <Button border clear color="aux">Border</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <UtilsProvider>
      <ButtonGroup mb="1">
        <Button>Button</Button>
        <Button color="primary">Button</Button>
        <Button color="secondary">Button</Button>
        <Button color="success">Button</Button>
        <Button color="danger">Button</Button>
        <Button color="warning">Button</Button>
        <Button color="hot">Button</Button>
        <Button color="cold">Button</Button>
        <Button color="dark">Button</Button>
        <Button color="light">Button</Button>
        <Button color="aux">Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button border>Border</Button>
        <Button border color="primary">Border</Button>
        <Button border color="secondary">Border</Button>
        <Button border color="success">Border</Button>
        <Button border color="danger">Border</Button>
        <Button border color="warning">Border</Button>
        <Button border color="hot">Border</Button>
        <Button border color="cold">Border</Button>
        <Button border color="dark">Border</Button>
        <Button border color="light">Border</Button>
        <Button border color="aux">Border</Button>
      </ButtonGroup>
    </UtilsProvider>
  </FabulaProvider>
)

export const CompactVsWide = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup>
      <Button color="primary">Normal</Button>
      <Button color="primary" compact>Compact</Button>
      <Button color="primary" wide>Wide</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Disabled = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup mb="1">
      <Button clear disabled>Clear</Button>
      <Button clear color="primary" disabled>Clear</Button>
      <Button clear color="secondary" disabled>Clear</Button>
      <Button clear color="success" disabled>Clear</Button>
      <Button clear color="danger" disabled>Clear</Button>
      <Button clear color="warning" disabled>Clear</Button>
      <Button clear color="hot" disabled>Clear</Button>
      <Button clear color="cold" disabled>Clear</Button>
      <Button clear color="dark" disabled>Clear</Button>
      <Button clear color="light" disabled>Clear</Button>
      <Button clear color="aux" disabled>Clear</Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button disabled>Color</Button>
      <Button color="primary" disabled>Color</Button>
      <Button color="secondary" disabled>Color</Button>
      <Button color="success" disabled>Color</Button>
      <Button color="danger" disabled>Color</Button>
      <Button color="warning" disabled>Color</Button>
      <Button color="hot" disabled>Color</Button>
      <Button color="cold" disabled>Color</Button>
      <Button color="dark" disabled>Color</Button>
      <Button color="light" disabled>Color</Button>
      <Button color="aux" disabled>Color</Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button disabled faded>Faded</Button>
      <Button color="primary" disabled faded>Faded</Button>
      <Button color="secondary" disabled faded>Faded</Button>
      <Button color="success" disabled faded>Faded</Button>
      <Button color="danger" disabled faded>Faded</Button>
      <Button color="warning" disabled faded>Faded</Button>
      <Button color="hot" disabled faded>Faded</Button>
      <Button color="cold" disabled faded>Faded</Button>
      <Button color="dark" disabled faded>Faded</Button>
      <Button color="light" disabled faded>Faded</Button>
      <Button color="aux" disabled faded>Faded</Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button disabled gradient>Gradient</Button>
      <Button color="primary" disabled gradient>Gradient</Button>
      <Button color="secondary" disabled gradient>Gradient</Button>
      <Button color="success" disabled gradient>Gradient</Button>
      <Button color="danger" disabled gradient>Gradient</Button>
      <Button color="warning" disabled gradient>Gradient</Button>
      <Button color="hot" disabled gradient>Gradient</Button>
      <Button color="cold" disabled gradient>Gradient</Button>
      <Button color="dark" disabled gradient>Gradient</Button>
      <Button color="light" disabled gradient>Gradient</Button>
      <Button color="aux" disabled gradient>Gradient</Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button disabled invert>Invert</Button>
      <Button color="primary" disabled invert>Invert</Button>
      <Button color="secondary" disabled invert>Invert</Button>
      <Button color="success" disabled invert>Invert</Button>
      <Button color="danger" disabled invert>Invert</Button>
      <Button color="warning" disabled invert>Invert</Button>
      <Button color="hot" disabled invert>Invert</Button>
      <Button color="cold" disabled invert>Invert</Button>
      <Button color="dark" disabled invert>Invert</Button>
      <Button color="light" disabled invert>Invert</Button>
      <Button color="aux" disabled invert>Invert</Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button disabled outline>Outline</Button>
      <Button color="primary" disabled outline>Outline</Button>
      <Button color="secondary" disabled outline>Outline</Button>
      <Button color="success" disabled outline>Outline</Button>
      <Button color="danger" disabled outline>Outline</Button>
      <Button color="warning" disabled outline>Outline</Button>
      <Button color="hot" disabled outline>Outline</Button>
      <Button color="cold" disabled outline>Outline</Button>
      <Button color="dark" disabled outline>Outline</Button>
      <Button color="light" disabled outline>Outline</Button>
      <Button color="aux" disabled outline>Outline</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Expand = () => (
  <FabulaProvider>
    <ButtonGroup>
      <Button color="primary">Normal</Button>
      <Button color="primary" expand>Expand</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Faded = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup mb="1">
      <Button faded>Button</Button>
      <Button color="primary" faded>Button</Button>
      <Button color="secondary" faded>Button</Button>
      <Button color="success" faded>Button</Button>
      <Button color="danger" faded>Button</Button>
      <Button color="warning" faded>Button</Button>
      <Button color="hot" faded>Button</Button>
      <Button color="cold" faded>Button</Button>
      <Button color="dark" faded>Button</Button>
      <Button color="light" faded>Button</Button>
      <Button color="aux" faded>Button</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button border faded>Border</Button>
      <Button border color="primary" faded>Border</Button>
      <Button border color="secondary" faded>Border</Button>
      <Button border color="success" faded>Border</Button>
      <Button border color="danger" faded>Border</Button>
      <Button border color="warning" faded>Border</Button>
      <Button border color="hot" faded>Border</Button>
      <Button border color="cold" faded>Border</Button>
      <Button border color="dark" faded>Border</Button>
      <Button border color="light" faded>Border</Button>
      <Button border color="aux" faded>Border</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Glow = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup mb="1">
      <Button>With</Button>
      <Button color="primary">With</Button>
      <Button color="secondary">With</Button>
      <Button color="success">With</Button>
      <Button color="danger">With</Button>
      <Button color="warning">With</Button>
      <Button color="hot">With</Button>
      <Button color="cold">With</Button>
      <Button color="dark">With</Button>
      <Button color="light">With</Button>
      <Button color="aux">With</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button glow={true}>Without</Button>
      <Button color="primary" glow={true}>Without</Button>
      <Button color="secondary" glow={true}>Without</Button>
      <Button color="success" glow={true}>Without</Button>
      <Button color="danger" glow={true}>Without</Button>
      <Button color="warning" glow={true}>Without</Button>
      <Button color="hot" glow={true}>Without</Button>
      <Button color="cold" glow={true}>Without</Button>
      <Button color="dark" glow={true}>Without</Button>
      <Button color="light" glow={true}>Without</Button>
      <Button color="aux" glow={true}>Without</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Gradient = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup>
      <Button gradient>Gradient</Button>
      <Button color="primary" gradient>Gradient</Button>
      <Button color="secondary" gradient>Gradient</Button>
      <Button color="success" gradient>Gradient</Button>
      <Button color="danger" gradient>Gradient</Button>
      <Button color="warning" gradient>Gradient</Button>
      <Button color="hot" gradient>Gradient</Button>
      <Button color="cold" gradient>Gradient</Button>
      <Button color="dark" gradient>Gradient</Button>
      <Button color="light" gradient>Gradient</Button>
      <Button color="aux" gradient>Gradient</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Invert = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup>
      <Button invert>Invert</Button>
      <Button color="primary" invert>Invert</Button>
      <Button color="secondary" invert>Invert</Button>
      <Button color="success" invert>Invert</Button>
      <Button color="danger" invert>Invert</Button>
      <Button color="warning" invert>Invert</Button>
      <Button color="hot" invert>Invert</Button>
      <Button color="cold" invert>Invert</Button>
      <Button color="dark" invert>Invert</Button>
      <Button color="light" invert>Invert</Button>
      <Button color="aux" invert>Invert</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Outline = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup>
      <Button outline>Outline</Button>
      <Button color="primary" outline>Outline</Button>
      <Button color="secondary" outline>Outline</Button>
      <Button color="success" outline>Outline</Button>
      <Button color="danger" outline>Outline</Button>
      <Button color="warning" outline>Outline</Button>
      <Button color="hot" outline>Outline</Button>
      <Button color="cold" outline>Outline</Button>
      <Button color="dark" outline>Outline</Button>
      <Button color="light" outline>Outline</Button>
      <Button color="aux" outline>Outline</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Rounded = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup>
      <Button color="primary">Normal</Button>
      <Button color="primary" rounded>Rounded</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Size = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup>
      <Button color="primary" size="xl">Button XLarge</Button>
      <Button color="primary" size="lg">Button Large</Button>
      <Button color="primary">Button</Button>
      <Button color="primary" size="sm">Button Small</Button>
      <Button color="primary" size="xs">Button XSmall</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const ExternalBadge = () => (
  <FabulaProvider utils={true}>
    <ButtonGroup mb="1">
      <Button compact={true}>
        <span>Button</span>
        <Badge invert={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true}>
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
      <Button color="secondary" compact={true}>
        <span>Button</span>
        <Badge color="secondary" invert={true}>99+</Badge>
      </Button>
      <Button color="success" compact={true}>
        <span>Button</span>
        <Badge color="success" invert={true}>99+</Badge>
      </Button>
      <Button color="danger" compact={true}>
        <span>Button</span>
        <Badge color="danger" invert={true}>99+</Badge>
      </Button>
      <Button color="warning" compact={true}>
        <span>Button</span>
        <Badge color="warning" invert={true}>99+</Badge>
      </Button>
      <Button color="hot" compact={true}>
        <span>Button</span>
        <Badge color="hot" invert={true}>99+</Badge>
      </Button>
      <Button color="cold" compact={true}>
        <span>Button</span>
        <Badge color="cold" invert={true}>99+</Badge>
      </Button>
      <Button color="dark" compact={true}>
        <span>Button</span>
        <Badge color="dark" invert={true}>99+</Badge>
      </Button>
      <Button color="light" compact={true}>
        <span>Button</span>
        <Badge color="light" invert={true}>99+</Badge>
      </Button>
      <Button color="aux" compact={true}>
        <span>Button</span>
        <Badge color="aux" invert={true}>99+</Badge>
      </Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button compact={true} rounded={true}>
        <span>Button</span>
        <Badge invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="secondary" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="secondary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="success" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="success" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="danger" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="danger" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="warning" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="warning" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="hot" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="hot" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="cold" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="cold" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="dark" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="dark" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="light" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="light" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="aux" compact={true} rounded={true}>
        <span>Button</span>
        <Badge color="aux" invert={true} rounded={true}>99+</Badge>
      </Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button color="primary" compact={true} size="xxl">
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} size="xl">
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} size="lg">
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} size="md">
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} size="sm">
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} size="xs">
        <span>Button</span>
        <Badge color="primary" invert={true}>99+</Badge>
      </Button>
    </ButtonGroup>

    <ButtonGroup mb="1">
      <Button color="primary" compact={true} rounded={true} size="xxl">
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} rounded={true} size="xl">
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} rounded={true} size="lg">
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} rounded={true} size="md">
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} rounded={true} size="sm">
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
      <Button color="primary" compact={true} rounded={true} size="xs">
        <span>Button</span>
        <Badge color="primary" invert={true} rounded={true}>99+</Badge>
      </Button>
    </ButtonGroup>
  </FabulaProvider>
)

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
