import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import appIcon from '@/resources/build/kanna.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import '@/lib/window/window.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider titlebar={{ title: 'Kanna', icon: appIcon, menuItems }}>
      <App />
    </WindowContextProvider>
  </React.StrictMode>
)
