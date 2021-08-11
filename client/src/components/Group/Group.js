import { useContext, useEffect } from "react"
import { EssencesContext } from "../../context/EssencesState"
import { GroupInfoContext } from "../../context/GroupInfoState"
import { checkLoading, randomNumber, renderCompanyName, renderImagePath } from "../../helpers/helpers"
import uuid from 'react-uuid'
import EssenceLinks from '../EssenceLinks/EssenceLinks'
import CircleLoader from "react-spinners/CircleLoader";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'


const Group = (props) => {
  const { essences, getEssencesByGroup, loadingEssences, setLoadingEssences } = useContext(EssencesContext);
  const { groupInfo, getGroupInfo, loadingGroup, setLoadingGroup } = useContext(GroupInfoContext);

  useEffect(() => {
    async function getData(){
      await getGroupInfo(props.match.params.company, props.match.params.group)
      await getEssencesByGroup(props.match.params.group);
      setLoadingGroup(false)
      setLoadingEssences(false)
    }
    getData();
    return () => {
      // Reset loading to true when component is removed
      setLoadingGroup(true);
      setLoadingEssences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderEssencePhoto = () => {
    return (
      <div id="group-photo">
        <img src={renderImagePath(essences[randomNumber(0, essences.length)].images)}className="group-photo-example" alt=""/>
      </div>
    )
  }

  // Check data has loaded before render
    let isLoading = checkLoading([essences, groupInfo], [loadingEssences, loadingGroup]); 
    // Assign variables
    let group;
    if (isLoading === false) {
      group = essences[0].group;
    }

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
          <Breadcrumbs props={props} company={renderCompanyName(groupInfo[0].company)} group={group} crumbs={props.crumbs} />
          <h1 id="company-heading">{renderCompanyName(groupInfo[0].company)}</h1> 
          {renderEssencePhoto()}
          <h2 id="group-heading">{group}</h2>
          <section id="group-info">
            {groupInfo[0].description.map(paragraph => (
              <p key={uuid()}>{paragraph}</p>
            ))}
          </section>
          <EssenceLinks essences={essences} group={group}/>
        </div>
      }
    </>
  )
}

export default Group

