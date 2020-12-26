import React, { cloneElement } from 'react';
import Color from 'color';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';

// Fabula
import { FabulaProvider } from '../../providers/FabulaProvider';
import { getComponentColors } from '@fabula/core/styles/methods/misc/getComponentColors';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';
import { getPlaceholderIconColor } from '@fabula/core/styles/methods/color/getPlaceholderIconColor';

// Component
import { Avatar } from './Avatar';
import { Badge } from '../Badge/Badge';
import { Icon } from '../Icon/Icon';

// Providers
import { UtilsProvider } from '../../providers/UtilsProvider';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';

// Theme changes
const theme = {
    components: {
        avatar: {
            borderRadius: 5,
            borderWidth: '1rem',
            color: 'red',
            iconSize: 5,
            initialsFontFamily: 'Roboto',
            initialsFontSize: 5,
            initialsFontWeight: 900,
            letterSpacing: '1.5em',
            size: 30,
        }
    }
}

const AvatarWithChanges = props => (
    <FabulaProvider theme={theme}>
        <Avatar {...props} />
    </FabulaProvider>
)

const testColorUtil = prop => {
    it(`Should set ${prop} prop`, () => {
        const props = { showInitials: 'Initials' };
        let colors = [];
        let element;
        let initialsElement;
        let initialsStyle;
        let style;
        let wrappers = [];

        // Default: no color
        props[prop] = true;

        wrappers[0] = mount(cloneElement(<Avatar />, props));
        colors[0] = getComponentColors('avatar', wrappers[0].props());

        element = wrappers[0].find('.fab-avatar').getDOMNode();
        initialsElement = wrappers[0].find('.fab-avatar__initials').getDOMNode();
        initialsStyle = getComputedStyle(initialsElement);
        style = getComputedStyle(element);

        expect(wrappers[0].props().color).toBeFalsy();
        expect(wrappers[0].props()[prop]).toBeTruthy();
        expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[0].bgColor);
        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[0].placeholderIconColor);
        expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors[0].textColor);

        // Color + theme color
        props.color = 'primary';
        props[prop] = true;

        wrappers[1] = mount(cloneElement(<Avatar />, props));
        colors[1] = getComponentColors('avatar', wrappers[1].props());

        element = wrappers[1].find('.fab-avatar').getDOMNode();
        initialsElement = wrappers[1].find('.fab-avatar__initials').getDOMNode();
        initialsStyle = getComputedStyle(initialsElement);
        style = getComputedStyle(element);

        expect(wrappers[1].props().color).toBe('primary');
        expect(wrappers[1].props()[prop]).toBeTruthy();
        expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[1].bgColor);
        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[1].placeholderIconColor);
        expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors[1].textColor);

        // Color + custom color
        props.color = 'blue';
        props[prop] = true;

        wrappers[2] = mount(cloneElement(<Avatar />, props));
        colors[2] = getComponentColors('avatar', wrappers[2].props());

        element = wrappers[2].find('.fab-avatar').getDOMNode();
        initialsElement = wrappers[2].find('.fab-avatar__initials').getDOMNode();
        initialsStyle = getComputedStyle(initialsElement);
        style = getComputedStyle(element);

        expect(wrappers[2].props().color).toBe('blue');
        expect(wrappers[2].props()[prop]).toBeTruthy();
        expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[2].bgColor);
        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[2].placeholderIconColor);
        expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors[2].textColor);
    });
}

