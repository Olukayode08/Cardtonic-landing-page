import React, {useState} from 'react'
import { navdata } from '../data'
import logo from './Cardonic-images/logo.svg'
import { Squash as Hamburger } from 'hamburger-react'
const Navbar = () => {
  const [active, setActive] = useState(false)

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

        <button className={active ? 'close-bar' : 'nav-bar'}>
          <Hamburger
            toggled={active}
            toggle={setActive}
            easing='ease-in'
            size={25}
            direction='left'

          />
        </button>
         <div
        className={active ? 'mobile-nav active' : 'mobile-nav'}
        active={active}
      >
        <ul className='mobile'>
          {navdata.map((data) => {
            const { id, title, link } = data;
            return (
              <li key={id} className='mobile-links'>
                <a className='link-mobile' href={link}>{title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      </nav>
    </>
  );
}
export default Navbar