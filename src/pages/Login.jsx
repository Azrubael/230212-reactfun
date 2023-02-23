import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context/index-context'

const Login = () => {

  const {isAuth, setIsAuth} = React.useContext(AuthContext)
  const loginHandler = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    console.log('isAuth =', isAuth)
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={loginHandler}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="password" placeholder="password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;