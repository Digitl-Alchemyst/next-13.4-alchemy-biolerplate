'use client'

import React, { useState } from "react";
// write a use staate hook that will set a boolean value for testBool to false

const TestHook = () => {
    const [testBool, setTestBool] = useState(false);
    return (
        <div>
        <button className='bg-zinc-300 cursor-pointer border border-zinc-600 p-3 rounded-lg my-2' onClick={() => setTestBool(!testBool)}>Change State</button>
        <p>Boolean State: {testBool ? "true" : "false"}</p>
        </div>
    );
    }
export default TestHook;




// test
// /**
//  * @jest-environment jsdom
//  */

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom'
// import testHook from '../../src/hooks/testHook';

// describe('Test Hook', () => {
//     it('Is the hook setting the Boolean?', () => {
//         render({testHook});
//         expect(screen.getByText('false')).toBeInTheDocument();
//     });
//     }
// );
