import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Component
import Tag from '../Tag/Tag';

describe('Tag Component', () => {
    it('Should create', () => {
        const { container } = render(<Tag />);
        expect(container).toBeTruthy();
    });

    it('Should have children as inner content', () => {
        const { container } = render(<Tag>Content</Tag>);
        const itemElement = container.querySelector('.fab-tag');

        expect(itemElement.textContent).toBe('Content');
    });

    it('Should set color', () => {
        const { container } = render(<Tag color="blue" />);
        const itemElement = container.querySelector('.fab-tag');
        const itemStyle = window.getComputedStyle(itemElement);

        expect(itemStyle.backgroundColor).toBe('blue');
    });

    it('Should be an anchor', () => {
        const { container } = render(<Tag href="href" />);
        const anchorElement = container.querySelector('a.fab-tag');
        const buttonElement = container.querySelector('button.fab-tag');
        const divElement = container.querySelector('div.fab-tag');

        expect(anchorElement).toBeTruthy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - button prop', () => {
        const { container } = render(<Tag button={true} />);
        const anchorElement = container.querySelector('a.fab-tag');
        const buttonElement = container.querySelector('button.fab-tag');
        const divElement = container.querySelector('div.fab-tag');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a button - onClick prop', () => {
        const { container } = render(<Tag onClick={() => { } } />);
        const anchorElement = container.querySelector('a.fab-tag');
        const buttonElement = container.querySelector('button.fab-tag');
        const divElement = container.querySelector('div.fab-tag');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeTruthy();
        expect(divElement).toBeFalsy();
    });

    it('Should be a div', () => {
        const { container } = render(<Tag />);
        const anchorElement = container.querySelector('a.fab-tag');
        const buttonElement = container.querySelector('button.fab-tag');
        const divElement = container.querySelector('div.fab-tag');

        expect(anchorElement).toBeFalsy();
        expect(buttonElement).toBeFalsy();
        expect(divElement).toBeTruthy();
    });

    it('Should call onClick', () => {
        let output = '';
        const clickFn = () => { output = 'called' };
        const { container } = render(<Tag onClick={clickFn} />);

        fireEvent.click(container.querySelector('.fab-tag'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(output).toBe('called');
    });
});