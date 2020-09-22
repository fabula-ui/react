import React from 'react';

import {
  Badge,
  Button,
  Card,
  CardImage,
  CardSection,
  Column,
  Div,
  FabulaProvider,
  Icon,
  List,
  ListItem,
  Row,
  Strong,
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

// Base component
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

// Stories
export const Examples = () => (
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
              <Text block size="xl" weight="600">Card Title</Text>
              <Text aux block>Card subtitle</Text>
            </CardSection>
            <CardSection>
              <List padding striped>
                <ListItem flex>
                  <Div flex flow="v" grow={1}>
                    <Text size="lg" weight={600}>
                      <Text inline={true} mr={.5}>Full-stack Engineer</Text>
                      <Badge color="#E3FFD9">Full-time</Badge>
                    </Text>
                    <Text aux inline={true}>Google</Text>
                  </Div>
                  <Div alH="end" direction="column" flex>
                    <TagGroup mb={.5}>
                      <Tag>Angular</Tag>
                      <Tag>Engineering</Tag>
                      <Tag>Node</Tag>
                    </TagGroup>

                    <Text alV="center" aux flex={true}>
                      <Icon mr=".5" name="clock" />
                      <span>2 hours</span>
                    </Text>
                  </Div>
                </ListItem>

                <ListItem flex>
                  <Div flex flow="v" grow={1}>
                    <Text size="lg" weight={600}>
                      <Text inline={true} mr={.5}>Frontend Developer</Text>
                      <Badge color="#FFECD9">Part-time</Badge>
                    </Text>
                    <Text inline={true} aux={true}>Amazon</Text>
                  </Div>
                  <Div alH="end" direction="column" flex>
                    <TagGroup mb={.5}>
                      <Tag>Angular</Tag>
                      <Tag>Engineering</Tag>
                      <Tag>Node</Tag>
                    </TagGroup>

                    <Text alV="center" aux flex={true}>
                      <Icon mr=".5" name="clock" />
                      <span>2 hours</span>
                    </Text>
                  </Div>
                </ListItem>

                <ListItem flex>
                  <Div flex flow="v" grow={1}>
                    <Text size="lg" weight={600}>
                      <Text inline={true} mr={.5}>Backend Developer</Text>
                      <Badge color="#FFECD9" mr={.5}>Part-time</Badge>
                      <Badge color="#D9E9FF">Remote</Badge>
                    </Text>
                    <Text aux inline={true}>Netflix</Text>
                  </Div>
                  <Div alH="end" direction="column" flex>
                    <TagGroup mb={.5}>
                      <Tag>Angular</Tag>
                      <Tag>Engineering</Tag>
                      <Tag>Node</Tag>
                    </TagGroup>

                    <Text alV="center" aux flex={true}>
                      <Icon mr=".5" name="clock" />
                      <span>2 hours</span>
                    </Text>
                  </Div>
                </ListItem>
              </List>
            </CardSection>
            <CardSection alH="right" flex={true} padding={true}>
              <Wrapper>
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
              <Text flex size="lg">
                <Strong mr=".5">Card Title</Strong>
                <Badge color="primary">New</Badge>
              </Text>
              <Text aux block mb="1" size="sm" span>Card subtitle</Text>
              <Text mb="1">This is some text inside this card. You can add whatever content in here.</Text>
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
              <Text size="lg">
                <Text inline={true} mr=".5" strong={true}>Card Title</Text>
                <Badge color="primary">New</Badge>
              </Text>
              <Text aux={true} mb="1" size="sm" span>Card subtitle</Text>
              <Text>This is some text inside this card. You can add whatever content in here.</Text>
              <Button color="primary" expand={true} mt={1}>Card Button</Button>
            </CardSection>
          </Card>

          <Card layout="h">
            <CardSection grow={1} padding>
              <Text size="lg">
                <Text inline={true} mr=".5" strong={true}>Card Title</Text>
                <Badge color="primary">New</Badge>
              </Text>
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