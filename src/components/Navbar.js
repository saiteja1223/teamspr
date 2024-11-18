import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className='main'> 
            <div className='rigthsub'>
                Matrimonial
            </div>
            <div className='leftsub'>
                <div><Link to={'/home'}>Home</Link></div>
                <div><Link to={'/profile'}>Profiles</Link></div>
                <div><Link to={'/register'}>Register</Link> </div>
                <div><Link to={'/contact'}>Contact us</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar