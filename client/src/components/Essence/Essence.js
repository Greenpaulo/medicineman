import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading, renderCompanyName ,renderImagePath } from "../../helpers/helpers"
import EssenceNav from "../EssenceNav/EssenceNav"
import uuid from 'react-uuid'

const Essence = (props) => {
  const { essence, getEssenceByName, setLoadingEssences, loadingEssences } = useContext(EssencesContext);

  useEffect(() => {
    async function getEssence(){
      await getEssenceByName(props.match.params.name);
      setLoadingEssences(false);
    }
    getEssence();
    return () => {
      // Reset loading to true when component is removed
      setLoadingEssences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  const renderDescription = () => {
    if (essence.description.length > 0) {
      return (
        <section id="essence-description">
          <h2>Description</h2>
          {essence.description.map(paragraph => (
            <p key={uuid()}>{paragraph}</p>
          ))}
        </section>
        )   
      }
    }

  const renderIndications = () => {
    if (essence.indications.length > 0) {
      return (
        <section id="essence-indications" className="bg-secondary px-2 py-2 br-10">
          <h3>Indications</h3>
          <ul>
            {essence.indications.map(indication => (
              <li key={uuid()} className="essence-indication">{indication}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderEffects = () => {
    if (essence.effects.length > 0) {
      return (
        <section id="essence-effects" className="bg-primary px-2 py-2 br-10">
          <h3>Effects</h3>
          <ul>
            {essence.effects.map(effect => (
              <li key={uuid()} className="essence-effect">{effect}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderChakras = () => {
    if (essence.chakras.length > 0) {
      return (
        <section id="chakras" className="px-2 py-2 br-10">
          <h3>Chakra resonance</h3>
          <ul>
            {essence.chakras.map(chakra => (
              <li key={uuid()} className="chakra">{chakra}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderSecondaryChakras = () => {
    if (essence.chakrasSecondary.length > 0) {
      return (
        <section id="secondaryChakras" className="px-2 py-2 br-10">
          <h3>Secondary Chakra resonance</h3>
          <ul>
            {essence.chakrasSecondary.map(chakra => (
              <li key={uuid()} className="chakra">{chakra}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderMeridians = () => {
    if (essence.meridians.length > 0) {
      return (
        <section id="meridians" className="px-2 py-2 br-10">
          <h3>Meridian resonance</h3>
          <ul>
            {essence.meridians.map(meridian => (
              <li key={uuid()} className="meridian">{meridian}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderSecondaryMeridians = () => {
    if (essence.meridiansSecondary.length > 0) {
      return (
        <section id="secondaryMeridians" className="px-2 py-2 br-10">
          <h3>Secondary Meridian resonance</h3>
          <ul>
            {essence.meridiansSecondary.map(meridian => (
              <li key={uuid()} className="meridian">{meridian}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  // Check data has loaded before render
  let isLoading = checkLoading([essence], [loadingEssences]);
  
  return (
    <>
      {isLoading && 
        <div className="container">
          <h1>Loading</h1>
        </div>
      }

      {!isLoading &&
        <div className="container">
          <EssenceNav essence={essence}/>
          <div className="heading-underline-left"></div>
          <h4 id="company-subheading"><Link to={`/company/${essence.company}`}>{renderCompanyName(essence.company)}</Link></h4>
          <section id="description">
            <div id="essence-text">
              {renderDescription()}
              {renderIndications()}
              {renderEffects()}
            </div>
            <div id="essence-main-img">
              <img id="essence-img" src={renderImagePath(essence.images[0])} alt="" />
            </div>
          </section>
          <section id="chakrasMeridians">
            {renderChakras()}
            {renderSecondaryChakras()}
            {renderMeridians()}
            {renderSecondaryMeridians()}
          </section>
          <section id="gallery">
            <p>gallery...........</p>
          </section>
        </div>
      }
    </>
  )
}

export default Essence
