import { useState } from "react";

const Parent = () => {
    const [username, setUsername] = useState("Nothing");

    const changeUsername = () => {
        setUsername("Hello World!");
    };

    return (
        <>
            <p>The value is {username}</p>
            <button onClick={() => changeUsername()} >Click</button>
        </>
    )
};

export default Parent;