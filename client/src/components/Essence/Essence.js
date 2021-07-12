import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading } from "../../helpers/helpers"
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
          {essence.description.map(paragraph => (
            <p key={uuid()} >{paragraph}</p>
          ))}
        </section>
        )   
      }
    }

  const renderIndications = () => {
    if (essence.indications.length > 0) {
      return (
        <section id="essence-indications">
          <h3>Indications</h3>
          {essence.indications.map(indication => (
            <p key={uuid()} className="essence-indication">{indication}</p>
          ))}
        </section>
      )   
    }
  }

  const renderEffects = () => {
    if (essence.effects.length > 0) {
      return (
        <section id="essence-effects">
          <h3>Effects</h3>
          {essence.effects.map(effect => (
            <p key={uuid()} className="essence-effect">{effect}</p>
          ))}
        </section>
      )   
    }
  }

  const renderChakras = () => {
    if (essence.chakras.length > 0) {
      return (
        <section id="chakras">
          <h3>Chakra resonance</h3>
          {essence.chakras.map(chakra => (
            <p key={uuid()} className="chakra">{chakra}</p>
          ))}
        </section>
      )   
    }
  }

  const renderMeridians = () => {
    if (essence.meridians.length > 0) {
      return (
        <section id="meridians">
          <h3>Meridian resonance</h3>
          {essence.meridians.map(meridian => (
            <p key={uuid()} className="meridian">{meridian}</p>
          ))}
        </section>
      )   
    }
  }

  const renderImagePath = () => {
    // Just return the first image FOR NOW..................................................
    const pathWithUnderline = essence.images[0].replaceAll(" ", "_")
    return `/images/${pathWithUnderline}`
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
          <h3 id="company-subheading"><Link to={`/company/${essence.company}`}>{essence.company}</Link></h3>
          <section id="description">
            <div id="essence-text">
              {renderDescription()}
              {renderIndications()}
              {renderEffects()}
            </div>
            <div id="essence-main-img">
              <img id="essence-img" src={renderImagePath()} alt="" />
            </div>
          </section>
          <section id="chakrasMeridians">
            {renderChakras()}
            {renderMeridians()}
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
