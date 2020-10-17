import React, { useState } from 'react';
import useInputState from '../Hooks/useInputState';
const Input = () => {

    const [email, updateEmail, resetEmail] = useInputState("");
    const [password, updatePassword, resetPassword] = useInputState("");


    return (
        <div>
            <h1>Email : {email}</h1>
            <p>
                <input type="text" value={email} onChange={updateEmail} />
                <button onClick={resetEmail}>Submit !!!</button>
            </p>
            <h1>Password : {password}</h1>
            <p>
                <input type="text" value={password} onChange={updatePassword} />
                <button onClick={resetPassword}>Submit !!!</button>
            </p>
        </div>
    );
}

export default Input;