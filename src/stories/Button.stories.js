import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Badge,
  Button,
  ButtonGroup,
  FabulaProvider,
  FabulaUtils,
} from '../lib';

export default {
  title: 'Button',
  component: Button,
};

export const Clear = () => (
  <FabulaProvider>
    <FabulaUtils>
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
    </FabulaUtils>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <FabulaUtils>
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
    </FabulaUtils>
  </FabulaProvider>
)

export const CompactVsWide = () => (
  <FabulaProvider>
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
  <FabulaProvider>
    <FabulaUtils>
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
    </FabulaUtils>
  </FabulaProvider>
)

export const Glow = () => (
  <FabulaProvider>
    <FabulaUtils>
      <ButtonGroup mb="1">
        <Button glow={true}>With</Button>
        <Button color="primary" glow={true}>With</Button>
        <Button color="secondary" glow={true}>With</Button>
        <Button color="success" glow={true}>With</Button>
        <Button color="danger" glow={true}>With</Button>
        <Button color="warning" glow={true}>With</Button>
        <Button color="hot" glow={true}>With</Button>
        <Button color="cold" glow={true}>With</Button>
        <Button color="dark" glow={true}>With</Button>
        <Button color="light" glow={true}>With</Button>
        <Button color="aux" glow={true}>With</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button>Without</Button>
        <Button color="primary">Without</Button>
        <Button color="secondary">Without</Button>
        <Button color="success">Without</Button>
        <Button color="danger">Without</Button>
        <Button color="warning">Without</Button>
        <Button color="hot">Without</Button>
        <Button color="cold">Without</Button>
        <Button color="dark">Without</Button>
        <Button color="light">Without</Button>
        <Button color="aux">Without</Button>
      </ButtonGroup>
    </FabulaUtils>
  </FabulaProvider>
)

export const Gradient = () => (
  <FabulaProvider>
    <FabulaUtils>
      <ButtonGroup mb="1">
        <Button gradient>Button</Button>
        <Button color="primary" gradient>Button</Button>
        <Button color="secondary" gradient>Button</Button>
        <Button color="success" gradient>Button</Button>
        <Button color="danger" gradient>Button</Button>
        <Button color="warning" gradient>Button</Button>
        <Button color="hot" gradient>Button</Button>
        <Button color="cold" gradient>Button</Button>
        <Button color="dark" gradient>Button</Button>
        <Button color="light" gradient>Button</Button>
        <Button color="aux" gradient>Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button border={true} gradient>Border</Button>
        <Button border={true} color="primary" gradient>Border</Button>
        <Button border={true} color="secondary" gradient>Border</Button>
        <Button border={true} color="success" gradient>Border</Button>
        <Button border={true} color="danger" gradient>Border</Button>
        <Button border={true} color="warning" gradient>Border</Button>
        <Button border={true} color="hot" gradient>Border</Button>
        <Button border={true} color="cold" gradient>Border</Button>
        <Button border={true} color="dark" gradient>Border</Button>
        <Button border={true} color="light" gradient>Border</Button>
        <Button border={true} color="aux" gradient>Border</Button>
      </ButtonGroup>
    </FabulaUtils>
  </FabulaProvider>
)

export const Invert = () => (
  <FabulaProvider>
    <FabulaUtils>
      <ButtonGroup mb="1">
        <Button invert>Button</Button>
        <Button color="primary" invert>Button</Button>
        <Button color="secondary" invert>Button</Button>
        <Button color="success" invert>Button</Button>
        <Button color="danger" invert>Button</Button>
        <Button color="warning" invert>Button</Button>
        <Button color="hot" invert>Button</Button>
        <Button color="cold" invert>Button</Button>
        <Button color="dark" invert>Button</Button>
        <Button color="light" invert>Button</Button>
        <Button color="aux" invert>Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button border={true} invert>Border</Button>
        <Button border={true} color="primary" invert>Border</Button>
        <Button border={true} color="secondary" invert>Border</Button>
        <Button border={true} color="success" invert>Border</Button>
        <Button border={true} color="danger" invert>Border</Button>
        <Button border={true} color="warning" invert>Border</Button>
        <Button border={true} color="hot" invert>Border</Button>
        <Button border={true} color="cold" invert>Border</Button>
        <Button border={true} color="dark" invert>Border</Button>
        <Button border={true} color="light" invert>Border</Button>
        <Button border={true} color="aux" invert>Border</Button>
      </ButtonGroup>
    </FabulaUtils>
  </FabulaProvider>
)

export const Outline = () => (
  <FabulaProvider>
    <ButtonGroup>
      <Button outline>Button</Button>
      <Button color="primary" outline>Button</Button>
      <Button color="secondary" outline>Button</Button>
      <Button color="success" outline>Button</Button>
      <Button color="danger" outline>Button</Button>
      <Button color="warning" outline>Button</Button>
      <Button color="hot" outline>Button</Button>
      <Button color="cold" outline>Button</Button>
      <Button color="dark" outline>Button</Button>
      <Button color="light" outline>Button</Button>
      <Button color="aux" outline>Button</Button>
    </ButtonGroup>
  </FabulaProvider>
)

export const Rounded = () => (
  <FabulaProvider>
    <FabulaUtils>
      <ButtonGroup mb="1">
        <Button rounded>Button</Button>
        <Button color="primary" rounded>Button</Button>
        <Button color="secondary" rounded>Button</Button>
        <Button color="success" rounded>Button</Button>
        <Button color="danger" rounded>Button</Button>
        <Button color="warning" rounded>Button</Button>
        <Button color="hot" rounded>Button</Button>
        <Button color="cold" rounded>Button</Button>
        <Button color="dark" rounded>Button</Button>
        <Button color="light" rounded>Button</Button>
        <Button color="aux" rounded>Button</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button border={true} rounded>Border</Button>
        <Button border={true} color="primary" rounded>Border</Button>
        <Button border={true} color="secondary" rounded>Border</Button>
        <Button border={true} color="success" rounded>Border</Button>
        <Button border={true} color="danger" rounded>Border</Button>
        <Button border={true} color="warning" rounded>Border</Button>
        <Button border={true} color="hot" rounded>Border</Button>
        <Button border={true} color="cold" rounded>Border</Button>
        <Button border={true} color="dark" rounded>Border</Button>
        <Button border={true} color="light" rounded>Border</Button>
        <Button color="aux" rounded>Button</Button>
      </ButtonGroup>
    </FabulaUtils>
  </FabulaProvider>
)

export const Size = () => (
  <FabulaProvider>
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
  <FabulaProvider>
    <FabulaUtils>
      <ButtonGroup mb="1">
        <Button compact={true}>
          <span>Button</span>
          <Badge color="dark">99+</Badge>
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
          <Badge color="dark" rounded={true}>99+</Badge>
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
    </FabulaUtils>
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
