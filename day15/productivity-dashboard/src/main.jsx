import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import './styles.css'
import { registerSW } from './sw-register'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>
)

// register service worker for PWA/offline support
registerSW()
