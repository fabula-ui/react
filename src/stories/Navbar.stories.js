import React from 'react';
import { action } from '@storybook/addon-actions';
import Logo from '../assets/fabula-logo.svg';

import {
    Button,
    FabulaProvider,
    Navbar,
    NavbarLogo,
    Tab,
    Tabs,
    Icon,
    NavbarSection,
    ButtonGroup,
    UtilsProvider
} from '../lib';

export default {
    title: 'Navbar',
    component: Navbar,
};

const NavbarBase = props => {
    const { color, signInProps, signUpProps, socialProps, tabsProps, ...rest } = props;
    const logo = props.logo || 'fabula-logo.svg';

    return (
        <UtilsProvider>
            <Navbar color={color} {...rest}>
                <NavbarLogo src={logo} />
                <NavbarSection alignment="center" expand={true}>
                    <Tabs color={color} {...tabsProps}>
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                        <Tab name="store">Store</Tab>
                    </Tabs>
                </NavbarSection>

                <NavbarSection placement="right">
                    <ButtonGroup mr={1}>
                        <Button clear={true} compact={true} glow={false} {...socialProps}>
                            <Icon name="github" />
                        </Button>
                        <Button clear={true} compact={true} glow={false} {...socialProps}>
                            <Icon name="twitter" />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup spacing={0}>
                        <Button color="primary" size="sm" {...signInProps}>Sign In</Button>
                        <Button clear={true} color="primary" size="sm" {...signUpProps}>Sign Up</Button>
                    </ButtonGroup>
                </NavbarSection>
            </Navbar>
        </UtilsProvider>
    )
}

export const Examples = () => (
    <FabulaProvider>
        <UtilsProvider>
            <Navbar>
                <NavbarLogo src="fabula-logo.svg" />
                <NavbarSection alignment="center" expand={true}>
                    <Tabs>
                        <Tab active={true} name="docs">Docs</Tab>
                        <Tab name="components">Components</Tab>
                        <Tab name="showcase">Showcase</Tab>
                        <Tab name="store">Store</Tab>
                    </Tabs>
                </NavbarSection>

                <NavbarSection placement="right">
                    <ButtonGroup mr={1} spacing={.5}>
                        <Button clear={true} compact={true} glow={false}>
                            <Icon name="github" />
                        </Button>
                        <Button clear={true} compact={true} glow={false}>
                            <Icon name="twitter" />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup spacing={.5}>
                        <Button color="primary" size="sm">Sign In</Button>
                        <Button clear={true} color="primary" size="sm">Sign Up</Button>
                    </ButtonGroup>
                </NavbarSection>
            </Navbar>
        </UtilsProvider>
    </FabulaProvider>
)

export const Colors = () => (
    <FabulaProvider>
        <UtilsProvider>
            <NavbarBase px={2} socialProps={{ color: 'dark' }} />
            <NavbarBase color="primary" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ invert: true }} signUpProps={{ color: 'white' }} />
            <NavbarBase color="secondary" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ color: 'secondary', invert: true }} signUpProps={{ color: 'white' }} />
            <NavbarBase color="dark" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ color: 'primary' }} signUpProps={{ color: 'white' }} tabsProps={{ activeBorderColor: 'primary' }} />
            <NavbarBase color="light" px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: 'dark' }} socialProps={{ color: 'dark' }} tabsProps={{ activeBorderColor: 'primary' }} />
            <NavbarBase color="#674C88" logo="fabula-logo-white.svg" px={2} socialProps={{ color: 'white' }} signInProps={{ color: '#6FD367' }} signUpProps={{ color: 'white' }} tabsProps={{ activeBorderColor: '#6FD367' }} />
        </UtilsProvider>
    </FabulaProvider>
)

export const Height = () => (
    <FabulaProvider>
        <UtilsProvider>
            <NavbarBase color="light" height={48} mb={1} px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: '' }} tabsProps={{ activeBorderColor: 'primary' }} />
            <NavbarBase color="light" height="5rem" mb={1} px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: '' }} tabsProps={{ activeBorderColor: 'primary' }} />
            <NavbarBase color="light" height={100} mb={1} px={2} signInProps={{ color: 'primary' }} signUpProps={{ color: '' }} tabsProps={{ activeBorderColor: 'primary' }} />
        </UtilsProvider>
    </FabulaProvider>
);