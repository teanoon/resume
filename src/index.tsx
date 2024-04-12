import './i18n'
import './index.scss'

import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/resume' element={<App />} />
    </Routes>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
