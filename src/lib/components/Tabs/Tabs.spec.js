import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Tab from '../Tab/Tab';
import Tabs from './Tabs';

const Example = () => (
    <Tabs scope="tab">
        <Tab active={true} name="tab1" />
        <Tab name="tab2" />
        <Tab name="tab3" />
    </Tabs>
)

describe('Tabs Component', () => {
    it('Should create', () => {
        const { container } = render(<Tabs />);

        expect(container).toBeTruthy();
    });

    it('Should have tabs as content', () => {
        const { container } = render(<Tabs><Tab /></Tabs>);
        const tabElement = container.querySelector('.fab-tab');

        expect(tabElement).toBeTruthy();
    });

    it('Should toggle visibility via tab', () => {
        const { container } = render(<Example />);
        const tab1 = container.querySelector('.fab-tab[data-name="tab1"]');
        const tab2 = container.querySelector('.fab-tab[data-name="tab2"]');
        const tab3 = container.querySelector('.fab-tab[data-name="tab3"]');

        expect(tab1.getAttribute('data-active')).toBe('true');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('false');

        fireEvent.click(tab2, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('true');
        expect(tab3.getAttribute('data-active')).toBe('false');

        fireEvent.click(tab3, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(tab1.getAttribute('data-active')).toBe('false');
        expect(tab2.getAttribute('data-active')).toBe('false');
        expect(tab3.getAttribute('data-active')).toBe('true');
    });
});