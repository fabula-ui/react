import React from 'react';

import {
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardImage,
  CardSection,
  Checkbox,
  Div,
  Divider,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FabulaProvider,
  Heading,
  Icon,
  Input,
  InputGroup,
  Link,
  List,
  ResponsiveProvider,
  Text,
  UtilsProvider,
  ListItem,
} from '../lib';

export default {
  title: 'Responsive'
};

export const Responsive = () => (
  <FabulaProvider>
    <UtilsProvider>
      <ResponsiveProvider>
        <Div on={['lg', null, { mt: '2' }, { opacity: .2 }]}>
          <Text>Testing HTML Elements</Text>
        </Div>
        <Button
          border={true}
          color="primary"
          mb={1}
          on={['lg', { border: true, color: '#FFF' }, { mt: '2' }]}>
          <Icon name="database" mr={.5} on={['lg', { color: 'primary' }]} />
          <span>Button</span>
        </Button>
        <Alert
          mb={1}
          on={['lg', { color: 'primary' }, { mt: '2' }]}>Alert</Alert>
        <Avatar mb={1} on={['lg', { color: 'dark' }, { mt: '2' }]} />
        <Div block mb={1}>
          <Badge color="primary" on={['lg', { color: 'aux' }, { mt: 2 }]} size="lg">Badge</Badge>
        </Div>

        <ButtonGroup mb={1} on={['lg', { spacing: 3 }, { mt: 2 }]}>
          <Button color="primary">Button 1</Button>
          <Button color="primary">Button 2</Button>
          <Button color="primary">Button 3</Button>
        </ButtonGroup>

        <Card mb={1} on={['lg', { color: 'primary' }, { mt: 2 }]} width="300px">
          <CardImage height={150} on={['lg', { adaptColor: true, color: 'primary' }]} />
          <CardSection on={['lg', { color: 'primary' }]} padding={true}>
            <Text block={true} size="lg" weight={600}>Card Title</Text>
            <Text aux={true} color="inherit" size="sm">Card subtitle</Text>
          </CardSection>
        </Card>

        <Checkbox on={['lg', { color: 'danger' }, { mt: 2 }]}>Checkbox</Checkbox>

        <Divider my={2} on={['lg', null, { my: 5 }]} />

        <Dropdown>
          <DropdownToggle border={true} on={['lg', { color: 'primary' }]}>Dropdown Toggle</DropdownToggle>
          <DropdownMenu clickToClose={true} on={['lg', { color: 'primary' }]}>
            <DropdownHeader on={['lg', { color: 'primary' }]}>Dropdown Header</DropdownHeader>
            <DropdownItem button={true} on={['lg', { color: 'primary' }]}>Dropdown Item 1</DropdownItem>
            <Divider on={['lg', { color: 'primary' }]} />
            <DropdownItem button={true} on={['lg', { color: 'primary' }]}>Dropdown Item 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Heading level={1} on={['lg', null, null, { opacity: .2 }]} weight={800}>Heading 1</Heading>

        <InputGroup glued={true} mb={1} on={['lg', { glued: false }]} width="500px">
          <Input placeholder="Type something..." on={['lg', { color: 'primary', rounded: true }]} />
          <Button color="primary" on={['lg', { rounded: true }]}>Button</Button>
        </InputGroup>

        <Link block={true} mb={2} on={['lg', { color: 'danger' }]}>Link 1</Link>

        <List divider={true} on={['lg', { color: 'primary', padding: true }]} width="500px">
          <ListItem on={['lg', { color: 'primary' }]}>
            <Text block={true} size="md" weight={600}>List Item 1</Text>
            <Text size="sm">List item subtitle</Text>
          </ListItem>
          <ListItem on={['lg', { color: 'primary' }]}>
            <Text block={true} size="md" weight={600}>List Item 2</Text>
            <Text size="sm">List item subtitle</Text>
          </ListItem>
          <ListItem on={['lg', { color: 'primary' }]}>
            <Text block={true} size="md" weight={600}>List Item 3</Text>
            <Text size="sm">List item subtitle</Text>
          </ListItem>
        </List>

      </ResponsiveProvider>
    </UtilsProvider>
  </FabulaProvider>
)