const utilProps = [
    'al',
    'alH',
    'alV',
    'align',
    'alignH',
    'alignV',
    'block',
    'className',
    'col',
    'direction',
    'display',
    'flex',
    'font',
    'flow',
    'grow',
    'height',
    'hidden',
    'inline',
    'lineHeight',
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
    'padding',
    'row',
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