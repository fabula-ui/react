import React from 'react';
import { action } from '@storybook/addon-actions';

import {
    FabulaProvider,
    FabulaUtils,
    TagInput,
} from '../lib';

export default {
    title: 'TagInput',
    component: TagInput,
};

export const Examples = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div row>
                <TagInput col="4" />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)

export const Color = () => (
    <FabulaProvider>
        <FabulaUtils>
            <div row>
                <TagInput col="4" />
                <TagInput col="4" tagColor="primary" tags={['Tag 1', 'Tag 2']} />
                <TagInput col="4" tagColor="secondary" tags={['Tag 1', 'Tag 2']} />
            </div>
        </FabulaUtils>
    </FabulaProvider>
)