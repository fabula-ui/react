import React, { useState } from 'react';
import { css } from 'emotion';

// Input
import Button from '../Button/Button';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Input from '../Input/Input';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';


// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

const SearchInput = props => {
    const { autocomplete, button, children, className, placeholder, ...rest } = props;
    const [autocompleteIsOpen, setAutocompleIsOpen] = useState(false);
    const classes = ['fab-search-input-wrapper', className || '', css(SearchInputStyles({ framework: 'react', props }))];

    const handleFocus = status => {
        setAutocompleIsOpen(status);
    }

    return (
        <div className={classes.join(' ')}>
            <div className="fab-search-input">
                <Input iconStart={{ name: 'search' }} onFocus={() => handleFocus(true)} placeholder={placeholder || 'Search...'} {...rest}>
                    {!!button && <Button color="primary" compact={true} {...button}>{button.label || !button.icon && 'Search'}</Button>}
                    {children}
                </Input>

                {!!autocomplete && <DropdownMenu clickToClose={true} items={[{ button: true, label: 'Item 1' }, { button: true, label: 'Item 2' }, { button: true, label: 'Item 3' }]} onChange={setAutocompleIsOpen} open={autocompleteIsOpen}></DropdownMenu>}
            </div>
        </div>
    )
}

export default SearchInput;