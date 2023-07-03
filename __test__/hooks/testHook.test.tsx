/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import testHook from '../../src/hooks/testHook';

describe('Test Hook', () => {
    it('Is the hook setting the Boolean?', () => {
        render(<testHook />);
        expect(screen.getByText('false')).toBeInTheDocument();
    });
    }
);
