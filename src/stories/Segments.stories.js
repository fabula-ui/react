import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  FabulaProvider,
  Segment,
  Segments,
  UtilsProvider
} from '../lib';

export default {
  title: 'Segments',
  component: Segments,
};

export const Test = () => (
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
    <UtilsProvider>
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
    </UtilsProvider>
  </FabulaProvider>
)