import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="container">
      <h1 className="section-heading">Introduction</h1>
      <section id="intro">
        <div id="intro-text">
          <p>For as long as most of us can remember, in the Western world, we have had a healthcare system out of touch with nature. This is changing. Our current healthcare system is based on an extremely materialistic view of the world and its primary “medicine” is petrochemical drugs.</p>

          <p>We think that it has always been this way, but it hasn’t. Orthodox medicine as we know it is only 100 years old. Before this time, every physician was a herbalist. Plants were our medicines.</p>

          <p>The role of the new Medicine Man in the West, is to bring us back to our roots. To bring us home. To show to once again that nature provides everything we need to heal our bodies and minds.</p>
        </div>
        <div id="website-page-links">
          <Link to="/medicine" className="page-link">
            <img src="images/medicine.svg" alt="" />
            <h4>Medicine</h4>  
          </Link>
          <Link to="/crossreference" className="page-link">
            <img src="images/storytelling.svg" alt="" />
            <h4>Cross Reference</h4>  
          </Link>
          <Link to="/education" className="page-link">
            <img src="images/love.svg" alt="" />
            <h4>Education</h4>  
          </Link>
          <Link to="#" className="page-link">
            <img src="images/healing2.svg" alt="" />
            <h4>About</h4>  
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Intro
