import { useContext, useEffect } from 'react'
import { EssencesContext } from "../../context/EssencesState"
import EssenceNav from '../EssenceNav/EssenceNav'
import { checkLoading } from "../../helpers/helpers"


const EssenceKeywords = (props) => {
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
          <h3 className="section-heading">Keywords</h3>
        </div>
      }
    </>
  )
}

export default EssenceKeywords
