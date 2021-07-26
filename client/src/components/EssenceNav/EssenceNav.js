
const EssenceNav = ({ essence }) => {

  const showDescription = () => {
    document.getElementById("description").style.display = "flex"
    document.getElementById("chakrasMeridians").style.display = "none"
    document.getElementById("gallery").style.display = "none"
  }
  const showChakrasMeridians = () => {
    document.getElementById("description").style.display = "none"
    document.getElementById("chakrasMeridians").style.display = "grid"
    document.getElementById("gallery").style.display = "none"
  }
  const showGallery = () => {
    document.getElementById("description").style.display = "none"
    document.getElementById("chakrasMeridians").style.display = "none"
    document.getElementById("gallery").style.display = "block"
  }
  
  
  return (
    <section className="top-nav">
      <h1 id="essence-heading">{essence.name}</h1>
      <nav id="essence-nav">
        <ul>
          <li id="description-link"onClick={() => showDescription()}>Description</li>
          {((essence.chakras.length > 0) || (essence.meridians.length > 0 )) &&
            <li id="chakrasMeridians-link"onClick={() => showChakrasMeridians()}>Chakras & Meridians</li>
          }
          <li id="gallery-link"onClick={() => showGallery()}>Gallery</li>
        </ul>
      </nav>
    </section>
  )
}

export default EssenceNav
