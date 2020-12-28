import React, { cloneElement } from 'react';
import Color from 'color';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { matchers } from '@emotion/jest';
import { fireEvent, render } from '@testing-library/react';

// Fabula
import { FabulaProvider } from '../../providers/FabulaProvider';
import { getComponentColors } from '@fabula/core/styles/methods/misc/getComponentColors';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { getTextColor } from '@fabula/core/styles/methods/color/getTextColor';
import { ResponsiveProvider } from '../../providers/ResponsiveProvider';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Component
import { Button } from './Button';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';
import { getGlobalVars } from '@fabula/core/styles/methods/misc/getGlobalVars';

expect.extend(matchers);

const removeSpaces = color => {
    return ('' + color).replace(new RegExp(', ', 'g'), ',');
}

const testColorUtil = prop => {
    it(`Should set ${prop} prop`, () => {
        const props = {};
        const testColors = ['', 'primary', 'blue'];
        const vars = getComponentVars('button');

        for (let i = 0; i < testColors.length; i++) {
            const color = testColors[i];
            let colors;
            let element;
            let wrapper;

            props[prop] = true;

            wrapper = mount(cloneElement(<Button color={color} />, props));
            colors = getComponentColors('button', wrapper.props());

            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.props().color).toBe(color);
            expect(wrapper.props()[prop]).toBeTruthy();

            if (prop === 'clear' || prop === 'outline') {
                expect(element).toHaveStyleRule('background', 'transparent');
            } else {
                expect(element).toHaveStyleRule('background', removeSpaces(colors.bgColor));
            }
            if (prop === 'clear') {
                expect(element).toHaveStyleRule('border', `solid ${vars.borderWidth}px transparent`);
            } else if (prop === 'outline') {
                expect(element).toHaveStyleRule('border-color', colors.borderColor);
            }

            if (prop !== 'gradient') {
                expect(element).toHaveStyleRule('background', colors.hoverBgColor, { target: ':hover' });
                expect(element).toHaveStyleRule('background', colors.activeBgColor, { target: ':active' });
            }

            expect(element).toHaveStyleRule('color', colors.textColor);
            expect(element).toHaveStyleRule('color', colors.hoverTextColor, { target: ':hover' });
            expect(element).toHaveStyleRule('color', colors.activeTextColor, { target: ':active' });
            expect(element).toHaveStyleRule('box-shadow', `0 0 0 ${vars.focusGlowRadius} ${removeSpaces(colors.focusGlowColor)}`, { target: ':focus' });
        }
    });
}

const responsive = {
    xxs: {
        color: 'blue',
        border: true,
        expand: true,
        glow: true,
        rounded: true,
        size: 'xxs'
    },
    xs: {
        color: 'cyan',
        border: true,
        expand: true,
        glow: true,
        rounded: true,
        size: 'xs'
    },
    sm: {
        color: 'green',
        border: true,
        expand: true,
        glow: true,
        rounded: true,
        size: 'sm'
    },
    md: {
        color: 'red',
        border: true,
        expand: true,
        glow: true,
        rounded: true,
        size: 'md'
    },
    lg: {
        color: 'yellow',
        border: true,
        expand: true,
        glow: true,
        rounded: true,
        size: 'lg'
    }
}

const theme = {
    components: {
        button: {
            borderRadius: 5,
            borderWidth: '1rem',
            color: 'red',
            compactMultiplier: 10,
            fontFamily: 'Roboto',
            fontSize: '5rem',
            fontWeight: 900,
            glowRadius: '1px',
            glowSpread: '5',
            glowX: 1,
            glowY: '2rem',
            paddingBottom: '50px',
            paddingLeft: .25,
            paddingRight: '2rem',
            paddingTop: 0,
            wideMultiplier: 12
        }
    }
};

const ButtonWithChanges = () => (
    <FabulaProvider theme={theme}>
        <Button glow={true} />
    </FabulaProvider>
)

const ResponsiveButton = () => (
    <FabulaProvider>
        <ResponsiveProvider>
            <Button on={{
                xxs: responsive.xxs,
                xs: responsive.xs,
                sm: responsive.sm,
                md: responsive.md,
                lg: responsive.lg,
            }} />
        </ResponsiveProvider>
    </FabulaProvider>
)

