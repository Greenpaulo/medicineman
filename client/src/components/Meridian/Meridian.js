import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading, scrollToTop, unslugify } from "../../helpers/helpers"
import uuid from 'react-uuid'
import CircleLoader from "react-spinners/CircleLoader"


const Meridian = (props) => {
  const { essences, getEssenceDataByMeridian , setLoadingEssences, loadingEssences } = useContext(EssencesContext);

  const { meridian } = props.match.params;

  useEffect(() => {
    async function getEssenceData(){
      getEssenceDataByMeridian(props.match.params.meridian);
      setLoadingEssences(false);
    }
    getEssenceData();
    return () => {
      // Reset loading to true when component is removed
      setLoadingEssences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.meridian])

  
  const getCompanies = () => {
    const companies = [];
    essences.forEach(essence => {
      if (!companies.includes(essence.company)) {
        companies.push(essence.company)
      }
    })
    console.log(companies)
    return companies;
  }

  const renderEssencesForCompany = (company) => {
    return essences.map(essence => {
      if (essence.company === company) {
        return (
          <li>
            <Link to={`/essence/${essence.nameSlug}`}> 
              {essence.name}
            </Link>
          </li>
        )
      }
    })
  }
  
  const renderEssences = () => {
    console.log(essences)
    const companies = getCompanies();
    return (
      <div>
        {companies.map(company => {
          return (
            <div className="company-section mb-2 pb-2">
              <h3>{company}</h3>
              <ul className="essence-list mt-1">{renderEssencesForCompany(company)}</ul>
            </div>
          )
        })}
      </div>
    )
  }
    
  // Check data has loaded before render
  let isLoading = checkLoading([essences], [loadingEssences]);
  
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
          <h4 className="page-subheading">MERIDIAN</h4>
          <h1 id="meridian-heading">{unslugify(meridian)}</h1>
          <section id="reference-info" className="mt-2">
              <div className="essence-links ml-2">
                {renderEssences()}
              </div>
          </section>
        </div>
      }
    </>
  )
}

export default Meridian
