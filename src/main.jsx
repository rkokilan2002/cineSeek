import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ScrollTop } from './components/ScrollTop.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <ScrollTop/>
      <App/>
    </BrowserRouter>
  
)
