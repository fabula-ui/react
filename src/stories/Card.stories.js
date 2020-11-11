import React from 'react';

import {
  Badge,
  Button,
  Card,
  CardImage,
  CardSection,
  Column,
  Element,
  FabulaProvider,
  Icon,
  List,
  ListItem,
  Row,
  UtilsProvider,
  Tag,
  TagGroup,
  Text,
  Wrapper
} from '../lib';

export default {
  title: 'Card',
  component: Card,
};

// Base components
const BaseComponent = props => (
  <Card {...props}>
    <CardImage color={props.color} darken={!!props.color} height="120" />
    <CardSection color={props.color} padding>
      <Text size="lg"><strong>Card Title</strong></Text>
      <Text aux={true} color={!!props.color ? 'inherit' : ''} size="sm">Card subtitle</Text>
    </CardSection>
    <CardSection color={props.color} divider="top" padding={true}>
      <Button color={props.color || 'primary'} expand={true} invert={!!props.color}>Button</Button>
    </CardSection>
  </Card>
)

const SimpleBaseComponent = props => (
  <Card padding={true} width={250} {...props}>
    <Text size="lg" strong={true}>Card Title</Text>
    <Text aux={true} size="sm">Card subtitle</Text>
  </Card>
)

const ListItemExample = ({ children, title, ...rest }) => (
  <ListItem flex={true} {...rest}>
    <Wrapper flex={true} flow="v" grow={1}>
      <Text size="lg" weight={600}>
        <Text inline={true} mr={.5}>{title}</Text>
        {children}
      </Text>
      <Text aux inline={true}>List item subtitle</Text>
    </Wrapper>
    <Wrapper alH="end" direction="column" flex={true}>
      <TagGroup mb={.5}>
        <Tag>Tag 1</Tag>
        <Tag>Tag 2</Tag>
        <Tag>Tag 3</Tag>
      </TagGroup>

      <Text alV="center" aux={true} flex={true}>
        <Icon mr=".5" name="clock" />
        <span>2 hours</span>
      </Text>
    </Wrapper>
  </ListItem>
)

// Example
export const Example = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row>
        <Column col={3}>
          <Card>
            <CardImage height={200} />
            <CardSection divider="top" padding>
              <Text size="lg">
                <Text inline={true} mr=".5" strong={true}>Card Title</Text>
                <Badge color="primary">New</Badge>
              </Text>
              <Text aux mb="1" size="sm">Card subtitle</Text>
              <Text mb="1">This is some text inside this card. You can add whatever content in here.</Text>
            </CardSection>
            <CardSection divider="top" padding>
              <Button color="primary" expand>Card Button</Button>
            </CardSection>
          </Card>
        </Column>

        <Column col="9">
          <Card>
            <CardImage height={120} />
            <CardSection padding>
              <Text size="xl" weight="600">Card Title</Text>
              <Text aux={true}>Card subtitle</Text>
            </CardSection>
            <CardSection>
              <List padding={true} striped={true}>
                <ListItemExample title="List Item 1">
                  <Badge mr={.5}>Badge 1</Badge>
                  <Badge color="primary">Badge 2</Badge>
                </ListItemExample>
                <ListItemExample title="List Item 2">
                  <Badge color="lavender" mr={.5}>Badge 3</Badge>
                  <Badge color="hot">Badge 4</Badge>
                </ListItemExample>
                <ListItemExample title="List Item 3">
                  <Badge color="aux" mr={.5}>Badge 5</Badge>
                  <Badge color="dark">Badge 6</Badge>
                </ListItemExample>
              </List>
            </CardSection>
            <CardSection padding={true}>
              <Wrapper alH="right" flex={true} width="100%">
                <Button color="primary" mr={1} wide={true}>Confirm</Button>
                <Button color="light" wide={true}>Cancel</Button>
              </Wrapper>
            </CardSection>
          </Card>
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

