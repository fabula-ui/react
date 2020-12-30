import React, { cloneElement } from 'react';
import { mount } from 'enzyme';
import { matchers } from '@emotion/jest';
import { render } from '@testing-library/react';

// Fabula
import { getComponentColors } from '@fabula/core/styles/methods/misc/getComponentColors';
import { getComponentVars } from '@fabula/core/styles/methods/misc/getComponentVars';

// Component
import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';
import { getDirection } from '@fabula/core/styles/methods/misc/getDirection';

expect.extend(matchers);

// Base element
const BaseElement = props => {
    return (
        <ButtonGroup {...props}><Button {...props} /><Button {...props} /><Button {...props} /></ButtonGroup>
    )
}

const testColorUtil = prop => {
    it(`Should set ${prop} prop`, () => {
        const props = {};
        const testColors = ['#ccc', 'primary', 'blue'];

        props[prop] = true;

        for (let i = 0; i < testColors.length; i++) {
            const color = testColors[i];
            let colors;
            let wrapper;

            props.color = color;

            wrapper = mount(cloneElement(<BaseElement />, props));
            colors = getComponentColors('buttonGroup', wrapper.props());

            for (let j = 0; j < [0, 1, 2].length; j++) {
                const button = wrapper.find('.fab-button').at(j).getDOMNode();

                if (j < 2 || prop === 'outline') {
                    expect(getComputedStyle(button).getPropertyValue('border-right-color').toUpperCase()).toBe(colors.borderColor.toUpperCase());
                } else {
                    expect(getComputedStyle(button).getPropertyValue('border-right-color')).toBe('transparent');
                }
            }
        }
    });
}

describe('Button Group Component', () => {
    describe('Basic', () => {
        it('Should create', () => {
            const { container } = render(<ButtonGroup />);

            expect(container).toBeTruthy();
        });

        it('Should have a defined structure', () => {
            const { container } = render(<ButtonGroup />);
            const buttonGroupElement = container.querySelector('.fab-button-group');

            expect(buttonGroupElement).toBeTruthy();

            // Check data-fab-component attribute
            expect(buttonGroupElement.getAttribute('data-fab-component')).toBe('buttonGroup');
        });

        it('Should have buttons as children', () => {
            const { container } = render(<ButtonGroup><Button /><Button /><Button /></ButtonGroup>);
            const buttonElements = container.querySelectorAll('.fab-button');

            expect(buttonElements.length).toBe(3);
        });
    });

    describe('Props', () => {
        describe('Color props', () => {
            testColorUtil('clear');
            testColorUtil('faded');
            testColorUtil('invert');
            testColorUtil('lighten');
            testColorUtil('outline');
        });

        it('Should set divider prop', () => {
            // TODO: Add no color here
            const testColors = ['primary', 'blue'];

            for (let i = 0; i < testColors.length; i++) {
                const color = testColors[i];
                const wrapper = mount(<ButtonGroup color={color}><Button /><Button /><Button /></ButtonGroup>);
                const colors = getComponentColors('buttonGroup', wrapper.props());

                for (let j = 0; j < [0, 1, 2].length; j++) {
                    const button = wrapper.find('.fab-button').at(j).getDOMNode();

                    if (j < 2) {
                        expect(getComputedStyle(button).getPropertyValue('border-right-color')).toBe(colors.borderColor);
                    } else {
                        expect(getComputedStyle(button).getPropertyValue('border-right-color')).toBe('transparent');
                    }
                }
            }
        });

        it('Should set layout prop', () => {
            const buttonVars = getComponentVars('button');
            const options = ['h', 'horizontal', 'v', 'vertical'];

            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                const wrapper = mount(<ButtonGroup color="primary" layout={option}><Button /><Button /><Button /></ButtonGroup>);
                const element = wrapper.find('.fab-button-group').getDOMNode();
                const colors = getComponentColors('buttonGroup', wrapper.props());
                const direction = getDirection(option);
                expect(element).toHaveStyleRule('display', 'inline-flex');
                expect(element).toHaveStyleRule('flex-direction', direction);

                for (let j = 0; j < [0, 1, 2].length; j++) {
                    const button = wrapper.find('.fab-button').at(j).getDOMNode();

                    if (direction === 'row') {
                        expect(getComputedStyle(button).getPropertyValue('border-bottom-color')).toBe('transparent');
                    } else {
                        expect(getComputedStyle(button).getPropertyValue('border-right-color')).toBe('transparent');
                    }

                    if (j === 0) {
                        expect(getComputedStyle(button).getPropertyValue('border-radius')).toBe(buttonVars.borderRadius);

                        if (direction === 'row') {
                            expect(getComputedStyle(button).getPropertyValue('border-bottom-right-radius')).toBe('0');
                            expect(getComputedStyle(button).getPropertyValue('border-top-right-radius')).toBe('0');
                        } else {
                            expect(getComputedStyle(button).getPropertyValue('border-bottom-left-radius')).toBe('0');
                            expect(getComputedStyle(button).getPropertyValue('border-bottom-right-radius')).toBe('0');
                        }
                    }

                    if (j === 1) {
                        expect(getComputedStyle(button).getPropertyValue('border-radius')).toBe('0');
                    }

                    if (j === 2) {
                        expect(getComputedStyle(button).getPropertyValue('border-radius')).toBe(buttonVars.borderRadius);

                        if (direction === 'row') {
                            expect(getComputedStyle(button).getPropertyValue('border-bottom-left-radius')).toBe('0');
                            expect(getComputedStyle(button).getPropertyValue('border-top-left-radius')).toBe('0');
                        } else {
                            expect(getComputedStyle(button).getPropertyValue('border-top-left-radius')).toBe('0');
                            expect(getComputedStyle(button).getPropertyValue('border-top-right-radius')).toBe('0');
                        }
                    }

                    if (j < 2) {
                        if (direction === 'row') {
                            expect(getComputedStyle(button).getPropertyValue('border-right-color')).toBe(colors.borderColor);
                        } else {
                            expect(getComputedStyle(button).getPropertyValue('border-bottom-color')).toBe(colors.borderColor);
                        }
                    } else {
                        if (direction === 'row') {
                            expect(getComputedStyle(button).getPropertyValue('border-right-color')).toBe('transparent');
                        } else {
                            expect(getComputedStyle(button).getPropertyValue('border-bottom-color')).toBe('transparent');
                        }
                    }
                }
            }
        });
    });
});
