import './App.css'
import { Header } from './components'
import { Footer } from './components'
import AllRoutes from './routes/AllRoutes'
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const hideFooterRoutes = ["*"];


  return (
    <>
    <div className='container'>
      <Header />
      <AllRoutes />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
    </>
  )
}

export default App
