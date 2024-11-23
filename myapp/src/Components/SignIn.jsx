import { useState } from "react";

const SignIn = () => {
    const {username, setUsername} = useState("");
    console.log(username);

    const submitFunc = () => {
        console.log("Submit function called");
    };

    return (
        <div className="container">
            username:{" "}
            <input type="text" value={username} onChange={(e) = changeUsername(e)} />

            Password:{" "}
            <input type="password" value={password} />
            
            <button onClick={(e) => submitFunc()}> Submit </button>
        </div>
    )
};

export default SignIn;