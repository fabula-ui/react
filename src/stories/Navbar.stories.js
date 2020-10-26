import React, { Fragment } from 'react';

import {
    Button,
    Dropdown,
    DropdownToggle,
    FabulaProvider,
    ListHeader,
    Navbar,
    NavbarMenu,
    NavbarMenuItem,
    NavbarLogo,
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
    const { signInProps, signUpProps, socialProps } = props;
    const logo = props.logo || 'fabula-logo.svg';

    return (
        <Fragment>
            <Navbar color="light">
                <NavbarMenu closeButton={{ color: 'primary' }} color="dark" mobile={true} mr={1}>
                    <ListHeader>Header</ListHeader>
                    <NavbarMenuItem button={false}>
                        <Dropdown expand={true}>
                            <DropdownToggle align="left" color="dark" flex={true} glow={true} lighten={true} border={true}>
                                <Text grow={1}>English</Text>
                            </DropdownToggle>
                        </Dropdown>
                    </NavbarMenuItem>
                    <NavbarMenuItem button={true}>Docs</NavbarMenuItem>
                    <NavbarMenuItem button={true}>Components</NavbarMenuItem>
                    <NavbarMenuItem button={true}>Showcase</NavbarMenuItem>
                </NavbarMenu>

                <NavbarLogo src={logo} />

                <NavbarMenu activeColor="primary" alH="center" color="light" grow={1} mobile={false} type="pill">
                    <NavbarMenuItem active={true} name="docs">Docs</NavbarMenuItem>
                    <NavbarMenuItem name="components">Components</NavbarMenuItem>
                    <NavbarMenuItem name="showcase">Showcase</NavbarMenuItem>
                </NavbarMenu>

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
        </Fragment>

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