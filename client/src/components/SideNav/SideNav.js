import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
			<section id="sidenav">
        <nav id="main-nav">
          <ul>
            <li id="logo-link"><Link to="/">Medicine Man</Link></li>
            {/* <li><Link to="/">Home</Link></li> */}
            <li>
              <Link to="/intro">
                <img src="/images/hello.svg" alt="" />
                Introduction
                </Link>
            </li>
            <li>
              <Link to="/medicine">
                <img src="/images/medicine.svg" alt="" />
                Medicine  
              </Link>
            </li>
            <li>
              <Link to="/crossreference">
                <img src="/images/storytelling.svg" alt="" />
                Cross Reference  
              </Link>
            </li>
            <li>
              <Link to="/education">
                <img src="/images/love.svg" alt="" />
                Education  
              </Link>
            </li>
            <li>
              <Link to="/store">
                <img src="/images/online-shopping-2.svg" alt="" />
                Store 
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="/images/healing2.svg" alt="" />
                About
              </Link>
            </li>
            {/* <li><Link to="/medicine">Medicine</Link></li> */}
            {/* <li><Link to="/crossreference">Cross Reference</Link></li> */}
            {/* <li><Link to="/education">Education</Link></li> */}
            {/* <li><Link to="#">About</Link></li> */}
            {/* <li><Link to="#">Contact</Link></li> */}
          </ul>
          <div id="links">
            <a href="www.facebook.com"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="www.twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
            {/* <a href="www.youtube.com"><i className="fab fa-youtube fa-2x"></i></a> */}
            <a href="www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </nav>
			</section>
  )
}

export default SideNav
