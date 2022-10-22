import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renderers default message hello world', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    );
  });
  it('Renderers a custom message', () => {
    const customMessage = 'This is an app created with react, ts and Vite';
    render(<App message={customMessage} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      customMessage
    );
  });
});
