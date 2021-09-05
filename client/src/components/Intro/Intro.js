import { Link } from 'react-router-dom'
import { scrollToTop } from '../../helpers/helpers'

const Intro = () => {
  return (
    <div className="container animate__animated animate__fadeIn">
      <h1 className="section-heading" id="intro-heading">Introduction</h1>
      <div className="heading-underline"></div>
      <section className="section-intro" id="intro">
        <div className="section-text">
          <p>For as long as most of us can remember, in the Western world, we have had a healthcare system out of touch with nature. This is changing. Our current healthcare system is based on an extremely materialistic view of the world and its primary “medicine” is petrochemical drugs.</p>

          <p>We think that it has always been this way, but it hasn’t. Orthodox medicine as we know it is only 100 years old. Before this time, every physician was a herbalist. Plants were our medicines.</p>

          <p>The role of the new Medicine Man in the West, is to bring us back to our roots. To bring us home. To show to once again that nature provides everything we need to heal our bodies and minds.</p>
        </div>
        <div id="website-page-links">
          <Link to="/medicine" onClick={scrollToTop} className="page-link">
            <img src="images/medicine.svg" alt="" />
            <h4>Medicine</h4>  
          </Link>
          <Link to="/crossreference" onClick={scrollToTop} className="page-link">
            <img src="images/storytelling.svg" alt="" />
            <h4>Cross Reference</h4>  
          </Link>
          <Link to="/education" onClick={scrollToTop} className="page-link">
            <img src="images/love.svg" alt="" />
            <h4>Education</h4>  
          </Link>
          <Link to="/store" onClick={scrollToTop} className="page-link">
            <img src="images/online-shopping-2.svg" alt="" />
            <h4>Store</h4>  
          </Link>
          <Link to="/contact" onClick={scrollToTop} className="page-link">
            <img src="images/email.svg" alt="" />
            <h4>Contact</h4>  
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Intro
