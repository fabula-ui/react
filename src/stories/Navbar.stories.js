import React from 'react';

import {
    Button,
    Container,
    FabulaProvider,
    Navbar,
    NavbarLogo,
    NavbarTabs,
    Tab,
    Tabs,
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
        <Navbar color={color} {...rest}>
            <NavbarLogo src={logo} />

            <NavbarTabs alignment="center" expand={true}>
                <Tabs color={color} {...tabsProps}>
                    <Tab active={true} name="docs">Docs</Tab>
                    <Tab name="components">Components</Tab>
                    <Tab name="showcase">Showcase</Tab>
                    <Tab name="store">Store</Tab>
                </Tabs>
            </NavbarTabs>

            <NavbarSection placement="right" shrink={0}>
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
    )
}

export const Example = () => (
    <FabulaProvider>
        <UtilsProvider>
            <ResponsiveProvider>
                <Container down={{
                    md: {
                        maxWidth: '100%'
                    }
                }}>
                    <NavbarBase />
                </Container>
            </ResponsiveProvider>
        </UtilsProvider>
    </FabulaProvider>
)