import { css } from 'emotion';

// // Default theme
import { reset } from '@fabula/core/styles/common/reset';
import { setBaseTheme } from '@fabula/core/styles/methods/misc/setBaseTheme';

export const ThemeProvider = props => {
	const { children, theme = {} } = props;

	document.body.classList.add(css(reset));
	setBaseTheme({ theme });

	return children;
};
