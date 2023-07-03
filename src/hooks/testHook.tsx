import React, { useState } from "react";
// write a use staate hook that will set a boolean value for testBool to false

const TestHook = () => {
    const [testBool, setTestBool] = useState(false);
    return (
        <div>
        <button onClick={() => setTestBool(!testBool)}>Click Me</button>
        <p>{testBool ? "true" : "false"}</p>
        </div>
    );
    }
export default TestHook;

