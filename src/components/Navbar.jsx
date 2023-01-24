import React from 'react'
import '../navbar.css'




const NavBar = () => {

  // const menuHandler=()=>{
      
  //   document.querySelector('.nav-menu').classList.toggle('active')
  
  //  }

  return (
    <div className='nav-bar'>
      <div className='logo'>
        <h1>ONE</h1>
      </div>
      <div className='nav-menu'>
        <ul>
          <li>
            <a href='https://github.com/saravanans1204' target='_blank'>
              GITHUB
             </a>
            </li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default NavBar