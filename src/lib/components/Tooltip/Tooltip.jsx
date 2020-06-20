import React, { useContext, useEffect, useState } from 'react';
import { css } from 'emotion';

// Controllers
import TooltipController from '../../controllers/TooltipController';

// Styles
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';

const Tooltip = props => {
    const { height, placement, x, width, y } = props;
    // const { activeTooltip } = useContext(TooltipController);
    const [ready, setReady] = useState(false);
    const [style, setStyle] = useState(null);

    // CSS classes
    const tooltipCss = css(TooltipStyles({ framework: 'react', props }));
    const classes = ['fab-tooltip', tooltipCss];

    useEffect(() => {
        handleTooltip();
    }, []);

    const handleTooltip = () => {
        let left;
        let top;

        if (placement === 'bottom') {
            left = x + width / 2;
            top = y + height;
        } else if (placement === 'left') {
            left = x;
            top = y + height / 2;
        } else if (placement === 'right') {
            left = x + width;
            top = y + height / 2;
        } else {
            left = x + width / 2;
            top = y;
        }

        setStyle({
            left,
            top
        });
        setReady(true);
    }

    return (
        <div className={classes.join(' ')} data-placement={placement} data-ready={ready} style={style}>
            <span className="fab-tooltip__label">Tooltip</span>
        </div>
    )
}

export default Tooltip;