import React from 'react';
import { css } from 'emotion';

// Components
import Button from '../Button/Button';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

const ListItem = props => {
    const { children, className, onClick, padding, ...rest } = props;
    const styles = css(ListItemStyles({ framework: 'react', props }));

    return (
        <div className={`fab-list-item ${className} ${styles}`} data-button={!!onClick} data-fab-component="list-item">
            {!onClick && children}

            {!!onClick &&
                <div className="fab-list-item__button">
                    <Button data-button={!!onClick} onClick={onClick} {...rest}>
                        {children}
                    </Button>
                </div>
            }
        </div>
    )
}

export default ListItem;