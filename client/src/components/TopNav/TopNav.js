import uuid from 'react-uuid'

const TopNav = ({heading, sections}) => {

  const showSection = (id, display) => {
    const otherSections = sections.filter((sec) => {
      return sec.id !== id
    })
    document.getElementById(`${id}`).style.display = `${display}`;

    otherSections.forEach(sec => {
      document.getElementById(`${sec.id}`).style.display = "none";
    })
  }
  
  
  return (
    <section className="top-nav">
      <h1 className="top-nav-heading">{heading}</h1>
      <nav id="top-nav-main">
        <ul>
          {sections.map(sec => (
            <li key={uuid()} onClick={() => showSection(sec.id, sec.display)}>{sec.title}</li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default TopNav
