import React from 'react';

import {
    Button,
    Container,
    Divider,
    FabulaProvider,
    Navbar,
    NavbarMenu,
    NavbarLogo,
    NavbarTabs,
    Tab,
    Tabs,
    Text,
    Icon,
    NavbarSection,
    UtilsProvider,
    ResponsiveProvider,
} from '../lib';

export default {
    title: 'Navbar',
    component: Navbar,
};

const NavbarBase = props => {
    const { color, signInProps, signUpProps, socialProps, tabsProps, ...rest } = props;
    const logo = props.logo || 'fabula-logo.svg';

    return (
        <Navbar color="light">
            {/* Teste */}
            <NavbarMenu mobile={true} mr={1}>
                <Text>Item 1</Text>
                <Divider />
                {/* <NavbarItem active={true} name="docs">Docs</NavbarItem>
                <NavbarItem name="components">Components</NavbarItem>
                <NavbarItem name="showcase">Showcase</NavbarItem> */}
            </NavbarMenu>

            <NavbarLogo src={logo} />

            <NavbarMenu al="center" grow={1} mobile={false}>
                <Tabs activeColor="primary" color="light" expand="v" type="pill">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </NavbarMenu>

            {/* <NavbarSection al="center" grow={1}>
                <Tabs expand="v">
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                </Tabs>
            </NavbarSection> */}

            <NavbarSection alV="center" mobile={false} placement="right">
                <Button clear={true} compact={true} glow={false} {...socialProps}>
                    <Icon name="github" />
                </Button>
                <Button clear={true} compact={true} glow={false} mr={1} {...socialProps}>
                    <Icon name="twitter" />
                </Button>
                <Button color="primary" {...signInProps}>Sign In</Button>
                <Button clear={true} color="primary" {...signUpProps}>Sign Up</Button>
            </NavbarSection>
        </Navbar>
        // <Navbar color={color} {...rest}>
        //     <NavbarLogo src={logo} />

        //     <NavbarTabs alignment="center" expand={true}>
        //         <Tabs color={color} {...tabsProps}>
        //             <Tab active={true} name="docs">Docs</Tab>
        //             <Tab name="components">Components</Tab>
        //             <Tab name="showcase">Showcase</Tab>
        //             <Tab name="store">Store</Tab>
        //         </Tabs>
        //     </NavbarTabs>

        //     <NavbarSection placement="right" shrink={0}>
        //         <Button clear={true} compact={true} glow={false} {...socialProps}>
        //             <Icon name="github" />
        //         </Button>
        //         <Button clear={true} compact={true} glow={false} mr={1} {...socialProps}>
        //             <Icon name="twitter" />
        //         </Button>
        //         <Button color="primary" {...signInProps}>Sign In</Button>
        //         <Button clear={true} color="primary" {...signUpProps}>Sign Up</Button>
        //     </NavbarSection>
        // </Navbar>
    )
}

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <ResponsiveProvider>
                <NavbarBase />
            </ResponsiveProvider>
        </UtilsProvider>
    </FabulaProvider>
)