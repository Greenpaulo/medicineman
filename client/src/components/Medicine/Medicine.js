import { Link } from 'react-router-dom'

const Medicine = () => {
  return (
    <div className="container">
      <h1 id="section-heading">Medicine</h1>
      <br />
      <br />
      <h2>Essence Companies</h2>
      <ul>
        <li><Link to="/company/abfe">Australian Bush Flower Essences</Link></li>
        <li><Link to="/company/alaskan">Alaskan Essences</Link></li>
        <li><Link to="/company/living_tree_orchid_essences">Living Tree Orchid Essences</Link></li>
        <li><Link to="/company/pacific">Pacific Essences</Link></li>
        <li><Link to="/company/weae">Wild Earth Animal Essences</Link></li>
        <li><Link to="/company/indigo">Indigo Essences</Link></li>
        <li><Link to="/company/bailey">Bailey Essences</Link></li>
        <li><Link to="/company/bach">Bach Flower Essences</Link></li>
      </ul>

    </div>
  )
}

export default Medicine
