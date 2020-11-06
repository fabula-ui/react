import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import List from '../List/List';
import ListItem from './ListItem';

const ListExample = props => {
    const { childProps, parentProps } = props;
    return (
        <List {...parentProps}>
            <ListItem {...childProps}>Item</ListItem>
        </List>
    )
}

describe('List Item Component', () => {
    it('Should create', () => {
        const { container } = render(<ListItem />);
        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<ListItem>Content</ListItem>);
        const itemElement = container.querySelector('.fab-list-item');

        expect(itemElement.textContent).toBe('Content');
    });

    it('Should set color', () => {
        const { container } = render(<ListItem color="blue" />);
        const itemElement = container.querySelector('.fab-list-item');
        const itemStyle = window.getComputedStyle(itemElement);

        expect(itemStyle.backgroundColor).toBe('blue');
    });

    it('Should be an anchor', () => {
        const { container } = render(<ListItem href="href" label="Label" />);
        const anchorElement = container.querySelector('a.fab-list-item');
        const buttonElement = container.querySelector('button.fab-list-item');
        const divElement = container.querySelector('div.fab-list-item');

        expect(anchorElement).toBeTruthy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - button prop', () => {
        const { container } = render(<ListItem button={true} label="Label"></ListItem>);
        const anchorElement = container.querySelector('a.fab-list-item');
        const buttonElement = container.querySelector('button.fab-list-item');
        const divElement = container.querySelector('div.fab-list-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - onClick prop', () => {
        const { container } = render(<ListExample childProps={{ onClick: () => { } }} />);
        const anchorElement = container.querySelector('a.fab-list-item');
        const buttonElement = container.querySelector('button.fab-list-item');
        const divElement = container.querySelector('div.fab-list-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - parent onClickItem prop', () => {
        const { container } = render(<ListExample parentProps={{ onClickItem: () => { } }} />);
        const anchorElement = container.querySelector('a.fab-list-item');
        const buttonElement = container.querySelector('button.fab-list-item');
        const divElement = container.querySelector('div.fab-list-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a div', () => {
        const { container } = render(<ListItem />);
        const anchorElement = container.querySelector('a.fab-list-item');
        const buttonElement = container.querySelector('button.fab-list-item');
        const divElement = container.querySelector('div.fab-list-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<ListItem onClick={clickFn} label="Label" />);

        fireEvent.click(container.querySelector('button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call parent onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<ListExample parentProps={{ onClickItem: clickFn }} />);

        fireEvent.click(container.querySelector('button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});