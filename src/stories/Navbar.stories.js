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

            {/* <NavbarCollapse>

            </NavbarCollapse> */}
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

// export const Colors = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <NavbarBase px={2} socialProps={{ color: 'dark' }} />
//             <NavbarBase color="primary" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ invert: true }} signUpProps={{ color: 'white' }} />
//             <NavbarBase color="secondary" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ color: 'secondary', invert: true }} signUpProps={{ color: 'white' }} />
//             <NavbarBase color="dark" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ color: 'primary' }} signUpProps={{ color: 'white' }} tabsProps={{ activeBorderColor: 'primary' }} />
//             <NavbarBase color="light" px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: 'dark' }} socialProps={{ color: 'dark' }} tabsProps={{ activeBorderColor: 'primary' }} />
//             <NavbarBase color="#674C88" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ color: '#6FD367' }} signUpProps={{ color: 'white' }} tabsProps={{ activeBorderColor: '#6FD367' }} />
//         </FabulaUtils>
//     </FabulaProvider>
// )

// export const Height = () => (
//     <FabulaProvider>
//         <FabulaUtils>
//             <NavbarBase color="light" height={48} mb={1} px={2} signInProps={{ color: 'primary', size: 'xs' }} signUpProps={{ color: '', size: 'xs' }} tabsProps={{ activeBorderColor: 'primary' }} />
//             <NavbarBase color="light" height="5rem" mb={1} px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: '' }} tabsProps={{ activeBorderColor: 'primary' }} />
//             <NavbarBase color="light" height={100} mb={1} px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: '' }} tabsProps={{ activeBorderColor: 'primary' }} />
//         </FabulaUtils>
//     </FabulaProvider>
// );