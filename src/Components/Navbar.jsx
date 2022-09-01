import React from 'react'
import { navdata } from '../data'
import logo from './Cardonic-images/logo.svg'
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
  return (
    <>
      <nav>
        <img className='logo' src={logo} alt='Cardonic'/>
        <ul className='nav-links'>
          <li className='links'>
            <a className='link' href='#'>Upskill</a>
            <a className='link' href='#'>Customer</a>
            <a className='link' href='#'>Business</a>
            <a className='link get-started' href='#'>Get Started</a>
          </li>
        </ul>
        <button className='nav-bar' onClick={toggle}>
          <FaBars />
        </button>
      </nav>
    </>
  );
}
export default Navbar