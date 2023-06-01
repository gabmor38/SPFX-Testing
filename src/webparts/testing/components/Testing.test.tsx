import { render } from '@testing-library/react';
import Testing from './Testing';

describe('App component', () => {
 test('it renders', () => {
   render(<Testing description='hihi' />);
 });
})