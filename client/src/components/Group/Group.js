import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { GroupInfoContext } from "../../context/GroupInfoState"
import { checkLoading, renderCompanyName } from "../../helpers/helpers"
import uuid from 'react-uuid'

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
  

  const renderTable = (columnLength) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > 0 && index <= columnLength) {
                    return <li key={essence.name}><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li key={essence.name}></li>
                  }
                )}
              </ul>
            </td>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > columnLength && index <= columnLength*2 ) {
                    return <li key={essence.name}><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li key={essence.name}></li>
                  }
                )}
              </ul>
            </td>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > columnLength*2 && index <= columnLength*3) {
                    return <li key={essence.name}><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li key={essence.name}></li>
                  }
                )}
              </ul>
            </td>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > columnLength*3 && index <= columnLength*4) {
                    return <li key={essence.name}><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li key={essence.name}></li>
                  }
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
  

  const renderTable1 = () => {
    let columnLength = 10;
    
    if (group === "Single Orchid Essences") {
      columnLength = 27;
    } else if (group === "Bush Flowers") {
      columnLength = 17;
    }

    return renderTable(columnLength);
  }

  // Check data has loaded before render
    let isLoading = checkLoading([essences, groupInfo], [loadingEssences, loadingGroup]); 
    // Assign variables
    let group;
    if (isLoading === false) {
      // company = essences[0].company;
      group = essences[0].group;
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
          {renderCompanyName(groupInfo[0].company)}
          <h2 id="group-heading">{group}</h2>
          <section id="group-info">
            {groupInfo[0].description.map(paragraph => (
              <p key={uuid()}>{paragraph}</p>
            ))}
            {renderTable1()}
          </section>
        </div>
      }
    </>
  )
}

export default Group

