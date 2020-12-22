import React from 'react';
import Color from 'color';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';

// Fabula
import { FabulaProvider } from '../../providers/FabulaProvider';
import { getBgColor } from '@fabula/core/styles/methods/color/getBgColor';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getDividerColor } from '@fabula/core/styles/methods/color/getDividerColor';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';
import { getPlaceholderIconColor } from '@fabula/core/styles/methods/color/getPlaceholderIconColor';
import { getTextColor } from '@fabula/core/styles/methods/color/getTextColor';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Component
import { Avatar } from './Avatar';
import { Badge } from '../Badge/Badge';
import { Icon } from '../Icon/Icon';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';


// Theme changes
const theme = {
    components: {
        avatar: {
            borderRadius: 5,
            borderWidth: '1rem',
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

        it('Should change css according to new theme', () => {
            const newThemeVars = theme.components.avatar;
            let avatarElement;
            let avatarStyle;
            let initialsElement;
            let initialsStyle;
            let component = render(<AvatarWithChanges />);

            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

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
            const avatarVars = getComponentVars('avatar');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let avatarElement;
            let avatarStyle;
            let component;

            // Border true + no color
            component = render(<Avatar border={true} />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

            expect(Color(avatarStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(avatarVars.color, 'fill'));

            // Border true + primary color
            component = render(<Avatar border={true} color="primary" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

            expect(Color(avatarStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor(primaryColor, 'fill'));

            // Border true + custom color
            component = render(<Avatar border={true} color="blue" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

            expect(Color(avatarStyle.getPropertyValue('border-color')).hex()).toBe(getDividerColor('blue', 'fill'));

            // No border
            component = render(<Avatar border={false} />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);

            expect(avatarStyle.getPropertyValue('border-color')).toBe('transparent');
        });

        it('Should set color prop', () => {
            const avatarVars = getComponentVars('avatar');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let avatarElement;
            let avatarStyle;
            let initialsElement;
            let initialsStyle;
            let component;

            // Default: no color
            component = render(<Avatar showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(avatarVars.color, 'fill'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(getTextColor(avatarVars.color, 'fill'));

            // Color + theme color
            component = render(<Avatar color="primary" showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'fill'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(primaryColor, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'fill')).hex());

            // Color + custom color
            component = render(<Avatar color="blue" showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'fill')).hex());
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(Color(getPlaceholderIconColor('blue', 'fill')).hex());
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'fill')).hex());

            // Should not break when not using a real color
            component = render(<Avatar color="xsei" showInitials="Initials" />);

            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(avatarVars.color, 'fill'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(getTextColor(avatarVars.color, 'fill'));
        });

        it('Should set darken prop', () => {
            const avatarVars = getComponentVars('avatar');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let avatarElement;
            let avatarStyle;
            let initialsElement;
            let initialsStyle;
            let component;

            // Default: no color
            component = render(<Avatar darken={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(avatarVars.color, 'fill'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(getTextColor(avatarVars.color, 'fill'));

            // Color + theme color
            component = render(<Avatar color="primary" darken={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'darken'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(primaryColor, 'darken'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'darken')).hex());

            // Color + custom color
            component = render(<Avatar color="blue" darken={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'darken')).hex());
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(Color(getPlaceholderIconColor('blue', 'darken')).hex());
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'darken')).hex());
        });

        it('Should set faded prop', () => {
            const avatarVars = getComponentVars('avatar');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let avatarElement;
            let avatarStyle;
            let initialsElement;
            let initialsStyle;
            let component;

            // Default: no color
            component = render(<Avatar faded={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(avatarVars.color, 'fill'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(getTextColor(avatarVars.color, 'fill'));

            // Color + theme color
            component = render(<Avatar color="primary" faded={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'faded'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(primaryColor, 'faded'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'faded')).hex());

            // Color + custom color
            component = render(<Avatar color="blue" faded={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'faded')).hex());
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(Color(getPlaceholderIconColor('blue', 'faded')).hex());
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'faded')).hex());
        });

        it('Should set icon prop', () => {
            let wrapper = shallow(<Avatar />);
            let iconElement = wrapper.find(Icon);

            expect(iconElement.prop('name')).toBe('image');

            wrapper = shallow(<Avatar icon={{ name: 'photo' }} />);
            iconElement = wrapper.find(Icon);

            expect(iconElement.prop('name')).toBe('photo');
        });

        it('Should set lighten prop', () => {
            const avatarVars = getComponentVars('avatar');
            const globalVars = getGlobalVars();
            const primaryColor = globalVars.colors.primary;
            let avatarElement;
            let avatarStyle;
            let initialsElement;
            let initialsStyle;
            let component;

            // Default: no color
            component = render(<Avatar lighten={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(avatarVars.color, 'fill'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(avatarVars.color, 'fill'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(getTextColor(avatarVars.color, 'fill'));

            // Color + theme color
            component = render(<Avatar color="primary" lighten={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(getBgColor(primaryColor, 'lighten'));
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(getPlaceholderIconColor(primaryColor, 'lighten'));
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor(primaryColor, 'lighten')).hex());

            // Color + custom color
            component = render(<Avatar color="blue" lighten={true} showInitials="Initials" />);
            avatarElement = component.container.querySelector('.fab-avatar');
            avatarStyle = getComputedStyle(avatarElement);
            initialsElement = component.container.querySelector('.fab-avatar__initials');
            initialsStyle = getComputedStyle(initialsElement);

            expect(Color(avatarStyle.getPropertyValue('background-color')).hex()).toBe(Color(getBgColor('blue', 'lighten')).hex());
            expect(Color(avatarStyle.getPropertyValue('color')).hex()).toBe(Color(getPlaceholderIconColor('blue', 'lighten')).hex());
            expect(Color(initialsStyle.getPropertyValue('color')).hex()).toBe(Color(getTextColor('blue', 'lighten')).hex());
        });

        it('Should set rounded prop', () => {
            const avatarVars = getComponentVars('avatar');

            // Default: rounded false
            let component = render(<Avatar />);
            let avatarElement = component.container.querySelector('.fab-avatar');
            let avatarStyle = getComputedStyle(avatarElement);

            expect(avatarStyle.getPropertyValue('border-radius')).toBe(`${avatarVars.borderRadius}px`);
        
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
            let wrapper = mount(<Avatar />);
            let avatarElement = wrapper.find('.fab-avatar').getDOMNode();
            let avatarStyle = getComputedStyle(avatarElement);

            // Default size: md
            expect(avatarStyle.getPropertyValue('height')).toBe(`${avatarVars.size}px`)
            expect(wrapper.prop('size')).toBe('md');
        });
    });

    // Utils
    testUtils({
        component: <Avatar />,
        componentClassName: '.fab-avatar',
        provider: <UtilsProvider />
    })
});