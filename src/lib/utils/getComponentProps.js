const allProps = [
    'active',
    'activeColor',
    'activeBorderColor',
    'activeTextColor',
    'border',
    'borderColor',
    'circle',
    'className',
    'clear',
    'clickToClose',
    'closeModal',
    'cover',
    'darken',
    'display',
    'divider',
    'dividerColor',
    'faded',
    'glow',
    'hasProperty',
    'inactiveColor',
    'inactiveTextColor',
    'indeterminate',
    'invert',
    'label',
    'lighten',
    'lineHeight',
    'message',
    'messageColor',
    'outline',
    'padding',
    'parentColor',
    'parentOnClick',
    'placementX',
    'placementY',
    'rounded',
    'stacked',
    'textColor',
    'titleColor',
    'toggle',
];
const utilProps = [
    'al',
    'alH',
    'alV',
    'align',
    'alignH',
    'alignV',
    'block',
    'col',
    'direction',
    'expand',
    'flex',
    'font',
    'flow',
    'grow',
    'height',
    'hidden',
    'inline',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'm',
    'ml',
    'mr',
    'mx',
    'my',
    'ov',
    'overflow',
    'ovX',
    'overflowX',
    'ovY',
    'overflowY',
    'p',
    'pl',
    'pr',
    'px',
    'py',
    'row',
    'visible',
    'width',
    'wrap'
]

export const getComponentProps = (props, context) => {
    const componentProps = { ...props };
    let targetProps;

    if (!context || context === 'all') {
        targetProps = [...utilProps, ...allProps]
    } else if (context === 'component') {
        targetProps = [...allProps];
    } else if (context === 'utils') {
        targetProps = [...utilProps];
    }

    for (let i = 0; i < targetProps.length; i++) {
        const utilProp = targetProps[i];

        if (componentProps.hasOwnProperty(utilProp)) {
            delete componentProps[utilProp];
        }
    }

    return componentProps;
}