
import React, { useEffect, useState } from 'react'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'

function getRoute() {
  const path = window.location.pathname.toLowerCase()
  if (path.includes('register')) return 'register'
  return 'login'
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return route === 'register' ? <Register /> : <Login />
}

export default App
