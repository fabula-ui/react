import React from 'react';

import {
    Badge,
    Card,
    Divider,
    FabulaProvider,
    Icon,
    List,
    ListItem,
    Tag,
    TagGroup,
    Text,
    FabulaUtils,
    Avatar,
} from '../lib';

export default {
    title: 'List',
    component: List,
};

const Example = props => {
    const { buttons, color, divider, link, target } = props;
    return (
        <FabulaUtils>
            <Card {...props}>
                <List color={color} divider={divider} padding>
                    <ListItem button={buttons} flex link={link} target={target}>
                        <Avatar color={color} darken={!!color} icon="file" mr={.75} />
                        <div grow={1}>
                            <Text color="inherit" flex weight={600}>
                                <Text>List Item 1</Text>
                                <Badge color={color || 'aux'} darken={!!color} ml=".5">New</Badge>
                            </Text>
                            <Text aux block color={!!color && 'inherit'} size="sm">List item subtitle</Text>
                        </div>
                    </ListItem>

                    <ListItem button={buttons} flex link={link} target={target}>
                        <Avatar color={color} darken={!!color} icon="file" mr={.75} />
                        <div grow={1}>
                            <Text color="inherit" flex weight={600}>
                                <Text>List Item 2</Text>
                                <Badge color={color || 'aux'} darken={!!color} ml=".5">New</Badge>
                            </Text>
                            <Text aux block color={!!color && 'inherit'} size="sm">List item subtitle</Text>
                        </div>
                    </ListItem>

                    {!divider && <Divider />}

                    <ListItem button={buttons} flex link={link} target={target}>
                        <Avatar color={color} darken={!!color} icon="file" mr={.75} />
                        <div grow={1}>
                            <Text color="inherit" flex weight={600}>
                                <Text>List Item 3</Text>
                                <Badge color={color || 'aux'} darken={!!color} ml=".5">New</Badge>
                            </Text>
                            <Text aux block color={!!color && 'inherit'} size="sm">List item subtitle</Text>
                        </div>
                    </ListItem>
                </List>
            </Card>
        </FabulaUtils>
    )
}

Example.defaultProps = {
    divider: true
}

export const Examples = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div row>
                <Card col="8" ov="hidden">
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

                <Card col="3" ov="hidden">
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
        </FabulaUtils>
    </FabulaProvider>
)

export const Buttons = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Example buttons={true} col="3" ov="hidden" />
                <Example buttons={true} col="3" color="primary" ov="hidden" />
                <Example buttons={true} col="3" color="secondary" ov="hidden" />
                <Example buttons={true} col="3" color="success" ov="hidden" />
            </div>

            <div mb="1" row>
                <Example buttons={true} col="3" color="danger" ov="hidden" />
                <Example buttons={true} col="3" color="warning" ov="hidden" />
                <Example buttons={true} col="3" color="hot" ov="hidden" />
                <Example buttons={true} col="3" color="cold" ov="hidden" />
            </div>

            <div row>
                <Example buttons={true} col="3" color="dark" ov="hidden" />
                <Example buttons={true} col="3" color="light" ov="hidden" />
                <Example buttons={true} col="3" color="aux" ov="hidden" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Example col="3" ov="hidden" />
                <Example col="3" color="primary" ov="hidden" />
                <Example col="3" color="secondary" ov="hidden" />
                <Example col="3" color="success" ov="hidden" />
            </div>

            <div mb="1" row>
                <Example col="3" color="danger" ov="hidden" />
                <Example col="3" color="warning" ov="hidden" />
                <Example col="3" color="hot" ov="hidden" />
                <Example col="3" color="cold" ov="hidden" />
            </div>

            <div row>
                <Example col="3" color="dark" ov="hidden" />
                <Example col="3" color="light" ov="hidden" />
                <Example col="3" color="aux" ov="hidden" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Dividers = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Example col="3" ov="hidden"></Example>
                <Example col="3" divider={false} ov="hidden"></Example>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Link = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Example link={'http://www.google.com.br'} col="3" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="primary" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="secondary" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="success" ov="hidden" target="_blank" />
            </div>

            <div mb="1" row>
                <Example link={'http://www.google.com.br'} col="3" color="danger" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="warning" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="hot" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="cold" ov="hidden" target="_blank" />
            </div>

            <div row>
                <Example link={'http://www.google.com.br'} col="3" color="dark" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="light" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="aux" ov="hidden" target="_blank" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Padding = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div mb="1" row>
                <Card col="3">
                    <List>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text flex weight={600}>
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
                                <Text flex weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </div>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Striped = () => (
    <FabulaProvider>
        <FabulaUtils>
        <div mb="1" row>
                <Example striped={true} col="3" ov="hidden" />
                <Example striped={true} col="3" color="primary" ov="hidden" />
                <Example striped={true} col="3" color="secondary" ov="hidden" />
                <Example striped={true} col="3" color="success" ov="hidden" />
            </div>

            <div mb="1" row>
                <Example striped={true} col="3" color="danger" ov="hidden" />
                <Example striped={true} col="3" color="warning" ov="hidden" />
                <Example striped={true} col="3" color="hot" ov="hidden" />
                <Example striped={true} col="3" color="cold" ov="hidden" />
            </div>

            <div row>
                <Example striped={true} col="3" color="dark" ov="hidden" />
                <Example striped={true} col="3" color="light" ov="hidden" />
                <Example striped={true} col="3" color="aux" ov="hidden" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)