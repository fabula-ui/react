import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import InnerIcon from '../InnerIcon/InnerIcon';
import Input from '../Input/Input';

// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

const SearchInput = props => {
    const { autocomplete, button, children, className, icon, placeholder, onSearch, ...rest } = props;
    const [autocompleteIsOpen, setAutocompleIsOpen] = useState(false);
    const elRef = useRef(null);
    const searchRef = useRef(null);

    const handleFocus = status => {
        // setAutocompleIsOpen(status);
    }

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
            elRef={elRef}
            properties={props}
            styles={SearchInputStyles}
            wrapper="fab-search-input-wrapper">
            <div ref={elRef}>
                <div className="fab-search-input">
                    <Input elRef={searchRef} iconStart={{ name: 'search' }} onFocus={() => handleFocus(true)} onKeyDown={handleKeyDown} placeholder={placeholder || 'Search...'} {...rest}>
                        {!!button &&
                            <Button color="primary" compact={true} onClick={handleSearch} {...button}>
                                {!button.label && !button.icon && 'Search'}
                                {!!button.icon && <InnerIcon icon={button.icon} parentProps={button} />}
                            </Button>
                        }
                        {!button && children}
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