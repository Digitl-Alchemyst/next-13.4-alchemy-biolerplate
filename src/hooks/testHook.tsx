'use client';

import React, { useState } from 'react';

const TestHook: React.FC = () => {
  const [testBool, setTestBool] = useState(false);
  return (
    <div>
      <button
        className='my-2 mt-4 cursor-pointer rounded-lg border border-zinc-600 bg-zinc-500 p-3 neon-amber'
        onClick={() => setTestBool(!testBool)}
      >
        Change State
      </button>
      <p className='mt-3 text-stone-300'>
        Boolean State: {testBool ? 'true' : 'false'}
      </p>
    </div>
  );
};

export default TestHook;
