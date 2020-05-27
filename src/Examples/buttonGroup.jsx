import React from 'react';

import { 
    Button,
    ButtonGroup
} from '@fabula/react-dev';

import Example from '../components/Example/Example';

const ButtonGroupExample = () => {
    return (
        <Example title="Button Group">
            <h2>Glued (Clear)</h2>
            <ButtonGroup glued>
                <Button clear>Button 1</Button>
                <Button clear color="primary">Button 2</Button>
                <Button clear color="secondary">Button 3</Button>
                <Button clear color="hot">Button 4</Button>
                <Button clear color="cold">Button 5</Button>
                <Button clear color="dark">Button 6</Button>
                <Button clear color="aux">Button 7</Button>
            </ButtonGroup>

            <h2>Glued (Color)</h2>
            <ButtonGroup glued>
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="dark">Button 1</Button>
                <Button color="dark">Button 2</Button>
                <Button color="dark">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="light">Button 1</Button>
                <Button color="light">Button 2</Button>
                <Button color="light">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button>Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="secondary">Button 3</Button>
                <Button color="hot">Button 4</Button>
                <Button color="cold">Button 5</Button>
                <Button color="dark">Button 6</Button>
                <Button color="aux">Button 7</Button>
            </ButtonGroup>

            <h2>Glued (Faded)</h2>
            <ButtonGroup glued>
                <Button color="primary" faded>Button 1</Button>
                <Button color="primary" faded>Button 2</Button>
                <Button color="primary" faded>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="dark" faded>Button 1</Button>
                <Button color="dark" faded>Button 2</Button>
                <Button color="dark" faded>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="light" faded>Button 1</Button>
                <Button color="light" faded>Button 2</Button>
                <Button color="light" faded>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button faded>Button 1</Button>
                <Button color="primary" faded>Button 2</Button>
                <Button color="secondary" faded>Button 3</Button>
                <Button color="hot" faded>Button 4</Button>
                <Button color="cold" faded>Button 5</Button>
                <Button color="dark" faded>Button 6</Button>
                <Button color="aux" faded>Button 7</Button>
            </ButtonGroup>

            <h2>Glued (Gradient)</h2>
            <ButtonGroup glued>
                <Button color="primary" gradient>Button 1</Button>
                <Button color="primary" gradient>Button 2</Button>
                <Button color="primary" gradient>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="dark" gradient>Button 1</Button>
                <Button color="dark" gradient>Button 2</Button>
                <Button color="dark" gradient>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="light" gradient>Button 1</Button>
                <Button color="light" gradient>Button 2</Button>
                <Button color="light" gradient>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button gradient>Button 1</Button>
                <Button color="primary" gradient>Button 2</Button>
                <Button color="secondary" gradient>Button 3</Button>
                <Button color="hot" gradient>Button 4</Button>
                <Button color="cold" gradient>Button 5</Button>
                <Button color="dark" gradient>Button 6</Button>
                <Button color="aux" gradient>Button 7</Button>
            </ButtonGroup>

            <h2>Glued (Invert)</h2>
            <ButtonGroup glued>
                <Button color="primary" invert>Button 1</Button>
                <Button color="primary" invert>Button 2</Button>
                <Button color="primary" invert>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="dark" invert>Button 1</Button>
                <Button color="dark" invert>Button 2</Button>
                <Button color="dark" invert>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="light" invert>Button 1</Button>
                <Button color="light" invert>Button 2</Button>
                <Button color="light" invert>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button invert>Button 1</Button>
                <Button color="primary" invert>Button 2</Button>
                <Button color="secondary" invert>Button 3</Button>
                <Button color="hot" invert>Button 4</Button>
                <Button color="cold" invert>Button 5</Button>
                <Button color="dark" invert>Button 6</Button>
                <Button color="aux" invert>Button 7</Button>
            </ButtonGroup>

            <h2>Glued (Outline)</h2>
            <ButtonGroup glued>
                <Button color="primary" outline>Button 1</Button>
                <Button color="primary" outline>Button 2</Button>
                <Button color="primary" outline>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="dark" outline>Button 1</Button>
                <Button color="dark" outline>Button 2</Button>
                <Button color="dark" outline>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button color="light" outline>Button 1</Button>
                <Button color="light" outline>Button 2</Button>
                <Button color="light" outline>Button 3</Button>
            </ButtonGroup>

            <ButtonGroup glued>
                <Button outline>Button 1</Button>
                <Button color="primary" outline>Button 2</Button>
                <Button color="secondary" outline>Button 3</Button>
                <Button color="hot" outline>Button 4</Button>
                <Button color="cold" outline>Button 5</Button>
                <Button color="dark" outline>Button 6</Button>
                <Button color="aux" outline>Button 7</Button>
            </ButtonGroup>

            <h2>Spacing (default)</h2>
            <ButtonGroup>
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button color="dark">Button 1</Button>
                <Button color="dark">Button 2</Button>
                <Button color="dark">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button color="light">Button 1</Button>
                <Button color="light">Button 2</Button>
                <Button color="light">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button>Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="secondary">Button 3</Button>
                <Button color="hot">Button 4</Button>
                <Button color="cold">Button 5</Button>
                <Button color="dark">Button 6</Button>
                <Button color="aux">Button 7</Button>
            </ButtonGroup>

            <h2>Spacing (custom)</h2>
            <ButtonGroup spacing="2rem">
                <Button color="primary">Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup spacing="2rem">
                <Button color="dark">Button 1</Button>
                <Button color="dark">Button 2</Button>
                <Button color="dark">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup spacing="2rem">
                <Button color="light">Button 1</Button>
                <Button color="light">Button 2</Button>
                <Button color="light">Button 3</Button>
            </ButtonGroup>

            <ButtonGroup spacing="2rem">
                <Button>Button 1</Button>
                <Button color="primary">Button 2</Button>
                <Button color="secondary">Button 3</Button>
                <Button color="hot">Button 4</Button>
                <Button color="cold">Button 5</Button>
                <Button color="dark">Button 6</Button>
                <Button color="aux">Button 7</Button>
            </ButtonGroup>
            
        </Example>
    )
}

export default ButtonGroupExample;