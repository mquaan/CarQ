// import React from 'react'
import './Navbar.css'
import logo from '../../Assets/icon.png'

import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

function Navbar() {
  return (
    <div className='header'>
      <div className='logoDiv'>
        <img src={logo} alt='Logo' className='logo' />
      </div>

      <div className='navbar'>
          <ul className='menu'>
            <li className='listItem'>
              <a href='/'>Used cars</a>
            </li>
            <li className='listItem'>
              <a href='/'>New cars</a>
            </li>
            <li className='listItem'>
              <a href='/'>Auctions</a>
            </li>
            <li className='listItem'>
              <a href='/'>Sell</a>
            </li>
          </ul>

          <IoIosCloseCircle className='icon closeIcon' />

      </div>

      <div className='signUp flex'>
        <div className='text'> Sign Up </div>
        <TbGridDots className='icon' />
      </div>

    </div>
  )
}

export default Navbar