describe('Button Component', () => {
    describe('Basic', () => {
        it('Should create', () => {
            const { container } = render(<Button />);

            expect(container).toBeTruthy();
        });

        it('Should have a defined structure', () => {
            const { container } = render(<Button />);
            const anchorElement = container.querySelector('a.fab-button');
            const buttonElement = container.querySelector('button.fab-button');

            expect(anchorElement).toBeFalsy();
            expect(buttonElement).toBeTruthy();

            // Check data-fab-component attribute
            expect(buttonElement.getAttribute('data-fab-component')).toBe('button');
        });

        it('Should have a label', () => {
            const { container } = render(<Button label="Label" />);

            expect(container.textContent).toBe('Label');
        });

        it('Should have inner content as label', () => {
            const { container } = render(<Button>Label</Button>);

            expect(container.textContent).toBe('Label');
        });

        it('Should have an anchor', () => {
            const { container } = render(<Button href="href" rel="rel" target="target" />);
            const anchorElement = container.querySelector('a.fab-button');
            const buttonElement = container.querySelector('button.fab-button');

            expect(anchorElement.getAttribute('href')).toBe('href');
            expect(anchorElement.getAttribute('rel')).toBe('rel');
            expect(anchorElement.getAttribute('target')).toBe('target');
            expect(buttonElement).toBeFalsy();
        });
    });

    describe('Props', () => {
        it('Should set border prop', () => {
            const testColors = ['', 'primary', 'blue'];
            const vars = getComponentVars('button');

            for (let i = 0; i < testColors.length; i++) {
                const color = testColors[i];
                const wrapper = mount(<Button border={true} color={color} />);
                const colors = getComponentColors('button', wrapper.props());
                const element = wrapper.find('.fab-button').getDOMNode();

                expect(wrapper.prop('border')).toBe(true);
                expect(wrapper.prop('color')).toBe(color);
                expect(element).toHaveStyleRule('border', `solid ${vars.borderWidth}px transparent`);

                if (color) {
                    expect(element).toHaveStyleRule('border-color', colors.borderColor);
                }
            }
        });

        it('Should set circle prop', () => {
            const vars = getComponentVars('button');
            let element;
            let style;
            let wrapper;

            // Default: circle false
            wrapper = mount(<Button />);

            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('circle')).toBeFalsy();
            expect(element).toHaveStyleRule('border-radius', vars.borderRadius);

            // Circle true
            wrapper = mount(<Button circle={true} />);

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('circle')).toBe(true);
            expect(style.getPropertyValue('border-radius')).toBe('50%');
        });

        describe('Color props', () => {
            it('Should set color prop', () => {
                const testColors = ['', 'primary', 'blue', 'xsei'];
                const vars = getComponentVars('button');
                let element;
                let colors;
                let wrapper;

                for (let i = 0; i < testColors.length; i++) {
                    const color = testColors[i];

                    wrapper = mount(<Button color={color} />);
                    colors = getComponentColors('button', wrapper.props());

                    element = wrapper.find('.fab-button').getDOMNode();

                    expect(wrapper.prop('color')).toBe(color);
                    expect(element).toHaveStyleRule('background', colors.bgColor);
                    expect(element).toHaveStyleRule('color', colors.textColor);
                    expect(element).toHaveStyleRule('background', colors.hoverBgColor, { target: ':hover' });
                    expect(element).toHaveStyleRule('color', colors.hoverTextColor, { target: ':hover' });
                    expect(element).toHaveStyleRule('background', colors.activeBgColor, { target: ':active' });
                    expect(element).toHaveStyleRule('color', colors.activeTextColor, { target: ':active' });
                    expect(element).toHaveStyleRule('box-shadow', `0 0 0 ${vars.focusGlowRadius} ${removeSpaces(colors.focusGlowColor)}`, { target: ':focus' });
                }
            });

            testColorUtil('clear');
            testColorUtil('faded');
            testColorUtil('gradient');
            testColorUtil('invert');
            testColorUtil('lighten');
            testColorUtil('outline');
        });

        it('Should set compact prop', () => {
            const vars = getComponentVars('button');
            let element;
            let wrappers = [];

            // Default: compact false
            wrappers[0] = mount(<Button />);
            element = wrappers[0].find('.fab-button').getDOMNode();

            expect(wrappers[0].prop('compact')).toBeFalsy();
            expect(element).toHaveStyleRule('padding-left', vars.paddingLeft);
            expect(element).toHaveStyleRule('padding-right', vars.paddingRight);

            // Compact true
            wrappers[1] = mount(<Button compact={true} />);

            element = wrappers[1].find('.fab-button').getDOMNode();

            expect(wrappers[1].prop('compact')).toBe(true);
            expect(element).toHaveStyleRule('padding-left', `calc(${vars.paddingLeft} * ${vars.compactMultiplier})`);
            expect(element).toHaveStyleRule('padding-right', `calc(${vars.paddingRight} * ${vars.compactMultiplier})`);
        });

        it('Should set disabled attribute', () => {
            const vars = getComponentVars('button');
            let element;
            let style;
            let wrapper;

            // Default: disabled false
            wrapper = mount(<Button />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('disabled')).toBeFalsy();
            expect(element).not.toHaveAttribute('disabled');
            expect(element).toHaveStyleRule('cursor', 'pointer');
            expect(element).not.toHaveStyleRule('opacity');
            expect(element).not.toHaveStyleRule('pointer-events');
            expect(element).not.toHaveStyleRule('user-select');

            // Disabled true
            wrapper = mount(<Button disabled={true} />);

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('disabled')).toBe(true);
            expect(element).toHaveAttribute('disabled');
            expect(style.getPropertyValue('cursor')).toBe('default');
            expect(style.getPropertyValue('opacity')).toBe(`${vars.disabledOpacity}`);
            expect(style.getPropertyValue('pointer-events')).toBe('none');
            expect(style.getPropertyValue('user-select')).toBe('none');
        });

        it('Should set expand prop', () => {
            const vars = getComponentVars('button');
            let element;
            let wrapper;

            // Default: expand false
            wrapper = mount(<Button />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('expand')).toBeFalsy();
            expect(element).toHaveStyleRule('padding-left', vars.paddingLeft);
            expect(element).toHaveStyleRule('padding-right', vars.paddingRight);
            expect(element).not.toHaveStyleRule('width');

            // Expand true
            wrapper = mount(<Button expand={true} />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('expand')).toBe(true);
            expect(element).toHaveStyleRule('padding-left', `calc(${vars.paddingLeft} * ${vars.compactMultiplier})`);
            expect(element).toHaveStyleRule('padding-right', `calc(${vars.paddingRight} * ${vars.compactMultiplier})`);
            expect(element).toHaveStyleRule('width', '100%');
        });

        it('Should set glow prop', () => {
            const { glowRadius, glowSpread, glowX, glowY } = getComponentVars('button');
            let colors;
            let element;
            let wrapper;

            // Default: glow false
            wrapper = mount(<Button />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('glow')).toBeFalsy();
            expect(element).not.toHaveStyleRule('box-shadow');

            // Glow true
            wrapper = mount(<Button glow={true} />);
            colors = getComponentColors('button', wrapper.props());
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('glow')).toBe(true);
            expect(element).toHaveStyleRule('box-shadow', `${glowX} ${glowY} ${glowRadius} ${glowSpread} ${removeSpaces(colors.glowColor)}`);
        });

        it('Should set rounded prop', () => {
            const { borderRadius } = getComponentVars('button');
            let element;
            let wrapper;

            // Default: rounded false
            wrapper = mount(<Button />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('rounded')).toBeFalsy();
            expect(element).toHaveStyleRule('border-radius', borderRadius);

            // Default: rounded true
            wrapper = mount(<Button rounded={true} />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('rounded')).toBe(true);
            expect(element).toHaveStyleRule('border-radius', '999px');
        });

        it('Should set size prop', () => {
            const { fontSize, height, sizeMultipliers } = getComponentVars('button');
            const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
            let lastMultiplier;

            for (let i = 0; i < sizes.length; i++) {
                const size = sizes[i];
                const multiplier = sizeMultipliers[size || 'md'];
                const wrapper = mount(<Button circle={true} size={size} />);
                const element = wrapper.find('.fab-button').getDOMNode();

                expect(wrapper.prop('size')).toBe(size);
                expect(element).toHaveStyleRule('font-size', `calc(${fontSize} * ${multiplier})`);
                expect(element).toHaveStyleRule('height', `calc(${height} * ${multiplier})`);

                if (lastMultiplier) {
                    expect(lastMultiplier < multiplier).toBeTruthy();
                }

                lastMultiplier = multiplier;
            }
        });

        it('Should set wide prop', () => {
            const vars = getComponentVars('button');
            let element;
            let wrapper;

            // Default: compact false
            wrapper = mount(<Button />);
            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('wide')).toBeFalsy();
            expect(element).toHaveStyleRule('padding-left', vars.paddingLeft);
            expect(element).toHaveStyleRule('padding-right', vars.paddingRight);

            // Compact true
            wrapper = mount(<Button wide={true} />);

            element = wrapper.find('.fab-button').getDOMNode();

            expect(wrapper.prop('wide')).toBe(true);
            expect(element).toHaveStyleRule('padding-left', `calc(${vars.paddingLeft} * ${vars.wideMultiplier})`);
            expect(element).toHaveStyleRule('padding-right', `calc(${vars.paddingRight} * ${vars.wideMultiplier})`);
        });
    });

    // Events
    describe('Events', () => {
        it('Should call onClick', async done => {
            const mockCallBack = jest.fn();
            let component;

            await act(async () => {
                component = await render(<Button onClick={mockCallBack} />);

                fireEvent.click(component.container.querySelector('.fab-button'), new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                }));
            });

            setTimeout(() => {
                expect(mockCallBack.mock.calls.length).toEqual(1);
                done();
            }, 1000);
        });
    });

    // Utils
    testUtils({
        component: <Button />,
        componentClassName: '.fab-button',
        provider: <UtilsProvider />
    });

    // Responsive
    describe('Responsive', () => {
        it('Should change props - on', () => {
            const { fontSize, glowRadius, glowSpread, glowX, glowY, sizeMultipliers } = getComponentVars('button');
            const { breakpoints } = getGlobalVars();
            let element;
            let wrapper;

            // Default: compact false
            wrapper = mount(<ResponsiveButton />);
            element = wrapper.find('.fab-button').getDOMNode();

            for (let i = 0; i < Object.keys(breakpoints).length; i++) {
                const current = Object.keys(breakpoints)[i];
                const max = breakpoints[current];
                const multiplier = sizeMultipliers[current];
                const next = Object.keys(breakpoints)[i + 1];
                const min = (i < Object.keys(breakpoints).length - 1) ? breakpoints[next] : null;
                const media = min ? `(min-width: ${min}) and (max-width: ${max})` : `(max-width: ${max})`;
                let colors;

                if (responsive[current]) {
                    colors = getComponentColors('button', responsive[current]);

                    expect(element).not.toHaveStyleRule('background', Color(responsive[current].color).hex());
                    expect(element).not.toHaveStyleRule('border-color');
                    expect(element).not.toHaveStyleRule('border-radius');
                    expect(element).not.toHaveStyleRule('box-shadow');
                    expect(element).toHaveStyleRule('font-size', `calc(${fontSize} * 1)`);
                    expect(element).not.toHaveStyleRule('width');

                    expect(element).toHaveStyleRule('background', Color(responsive[current].color).hex(), { media });
                    expect(element).toHaveStyleRule('border', `solid 1px transparent`, { media });
                    expect(element).toHaveStyleRule('border-color', colors.borderColor, { media });
                    expect(element).toHaveStyleRule('border-radius', '999px', { media });
                    expect(element).toHaveStyleRule('box-shadow', `${glowX} ${glowY} ${glowRadius} ${glowSpread} ${removeSpaces(colors.glowColor)}`, { media });
                    expect(element).toHaveStyleRule('font-size', `calc(${fontSize} * ${multiplier})`, { media });
                    expect(element).toHaveStyleRule('width', '100%', { media });
                }
            }
        });
    });

    describe('Customization', () => {
        it('Should change css according to new theme', () => {
            const newThemeVars = theme.components.button;
            let element;
            let style;
            let wrapper = mount(<ButtonWithChanges />);

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(element).toHaveStyleRule('background', Color(newThemeVars.color).hex());
            expect(element).toHaveStyleRule('border-radius', `${newThemeVars.borderRadius}px`);
            expect(element).toHaveStyleRule('border', `solid ${newThemeVars.borderWidth} transparent`);
            expect(element).toHaveStyleRule('color', Color(getTextColor(newThemeVars.color, 'fill')).hex());
            expect(element).toHaveStyleRule('font-family', newThemeVars.fontFamily);
            expect(element).toHaveStyleRule('font-size', `calc(${newThemeVars.fontSize} * 1)`);
            expect(element).toHaveStyleRule('font-weight', `${newThemeVars.fontWeight}`);
            expect(element).toHaveStyleRule('padding-bottom', newThemeVars.paddingBottom);
            expect(element).toHaveStyleRule('padding-left', `${newThemeVars.paddingLeft}em`);
            expect(element).toHaveStyleRule('padding-right', newThemeVars.paddingRight);
            expect(element).toHaveStyleRule('padding-top', `${newThemeVars.paddingTop}`);
        });
    });
});