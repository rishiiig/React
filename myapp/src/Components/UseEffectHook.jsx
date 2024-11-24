import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        console.log("This is UseEffectHook");
    }, []);

    return (
        <>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </>
    );
};

export default UseEffectHook;