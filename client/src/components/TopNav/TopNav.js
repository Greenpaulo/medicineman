import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

const TopNav = ({heading, sections, companyInfo}) => {

  const showSection = (title, id, display) => {
    const otherSections = sections.filter((sec) => {
      return sec.id !== id
    })
    document.getElementById(`${id}`).style.display = `${display}`;
    
    if (!document.getElementById(`${title}`).classList.contains("active")){
      document.getElementById(`${title}`).classList.toggle("active");
    }

    otherSections.forEach(sec => {
      document.getElementById(`${sec.id}`).style.display = "none";
      document.getElementById(`${sec.title}`).classList.remove("active");
    })
  }

  const toggleDowndownMenu = () => {
    document.getElementById('dropdown-selector').classList.toggle("active");
  }
  
  return (
    <section className="top-nav">
      <h1 className="top-nav-heading" id={`${heading.toLowerCase()}-section-heading`}>{heading}</h1>
      {companyInfo &&
        <Link to={`/medicine/${companyInfo.slug}`}>
          <img src={companyInfo.img} alt="" id="top-nav-logo"/>
        </Link> 
      }
      <nav id="top-nav-main">
        <ul>
          {sections.map((sec, index) => (
            <li id={`${sec.title}`} className={index === 0 ? 'active' : null} key={uuid()} onClick={() => showSection(sec.title, sec.id, sec.display)}>{sec.title}</li>
          ))}
        </ul>

        <div id="dropdown-selector" onClick={toggleDowndownMenu}>
          <button id="dropbtn">Menu</button>
          <div id="dropdown-content" className="animate__animated animate__fadeIn">
            {sections.map((sec, index) => (
              <li id={`${sec.title}`} className={index === 0 ? 'active' : null} key={uuid()} onClick={() => showSection(sec.title, sec.id, sec.display)}>{sec.title}</li>
            ))}
          </div>
        </div>
      </nav>
    </section>
  )
}

export default TopNav
