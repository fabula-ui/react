import React from 'react';
import { render } from '@testing-library/react';

// Component
import List from './List';
import ListHeader from '../ListHeader/ListHeader';
import ListItem from '../ListItem/ListItem';

describe('List Component', () => {
    it('Should create', () => {
        const { container } = render(<List />);

        expect(container).toBeTruthy();
    });

    it('Should have a defined structure', () => {
        const { container } = render(<List />);
        const listElement = container.querySelector('.fab-list');
        const wrapperElement = container.querySelector('.fab-list-wrapper');

        expect(listElement).toBeTruthy();
        expect(wrapperElement).toBeTruthy();
    });

    it('Should have components as inner content', () => {
        const { container } = render(<List><ListHeader /><ListItem /></List>);
        const headerElement = container.querySelector('.fab-list-header');
        const itemElement = container.querySelector('.fab-list-item');
        
        expect(headerElement).toBeTruthy();
        expect(itemElement).toBeTruthy();
    });

    it('Should set color', () => {
        const { container } = render(<List color="blue" />);
        const listElement = container.querySelector('.fab-list-wrapper');
        const listStyle = window.getComputedStyle(listElement);

        expect(listStyle.backgroundColor).toBe('blue');
    });
});