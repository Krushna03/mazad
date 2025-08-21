import { useState } from 'react'
import Hello from './components/hello'  
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
