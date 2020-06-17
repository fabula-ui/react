import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  FabulaProvider,
  Segment,
  Segments,
  FabulaUtils
} from '../lib';

export default {
  title: 'Segments',
  component: Segments,
};

export const Examples = () => (
  <FabulaProvider>
    <div row>
      <Segments activeSegment="docs" col="4">
        <Segment name="docs">Docs</Segment>
        <Segment name="components">Components</Segment>
        <Segment name="showcase">Showcase</Segment>
      </Segments>

      <Segments activeSegment="docs" col="4" color="primary" faded={true}>
        <Segment name="docs">Docs</Segment>
        <Segment name="components">Components</Segment>
        <Segment name="showcase">Showcase</Segment>
      </Segments>

      <Segments activeSegment="docs" col="4" color="primary" >
        <Segment name="docs">Docs</Segment>
        <Segment name="components">Components</Segment>
        <Segment name="showcase">Showcase</Segment>
      </Segments>
    </div>
  </FabulaProvider>
)

export const ActiveFillColor = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" activeFillColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" activeFillColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="success" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="danger" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="warning" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="hot" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="cold" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="dark" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="light" color="aux" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="aux" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const ActiveTextColor = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" activeTextColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" activeTextColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeTextColor="success" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="danger" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="warning" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeTextColor="hot" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="cold" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="dark" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="dark" activeTextColor="light" color="aux" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeTextColor="aux" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Clear = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" clear={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="primary" activeSegment="docs" clear={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="secondary" activeSegment="docs" clear={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="success" activeSegment="docs" clear={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="danger" activeSegment="docs" clear={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="warning" activeSegment="docs" clear={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="hot" activeSegment="docs" clear={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="cold" activeSegment="docs" clear={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="dark" activeSegment="docs" clear={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeFillColor="light" color="aux" activeSegment="docs" clear={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeFillColor="aux" activeSegment="docs" clear={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Color = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments color="aux" activeSegment="docs" col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Faded = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" faded={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" faded={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" faded={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments color="aux" activeSegment="docs" faded={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" faded={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const InactiveFillColor = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" inactiveFillColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" inactiveFillColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments inactiveFillColor="success" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="danger" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="warning" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments inactiveFillColor="hot" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="cold" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="dark" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments inactiveFillColor="light" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveFillColor="aux" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const InactiveTextColor = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" inactiveTextColor="primary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" inactiveTextColor="secondary" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments inactiveTextColor="success" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="danger" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="warning" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments inactiveTextColor="hot" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="cold" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="dark" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments inactiveTextColor="light" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments inactiveTextColor="aux" activeSegment="docs" col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Invert = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" invert={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" invert={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" invert={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments color="aux" activeSegment="docs" invert={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" invert={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Outline = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" outline={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" outline={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" outline={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments color="aux" activeSegment="docs" outline={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" outline={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)

export const Rounded = () => (
  <FabulaProvider>
    <FabulaUtils>
      <div mb="1" row>
        <Segments activeSegment="docs" rounded={true} col="4">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="primary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="secondary">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" rounded={true} col="4" color="success">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="danger">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="warning">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments activeSegment="docs" rounded={true} col="4" color="hot">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="cold">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="dark">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>

      <div mb="1" row>
        <Segments color="aux" activeSegment="docs" rounded={true} col="4" color="light">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>

        <Segments activeSegment="docs" rounded={true} col="4" color="aux">
          <Segment name="docs">Docs</Segment>
          <Segment name="components">Components</Segment>
          <Segment name="showcase">Showcase</Segment>
        </Segments>
      </div>
    </FabulaUtils>
  </FabulaProvider>
)