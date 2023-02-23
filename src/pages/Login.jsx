import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;