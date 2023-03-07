import { cleanup, render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    render(<Counter />);
  });
  afterAll(() => cleanup());

  test('renders correctly', () => {
    const countElement = screen.getByRole('heading', { level: 2 });
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    const countElement = screen.getByRole('heading', { level: 2 });
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    const user = userEvents.setup();
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await user.click(incrementButton);

    const countElement = screen.getByRole('heading', { level: 2 });
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the increment button', async () => {
    const user = userEvents.setup();
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await user.click(incrementButton);
    await user.click(incrementButton);

    const countElement = screen.getByRole('heading', { level: 2 });
    expect(countElement).toHaveTextContent('2');
  });

  test('renders a count of 10 after clicking the set button', async () => {
    const user = userEvents.setup();
    const ammountInput = screen.getByRole('spinbutton');
    await user.type(ammountInput, '10');

    expect(ammountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', { name: 'Set' });
    await user.click(setButton);

    const countElement = screen.getByRole('heading', { level: 2 });
    expect(countElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    const user = userEvents.setup();

    const ammountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', { name: 'Set' });
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(ammountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
