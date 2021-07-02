import { Link } from 'react-router-dom'

const EssenceNav = ({ essence }) => {
  
  return (
    <section  id="top-nav">
      <h1 id="essence-heading">{essence.name}</h1>
      <nav id="essence-nav">
        <ul>
          <li><Link to={`/essence/${essence.nameSlug}`}>Description</Link></li>
          <li><Link to={`/essence/${essence.nameSlug}/keywords`}>Keywords</Link></li>
          <li><Link to={`/essence/${essence.nameSlug}/gallery`}>Gallery</Link></li>
        </ul>
      </nav>
    </section>
  )
}

export default EssenceNav
