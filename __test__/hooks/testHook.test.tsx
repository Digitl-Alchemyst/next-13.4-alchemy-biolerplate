/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestHook from '../../src/hooks/testHook';

describe('Test Hook', () => {
  it('Is the hook setting the Boolean?', async () => {
    render(<TestHook />);
    const button = screen.getByRole('button', { name: /Change State/i });

    // Initial state check
    const initialText = screen.getByText(/Boolean State: false/i);
    expect(initialText).toBeInTheDocument();

    // Click the button to change the state
    button.click();

    // Wait for the state update to occur
    await waitFor(() => {
      const updatedText = screen.getByText(/Boolean State: true/i);
      expect(updatedText).toBeInTheDocument();
    });
  });
});
