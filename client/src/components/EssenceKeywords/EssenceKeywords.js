import { useContext, useEffect } from 'react'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading } from "../../helpers/helpers"
import TopNav from '../TopNav/TopNav'


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

  // Create sections to pass in top nav
  let sections;
  if ((essence.chakras.length > 0) || (essence.meridians.length > 0 )) {
    sections = [
      {
        title: "Description",
        id: "description",
        display: "flex"
      },
      {
        title: "Chakras/Meridians",
        id: "chakrasMeridians",
        display: "grid"
      },
      {
        title: "Gallery",
        id: "gallery",
        display: "block"
      }
    ] 
  } else {
    sections = [
      {
        title: "Description",
        id: "description",
        display: "flex"
      },
      {
        title: "Gallery",
        id: "gallery",
        display: "block"
      }
    ] 
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
          <TopNav heading={essence.name} sections={sections}/>
          <h3 className="section-heading">Keywords</h3>
        </div>
      }
    </>
  )
}

export default EssenceKeywords
