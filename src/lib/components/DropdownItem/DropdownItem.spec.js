import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Components
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from './DropdownItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const DropdownExample = props => {
    const { onClick } = props;
    return (
        <Dropdown open={true}>
            <DropdownMenu onClickItem={onClick}>
                <DropdownItem button={true}>Item</DropdownItem>
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

    it('Should have custom content', () => {
        const { container } = render(<DropdownItem>Custom Content</DropdownItem>);

        expect(container.textContent).toBe('Custom Content');
    });

    it('Should set color', () => {
        const { container } = render(<DropdownItem color="blue" label="Label"></DropdownItem>);
        const itemElement = container.querySelector('.fab-dropdown-item');
        const itemStyle = window.getComputedStyle(itemElement);

        expect(itemStyle.backgroundColor).toBe('blue');
    });

    it('Should be a button', () => {
        const { container } = render(<DropdownItem button={true} label="Label"></DropdownItem>);
        const buttonElement = container.querySelector('.fab-button');

        expect(buttonElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<DropdownItem onClick={clickFn} label="Label" />);

        fireEvent.click(container.querySelector('.fab-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });

    it('Should call parent onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<DropdownExample onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-button'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});
