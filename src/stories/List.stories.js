import React from 'react';

import {
    Badge,
    Card,
    Div,
    Divider,
    FabulaProvider,
    Icon,
    List,
    ListItem,
    Tag,
    TagGroup,
    Text,
    UtilsProvider,
    Avatar
} from '../lib';

export default {
    title: 'List',
    component: List,
};

const Example = props => {
    const { buttons, color, divider, link, target } = props;
    return (
        <UtilsProvider>
            <Card {...props}>
                <List color={color} divider={divider} padding>
                    <ListItem button={buttons} flex link={link} target={target}>
                        <Avatar color={color} darken={!!color} icon="file" mr={.75} />
                        <Div grow={1}>
                            <Text color="inherit" flex weight={600}>
                                <Text>List Item 1</Text>
                                <Badge color={color || 'aux'} darken={!!color} ml=".5">New</Badge>
                            </Text>
                            <Text aux block color={!!color && 'inherit'} size="sm">List item subtitle</Text>
                        </Div>
                    </ListItem>

                    <ListItem button={buttons} flex link={link} target={target}>
                        <Avatar color={color} darken={!!color} icon="file" mr={.75} />
                        <Div grow={1}>
                            <Text color="inherit" flex weight={600}>
                                <Text>List Item 2</Text>
                                <Badge color={color || 'aux'} darken={!!color} ml=".5">New</Badge>
                            </Text>
                            <Text aux block color={!!color && 'inherit'} size="sm">List item subtitle</Text>
                        </Div>
                    </ListItem>

                    {!divider && <Divider />}

                    <ListItem button={buttons} flex link={link} target={target}>
                        <Avatar color={color} darken={!!color} icon="file" mr={.75} />
                        <Div grow={1}>
                            <Text color="inherit" flex weight={600}>
                                <Text>List Item 3</Text>
                                <Badge color={color || 'aux'} darken={!!color} ml=".5">New</Badge>
                            </Text>
                            <Text aux block color={!!color && 'inherit'} size="sm">List item subtitle</Text>
                        </Div>
                    </ListItem>
                </List>
            </Card>
        </UtilsProvider>
    )
}

