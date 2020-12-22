import { React, cloneElement } from 'react';
import { mount } from 'enzyme';

// Fabula
import { UtilsProvider } from '../../src/lib/providers/UtilsProvider';

export const testUtils = params => {
    const { component, componentClassName, provider, wrapperClassName } = params;

    it('Should set al prop', () => {
        const wrapper = mount(cloneElement(provider, { children: [cloneElement(component, { al: 'center', key: 'child' })] }));
        const element = wrapper.find(componentClassName);
        const style = getComputedStyle(element.getDOMNode());

        expect(style.getPropertyValue('align-items')).toBe('center');
        expect(style.getPropertyValue('justify-content')).toBe('center');
    });

    // describe('Utils', () => {
    //     describe('Alignment util', () => {
    //         it('Should set al prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { al: 'center' })}</UtilsProvider>);
    //             const element = wrapper.find(componentClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('align-items')).toBe('center');
    //             expect(style.getPropertyValue('justify-content')).toBe('center');
    //         });

    //         it('Should set alH prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // Default - flex row
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { alH: 'center' })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('justify-content')).toBe('center');

    //             // Default - flex column
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { alH: 'center', direction: 'column' })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('align-items')).toBe('center');
    //         });

    //         it('Should set alV prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // Default - flex row
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { alV: 'center' })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('align-items')).toBe('center');

    //             // Default - flex column
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { alV: 'center', direction: 'column' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('justify-content')).toBe('center');
    //         });
    //     });

    //     describe('Display util', () => {
    //         it('Should set d prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { d: 'inline-block' })}</UtilsProvider>);
    //             const element = wrapper.find(wrapperClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('display')).toBe('inline-block');
    //         });
    //     });

    //     describe('Flex util', () => {
    //         it('Should set basis prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { basis: '50%' })}</UtilsProvider>);
    //             const element = wrapper.find(wrapperClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-basis')).toBe('50%');
    //         });

    //         it('Should set direction prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { direction: 'column', flex: true })}</UtilsProvider>);
    //             const element = wrapper.find(componentClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-direction')).toBe('column');
    //         });

    //         it('Should set flex prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // Boolean
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { flex: true })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('display')).toBe('flex');

    //             // String
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { flex: '1 0 auto' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex')).toBe('1 0 auto');
    //         });

    //         it('Should set flow prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // Horizontal
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { flex: true, flow: 'horizontal' })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-direction')).toBe('row');

    //             // H
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { flex: true, flow: 'h' })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-direction')).toBe('row');

    //             // Vertical
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { flex: true, flow: 'vertical' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-direction')).toBe('column');

    //             // V
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { flex: true, flow: 'v' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-direction')).toBe('column');
    //         });

    //         it('Should set grow prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { grow: 1 })}</UtilsProvider>);
    //             const element = wrapper.find(wrapperClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-grow')).toBe('1');
    //         });

    //         it('Should set shrink prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { shrink: 1 })}</UtilsProvider>);
    //             const element = wrapper.find(wrapperClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-shrink')).toBe('1');
    //         });

    //         it('Should set wrap prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // False
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { wrap: false })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-wrap')).toBe('');

    //             // True
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { wrap: true })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('flex-wrap')).toBe('wrap');
    //         });
    //     });

    //     describe('Margin util', () => {
    //         it('Should set m prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { m: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { m: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { m: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin')).toBe('0px');
    //         });

    //         it('Should set mb prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { mb: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-bottom')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { mb: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-bottom')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { mb: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-bottom')).toBe('0px');
    //         });

    //         it('Should set ml prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { ml: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-left')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { ml: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-left')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { ml: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-left')).toBe('0px');
    //         });

    //         it('Should set mr prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { mr: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-right')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { mr: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-right')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { mr: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-right')).toBe('0px');
    //         });

    //         it('Should set mt prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { mt: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-top')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { mt: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-top')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { mt: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-top')).toBe('0px');
    //         });

    //         it('Should set mx prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { mx: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-left')).toBe('1rem');
    //             expect(style.getPropertyValue('margin-right')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { mx: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-left')).toBe('15px');
    //             expect(style.getPropertyValue('margin-right')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { mx: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-left')).toBe('0px');
    //             expect(style.getPropertyValue('margin-right')).toBe('0px');
    //         });

    //         it('Should set my prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { my: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-bottom')).toBe('1rem');
    //             expect(style.getPropertyValue('margin-top')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { my: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-bottom')).toBe('15px');
    //             expect(style.getPropertyValue('margin-top')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { my: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('margin-bottom')).toBe('0px');
    //             expect(style.getPropertyValue('margin-top')).toBe('0px');
    //         });
    //     });

    //     describe('Overflow util', () => {
    //         it('Should set ov prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { ov: 'hidden' })}</UtilsProvider>);
    //             const element = wrapper.find(componentClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('overflow')).toBe('hidden');
    //         });

    //         it('Should set ovX prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { ovX: 'hidden' })}</UtilsProvider>);
    //             const element = wrapper.find(componentClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('overflow-x')).toBe('hidden');
    //         });

    //         it('Should set ovY prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { ovY: 'hidden' })}</UtilsProvider>);
    //             const element = wrapper.find(componentClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('overflow-y')).toBe('hidden');
    //         });
    //     });

    //     describe('Padding util', () => {
    //         it('Should set p prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { p: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { p: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { p: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding')).toBe('0px');
    //         });

    //         it('Should set pb prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { pb: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-bottom')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { pb: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-bottom')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { pb: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-bottom')).toBe('0px');
    //         });

    //         it('Should set pl prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { pl: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-left')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { pl: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-left')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { pl: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-left')).toBe('0px');
    //         });

    //         it('Should set pr prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { pr: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-right')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { pr: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-right')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { pr: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-right')).toBe('0px');
    //         });

    //         it('Should set pt prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { pt: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-top')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { pt: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-top')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { pt: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-top')).toBe('0px');
    //         });

    //         it('Should set px prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { px: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-left')).toBe('1rem');
    //             expect(style.getPropertyValue('padding-right')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { px: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-left')).toBe('15px');
    //             expect(style.getPropertyValue('padding-right')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { px: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-left')).toBe('0px');
    //             expect(style.getPropertyValue('padding-right')).toBe('0px');
    //         });

    //         it('Should set py prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { py: 1 })}</UtilsProvider>);
    //             element = wrappers[0].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-bottom')).toBe('1rem');
    //             expect(style.getPropertyValue('padding-top')).toBe('1rem');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { py: '15px' })}</UtilsProvider>);
    //             element = wrappers[1].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-bottom')).toBe('15px');
    //             expect(style.getPropertyValue('padding-top')).toBe('15px');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { py: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(componentClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('padding-bottom')).toBe('0px');
    //             expect(style.getPropertyValue('padding-top')).toBe('0px');
    //         });
    //     });

    //     describe('Size util', () => {
    //         it('Should set height prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { height: 30 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('height')).toBe('30px');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { height: '2rem' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('height')).toBe('2rem');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { height: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('height')).toBe('0px');
    //         });

    //         it('Should set max height prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { maxHeight: 30 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('max-height')).toBe('30px');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { maxHeight: '3rem' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('max-height')).toBe('2rem');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { maxHeight: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('max-height')).toBe('0');
    //         });

    //         it('Should set max width prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { maxWidth: 30 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('max-width')).toBe('30px');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { maxWidth: '2rem' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('max-width')).toBe('2rem');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { maxWidth: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('max-width')).toBe('0');
    //         });

    //         it('Should set min height prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { minHeight: 30 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('min-height')).toBe('30px');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { minHeight: '2rem' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('min-height')).toBe('2rem');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { minHeight: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('min-height')).toBe('0');
    //         });

    //         it('Should set min width prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { minWidth: 30 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('min-width')).toBe('30px');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { minWidth: '2rem' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('min-width')).toBe('2rem');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { minWidth: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('min-width')).toBe('0');
    //         });

    //         it('Should set width prop', () => {
    //             let element;
    //             let style;
    //             let wrappers = [];

    //             // No unit
    //             wrappers[0] = mount(<UtilsProvider>{cloneElement(component, { width: 30 })}</UtilsProvider>);
    //             element = wrappers[0].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('width')).toBe('30px');

    //             // With unit
    //             wrappers[1] = mount(<UtilsProvider>{cloneElement(component, { width: '2rem' })}</UtilsProvider>);
    //             element = wrappers[1].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('width')).toBe('2rem');

    //             // 0
    //             wrappers[2] = mount(<UtilsProvider>{cloneElement(component, { width: 0 })}</UtilsProvider>);
    //             element = wrappers[2].find(wrapperClassName);
    //             style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('width')).toBe('0px');
    //         });
    //     });

    //     describe('Visibility util', () => {
    //         it('Should set hidden prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { hidden: true })}</UtilsProvider>);
    //             const element = wrapper.find(wrapperClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('display')).toBe('none');
    //         });

    //         it('Should set visible prop', () => {
    //             const wrapper = mount(<UtilsProvider>{cloneElement(component, { visible: true })}</UtilsProvider>);
    //             const element = wrapper.find(wrapperClassName);
    //             const style = getComputedStyle(element.getDOMNode());

    //             expect(style.getPropertyValue('display')).not.toBe('none');
    //         });
    //     });
    // });
}