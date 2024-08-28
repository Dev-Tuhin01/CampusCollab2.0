import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authContext.tsx'
import { NoticeContextProvider } from './context/noticeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
    <NoticeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </NoticeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
