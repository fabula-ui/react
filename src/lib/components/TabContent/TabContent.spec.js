import React, { Fragment } from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Tab from '../Tab/Tab';
import TabContent from './TabContent';
import Tabs from '../Tabs/Tabs';

const Example = () => (
    <Fragment>
        <Tabs scope="tab">
            <Tab active={true} name="tab1" />
            <Tab name="tab2" />
            <Tab name="tab3" />
        </Tabs>
        <TabContent active={true} name="tab1" scope="tab" />
        <TabContent name="tab2" scope="tab" />
        <TabContent name="tab3" scope="tab" />
    </Fragment>
)

describe('TabContent Component', () => {
    it('Should create', () => {
        const { container } = render(<TabContent />);

        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<TabContent>Content</TabContent>);
        const element = container.querySelector('.fab-tab-content');

        expect(element.textContent).toBe('Content');
    });

    it('Should have a scope', () => {
        const { container } = render(<TabContent scope="scope" />);
        const element = container.querySelector('.fab-tab-content');

        expect(element.getAttribute('data-scope')).toBe('scope');
    });

    it('Should toggle visibility via tab', () => {
        const { container } = render(<Example />);
        const content1 = container.querySelector('.fab-tab-content[data-name="tab1"]');
        const content2 = container.querySelector('.fab-tab-content[data-name="tab2"]');
        const content3 = container.querySelector('.fab-tab-content[data-name="tab3"]');
        const tab1 = container.querySelector('.fab-tab[data-name="tab1"]');
        const tab2 = container.querySelector('.fab-tab[data-name="tab2"]');
        const tab3 = container.querySelector('.fab-tab[data-name="tab3"]');

        expect(content1.getAttribute('data-active')).toBe('true');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(tab1.getAttribute('data-active')).toBe('true');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('false');

        fireEvent.click(tab2, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('true');
        expect(content3.getAttribute('data-active')).toBe('false');

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('true');
        expect(tab3.getAttribute('data-active')).toBe('false');

        fireEvent.click(tab3, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(content1.getAttribute('data-active')).toBe('false');
        expect(content2.getAttribute('data-active')).toBe('false');
        expect(content3.getAttribute('data-active')).toBe('true');

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('true');
    });
});