import React from 'react'
import { Link } from 'react-router-dom'
// import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context/index-context';

const Navbar = () => {

  const {isAuth, setIsAuth} = React.useContext(AuthContext)
  console.log('isAuth =', isAuth)

  const logoutHandler = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  
  return (
    <nav className='navbar'>
      {/* <MyButton onClick={() => setIsAuth(false)}>
        Logout    // это если хочется сдлать кнопочкой
      </MyButton> */}
      <div className='navbar__links'>
        <Link to="/about">About us</Link>&nbsp;
        <Link to="/posts">Posts</Link>&nbsp;
        <Link to="/login" onClick={() => logoutHandler()}>Logout</Link>&nbsp;
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar