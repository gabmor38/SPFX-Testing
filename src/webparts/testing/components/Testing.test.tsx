import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Testing from './Testing';

describe('App component', () => {
    test('it renders', () => {
        const username = 'Somebody'
        render(<Testing description='some great description' userDisplayName={username} />);
        expect(screen.getByTestId('well-done').textContent).toContain(username);
    });
})