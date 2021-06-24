import { Link } from 'react-router-dom'

const Medicine = () => {
  return (
    <div className="container">
      <h1 id="section-heading">Medicine</h1>
      <br />
      <br />
      {/* <Link to="/essence/bluebell">Bluebell</Link> */}
      
      <ul>
        <li><Link to="/company/abfe">Australian Bush Flower Essences</Link></li>
        <li><Link to="/company/alaskan">Alaskan Essences</Link></li>
      </ul>

    </div>
  )
}

export default Medicine
