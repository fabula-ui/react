import React from 'react';

import {
	FabulaProvider,
	Icon,
	UtilsProvider,
	Wrapper
} from '../lib';

export default {
	title: 'Icon',
	component: Icon
};

// Example
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

// Properties
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

// Utilities
const UtilBaseComponent = props => (
	<Icon name="bell" size="xxl" {...props} />
)

export const UtilMargin = () => (
	<FabulaProvider>
		<UtilsProvider>
			<Wrapper al="center" flex={true} mb={1}>
				<UtilBaseComponent mr={.5} />
				<UtilBaseComponent mx={.5} />
				<UtilBaseComponent ml={.5} />
			</Wrapper>

			<Wrapper al="center" direction="column" flex={true} mb={1}>
				<UtilBaseComponent mb={.5} />
				<UtilBaseComponent my={.5} />
				<UtilBaseComponent mt={.5} />
			</Wrapper>

			<Wrapper al="center" direction="column" flex={true}>
				<UtilBaseComponent />
				<Wrapper al="center" flex={true}>
					<UtilBaseComponent />
					<UtilBaseComponent m={1} />
					<UtilBaseComponent />
				</Wrapper>
				<UtilBaseComponent />
			</Wrapper>
		</UtilsProvider>
	</FabulaProvider>
)

export const UtilVisibility = () => (
	<FabulaProvider>
		<UtilsProvider>
			<UtilBaseComponent hidden={true} />
			<UtilBaseComponent visible={true} width={300} />
		</UtilsProvider>
	</FabulaProvider>
)
