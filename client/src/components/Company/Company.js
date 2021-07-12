import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { GroupInfoContext } from "../../context/GroupInfoState"
import { checkLoading, renderCompanyName } from "../../helpers/helpers";
import CompanyDescription from '../CompanyDescription/CompanyDescription'

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
  let isLoading = checkLoading([groupInfo, groups], [loadingGroup]);

  const renderLogo = () => {
    if (groupInfo[0].company === 'Living Tree Orchid Essences') {
      return <img src="/images/company-logos/ltoe.gif" id="description-logo" />
    }
    return <img src={`/images/company-logos/${groupInfo[0].company}.gif`} id="description-logo" />
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
          {renderCompanyName(groupInfo)}
          {renderLogo()}
          <section id="company-info">
            <CompanyDescription groupInfo={groupInfo[0]}/>
          </section>

          <div className="section-underline"></div>

          <section id="group-links">
            <h2>Essence Sets</h2>
            <ul id="group-list">
              {groups.map(group => (
                <li key={group.name}><Link to={`/company/${groupInfo[0].companySlug}/${group.slug}`} className="group-link" >{group.name}</Link></li>
              ))}
            </ul>
          </section>
        </div>
      }
    </>
  )
}

export default Company

