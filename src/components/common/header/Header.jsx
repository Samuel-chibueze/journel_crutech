import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/courses'>OUR SERVICES</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT UJOSET</Link>
            </li>
            <li>
              <Link to='/team'>EDITORIAL TEAM</Link>
            </li>
            <li>
              <Link to='/pricing'>PRICING</Link>
            </li>
            <li>
              <Link to='/journal'>JOURNALS/ARTICLES</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
              <Link to='/LoginPage'>LOGIN</Link>
            </li>
            <li>
              <Link to='/RegistrationPage'>REGISTER</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'><button>MEMBERSHIP</button></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
