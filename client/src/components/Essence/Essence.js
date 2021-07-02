import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading } from "../../helpers/helpers"
import EssenceNav from "../EssenceNav/EssenceNav"

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
            <p>{paragraph}</p>
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
            <p className="essence-effect">{effect}</p>
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
          <section id="essence-info">
            <div id="essence-text">
              {renderDescription()}
              {renderEffects()}
            </div>
            <img id="essence-img" src={renderImagePath()} alt="" />
            {/* <img id="essence-img" src={`/images/${essence.images[0]}`} alt="" /> */}
          </section>
        </div>
      }
    </>
  )
}

export default Essence
