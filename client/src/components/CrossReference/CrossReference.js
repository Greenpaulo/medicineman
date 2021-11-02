import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ReferencesContext } from "../../context/ReferencesState"
import { checkLoading, renderChakraIcon, renderMeridianIcon } from "../../helpers/helpers"
import TopNav from "../TopNav/TopNav"
import CircleLoader from "react-spinners/CircleLoader"
import uuid from 'react-uuid'
import slugify from "slugify"


const CrossReference = () => {
  const { referenceTitles, getAllReferenceTitles, setLoadingReferences, loadingReferences } = useContext(ReferencesContext);

  useEffect(() => {
    async function getReferenceTitles(){
      getAllReferenceTitles();
      setLoadingReferences(false);
    }
    getReferenceTitles();
    return () => {
      // Reset loading to true when component is removed
      setLoadingReferences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chakras = [ "root", "sacral", "solar plexus", "3rd chakra belt", "heart", "inner chamber of the heart", "throat", "back of the throat chakra", "third eye", "ajana centre", "crown", "ba'hui point", "dreamtime point", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th"]

  const renderChakras = () => {
    return (
      <div id="chakras" className="px-2 py-2 bg-primary br-10">
        <h2>Chakras and Energy Centres</h2>
        <div id="chakra-list" className="px-1 py-2">
          <ul>
            {chakras.map(chakra => (
              <Link to={`/chakra/${slugify(chakra, { lower: true, replacement: '_' })}`} className="chakra">
                {renderChakraIcon(chakra)}
                <li key={uuid()}>
                  {chakra}
                </li>
              </Link>
            ))}
          </ul>       
        </div>
      </div>
    )
  }

  const meridians = [ "conception vessel", "governing vessel", "bladder", "kidney", "large intestine", "small intestine", "liver", "gall bladder", "stomach", "spleen", "lung", "heart", "heart protector", "triple warmer"]

  const renderMeridians = () => {
    return (
      <div id="meridians" className="mt-2 px-2 py-2 bg-secondary br-10">
        <h2>Meridians</h2>
        <div id="meridian-list" className="px-1 py-2">
          <ul>
            {meridians.map(meridian => (
                <Link to={`/meridian/${slugify(meridian, { lower: true, replacement: '_' })}`} className="meridian">
                  {renderMeridianIcon(meridian)}
                  <li key={uuid()}>
                    {meridian}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    )
  }

  // Create section object for top nav
  const sections = [
    {
      title: "Keywords",
      id: "keywords",
      display: "block"
    },
    {
      title: "Chakras/Meridians",
      id: "chakras-meridians-list",
      display: "block"
    },
    // {
    //   title: "Guide To Cross-Reference",
    //   id: "cross-reference-guide",
    //   display: "block"
    // },
  ]

  // Check data has loaded before render
  let isLoading = checkLoading([referenceTitles], [loadingReferences]);

  return (
    <>
      {isLoading && 
        <div className="container">
          <div className="spinner">
            <CircleLoader loading={isLoading} size={100} speedMultiplier={0.7} color="#ffd4bf"/>
          </div>
        </div>
      }

      {!isLoading &&
        <div className="container animate__animated animate__fadeIn">
          <TopNav heading="Cross-Reference" sections={sections} />
          <div className="heading-underline"></div>
          <section id="keywords" className="mt-2">
            <ul>
              {referenceTitles.map(ref => (
                <li key={ref.title}><Link to={`/crossreference/${ref.slug}`}>{ref.title}</Link></li>
              ))}
            </ul>
          </section>
          <section id="chakras-meridians-list">
            {renderChakras()}
            {renderMeridians()}
          </section>
          <section id="cross-reference-guide">
            <h3>The Guide</h3>
          </section>
        </div>
      }
    </>
  )
}

export default CrossReference
