import React from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import { AppRouterIndex } from './router/router-index'
import { AuthContext } from './context/index-context'


function App() {

  const [isAuth, setIsAuth] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)
  console.log(isLoading)

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, setLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouterIndex /> {/* применяется после коммита 'Step #32'*/}
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
