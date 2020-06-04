import React from 'react';

import {
    Badge,
    Card,
    FabulaProvider,
    Icon,
    List,
    ListItem,
    Tag,
    TagGroup,
    Text,
    UtilsProvider,
    Avatar,
} from '../lib';

export default {
    title: 'List',
    component: List,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div row>
                <Card col="8">
                    <List padding>
                        <ListItem flex>
                            <div flex flow="v" grow={1}>
                                <Text size="lg" weight={600}>
                                    <Text mr={.5}>Full-stack Engineer</Text>
                                    <Badge color="#E3FFD9">Full-time</Badge>
                                </Text>
                                <Text aux>Google</Text>
                            </div>
                            <div alItems="end" justContent="start" flex flow="v">
                                <TagGroup mb={.5}>
                                    <Tag>Angular</Tag>
                                    <Tag>Engineering</Tag>
                                    <Tag>Node</Tag>
                                </TagGroup>

                                <div flex alItems="center">
                                    <Icon mr=".5" name="clock" />
                                    <Text>2 hours</Text>
                                </div>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <div flex flow="v" grow={1}>
                                <Text size="lg" weight={600}>
                                    <Text mr={.5}>Frontend Developer</Text>
                                    <Badge color="#FFECD9">Part-time</Badge>
                                </Text>
                                <Text aux>Amazon</Text>
                            </div>
                            <div alItems="end" justContent="start" flex flow="v">
                                <TagGroup mb={.5}>
                                    <Tag>Angular</Tag>
                                    <Tag>Engineering</Tag>
                                    <Tag>Node</Tag>
                                </TagGroup>

                                <div flex alItems="center">
                                    <Icon mr=".5" name="clock" />
                                    <Text>2 hours</Text>
                                </div>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <div flex flow="v" grow={1}>
                                <Text size="lg" weight={600}>
                                    <Text mr={.5}>Backend Developer</Text>
                                    <Badge color="#FFECD9" mr={.5}>Part-time</Badge>
                                    <Badge color="#D9E9FF">Remote</Badge>
                                </Text>
                                <Text aux>Netflix</Text>
                            </div>
                            <div alItems="end" justContent="start" flex flow="v">
                                <TagGroup mb={.5}>
                                    <Tag>Angular</Tag>
                                    <Tag>Engineering</Tag>
                                    <Tag>Node</Tag>
                                </TagGroup>

                                <div flex alItems="center">
                                    <Icon mr=".5" name="clock" />
                                    <Text>2 hours</Text>
                                </div>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3">
                    <List padding striped>
                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 1</Text>
                            <Tag color="success">
                                <Icon name="check" />
                                <strong>Done</strong>
                            </Tag>
                        </ListItem>

                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 2</Text>
                            <Tag color="danger">
                                <Icon name="alert-triangle" />
                                <strong>Error</strong>
                            </Tag>
                        </ListItem>

                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 3</Text>
                            <Tag color="hot">
                                <Icon name="activity" />
                                <strong>Hot</strong>
                            </Tag>
                        </ListItem>

                        <ListItem alV="center" flex>
                            <Text grow={1} weight={600}>List Item 4</Text>
                            <Tag color="warning">
                                <Icon name="clock" />
                                <strong>Waiting</strong>
                            </Tag>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Card col="3">
                    <List padding>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="primary">
                    <List color="primary" padding>
                        <ListItem flex>
                            <Avatar color="primary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="primary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="primary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="primary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="primary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="primary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="secondary">
                    <List color="secondary" padding>
                        <ListItem flex>
                            <Avatar color="secondary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="secondary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="secondary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="secondary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="secondary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="secondary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="success">
                    <List color="success" padding>
                        <ListItem flex>
                            <Avatar color="success" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="success" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="success" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="success" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="success" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="success" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>

            <div mb="1" row>
                <Card col="3" color="danger">
                    <List color="danger" padding>
                        <ListItem flex>
                            <Avatar color="danger" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="danger" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="danger" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="danger" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="danger" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="danger" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="warning">
                    <List color="warning" padding>
                        <ListItem flex>
                            <Avatar color="warning" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="warning" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="warning" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="warning" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="warning" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="warning" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="hot">
                    <List color="hot" padding>
                        <ListItem flex>
                            <Avatar color="hot" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="hot" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="hot" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="hot" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="hot" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="hot" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="cold">
                    <List color="cold" padding>
                        <ListItem flex>
                            <Avatar color="cold" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="cold" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="cold" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="cold" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="cold" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="cold" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>

            <div row>
                <Card col="3" color="dark">
                    <List color="dark" padding>
                        <ListItem flex>
                            <Avatar color="dark" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="dark" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="dark" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="dark" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="dark" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="dark" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="light">
                    <List color="light" padding>
                        <ListItem flex>
                            <Avatar color="light" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="light" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="light" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="light" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="light" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="light" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="aux">
                    <List color="aux" padding>
                        <ListItem flex>
                            <Avatar color="aux" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="aux" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="aux" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Padding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Card col="3">
                    <List>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3">
                    <List padding={true}>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Striped = () => (
    <FabulaProvider>
        <UtilsProvider>
            <div mb="1" row>
                <Card col="3" ov="hidden">
                    <List padding striped={true}>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="primary" ov="hidden">
                    <List color="primary" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="primary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="primary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="primary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="primary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="primary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="primary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="secondary" ov="hidden">
                    <List color="secondary" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="secondary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="secondary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="secondary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="secondary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="secondary" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="secondary" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="success" ov="hidden">
                    <List color="success" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="success" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="success" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="success" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="success" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="success" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="success" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>

            <div mb="1" row>
                <Card col="3" color="danger" ov="hidden">
                    <List color="danger" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="danger" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="danger" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="danger" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="danger" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="danger" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="danger" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="warning" ov="hidden">
                    <List color="warning" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="warning" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="warning" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="warning" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="warning" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="warning" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="warning" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="hot" ov="hidden">
                    <List color="hot" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="hot" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="hot" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="hot" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="hot" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="hot" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="hot" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="cold" ov="hidden">
                    <List color="cold" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="cold" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="cold" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="cold" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="cold" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="cold" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="cold" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>

            <div row>
                <Card col="3" color="dark" ov="hidden">
                    <List color="dark" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="dark" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="dark" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="dark" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="dark" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="dark" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="dark" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="light" ov="hidden">
                    <List color="light" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="light" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="light" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="light" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="light" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="light" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="light" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3" color="aux" ov="hidden">
                    <List color="aux" padding striped={true}>
                        <ListItem flex>
                            <Avatar color="aux" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="aux" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar color="aux" darken={true} icon="file" mr={.75} />
                            <div grow={1}>
                                <Text block weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" darken={true} ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </UtilsProvider>
    </FabulaProvider>
)