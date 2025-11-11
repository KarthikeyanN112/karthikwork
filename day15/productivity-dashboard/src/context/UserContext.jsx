import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }){
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('user')
      return raw ? JSON.parse(raw) : null
    } catch(e){
      return null
    }
  })

  const login = (userData) => {
    setUser(userData)
    try { localStorage.setItem('user', JSON.stringify(userData)) } catch(e){}
  }
  const logout = () => {
    setUser(null)
    try { localStorage.removeItem('user') } catch(e){}
  }

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
export default UserContext
