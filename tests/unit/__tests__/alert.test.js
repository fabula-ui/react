import { render, fireEvent, getByTestId } from 'react-testing-library';

// Component
import { Alert } from '../../../src/lib';

describe('Alert Component', () => {
    it('Should render correctly', () => {
        const { container } = render(<Alert />);
        const test = getByTestId(container, 'test');

        expect(test.textValue).toEqual('2');
    });
});