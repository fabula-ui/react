import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    Div,
    FabulaProvider,
    UtilsProvider,
    TagInput,
    Input,
} from '../lib';

export default {
    title: 'TagInput',
    component: TagInput,
};

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div row>
                <TagInput col="6" />
                <Input col="6" placeholder="Normal Input" />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Icon = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <TagInput col="4" icon={{ name: 'tag' }} tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="primary" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon="tag" tagColor="secondary" tags={['Tag 1', 'Tag 2']} />
            </Div>
            <Div mb="1" row>
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="success" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="danger" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="warning" tags={['Tag 1', 'Tag 2']} />
            </Div>
            <Div mb="1" row>
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="hot" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="cold" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="dark" tags={['Tag 1', 'Tag 2']} />
            </Div>
            <Div mb="1" row>
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="light" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" icon={{ name: 'tag' }} tagColor="aux" tags={['Tag 1', 'Tag 2']} />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const Placeholder = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <TagInput col="4" placeholder="Add some tags" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" placeholder="Cool! A tag input!" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" placeholder="Add Skills" tags={['Angular', 'React', 'Vue']} />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)

export const TagColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Div mb="1" row>
                <TagInput col="4" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="primary" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="secondary" tags={['Tag 1', 'Tag 2']} />
            </Div>
            <Div mb="1" row>
                <TagInput col="4" tagColor="success" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="danger" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="warning" tags={['Tag 1', 'Tag 2']} />
            </Div>
            <Div mb="1" row>
                <TagInput col="4" tagColor="hot" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="cold" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="dark" tags={['Tag 1', 'Tag 2']} />
            </Div>
            <Div mb="1" row>
                <TagInput col="4" tagColor="light" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="aux" tags={['Tag 1', 'Tag 2']} />
            </Div>
        </UtilsProvider>
    </FabulaProvider>
)