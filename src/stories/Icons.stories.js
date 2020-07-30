import React from 'react';

import { Button, FabulaProvider, FabulaUtils, Icon } from '../lib';

// import { ReactComponent as Activity } from '@fabula/icons/assets/activity.svg';
// const activity = require('@fabula/icons/react/index.jsx');

export default {
	title: 'Icons',
	component: Icon
};

export const Test = () => (
	<FabulaProvider>
		<FabulaUtils>
			<Button color="primary">
				<Icon name="database" />
				<span>Button</span>
			</Button>
			<div className="test" style={{ color: 'red' }}>
				<Icon name="activity" />
			</div>
			{/* <Icon name="database" /> */}
		</FabulaUtils>
	</FabulaProvider>
);