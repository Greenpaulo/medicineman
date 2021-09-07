import { Link } from 'react-router-dom'
import { scrollToTop } from '../../helpers/helpers'

const Medicine = () => {
  return (
    <div className="container animate__animated animate__fadeIn">
      <section className="section-intro">
      <h1 className="section-heading">Medicine</h1>
      <div className="heading-underline"></div>
        <div className="section-text" id="medicine-intro-text">
          <p>Essences are vibrational medicines made from nature. They work on the human energetic body to help us dissolve the root of disease. They can be subtle but they are powerful and work on a much deeper level than orthodox drugs.</p>
          <p>Essences contain the living energies of nature and can teach us how we became disconnected from the truth of the universe</p>
        </div>
      </section>
      <section id="company-links">
        <Link to="/medicine/alaskan" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/alaskan.gif" alt="Alaskan Essences logo" />
          <h4>Alaskan Essences</h4>
        </Link>
        <Link to="/medicine/abfe" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/abfe.gif" alt="Bush Flower Essences logo" />
          <h4>Bush Flower Essences</h4>
        </Link>
        <Link to="/medicine/bach" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/bach.gif" alt="Bach Flower logo " />
          <h4>Bach Flower Remedies</h4>
        </Link>
        <Link to="/medicine/bailey" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/bailey.gif" alt="Bailey Essence logo" />
          <h4>Bailey Essences</h4>
        </Link>
        <Link to="/medicine/indigo" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/indigo.gif" alt="Indigo Essences logo" />
          <h4>Indigo Essences</h4>
        </Link>
        <Link to="/medicine/living_tree_orchid_essences" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/ltoe.gif" alt="Living Tree Orchid Essences logo" />
          <h4>Living Tree Orchid Essences</h4>
        </Link>
        <Link to="/medicine/pacific" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/pacific.gif" alt="Pacific Essences logo" />
          <h4>Pacific Essences</h4>
        </Link>
        <Link to="/medicine/weae" className="company-link" onClick={scrollToTop}>
          <img src="images/company-logos/weae.gif" alt="Wild Earth Animal Essences logo" />
          <h4>Wild Earth Animal Essences</h4>
        </Link>
      </section>
    </div>
  )
}

export default Medicine
