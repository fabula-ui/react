import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from '../Button/Button';
import { Component } from '../Component/Component';
import { Icon } from '../Icon/Icon';

// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';

const DropdownToggle = props => {
	const { arrow, children, className, direction, elRef, label, onClick, open, toggle, ...rest } = props;
	const ref = useRef(null);

	const handleClick = () => {
		if (onClick) { onClick(); }
		toggle();
	};

	return (
		<Component
			elRef={elRef || ref}
			properties={props}
			styles={DropdownToggleStyles}
			wrapper="fab-dropdown-toggle">
			<div data-direction={direction} data-open={open} ref={elRef || ref}>
				<Button {...rest} onClick={handleClick}>
					{(!!children || !!label) && <span className="fab-dropdown-toggle__label">{label || children}</span>}
					{arrow &&
						<span className="fab-dropdown-toggle__chevron">
							<Icon name="chevron-down" />
						</span>
					}
				</Button>
			</div>
		</Component>
	);
};

DropdownToggle.defaultProps = {
	arrow: true,
	direction: '',
	label: '',
	open: false
};

DropdownToggle.propTypes = {
	arrow: PropTypes.bool,
	direction: PropTypes.string,
	label: PropTypes.string,
	open: PropTypes.bool
};

export default DropdownToggle;