Example.defaultProps = {
    divider: true
}

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div row>
                <Card col="8" ov="hidden">
                    <List padding>
                        <ListItem flex>
                            <Div flex flow="v" grow={1}>
                                <Text size="lg" weight={600}>
                                    <Text mr={.5}>Full-stack Engineer</Text>
                                    <Badge color="#E3FFD9">Full-time</Badge>
                                </Text>
                                <Text aux>Google</Text>
                            </Div>
                            <Div alItems="end" justContent="start" flex flow="v">
                                <TagGroup mb={.5}>
                                    <Tag>Angular</Tag>
                                    <Tag>Engineering</Tag>
                                    <Tag>Node</Tag>
                                </TagGroup>

                                <Div flex alItems="center">
                                    <Icon mr=".5" name="clock" />
                                    <Text>2 hours</Text>
                                </Div>
                            </Div>
                        </ListItem>

                        <ListItem flex>
                            <Div flex flow="v" grow={1}>
                                <Text size="lg" weight={600}>
                                    <Text mr={.5}>Frontend Developer</Text>
                                    <Badge color="#FFECD9">Part-time</Badge>
                                </Text>
                                <Text aux>Amazon</Text>
                            </Div>
                            <Div alItems="end" justContent="start" flex flow="v">
                                <TagGroup mb={.5}>
                                    <Tag>Angular</Tag>
                                    <Tag>Engineering</Tag>
                                    <Tag>Node</Tag>
                                </TagGroup>

                                <Div flex alItems="center">
                                    <Icon mr=".5" name="clock" />
                                    <Text>2 hours</Text>
                                </Div>
                            </Div>
                        </ListItem>

                        <ListItem flex>
                            <Div flex flow="v" grow={1}>
                                <Text size="lg" weight={600}>
                                    <Text mr={.5}>Backend Developer</Text>
                                    <Badge color="#FFECD9" mr={.5}>Part-time</Badge>
                                    <Badge color="#D9E9FF">Remote</Badge>
                                </Text>
                                <Text aux>Netflix</Text>
                            </Div>
                            <Div alItems="end" justContent="start" flex flow="v">
                                <TagGroup mb={.5}>
                                    <Tag>Angular</Tag>
                                    <Tag>Engineering</Tag>
                                    <Tag>Node</Tag>
                                </TagGroup>

                                <Div flex alItems="center">
                                    <Icon mr=".5" name="clock" />
                                    <Text>2 hours</Text>
                                </Div>
                            </Div>
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
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Buttons = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Example buttons={true} col="3" ov="hidden" />
                <Example buttons={true} col="3" color="primary" ov="hidden" />
                <Example buttons={true} col="3" color="secondary" ov="hidden" />
                <Example buttons={true} col="3" color="success" ov="hidden" />
            </Div>

            <Div mb="1" row>
                <Example buttons={true} col="3" color="danger" ov="hidden" />
                <Example buttons={true} col="3" color="warning" ov="hidden" />
                <Example buttons={true} col="3" color="hot" ov="hidden" />
                <Example buttons={true} col="3" color="cold" ov="hidden" />
            </Div>

            <Div row>
                <Example buttons={true} col="3" color="dark" ov="hidden" />
                <Example buttons={true} col="3" color="light" ov="hidden" />
                <Example buttons={true} col="3" color="aux" ov="hidden" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Example col="3" ov="hidden" />
                <Example col="3" color="primary" ov="hidden" />
                <Example col="3" color="secondary" ov="hidden" />
                <Example col="3" color="success" ov="hidden" />
            </Div>

            <Div mb="1" row>
                <Example col="3" color="danger" ov="hidden" />
                <Example col="3" color="warning" ov="hidden" />
                <Example col="3" color="hot" ov="hidden" />
                <Example col="3" color="cold" ov="hidden" />
            </Div>

            <Div row>
                <Example col="3" color="dark" ov="hidden" />
                <Example col="3" color="light" ov="hidden" />
                <Example col="3" color="aux" ov="hidden" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Dividers = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Example col="3" ov="hidden"></Example>
                <Example col="3" divider={false} ov="hidden"></Example>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Link = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Example link={'http://www.google.com.br'} col="3" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="primary" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="secondary" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="success" ov="hidden" target="_blank" />
            </Div>

            <Div mb="1" row>
                <Example link={'http://www.google.com.br'} col="3" color="danger" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="warning" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="hot" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="cold" ov="hidden" target="_blank" />
            </Div>

            <Div row>
                <Example link={'http://www.google.com.br'} col="3" color="dark" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="light" ov="hidden" target="_blank" />
                <Example link={'http://www.google.com.br'} col="3" color="aux" ov="hidden" target="_blank" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Padding = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Card col="3">
                    <List>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <Div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </Div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <Div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </Div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <Div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </Div>
                        </ListItem>
                    </List>
                </Card>

                <Card col="3">
                    <List padding={true}>
                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <Div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 1</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </Div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <Div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 2</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </Div>
                        </ListItem>

                        <ListItem flex>
                            <Avatar icon="file" mr={.75} />
                            <Div grow={1}>
                                <Text flex weight={600}>
                                    <Text>List Item 3</Text>
                                    <Badge color="aux" ml=".5">New</Badge>
                                </Text>
                                <Text aux block size="sm">List item subtitle</Text>
                            </Div>
                        </ListItem>
                    </List>
                </Card>
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Striped = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <Example striped={true} col="3" ov="hidden" />
                <Example striped={true} col="3" color="primary" ov="hidden" />
                <Example striped={true} col="3" color="secondary" ov="hidden" />
                <Example striped={true} col="3" color="success" ov="hidden" />
            </Div>

            <Div mb="1" row>
                <Example striped={true} col="3" color="danger" ov="hidden" />
                <Example striped={true} col="3" color="warning" ov="hidden" />
                <Example striped={true} col="3" color="hot" ov="hidden" />
                <Example striped={true} col="3" color="cold" ov="hidden" />
            </Div>

            <Div row>
                <Example striped={true} col="3" color="dark" ov="hidden" />
                <Example striped={true} col="3" color="light" ov="hidden" />
                <Example striped={true} col="3" color="aux" ov="hidden" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)