
const CrossReferenceNav = () => {

  const showKeywords = () => {
    document.getElementById("keywords").style.display = "block"
    document.getElementById("chakras-meridians-list").style.display = "none"
    document.getElementById("cross-reference-guide").style.display = "none"
  }
  const showChakraMerdians = () => {
    document.getElementById("keywords").style.display = "none"
    document.getElementById("chakras-meridians-list").style.display = "block"
    document.getElementById("cross-reference-guide").style.display = "none"
  }
  const showCrossRefGuide = () => {
    document.getElementById("keywords").style.display = "none"
    document.getElementById("chakras-meridians-list").style.display = "none"
    document.getElementById("cross-reference-guide").style.display = "block"
  }
  
  
  return (
    <section className="top-nav">
      <h1 className="section-heading">Cross-Reference</h1>
      <nav id="cross-reference-nav">
        <ul>
          <li id="keywords-link" onClick={() => showKeywords()}>Keywords</li>
          <li id="chakras-meridians-link" onClick={() => showChakraMerdians()}>Chakras/Meridians</li>
          <li id="crossref-guide-link"onClick={() => showCrossRefGuide()}>Guide To Cross Reference</li>
        </ul>
      </nav>
    </section>
  )
}

export default CrossReferenceNav
