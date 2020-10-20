import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import InnerIcon from '../InnerIcon/InnerIcon';
import Input from '../Input/Input';

// Utils
import getComponentProps from '../../utils/getComponentProps';

// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

const SearchInput = props => {
    const { button, children, className, elRef, icon, placeholder, onSearch, ...rest } = props;
    const ref = useRef(null);
    const searchRef = useRef(null);
    const restProps = getComponentProps(rest);

    const handleKeyDown = e => {
        if (e.keyCode === 13 && onSearch) {
            e.target.blur();
            onSearch(e.target.value);
        }
    }

    const handleSearch = e => {
        const query = searchRef.current.value;

        if (onSearch) { onSearch(query); }
    }

    return (
        <Component
            elRef={elRef || ref}
            properties={props}
            styles={SearchInputStyles}
            wrapper="fab-search-input">
            <div ref={elRef || ref} {...restProps}>
                <Input elRef={searchRef} iconStart={{ name: 'search' }} onKeyDown={handleKeyDown} placeholder={placeholder || 'Search...'} {...rest}>
                    {!!button &&
                        <Button color="primary" compact={true} onClick={handleSearch} {...button}>
                            {!button.label && !button.icon && 'Search'}
                            {!!button.icon && <InnerIcon icon={button.icon} parentProps={button} />}
                        </Button>
                    }
                    {!button && children}
                </Input>
            </div>
        </Component>
    )
}

SearchInput.defaultProps = {
    button: null,
    placeholder: ''
}

SearchInput.propTypes = {
    button: PropTypes.any,
    placeholder: PropTypes.string
}

export default SearchInput;