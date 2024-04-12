import './i18n'
import './index.scss'

import { Result } from 'antd'
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<Result status='info' />}>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
    </Suspense>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
