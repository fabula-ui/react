import { React, cloneElement } from 'react';
import { mount } from 'enzyme';

export const testUtils = params => {
    const { component, componentClassName, provider } = params;

    describe('Utils', () => {
        describe('Alignment util', () => {
            it('Should set al prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { al: 'center', key: 'child' })] }));
                const element = wrapper.find(componentClassName);
                const style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('align-items')).toBe('center');
                expect(style.getPropertyValue('justify-content')).toBe('center');
            });

            it('Should set alH prop', () => {
                let element;
                let style;
                let wrappers = [];

                // Default - flex row
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { alH: 'center', key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('justify-content')).toBe('center');

                // Default - flex column
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { alH: 'center', direction: 'column', key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('align-items')).toBe('center');
            });

            it('Should set alV prop', () => {
                let element;
                let style;
                let wrappers = [];

                // Default - flex row
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { alV: 'center', key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('align-items')).toBe('center');

                // Default - flex column
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { alV: 'center', direction: 'column', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('justify-content')).toBe('center');
            });
        });

        describe('Display util', () => {
            it('Should set d prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { d: 'inline-block', key: 'child' })] }));
                const style = getComputedStyle(wrapper.getDOMNode());

                expect(style.getPropertyValue('display')).toBe('inline-block');
            });
        });

        describe('Flex util', () => {
            it('Should set basis prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { basis: '50%', key: 'child' })] }));
                const style = getComputedStyle(wrapper.getDOMNode());

                expect(style.getPropertyValue('flex-basis')).toBe('50%');
            });

            it('Should set direction prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { direction: 'column', flex: true, key: 'child' })] }));
                const element = wrapper.find(componentClassName);
                const style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-direction')).toBe('column');
            });

            it('Should set flex prop', () => {
                let element;
                let style;
                let wrappers = [];

                // Boolean
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { flex: true, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('display')).toBe('flex');

                // String
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { flex: '1 0 auto', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex')).toBe('1 0 auto');
            });

            it('Should set flow prop', () => {
                let element;
                let style;
                let wrappers = [];

                // Horizontal
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { flex: true, flow: 'horizontal', key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-direction')).toBe('row');

                // H
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { flex: true, flow: 'h', key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-direction')).toBe('row');

                // Vertical
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { flex: true, flow: 'vertical', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-direction')).toBe('column');

                // V
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { flex: true, flow: 'v', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-direction')).toBe('column');
            });

            it('Should set grow prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { grow: 1, key: 'child' })] }));
                const style = getComputedStyle(wrapper.getDOMNode());

                expect(style.getPropertyValue('flex-grow')).toBe('1');
            });

            it('Should set shrink prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { shrink: 1, key: 'child' })] }));
                const style = getComputedStyle(wrapper.getDOMNode());

                expect(style.getPropertyValue('flex-shrink')).toBe('1');
            });

            it('Should set wrap prop', () => {
                let element;
                let style;
                let wrappers = [];

                // False
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { wrap: false, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-wrap')).toBe('');

                // True
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { wrap: true, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('flex-wrap')).toBe('wrap');
            });
        });

        describe('Margin util', () => {
            it('Should set m prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { m: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { m: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { m: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin')).toBe('0px');
            });

            it('Should set mb prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { mb: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin-bottom')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { mb: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin-bottom')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { mb: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin-bottom')).toBe('0px');
            });

            it('Should set ml prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { ml: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin-left')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { ml: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin-left')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { ml: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin-left')).toBe('0px');
            });

            it('Should set mr prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { mr: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { mr: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin-right')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { mr: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin-right')).toBe('0px');
            });

            it('Should set mt prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { mt: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { mt: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin-top')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { mt: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin-top')).toBe('0px');
            });

            it('Should set mx prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { mx: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin-left')).toBe('1rem');
                expect(style.getPropertyValue('margin-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { mx: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin-left')).toBe('15px');
                expect(style.getPropertyValue('margin-right')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { mx: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin-left')).toBe('0px');
                expect(style.getPropertyValue('margin-right')).toBe('0px');
            });

            it('Should set my prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { my: 1, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('margin-bottom')).toBe('1rem');
                expect(style.getPropertyValue('margin-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { my: '15px', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('margin-bottom')).toBe('15px');
                expect(style.getPropertyValue('margin-top')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { my: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('margin-bottom')).toBe('0px');
                expect(style.getPropertyValue('margin-top')).toBe('0px');
            });
        });

        describe('Overflow util', () => {
            it('Should set ov prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { ov: 'hidden', key: 'child' })] }));
                const element = wrapper.find(componentClassName);
                const style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('overflow')).toBe('hidden');
            });

            it('Should set ovX prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { ovX: 'hidden', key: 'child' })] }));
                const element = wrapper.find(componentClassName);
                const style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('overflow-x')).toBe('hidden');
            });

            it('Should set ovY prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { ovY: 'hidden', key: 'child' })] }));
                const element = wrapper.find(componentClassName);
                const style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('overflow-y')).toBe('hidden');
            });
        });

        describe('Padding util', () => {
            it('Should set p prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { p: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { p: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { p: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding')).toBe('0px');
            });

            it('Should set pb prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { pb: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-bottom')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { pb: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-bottom')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { pb: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-bottom')).toBe('0px');
            });

            it('Should set pl prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { pl: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-left')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { pl: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-left')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { pl: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-left')).toBe('0px');
            });

            it('Should set pr prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { pr: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { pr: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-right')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { pr: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-right')).toBe('0px');
            });

            it('Should set pt prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { pt: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { pt: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-top')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { pt: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-top')).toBe('0px');
            });

            it('Should set px prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { px: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-left')).toBe('1rem');
                expect(style.getPropertyValue('padding-right')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { px: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-left')).toBe('15px');
                expect(style.getPropertyValue('padding-right')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { px: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-left')).toBe('0px');
                expect(style.getPropertyValue('padding-right')).toBe('0px');
            });

            it('Should set py prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { py: 1, key: 'child' })] }));
                element = wrappers[0].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-bottom')).toBe('1rem');
                expect(style.getPropertyValue('padding-top')).toBe('1rem');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { py: '15px', key: 'child' })] }));
                element = wrappers[1].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-bottom')).toBe('15px');
                expect(style.getPropertyValue('padding-top')).toBe('15px');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { py: 0, key: 'child' })] }));
                element = wrappers[2].find(componentClassName);
                style = getComputedStyle(element.getDOMNode());

                expect(style.getPropertyValue('padding-bottom')).toBe('0px');
                expect(style.getPropertyValue('padding-top')).toBe('0px');
            });
        });

        describe('Size util', () => {
            it('Should set height prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { height: 30, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('height')).toBe('30px');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { height: '2rem', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('height')).toBe('2rem');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { height: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('height')).toBe('0px');
            });

            it('Should set max height prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { maxHeight: 30, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('max-height')).toBe('30px');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { maxHeight: '3rem', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('max-height')).toBe('3rem');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { maxHeight: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('max-height')).toBe('0');
            });

            it('Should set max width prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { maxWidth: 30, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('max-width')).toBe('30px');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { maxWidth: '2rem', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('max-width')).toBe('2rem');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { maxWidth: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('max-width')).toBe('0');
            });

            it('Should set min height prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { minHeight: 30, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('min-height')).toBe('30px');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { minHeight: '2rem', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('min-height')).toBe('2rem');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { minHeight: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('min-height')).toBe('0');
            });

            it('Should set min width prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { minWidth: 30, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('min-width')).toBe('30px');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { minWidth: '2rem', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('min-width')).toBe('2rem');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { minWidth: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('min-width')).toBe('0');
            });

            it('Should set width prop', () => {
                let element;
                let style;
                let wrappers = [];

                // No unit
                wrappers[0] = mount(cloneElement(provider, { children: [cloneElement(component, { width: 30, key: 'child' })] }));
                style = getComputedStyle(wrappers[0].getDOMNode());

                expect(style.getPropertyValue('width')).toBe('30px');

                // With unit
                wrappers[1] = mount(cloneElement(provider, { children: [cloneElement(component, { width: '2rem', key: 'child' })] }));
                style = getComputedStyle(wrappers[1].getDOMNode());

                expect(style.getPropertyValue('width')).toBe('2rem');

                // 0
                wrappers[2] = mount(cloneElement(provider, { children: [cloneElement(component, { width: 0, key: 'child' })] }));
                style = getComputedStyle(wrappers[2].getDOMNode());

                expect(style.getPropertyValue('width')).toBe('0px');
            });
        });

        describe('Visibility util', () => {
            it('Should set hidden prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { hidden: true, key: 'child' })] }));
                const style = getComputedStyle(wrapper.getDOMNode());

                expect(style.getPropertyValue('display')).toBe('none');
            });

            it('Should set visible prop', () => {
                const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { visible: true, key: 'child' })] }));
                const style = getComputedStyle(wrapper.getDOMNode());

                expect(style.getPropertyValue('display')).not.toBe('none');
            });
        });
    });
}