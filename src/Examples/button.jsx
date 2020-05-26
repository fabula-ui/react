import React from 'react';

import { 
    Button,
    ButtonGroup
} from '@fabula/react-dev';

import Example from '../components/Example/Example';

const ButtonExample = () => {
    return (
        <Example title="Button">
            <h2>Border (Clear)</h2>
            <ButtonGroup>
                <Button border clear>
                    Button
                </Button>
                <Button border clear color="primary">
                    Button
                </Button>
                <Button border clear color="secondary">
                    Button
                </Button>
                <Button border clear color="success">
                    Button
                </Button>
                <Button border clear color="danger">
                    Button
                </Button>
                <Button border clear color="warning">
                    Button
                </Button>
                <Button border clear color="hot">
                    Button
                </Button>
                <Button border clear color="cold">
                    Button
                </Button>
                <Button border clear color="dark">
                    Button
                </Button>
                <Button border clear color="light">
                    Button
                </Button>
                <Button border clear color="aux">
                    Button
                </Button>
            </ButtonGroup>

            <h2>Border (Color)</h2>
            <ButtonGroup>
                <Button border>
                    Button
                </Button>
                <Button border color="primary">
                    Button
                </Button>
                <Button border color="secondary">
                    Button
                </Button>
                <Button border color="success">
                    Button
                </Button>
                <Button border color="danger">
                    Button
                </Button>
                <Button border color="warning">
                    Button
                </Button>
                <Button border color="hot">
                    Button
                </Button>
                <Button border color="cold">
                    Button
                </Button>
                <Button border color="dark">
                    Button
                </Button>
                <Button border color="light">
                    Button
                </Button>
                <Button border color="aux">
                    Button
                </Button>
            </ButtonGroup>

            <h2>Border (Faded)</h2>
            <ButtonGroup>
                <Button border>
                    Button
                </Button>
                <Button border color="primary" faded>
                    Button
                </Button>
                <Button border color="secondary" faded>
                    Button
                </Button>
                <Button border color="success" faded>
                    Button
                </Button>
                <Button border color="danger" faded>
                    Button
                </Button>
                <Button border color="warning" faded>
                    Button
                </Button>
                <Button border color="hot" faded>
                    Button
                </Button>
                <Button border color="cold" faded>
                    Button
                </Button>
                <Button border color="dark" faded>
                    Button
                </Button>
                <Button border color="light" faded>
                    Button
                </Button>
                <Button border color="aux" faded>
                    Button
                </Button>
            </ButtonGroup>

            <h2>Clear</h2>
            <ButtonGroup>
                <Button clear>
                    Button
                </Button>
                <Button clear color="primary">
                    Button
                </Button>
                <Button clear color="secondary">
                    Button
                </Button>
                <Button clear color="success">
                    Button
                </Button>
                <Button clear color="danger">
                    Button
                </Button>
                <Button clear color="warning">
                    Button
                </Button>
                <Button clear color="hot">
                    Button
                </Button>
                <Button clear color="cold">
                    Button
                </Button>
                <Button clear color="dark">
                    Button
                </Button>
                <Button clear color="light">
                    Button
                </Button>
                <Button clear color="aux">
                    Button
                </Button>
            </ButtonGroup>

            <h2>Color</h2>
            <ButtonGroup>
                <Button>
                    Button
                </Button>
                <Button color="primary">
                    Button
                </Button>
                <Button color="secondary">
                    Button
                </Button>
                <Button color="success">
                    Button
                </Button>
                <Button color="danger">
                    Button
                </Button>
                <Button color="warning">
                    Button
                </Button>
                <Button color="hot">
                    Button
                </Button>
                <Button color="cold">
                    Button
                </Button>
                <Button color="dark">
                    Button
                </Button>
                <Button color="light">
                    Button
                </Button>
                <Button color="aux">
                    Button
                </Button>
            </ButtonGroup>

            <h2>Compact vs wide</h2>
            <ButtonGroup>
                <Button color="primary">
                    Normal
                </Button>

                <Button color="primary" compact>
                    Compact
                </Button>

                <Button color="primary" wide>
                    Wide
                </Button>
            </ButtonGroup>

            <h2>Disabled</h2>
            <ButtonGroup>
                <Button disabled>
                    Button
                </Button>
                <Button color="primary" disabled>
                    Button
                </Button>
                <Button color="secondary" disabled>
                    Button
                </Button>
                <Button color="success" disabled>
                    Button
                </Button>
                <Button color="danger" disabled>
                    Button
                </Button>
                <Button color="warning" disabled>
                    Button
                </Button>
                <Button color="hot" disabled>
                    Button
                </Button>
                <Button color="cold" disabled>
                    Button
                </Button>
                <Button color="dark" disabled>
                    Button
                </Button>
                <Button color="light" disabled>
                    Button
                </Button>
                <Button color="aux" disabled>
                    Button
                </Button>
            </ButtonGroup>

            <h2>Expand</h2>
            <ButtonGroup>
                <Button color="primary">
                    Normal
                </Button>

                <Button color="primary" expand>
                    Expand
                </Button>
            </ButtonGroup>

            <h2>Gradient</h2>
            <ButtonGroup>
                <Button gradient>
                    Button
                </Button>
                <Button color="primary" gradient>
                    Button
                </Button>
                <Button color="secondary" gradient>
                    Button
                </Button>
                <Button color="success" gradient>
                    Button
                </Button>
                <Button color="danger" gradient>
                    Button
                </Button>
                <Button color="warning" gradient>
                    Button
                </Button>
                <Button color="hot" gradient>
                    Button
                </Button>
                <Button color="cold" gradient>
                    Button
                </Button>
                <Button color="dark" gradient>
                    Button
                </Button>
                <Button color="light" gradient>
                    Button
                </Button>
                <Button color="aux" gradient>
                    Button
                </Button>
            </ButtonGroup>

            <h2>Invert</h2>
            <ButtonGroup>
                <Button invert>
                    Button
                </Button>
                <Button color="primary" invert>
                    Button
                </Button>
                <Button color="secondary" invert>
                    Button
                </Button>
                <Button color="success" invert>
                    Button
                </Button>
                <Button color="danger" invert>
                    Button
                </Button>
                <Button color="warning" invert>
                    Button
                </Button>
                <Button color="hot" invert>
                    Button
                </Button>
                <Button color="cold" invert>
                    Button
                </Button>
                <Button color="dark" invert>
                    Button
                </Button>
                <Button color="light" invert>
                    Button
                </Button>
                <Button color="aux" invert>
                    Button
                </Button>
            </ButtonGroup>

            <h2>Outline</h2>
            <ButtonGroup>
                <Button outline>
                    Button
                </Button>
                <Button color="primary" outline>
                    Button
                </Button>
                <Button color="secondary" outline>
                    Button
                </Button>
                <Button color="success" outline>
                    Button
                </Button>
                <Button color="danger" outline>
                    Button
                </Button>
                <Button color="warning" outline>
                    Button
                </Button>
                <Button color="hot" outline>
                    Button
                </Button>
                <Button color="cold" outline>
                    Button
                </Button>
                <Button color="dark" outline>
                    Button
                </Button>
                <Button color="light" outline>
                    Button
                </Button>
                <Button color="aux" outline>
                    Button
                </Button>
            </ButtonGroup>

            <h2>Outline</h2>
            <ButtonGroup>
                <Button color="primary">
                    Default
                </Button>

                <Button color="primary" rounded>
                    Rounded
                </Button>
            </ButtonGroup>

            <h2>Size</h2>
            <ButtonGroup>
                <Button color="primary" size="xl">
                    Button XLarge
                </Button>

                <Button color="primary" size="lg">
                    Button Large
                </Button>

                <Button color="primary">
                    Button
                </Button>

                <Button color="primary" size="sm">
                    Button Small
                </Button>

                <Button color="primary" size="xs">
                    Button XSmall
                </Button>
            </ButtonGroup>

        </Example>
    )
}

export default ButtonExample;