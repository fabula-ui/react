import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Input from '../Input/Input';

// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

const SearchInput = props => {
    const { autocomplete, button, children, className, placeholder, ...rest } = props;
    const [autocompleteIsOpen, setAutocompleIsOpen] = useState(false);
    const elRef = useRef(null);

    const handleFocus = status => {
        // setAutocompleIsOpen(status);
    }

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={SearchInputStyles}
            wrapper="fab-search-input-wrapper">
            <div ref={elRef}>
                <div className="fab-search-input">
                    <Input iconStart={{ name: 'search' }} onFocus={() => handleFocus(true)} placeholder={placeholder || 'Search...'} {...rest}>
                        {!!button && <Button color="primary" compact={true} {...button}>{!button.label && !button.icon && 'Search'}</Button>}
                        {children}
                    </Input>

                    {!!autocomplete && <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onChange={setAutocompleIsOpen} open={autocompleteIsOpen}></DropdownMenu>}
                </div>
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