// Properties
export const PropColor = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={3}>
          <BaseComponent />
        </Column>
        <Column col={3}>
          <BaseComponent color="primary" />
        </Column>
        <Column col={3}>
          <BaseComponent color="lavender" />
        </Column>
        <Column col={3}>
          <BaseComponent color="hot" />
        </Column>
      </Row>
      <Row>
        <Column col={3}>
          <BaseComponent color="aux" />
        </Column>
        <Column col={3}>
          <BaseComponent color="dark" />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropGlow = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row mb={1}>
        <Column col={3}>
          <BaseComponent glow={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="primary" glow={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="lavender" glow={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="hot" glow={true} />
        </Column>
      </Row>
      <Row>
        <Column col={3}>
          <BaseComponent color="aux" glow={true} />
        </Column>
        <Column col={3}>
          <BaseComponent color="dark" glow={true} />
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

export const PropLayout = () => (
  <FabulaProvider>
    <UtilsProvider>
      <Row>
        <Column col={3}>
          <Card>
            <CardImage height={200} />
            <CardSection divider="top" padding>
              <Element flex={true}>
                <Text inline={true} mr={.5} size="lg" strong={true}>Card Title</Text>
                <Badge color="primary">New</Badge>
              </Element>
              <Text aux={true} mb={1} size="sm">Card subtitle</Text>
              <Text mb={1}>This is some text inside this card. You can add whatever content in here.</Text>
            </CardSection>
            <CardSection divider="top" padding>
              <Button color="primary" expand>Card Button</Button>
            </CardSection>
          </Card>
        </Column>

        <Column col="9">
          <Card layout="h" mb={1}>
            <CardImage width={200} />
            <CardSection grow={1} padding>
              <Element>
                <Text inline={true} mr=".5" size="lg" strong={true}>Card Title</Text>
                <Badge color="primary">New</Badge>
              </Element>
              <Text aux={true} mb="1" size="sm" span>Card subtitle</Text>
              <Text>This is some text inside this card. You can add whatever content in here.</Text>
              <Button color="primary" expand={true} mt={1}>Card Button</Button>
            </CardSection>
          </Card>

          <Card layout="h">
            <CardSection grow={1} padding>
              <Element>
                <Text inline={true} mr=".5" size="lg" strong={true}>Card Title</Text>
                <Badge color="primary">New</Badge>
              </Element>
              <Text aux block mb="1" size="sm" span>Card subtitle</Text>
              <Text>This is some text inside this card. You can add whatever content in here.</Text>
              <Button color="primary" expand={true} mt={1}>Card Button</Button>
            </CardSection>
            <CardImage width={200} />
          </Card>
        </Column>
      </Row>
    </UtilsProvider>
  </FabulaProvider>
)

// Utilities
export const UtilMargin = () => (
  <FabulaProvider>
      <UtilsProvider>
          <Wrapper al="center" flex={true} mb={1}>
              <SimpleBaseComponent mr={.5} />
              <SimpleBaseComponent mx={.5}/>
              <SimpleBaseComponent ml={.5} />
          </Wrapper>

          <Wrapper al="center" direction="column" flex={true} mb={1}>
              <SimpleBaseComponent mb={.5} />
              <SimpleBaseComponent my={.5} />
              <SimpleBaseComponent mt={.5} />
          </Wrapper>

          <Wrapper al="center" direction="column" flex={true}>
              <SimpleBaseComponent />
              <Wrapper al="center" flex={true}>
                  <SimpleBaseComponent />
                  <SimpleBaseComponent m={1} />
                  <SimpleBaseComponent />
              </Wrapper>
              <SimpleBaseComponent />
          </Wrapper>
      </UtilsProvider>
  </FabulaProvider>
)

export const UtilVisibility = () => (
  <FabulaProvider>
      <UtilsProvider>
          <SimpleBaseComponent hidden={true} />
          <SimpleBaseComponent visible={true} />
      </UtilsProvider>
  </FabulaProvider>
)