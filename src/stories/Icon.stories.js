import React from 'react';

import { FabulaProvider, Icon, UtilsProvider } from '../lib';

export default {
	title: 'Icon',
	component: Icon
};

export const Example = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Icon name="bell" mr={1} size="xxl" />
			<Icon name="cast" mr={1} size="xxl" />
			<Icon name="download" mr={1} size="xxl" />
			<Icon name="folder" size="xxl" />
		</UtilsProvider>
	</FabulaProvider>
);

export const PropColor = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Icon color="primary" name="bell" mr={1} size="xxl" />
			<Icon color="lavender" name="bell" mr={1} size="xxl" />
			<Icon color="hot" name="bell" mr={1} size="xxl" />
			<Icon color="aux" name="bell" mr={1} size="xxl" />
			<Icon color="dark" name="bell" size="xxl" />
		</UtilsProvider>
	</FabulaProvider>
);

export const PropSize = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Icon name="bell" mr={1} size="xs" />
			<Icon name="bell" mr={1} size="sm" />
			<Icon name="bell" mr={1} size="md" />
			<Icon name="bell" mr={1} size="lg" />
			<Icon name="bell" mr={1} size="xl" />
			<Icon name="bell" size="xxl" />
		</UtilsProvider>
	</FabulaProvider>
)
