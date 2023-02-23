/**
 * Вариант для отображения путей без автоматического определения
 * c автоматической передачи параметров в компоненты приложения.
 * Применяется начиная с коммита Step#32.
 * Заменяет модуль 'AppRouter.jsx' из src/router/AppRouter.jsx
 */

import { useRoutes } from "react-router-dom"
import About from "../pages/About"
import Posts from "../pages/Posts"
import PostIdPage from "../pages/PostIdPage"
import ErrorPage from "../pages/ErrorPage"
import Login from "../pages/Login"
import { useContext } from "react"
import { AuthContext } from "../context/index-context"
import Loader from "../components/UI/Loader/Loader"


const privateRoutes = [
  { path: '/about', element: <About /> },
  { path: '/login', element: <About /> },
  { path: '', element: <Posts /> },
  { path: '/posts', children: [
      { index: true, element: <Posts /> },
      { path: ':id', element: <PostIdPage /> }
    ]
  },
  { path: '*', element: <ErrorPage /> }
]

const publicRoutes = [
  { path: "/login", element: <Login /> }
]


export function AppRouterIndex() {
  const {isAuth, isLoading} = useContext(AuthContext)
  if (isLoading) { <Loader /> }

  const routes = useRoutes(isAuth ? privateRoutes : publicRoutes)
  
  return routes
}