describe('Avatar Component', () => {
    describe('Basic', () => {
        it('Should create', () => {
            const { container } = render(<Avatar />);

            expect(container).toBeTruthy();
        });

        it('Should have a defined structure', () => {
            const { container } = render(<Avatar />);
            const avatarElement = container.querySelector('.fab-avatar');
            const wrapperElement = container.querySelector('.fab-avatar-wrapper');

            expect(avatarElement).toBeTruthy();
            expect(wrapperElement).toBeTruthy();

            // Check data-fab-component attribute
            expect(avatarElement.getAttribute('data-fab-component')).toBe('avatar');
            expect(wrapperElement.getAttribute('data-fab-wrapper')).toBe('avatar');
        });

        it('Should have a default look', () => {
            const avatarVars = getComponentVars('avatar');
            const { container } = render(<Avatar />);
            const wrapper = shallow(<Avatar />);
            const iconElement = wrapper.find(Icon);

            // Elements
            const avatarElement = container.querySelector('.fab-avatar');

            // Styles
            const avatarStyle = getComputedStyle(avatarElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(Color(avatarVars.color).hex());
            expect(avatarStyle.getPropertyValue('border-radius')).toBe(avatarVars.borderRadius);
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(Color(getPlaceholderIconColor(avatarVars.color)).hex());
            expect(iconElement.prop('name')).toBe('image');
        });

        it('Should have an image', () => {
            const { container } = render(<Avatar src="image" />);
            const imageElement = container.querySelector('.fab-avatar__image');

            expect(imageElement).toBeTruthy();
            expect(getComputedStyle(imageElement).backgroundImage).toBe(`url(image)`);
        });

        it('Should accept external components - eg: badge', () => {
            const { container } = render(<Avatar><Badge>1</Badge></Avatar>);
            const badgeElement = container.querySelector('.fab-badge');

            expect(badgeElement).toBeTruthy();
        });
    });

    describe('Props', () => {
        it('Should set border prop', () => {
            let avatarElement;
            let avatarStyle;
            let colors;
            let wrapper;

            // Border true + no color
            wrapper = mount(<Avatar border={true} />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement.getDOMNode());

            expect(wrapper.props().border).toBeTruthy();
            expect(wrapper.props().color).toBeFalsy();
            expect(Color(avatarStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);

            // Border true + primary color
            wrapper = mount(<Avatar border={true} color="primary" />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement.getDOMNode());

            expect(wrapper.props().border).toBeTruthy();
            expect(wrapper.props().color).toBe('primary');
            expect(Color(avatarStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);

            // Border true + custom color
            wrapper = mount(<Avatar border={true} color="blue" />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement.getDOMNode());

            expect(wrapper.props().border).toBeTruthy();
            expect(wrapper.props().color).toBe('blue');
            expect(Color(avatarStyle.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);

            // No border
            wrapper = mount(<Avatar border={false} />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement.getDOMNode());

            expect(wrapper.props().border).toBeFalsy();
            expect(wrapper.props().color).toBeFalsy();
            expect(avatarStyle.getPropertyValue('border-color')).toBe('transparent');
        });

        it('Should set color prop', () => {
            const avatarVars = getComponentVars('avatar');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let avatarElement;
            let avatarStyle;
            let colors;
            let initialsElement;
            let initialsStyle;
            let wrapper;

            // Default: no color
            wrapper = mount(<Avatar showInitials="Initials" />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar').getDOMNode();
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = wrapper.find('.fab-avatar__initials').getDOMNode();
            initialsStyle = getComputedStyle(initialsElement);

            expect(wrapper.props().color).toBeFalsy();
            expect(wrapper.props().showInitials).toBe('Initials');
            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);

            // Color + theme color
            wrapper = mount(<Avatar color="primary" showInitials="Initials" />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar').getDOMNode();
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = wrapper.find('.fab-avatar__initials').getDOMNode();
            initialsStyle = getComputedStyle(initialsElement);

            expect(wrapper.props().color).toBe('primary');
            expect(wrapper.props().showInitials).toBe('Initials');
            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(primaryColor, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);

            // Color + custom color
            wrapper = mount(<Avatar color="blue" showInitials="Initials" />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar').getDOMNode();
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = wrapper.find('.fab-avatar__initials').getDOMNode();
            initialsStyle = getComputedStyle(initialsElement);

            expect(wrapper.props().color).toBe('blue');
            expect(wrapper.props().showInitials).toBe('Initials');
            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(Color(getPlaceholderIconColor('blue', 'fill')).hex());
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);

            // Should not break when not using a real color
            wrapper = mount(<Avatar color="xsei" showInitials="Initials" />);
            colors = getComponentColors('avatar', wrapper.props());

            avatarElement = wrapper.find('.fab-avatar').getDOMNode();
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = wrapper.find('.fab-avatar__initials').getDOMNode();
            initialsStyle = getComputedStyle(initialsElement);

            expect(wrapper.props().color).toBe('xsei');
            expect(wrapper.props().showInitials).toBe('Initials');
            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(colors.textColor);
        });

        testColorUtil('darken');
        testColorUtil('faded');

        it('Should set icon prop', () => {
            let wrapper = shallow(<Avatar />);
            let iconElement = wrapper.find(Icon);

            expect(iconElement.prop('name')).toBe('image');

            wrapper = shallow(<Avatar icon={{ name: 'photo' }} />);
            iconElement = wrapper.find(Icon);

            expect(iconElement.prop('name')).toBe('photo');
        });

        testColorUtil('lighten');

        it('Should set rounded prop', () => {
            const avatarVars = getComponentVars('avatar');

            // Default: rounded false
            let component = render(<Avatar />);
            let avatarElement = component.container.querySelector('.fab-avatar');
            let avatarStyle = getComputedStyle(avatarElement);

            expect(avatarStyle.getPropertyValue('border-radius')).toBe(`${avatarVars.borderRadius}`);

            // Rounded true
            component = render(<Avatar rounded={true} />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

            expect(avatarStyle.getPropertyValue('border-radius')).toBe('999px');
        });

        it('Should set showInitials prop', () => {
            // Default: no initials
            let component = render(<Avatar />);
            let iconElement = component.container.querySelector('.fab-icon');
            let initialsElement = component.container.querySelector('.fab-avatar__initials');
            let initialsStyle;

            expect(iconElement).toBeTruthy();
            expect(initialsElement).toBeFalsy();

            // Show initials
            component = render(<Avatar showInitials="Initials" />);
            iconElement = component.container.querySelector('.fab-icon');
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(iconElement).toBeFalsy();
            expect(initialsElement.textContent).toBe('In');
            expect(initialsStyle.getPropertyValue('text-transform')).toBe('uppercase');
        });

        it('Should set size prop', () => {
            const avatarVars = getComponentVars('avatar');
            let avatarElement;
            let avatarStyle;
            let component;
            let wrapper;

            // Default: md
            component = render(<Avatar />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            wrapper = mount(<Avatar />);

            expect(avatarStyle.getPropertyValue('height')).toBe(avatarVars.size)
            expect(wrapper.prop('size')).toBe('md');

            for (let i = 0; i < Object.keys(avatarVars.sizeMultipliers).length; i++) {
                const size = Object.keys(avatarVars.sizeMultipliers)[i];
                const multiplier = avatarVars.sizeMultipliers[size];

                component = render(<Avatar size={size} />);
                avatarElement = component.container.querySelector('.fab-avatar');
                avatarStyle = getComputedStyle(avatarElement);
                wrapper = mount(<Avatar size={size} />);

                // TODO: fix this
                // expect(avatarStyle.getPropertyValue('height')).toBe(`calc(${avatarVars.size} * ${multiplier})`)
                expect(wrapper.prop('size')).toBe(size);
            }
        });
    });

    // Utils
    testUtils({
        component: <Avatar />,
        componentClassName: '.fab-avatar',
        provider: <UtilsProvider />
    })

    // Customization
    describe('Customization', () => {
        it('Should change css according to new theme', () => {
            const newThemeVars = theme.components.avatar;
            let avatarElement;
            let avatarStyle;
            let initialsElement;
            let initialsStyle;
            let component = render(<AvatarWithChanges />);

            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(Color(newThemeVars.color).hex());
            expect(avatarStyle.getPropertyValue('border-radius')).toBe(`${newThemeVars.borderRadius}px`);
            expect(avatarStyle.getPropertyValue('border-width')).toBe(newThemeVars.borderWidth);
            expect(avatarStyle.getPropertyValue('font-size')).toBe(`calc(${newThemeVars.iconSize}em * 1)`);
            expect(avatarStyle.getPropertyValue('height')).toBe(`${newThemeVars.size}px`);
            expect(avatarStyle.getPropertyValue('width')).toBe(`${newThemeVars.size}px`);

            component = render(<AvatarWithChanges showInitials="Initials" />);

            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(initialsStyle.getPropertyValue('font-family')).toBe(newThemeVars.initialsFontFamily);
            expect(initialsStyle.getPropertyValue('font-size')).toBe(`calc(${newThemeVars.initialsFontSize}em * 1)`);
            expect(initialsStyle.getPropertyValue('font-weight')).toBe(`${newThemeVars.initialsFontWeight}`);
            expect(initialsStyle.getPropertyValue('letter-spacing')).toBe(newThemeVars.letterSpacing);
        });
    });
});