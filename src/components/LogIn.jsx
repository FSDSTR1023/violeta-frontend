import React, { useRef } from 'react';
import { Login } from '../../api/Users';

const LogIn = () => {
  const nicknameRef = useRef();
  const passwordRef = useRef();

  const logInHandler = () => {
    const nickname = nicknameRef.current.value;
    const password = passwordRef.current.value;

    Login({ nickname, password })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" ref={nicknameRef} />
      </label>
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <button onClick={logInHandler}>Log In</button>
    </div>
  );
};

export default LogIn;

