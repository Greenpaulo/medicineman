import VineUnderline from '../VineUnderline/VineUnderline'

const Landing = () => {
  return (
    <div id="landing" className="animate__animated animate__fadeIn">
      <div id="logo">
        <h1 id="logo-h1">Medicine Man</h1>
        <VineUnderline />
        {/* <img id="underline" src="images/swirl-line.png" alt="" /> */}
      </div>
      <div id="tree-container">
        <img id="tree" src="images/tree_of_life.jpg" alt="" />
      </div>
    </div>
  )
}

export default Landing
