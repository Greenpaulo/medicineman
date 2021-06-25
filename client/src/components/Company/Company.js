import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { GroupInfoContext } from "../../context/GroupInfoState"

const Company = (props) => {
  const { groupInfo, groups, getGroupInfo, getGroupsByCompany, loadingGroup, setLoadingGroup } = useContext(GroupInfoContext);

  useEffect(() => {
    async function getData(){
      await getGroupInfo(props.match.params.company, 'general')
      await getGroupsByCompany(props.match.params.company)
      setLoadingGroup(false);
    }
    getData();
    return () => {
      setLoadingGroup(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Check data has loaded before render
  let isLoading;
  if (groupInfo === null || groups === null || loadingGroup === true) {
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
          <h1 id="company-heading">{groupInfo[0].company}</h1>
          <section id="company-info">
            {groupInfo[0].description.map(paragraph => (
              <p>{paragraph}</p>
            ))}

            <ul>
              {groups.map(group => (
                <li key={group.name}><Link to={`/company/${groupInfo[0].companySlug}/${group.slug}`}>{group.name}</Link></li>
              ))}
            </ul>
              
          </section>
        </div>
      }
    </>
  )
}

export default Company

