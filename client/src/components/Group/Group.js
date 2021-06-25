import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { GroupInfoContext } from "../../context/GroupInfoState"

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
  
  // Check data has loaded before render
  let company, group;
  let isLoading;
  if (essences === null || groupInfo === null || loadingEssences === true || loadingGroup === true) {
    isLoading = true
  } else {
    isLoading = false
    // Assign variables
    company = essences[0].company;
    group = essences[0].group;
  }

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
                    return <li></li>
                  }
                )}
              </ul>
            </td>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > columnLength && index <= columnLength*2 ) {
                    return <li><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li></li>
                  }
                )}
              </ul>
            </td>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > columnLength*2 && index <= columnLength*3) {
                    return <li><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li></li>
                  }
                )}
              </ul>
            </td>
            <td>
              <ul>
                {essences.map((essence, index) => {
                  if (index > columnLength*3 && index <= columnLength*4) {
                    return <li><Link to={`/essence/${essence.nameSlug}`}>{essence.name}</Link></li>
                  }
                    return <li></li>
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
  // const renderTable2 = () => {
  //   if (essences.length > 120)
  //   return renderTable(120);
  // }


  return (
    <>
      {isLoading && 
        <div className="container">
          <h1>Loading</h1>
        </div>
      }

      {!isLoading &&
        <div className="container">
          <h1 id="company-heading">{company}</h1>
          <h2 id="group-heading">{group}</h2>
          <section id="group-info">
            {groupInfo[0].description.map(paragraph => (
              <p>{paragraph}</p>
            ))}
            {renderTable1()}
              
          </section>
        </div>
      }
    </>
  )
}

export default Group

