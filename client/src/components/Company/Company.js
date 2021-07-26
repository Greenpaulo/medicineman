import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { GroupInfoContext } from "../../context/GroupInfoState"
import { checkLoading, renderCompanyName } from "../../helpers/helpers"
import CompanyDescription from '../CompanyDescription/CompanyDescription'
import uuid from "react-uuid"

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
      return (
        // <div id="company-logo-with-border">
          <img src="/images/company-logos/ltoe.gif" className="description-logo" alt="orchid essence logo"/>
        // </div>
      )
    }
    return <img src={`/images/company-logos/${groupInfo[0].company}.gif`} className="description-logo" id={`${groupInfo[0].company}-logo`} alt="essences producer's logo"/>
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
          <h1 id="company-heading">{renderCompanyName(groupInfo[0].company)}</h1> 
          {renderLogo()}
          <section id="company-info">
            <CompanyDescription groupInfo={groupInfo[0]}/>
          </section>

          <div className="section-underline"></div>

          <section id="groups">
            <h2>Essence Sets</h2>
            <div id="group-links">
              {groups.map(group => (
                <div key={uuid()} className="group-link">
                  <Link to={`/company/${groupInfo[0].companySlug}/${group.slug}`}>    
                    <img src={`/images/group-images/${group.slug}.png`} alt="" />
                    {group.name}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      }
    </>
  )
}

export default Company

