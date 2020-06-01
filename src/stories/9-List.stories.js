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