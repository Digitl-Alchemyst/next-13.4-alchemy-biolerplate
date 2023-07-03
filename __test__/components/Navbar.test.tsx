/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from '../../src/components/Navbar';

describe('Navbar', () => {
    it('Is the Navbar Visible?', () => {
        render(<Navbar />);
        expect(screen.getByText('HOME')).toBeInTheDocument();
    });
    }
);
