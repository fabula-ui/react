import React, { Fragment } from 'react';

import {
    FabulaProvider,
    Tag,
    TagGroup,
    UtilsProvider
} from '../lib';

export default {
    title: 'Tag',
    component: Tag,
};

const BaseComponent = props => (
    <Fragment>
        <TagGroup mb={1}>
            <Tag {...props}>Normal</Tag>
            <Tag color="primary" {...props}>Normal</Tag>
            <Tag color="lavender" {...props}>Normal</Tag>
            <Tag color="hot" {...props}>Normal</Tag>
            <Tag color="aux" {...props}>Normal</Tag>
            <Tag color="dark" {...props}>Normal</Tag>
        </TagGroup>

        <TagGroup mb={1}>
            <Tag {...props}><a href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Normal</a></Tag>
            <Tag color="primary" {...props}><a href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Normal</a></Tag>
            <Tag color="lavender" {...props}><a href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Normal</a></Tag>
            <Tag color="hot" {...props}><a href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Normal</a></Tag>
            <Tag color="aux" {...props}><a href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Normal</a></Tag>
            <Tag color="dark" {...props}><a href="https://www.github.com/fabula-ui" rel="noopener noreferrer" target="_blank">Normal</a></Tag>
        </TagGroup>

        <TagGroup>
            <Tag {...props}><button>Button</button></Tag>
            <Tag color="primary" {...props}><button>Button</button></Tag>
            <Tag color="lavender" {...props}><button>Button</button></Tag>
            <Tag color="hot" {...props}><button>Button</button></Tag>
            <Tag color="aux" {...props}><button>Button</button></Tag>
            <Tag color="dark" {...props}><button>Button</button></Tag>
        </TagGroup>
    </Fragment>
)

// Stories
export const PropClear = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent clear={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropColor = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropFaded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent faded={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropGlow = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent glow={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropInvert = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent invert={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropOutline = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent outline={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropRounded = () => (
    <FabulaProvider>
        <UtilsProvider>
            <BaseComponent rounded={true} />
        </UtilsProvider>
    </FabulaProvider>
)

export const PropSize = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup mb="1">
                <Tag color="primary" size="xs">Extra-small</Tag>
                <Tag color="primary" size="sm">Small</Tag>
                <Tag color="primary" size="md">Medium</Tag>
                <Tag color="primary" size="lg">Large</Tag>
                <Tag color="primary" size="xl">Extra-large</Tag>
                <Tag color="primary" size="xxl">2x Extra-large</Tag>
            </TagGroup>

            <TagGroup mb={1}>
                <Tag color="primary" size="xs">
                    <button>Extra-small</button>
                </Tag>
                <Tag color="primary" size="sm">
                    <button>Small</button>
                </Tag>
                <Tag color="primary" size="md">
                    <button>Medium</button>
                </Tag>
                <Tag color="primary" size="lg">
                    <button>Large</button>
                </Tag>
                <Tag color="primary" size="xl">
                    <button>Extra-large</button>
                </Tag>
                <Tag color="primary" size="xxl">
                    <button>2x Extra-large</button>
                </Tag>
            </TagGroup>

            <TagGroup mb={1}>
                <Tag color="primary" size="xs">
                    <a href="https://www.fabulaui.com">Extra-small</a>
                </Tag>
                <Tag color="primary" size="sm">
                    <a href="https://www.fabulaui.com">Small</a>
                </Tag>
                <Tag color="primary" size="md">
                    <a href="https://www.fabulaui.com">Medium</a>
                </Tag>
                <Tag color="primary" size="lg">
                    <a href="https://www.fabulaui.com">Large</a>
                </Tag>
                <Tag color="primary" size="xl">
                    <a href="https://www.fabulaui.com">Extra-large</a>
                </Tag>
                <Tag color="primary" size="xxl">
                    <a href="https://www.fabulaui.com">2x Extra-large</a>
                </Tag>
            </TagGroup>

            <TagGroup mb={1}>
                <Tag color="primary" rounded={true} size="xs">Extra-small</Tag>
                <Tag color="primary" rounded={true} size="sm">Small</Tag>
                <Tag color="primary" rounded={true} size="md">Medium</Tag>
                <Tag color="primary" rounded={true} size="lg">Large</Tag>
                <Tag color="primary" rounded={true} size="xl">Extra-large</Tag>
                <Tag color="primary" rounded={true} size="xxl">2x Extra-large</Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)


export const AnchorAndButton = () => (
    <FabulaProvider>
        <UtilsProvider>
            <TagGroup mb={1}>
                <Tag rounded={true}><a href="https://www.fabulaui.com" rel="noopener noreferrer" target="_blank">Anchor</a></Tag>
                <Tag><a href="https://www.fabulaui.com" rel="noopener noreferrer" target="_blank">Anchor</a></Tag>
                <Tag color="primary" rounded={true}><a href="https://www.fabulaui.com" rel="noopener noreferrer" target="_blank">Anchor</a></Tag>
                <Tag color="primary"><a href="https://www.fabulaui.com" rel="noopener noreferrer" target="_blank">Anchor</a></Tag>
            </TagGroup>

            <TagGroup>
                <Tag rounded={true}><button onClick={() => alert('Click event triggered')}>Fabula</button></Tag>
                <Tag><button onClick={() => alert('Click event triggered')}>Fabula</button></Tag>
                <Tag color="primary" rounded={true}><button onClick={() => alert('Click event triggered')}>Fabula</button></Tag>
                <Tag color="primary"><button onClick={() => alert('Click event triggered')}>Fabula</button></Tag>
            </TagGroup>
        </UtilsProvider>
    </FabulaProvider>
)

// export const Rounded = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <TagGroup>
//                 <Tag rounded={true}>Fabula</Tag>
//                 <Tag color="primary" rounded={true}>Fabula</Tag>
//                 <Tag color="secondary" rounded={true}>Fabula</Tag>
//                 <Tag color="success" rounded={true}>Fabula</Tag>
//                 <Tag color="danger" rounded={true}>Fabula</Tag>
//                 <Tag color="warning" rounded={true}>Fabula</Tag>
//                 <Tag color="hot" rounded={true}>Fabula</Tag>
//                 <Tag color="cold" rounded={true}>Fabula</Tag>
//                 <Tag color="dark" rounded={true}>Fabula</Tag>
//                 <Tag color="light" rounded={true}>Fabula</Tag>
//                 <Tag color="aux" rounded={true}>Fabula</Tag>
//             </TagGroup>
//         </FabulaUtils>
//     </FabulaProvider>
// )

// export const Size = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <TagGroup mb="1">
//                 <Tag color="primary" size="xs">Extra-small</Tag>
//                 <Tag color="primary" size="sm">Small</Tag>
//                 <Tag color="primary" size="md">Medium</Tag>
//                 <Tag color="primary" size="lg">Large</Tag>
//                 <Tag color="primary" size="xl">Extra-large</Tag>
//             </TagGroup>

//             <TagGroup>
//                 <Tag color="primary" rounded={true} size="xs">Extra-small</Tag>
//                 <Tag color="primary" rounded={true} size="sm">Small</Tag>
//                 <Tag color="primary" rounded={true} size="md">Medium</Tag>
//                 <Tag color="primary" rounded={true} size="lg">Large</Tag>
//                 <Tag color="primary" rounded={true} size="xl">Extra-large</Tag>
//             </TagGroup>
//         </FabulaUtils>
//     </FabulaProvider>
// )