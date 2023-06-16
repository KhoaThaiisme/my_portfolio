import React from 'react'

const NavBar = () => {
    
  return (
    <nav className='nav'>
        <div className='logo'>
          <li>Logo</li>
        </div>
        <div className='navigation'>
          <li><a href=''>About</a></li>
          <li><a href=''>Experience</a></li>
          <li><a href=''>Work</a></li>
          <li><a href=''>Contact</a></li>
        </div>
      
    </nav>
  )
}

export default NavBar