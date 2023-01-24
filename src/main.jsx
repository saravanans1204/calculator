import React from 'react'
import ReactDOM from 'react-dom/client'
import Calc from './components/calc'
import NavBar from './components/Navbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <NavBar/>
      <Calc/>
    </div>
   
  </React.StrictMode>,
)
