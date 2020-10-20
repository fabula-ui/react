const utilProps = [
    'active',
    'activeColor',
    'activeBorderColor',
    'activeTextColor',
    'al',
    'alH',
    'alV',
    'align',
    'alignH',
    'alignV',
    'block',
    'border',
    'borderColor',
    'circle',
    'className',
    'clear',
    'clickToClose',
    'closeModal',
    'col',
    'cover',
    'darken',
    'direction',
    'display',
    'divider',
    'dividerColor',
    'expand',
    'faded',
    'flex',
    'font',
    'flow',
    'glow',
    'grow',
    'hasProperty',
    'height',
    'hidden',
    'inactiveColor',
    'inactiveTextColor',
    'indeterminate',
    'inline',
    'invert',
    'label',
    'lighten',
    'lineHeight',
    'maxHeight',
    'maxWidth',
    'message',
    'messageColor',
    'minHeight',
    'minWidth',
    'm',
    'ml',
    'mr',
    'mx',
    'my',
    'outline',
    'ov',
    'overflow',
    'ovX',
    'overflowX',
    'ovY',
    'overflowY',
    'parentColor',
    'parentOnClick',
    'p',
    'pl',
    'placementX',
    'placementY',
    'pr',
    'px',
    'py',
    'padding',
    'rounded',
    'row',
    'span',
    'stacked',
    'textColor',
    'titleColor',
    'toggle',
    'visible',
    'width',
    'wrap'
]

const getComponentProps = props => {
    const componentProps = {...props};
    
    for (let i = 0; i < utilProps.length; i++) {
        const utilProp = utilProps[i];

        if (componentProps.hasOwnProperty(utilProp)) {
            delete componentProps[utilProp];
        }
    }

    return componentProps;
}

export default getComponentProps;