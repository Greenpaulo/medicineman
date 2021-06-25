import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"

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
  // console.log(essence)

  
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

  // Check data has loaded before render
  let isLoading;
  if (essence === null || loadingEssences === true ) {
    isLoading = true
  } else {
    isLoading = false
  }
  
  return (
    <>
      {isLoading && 
        <div className="container">
          <h1>Loading</h1>
        </div>
      }

      {!isLoading &&
        <div className="container">
          <h1 id="essence-heading">{essence.name}</h1>
          <section id="essence-info">
            <h3><Link to={`/company/${essence.company}`}>{essence.company}</Link></h3>
            {renderDescription()}
            {renderEffects()}
            
          </section>
        </div>
      }
    </>
  )
}

export default Essence
