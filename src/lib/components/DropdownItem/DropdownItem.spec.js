import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Components
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from './DropdownItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const DropdownExample = props => {
    const { childProps, parentProps } = props;
    return (
        <Dropdown>
            <DropdownMenu {...parentProps}>
                <DropdownItem {...childProps}>Item</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

describe('Dropdown Item Component', () => {
    it('Should create', () => {
        const { container } = render(<DropdownItem />);

        expect(container).toBeTruthy();
    });

    it('Should have a label', () => {
        const { container } = render(<DropdownItem label="Label" />);
        const itemElement = container.querySelector('.fab-dropdown-item');

        expect(itemElement.textContent).toBe('Label');
    });

    it('Should have children as label', () => {
        const { container } = render(<DropdownItem>Label</DropdownItem>);

        expect(container.textContent).toBe('Label');
    });

    it('Should set color', () => {
        const { container } = render(<DropdownItem color="blue" label="Label"></DropdownItem>);
        const itemElement = container.querySelector('.fab-dropdown-item');
        const itemStyle = window.getComputedStyle(itemElement);

        expect(itemStyle.backgroundColor).toBe('blue');
    });

    it('Should be an anchor', () => {
        const { container } = render(<DropdownItem href="href" label="Label" rel="rel" target="target"></DropdownItem>);
        const anchorElement = container.querySelector('a.fab-dropdown-item');
        const buttonElement = container.querySelector('button.fab-dropdown-item');
        const divElement = container.querySelector('div.fab-dropdown-item');

        expect(anchorElement.getAttribute('href')).toBe('href');
        expect(anchorElement.getAttribute('rel')).toBe('rel');
        expect(anchorElement.getAttribute('target')).toBe('target');
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - button prop', () => {
        const { container } = render(<DropdownItem button={true} label="Label"></DropdownItem>);
        const anchorElement = container.querySelector('a.fab-dropdown-item');
        const buttonElement = container.querySelector('button.fab-dropdown-item');
        const divElement = container.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - click to close (dropdown menu)', () => {
        const { container } = render(<DropdownExample parentProps={{ clickToClose: true }} />);
        const anchorElement = container.querySelector('a.fab-dropdown-item');
        const buttonElement = container.querySelector('button.fab-dropdown-item');
        const divElement = container.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - onClick prop', () => {
        const { container } = render(<DropdownExample childProps={{ onClick: () => { } }} />);
        const anchorElement = container.querySelector('a.fab-dropdown-item');
        const buttonElement = container.querySelector('button.fab-dropdown-item');
        const divElement = container.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - parent onClickItem prop', () => {
        const { container } = render(<DropdownExample parentProps={{ onClickItem: () => { } }} />);
        const anchorElement = container.querySelector('a.fab-dropdown-item');
        const buttonElement = container.querySelector('button.fab-dropdown-item');
        const divElement = container.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a div', () => {
        const { container } = render(<DropdownItem />);
        const anchorElement = container.querySelector('a.fab-dropdown-item');
        const buttonElement = container.querySelector('button.fab-dropdown-item');
        const divElement = container.querySelector('div.fab-dropdown-item');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<DropdownItem onClick={clickFn} label="Label" />);

        fireEvent.click(container.querySelector('button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call parent onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<DropdownExample parentProps={{ onClickItem: clickFn }} />);

        fireEvent.click(container.querySelector('button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});
