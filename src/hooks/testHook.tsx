'use client'

import React, { useState } from 'react'

const TestHook = () => {
  const [testBool, setTestBool] = useState(false)
  return (
    <div>
      <button
        className='my-2 cursor-pointer rounded-lg border border-zinc-600 bg-zinc-600 p-3 neon-amber mt-4'
        onClick={() => setTestBool(!testBool)}
      >
        Change State
      </button>
      <p className='text-stone-300 mt-3'>Boolean State: {testBool ? 'true' : 'false'}</p>
    </div>
  )
}
export default TestHook
