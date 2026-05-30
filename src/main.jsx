import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pagination from './Components/pagination.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App/>
    
  </StrictMode>
)
