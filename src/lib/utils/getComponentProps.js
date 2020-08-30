const utilProps = [
    'al',
    'alH',
    'alV',
    'align',
    'alignH',
    'alignV',
    'col',
    'direction',
    'display',
    'flex',
    'font',
    'flow',
    'grow',
    'height',
    'hidden',
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
    'width'
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