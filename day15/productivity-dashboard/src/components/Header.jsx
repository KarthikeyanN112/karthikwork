import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useUser } from '../context/UserContext'

export default function Header(){
  const { theme, toggleTheme } = useTheme()
  const { user, login, logout } = useUser()

  return (
    <header className="header">
      <h1>ProdDash</h1>
      <div className="header-controls">
        <button onClick={toggleTheme}>
          Theme: {theme}
        </button>
        {user ? (
          <>
            <span className="username">Hello, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login({ name: 'Karthik' })}>Login (demo)</button>
        )}
      </div>
    </header>
  )
}
