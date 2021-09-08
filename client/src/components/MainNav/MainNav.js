import { useState } from 'react';
import { Link } from 'react-router-dom'
import VineUnderline from '../VineUnderline/VineUnderline'

const MainNav = () => {
  
  const [dropdownActive, setDropdownActive ] = useState({
    active: false
  })

  const toggleDropdown = () => {
    
    // If not already showing and then open
    // Note: check the browser width to stop dropdown opening when the login button is clicked on wider screens
    if (dropdownActive.active === false && window.innerWidth <= 1550) {

      const dropdown = document.querySelector("#dropdown-nav");
      dropdown.style.zIndex = "2";
      dropdown.style.display = "block"
      dropdown.style.opacity = "1";
      setDropdownActive({ active: true });

    } else {
      // Its open, so close
      const dropdown = document.querySelector("#dropdown-nav");
      dropdown.style.display = "none";
      dropdown.style.zIndex = "0";
      setDropdownActive({ active: false });
    }
  }

  const handleClick = () => {
    toggleDropdown();
  }
  
  
  return (
			<section id="mainnav">
        <nav id="main-nav">
          <ul id="nav-links">
            <div id="side-logo">
              <li id="side-logo-link" className="logo-link"><Link to="/">Medicine Man</Link></li>
              <VineUnderline />
            </div>
            <li id="top-logo-link" className="logo-link"><Link to="/">Medicine Man</Link></li>
            <li className="nav-link">
              <Link to="/intro">
                <img src="/images/hello.svg" alt="" />
                Introduction
                </Link>
            </li>
            <li className="nav-link">
              <Link to="/medicine">
                <img src="/images/medicine.svg" alt="" />
                Medicine  
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/crossreference">
                <img src="/images/storytelling.svg" alt="" />
                Cross Reference  
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/education">
                <img src="/images/love.svg" alt="" />
                Education  
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/store">
                <img src="/images/online-shopping-2.svg" alt="" />
                Store 
              </Link>
            </li>
            {/* <li>
              <Link to="/about">
                <img src="/images/healing2.svg" alt="" />
                About
              </Link>
            </li> */}
            {/* <li className="nav-link">
              <Link to="/contact">
                <img src="/images/email.svg" alt="" />
                Contact
              </Link>
            </li> */}
          </ul>
          <div id="links">
            <a href="https://www.facebook.com/Paul-Bingham-Herbalist-218598888200420" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="https://twitter.com/PaulBinghamDev" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
            {/* <a href="www.youtube.com"><i className="fab fa-youtube fa-2x"></i></a> */}
            <a href="https://www.instagram.com/greenpaulo79/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
          <div id="open-slide">
            <i className="fa fa-bars fa-3x" onClick={toggleDropdown}></i>
          </div>
        </nav>

        <div id="dropdown-nav" className="bg-dark animate__animated animate__fadeIn">
          <ul id="dropdown-nav-links">
            <li><Link to="/intro" onClick={handleClick}>Intro</Link></li>
            <li><Link to="/medicine" onClick={handleClick}>Medicine</Link></li>
            <li><Link to="/crossreference" onClick={handleClick}>Cross Reference</Link></li>
            <li><Link to="/education" onClick={handleClick}>Education</Link></li>
            <li><Link to="/store" onClick={handleClick}>Store</Link></li>
            {/* <li><Link to="/contact" onClick={handleClick}>Contact</Link></li> */}
          </ul>
        </div>
			</section>
  )
}

export default MainNav
