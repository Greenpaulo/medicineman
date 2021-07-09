import { Link } from 'react-router-dom'

const Medicine = () => {
  return (
    <div className="container">
      <h1 className="section-heading">Medicine</h1>
      <div className="heading-underline"></div>
      <section className="section-intro">
        <div className="section-text">
          <p>Essences are vibrational medicines made from nature. They work on the human energetic body to help us dissolve the root of disease. They can be subtle but they are powerful and work on a much deeper level than orthodox drugs.</p>
          <p>Essences contain the living energies of nature and can teach us how we became disconnected from the truth of the universe</p>
        </div>
      </section>
      <section id="company-links">
        <Link to="/company/alaskan" className="company-link">
          <img src="images/company-logos/alaskan.gif" alt="" />
          <h4>Alaskan Essences</h4>
        </Link>
        <Link to="/company/abfe" className="company-link">
          <img src="images/company-logos/abfe.gif" alt="" />
          <h4>Australian Bush Flower Essences</h4>
        </Link>
        <Link to="/company/bach" className="company-link">
          <img src="images/company-logos/bach.gif" alt="" />
          <h4>Bach Flower Essences</h4>
        </Link>
        <Link to="/company/bailey" className="company-link">
          <img src="images/company-logos/bailey.gif" alt="" />
          <h4>Bailey Essences</h4>
        </Link>
        <Link to="/company/indigo" className="company-link" id="indigo-link">
          <img src="images/company-logos/indigo.png" id="indigo-logo" alt="" />
          <h4>Indigo Essences</h4>
        </Link>
        <Link to="/company/living_tree_orchid_essences" className="company-link">
          <img src="images/company-logos/ltoe2.jpg" alt="" />
          <h4>Living Tree Orchid Essences</h4>
        </Link>
        <Link to="/company/pacific" className="company-link">
          <img src="images/company-logos/pacific.png" alt="" />
          <h4>Pacific Essences</h4>
        </Link>
        <Link to="/company/weae" className="company-link">
          <img src="images/company-logos/weae.gif" alt="" />
          <h4>Wild Earth Animal Essences</h4>
        </Link>
      </section>

    </div>
  )
}

export default Medicine
