import React, { cloneElement } from 'react';
import Color from 'color';
import { mount } from 'enzyme';
import { fireEvent, render } from '@testing-library/react';

// Fabula
import { getComponentColors } from '@fabula/core/styles/methods/misc/getComponentColors';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';
import { UtilsProvider } from '../../providers/UtilsProvider';

// Component
import { Button } from './Button';

// Common tests
import { testUtils } from '../../../../tests/common/test-utils';

const testColorUtil = prop => {
    it(`Should set ${prop} prop`, () => {
        const props = {};
        let colors = [];
        let element;
        let style;
        let wrappers = [];

        // Default: no color
        props[prop] = true;

        wrappers[0] = mount(cloneElement(<Button />, props));
        colors[0] = getComponentColors('button', wrappers[0].props());

        element = wrappers[0].find('.fab-button').getDOMNode();
        style = getComputedStyle(element);

        expect(wrappers[0].props().color).toBeFalsy();
        expect(wrappers[0].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(style.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[0].bgColor);
        }

        if (prop === 'clear') {
            expect(style.getPropertyValue('border-color')).toBe('transparent');
        } else if (prop === 'outline') {
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors[0].borderColor);
        }

        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[0].textColor);

        // Color + theme color
        props.color = 'primary';
        props[prop] = true;

        wrappers[1] = mount(cloneElement(<Button />, props));
        colors[1] = getComponentColors('button', wrappers[1].props());

        element = wrappers[1].find('.fab-button').getDOMNode();
        style = getComputedStyle(element);

        expect(wrappers[1].props().color).toBe('primary');
        expect(wrappers[1].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(style.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[1].bgColor);
        }

        if (prop === 'clear') {
            expect(style.getPropertyValue('border-color')).toBe('transparent');
        } else if (prop === 'outline') {
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors[1].borderColor);
        }

        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[1].textColor);


        // Color + custom color
        props.color = 'blue';
        props[prop] = true;

        wrappers[2] = mount(cloneElement(<Button />, props));
        colors[2] = getComponentColors('button', wrappers[2].props());

        element = wrappers[2].find('.fab-button').getDOMNode();
        style = getComputedStyle(element);

        expect(wrappers[2].props().color).toBe('blue');
        expect(wrappers[2].props()[prop]).toBeTruthy();

        if (prop === 'clear' || prop === 'outline') {
            expect(style.getPropertyValue('background-color')).toBe('transparent');
        } else {
            expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors[2].bgColor);
        }

        if (prop === 'clear') {
            expect(style.getPropertyValue('border-color')).toBe('transparent');
        } else if (prop === 'outline') {
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors[2].borderColor);
        }

        expect(Color(style.getPropertyValue('color')).hex()).toBe(colors[2].textColor);
    });
}

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
            const vars = getComponentVars('button');
            let element;
            let colors
            let style;
            let wrapper;

            // Border true + no color
            wrapper = mount(<Button border={true} />);
            colors = getComponentColors('button', wrapper.props());

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('border')).toBe(true);
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);
            expect(style.getPropertyValue('border-width')).toBe(`${vars.borderWidth}px`);

            // Border true + primary color
            wrapper = mount(<Button border={true} color="primary" />);
            colors = getComponentColors('button', wrapper.props());

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('border')).toBe(true);
            expect(wrapper.prop('color')).toBe('primary');
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);
            expect(style.getPropertyValue('border-width')).toBe(`${vars.borderWidth}px`);

            // Border true + custom color
            wrapper = mount(<Button border={true} color="blue" />);
            colors = getComponentColors('button', wrapper.props());

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('border')).toBe(true);
            expect(wrapper.prop('color')).toBe('blue');
            expect(Color(style.getPropertyValue('border-color')).hex()).toBe(colors.borderColor);
            expect(style.getPropertyValue('border-width')).toBe(`${vars.borderWidth}px`);

            // No border
            wrapper = mount(<Button border={false} />);
            colors = getComponentColors('button', wrapper.props());

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('border')).toBe(false);
            expect(wrapper.prop('color')).toBeFalsy();
            expect(style.getPropertyValue('border-color')).toBe('transparent');
            expect(style.getPropertyValue('border-width')).toBe(`${vars.borderWidth}px`);
        });

        it('Should set circle prop', () => {
            const vars = getComponentVars('button');
            let element;
            let style;
            let wrapper;

            // Default: circle false
            wrapper = mount(<Button />);

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('circle')).toBeFalsy();
            expect(style.getPropertyValue('border-radius')).toBe(vars.borderRadius);

            // Circle true
            wrapper = mount(<Button circle={true} />);

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('circle')).toBe(true);
            expect(style.getPropertyValue('border-radius')).toBe('50%');
        });

        describe('Color props', () => {
            it('Should set color prop', () => {
                let element;
                let colors;
                let style;
                let wrapper;
    
                // Default: no color
                wrapper = mount(<Button />);
                colors = getComponentColors('button', wrapper.props());
    
                element = wrapper.find('.fab-button').getDOMNode();
                style = getComputedStyle(element);
    
                expect(wrapper.prop('color')).toBeFalsy();
                expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
                expect(Color(style.getPropertyValue('color')).hex()).toBe(colors.textColor);
    
                // Color + theme color
                wrapper = mount(<Button color="primary" />);
                colors = getComponentColors('button', wrapper.props());
    
                element = wrapper.find('.fab-button').getDOMNode();
                style = getComputedStyle(element);
    
                expect(wrapper.prop('color')).toBe('primary');
                expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
                expect(Color(style.getPropertyValue('color')).hex()).toBe(colors.textColor);
    
                // Color + custom color
                wrapper = mount(<Button color="blue" />);
                colors = getComponentColors('button', wrapper.props());
    
                element = wrapper.find('.fab-button').getDOMNode();
                style = getComputedStyle(element);
    
                expect(wrapper.prop('color')).toBe('blue');
                expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
                expect(Color(style.getPropertyValue('color')).hex()).toBe(colors.textColor);
    
                // Should not break when not using a real color
                wrapper = mount(<Button color="xsei" />);
                colors = getComponentColors('button', wrapper.props());
    
                element = wrapper.find('.fab-button').getDOMNode();
                style = getComputedStyle(element);
    
                expect(wrapper.prop('color')).toBe('xsei');
                expect(Color(style.getPropertyValue('background-color')).hex()).toBe(colors.bgColor);
                expect(Color(style.getPropertyValue('color')).hex()).toBe(colors.textColor);
            });

            testColorUtil('clear');
            testColorUtil('faded');
            testColorUtil('invert');
            testColorUtil('lighten');
            testColorUtil('outline');
        });

        it('Should set compact prop', () => {
            const vars = getComponentVars('button');
            let element;
            let styles = [];
            let wrappers = [];

            // Default: compact false
            wrappers[0] = mount(<Button />);

            element = wrappers[0].find('.fab-button').getDOMNode();
            styles[0] = getComputedStyle(element);

            expect(wrappers[0].prop('compact')).toBeFalsy();
            expect(styles[0].getPropertyValue('padding-left')).toBe(vars.paddingLeft);
            expect(styles[0].getPropertyValue('padding-right')).toBe(vars.paddingRight);

            // Compact true
            wrappers[1] = mount(<Button compact={true} />);

            element = wrappers[1].find('.fab-button').getDOMNode();
            styles[1] = getComputedStyle(element);

            expect(wrappers[1].prop('compact')).toBe(true);
            // TODO: fix this
            // expect(styles[1].getPropertyValue('padding-left')).toBe(`calc(${vars.paddingLeft} * ${vars.compactMultiplier})`);
            // expect(styles[1].getPropertyValue('padding-right')).toBe(`calc(${vars.paddingRight} * ${vars.compactMultiplier})`);
        });

        it('Should set disabled attribute', () => {
            const vars = getComponentVars('button');
            let element;
            let style;
            let wrapper;

            // Default: disabled false
            wrapper = mount(<Button />);

            element = wrapper.find('.fab-button').getDOMNode();
            style = getComputedStyle(element);

            expect(wrapper.prop('disabled')).toBeFalsy();
            expect(element).not.toHaveAttribute('disabled');
            expect(style.getPropertyValue('cursor')).toBe('pointer');
            expect(style.getPropertyValue('opacity')).toBeFalsy();
            expect(style.getPropertyValue('pointer-events')).toBe('');
            expect(style.getPropertyValue('user-select')).toBe('');

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
            let styles = [];
            let wrappers = [];

            // Default: expand false
            wrappers[0] = mount(<Button />);

            element = wrappers[0].find('.fab-button').getDOMNode();
            styles[0] = getComputedStyle(element);

            expect(wrappers[0].prop('expand')).toBeFalsy();
            expect(styles[0].getPropertyValue('width')).toBe('');

            // Expand true
            wrappers[0] = mount(<Button expand={true} />);

            element = wrappers[0].find('.fab-button').getDOMNode();
            styles[0] = getComputedStyle(element);

            expect(wrappers[0].prop('expand')).toBe(true);
            expect(styles[0].getPropertyValue('width')).toBe('100%');
        });

        
    });

    // Utils
    testUtils({
        component: <Button />,
        componentClassName: '.fab-button',
        provider: <UtilsProvider />
    })

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Button onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});