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


const privateRoutes = [
  { path: '/about', element: <About /> },
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
  
  const isAuth = true

  // очень интересная конструкция для склеивания массивов путей
  // const routes = useRoutes([...privateRoutes, ...publicRoutes])
  const routes = useRoutes(isAuth ? privateRoutes : publicRoutes)
  console.log(isAuth)
  
  return routes
}