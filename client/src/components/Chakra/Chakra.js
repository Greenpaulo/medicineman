import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading, scrollToTop, unslugify, renderChakraIcon } from "../../helpers/helpers"
import slugify from 'slugify'
import uuid from 'react-uuid'
import CircleLoader from "react-spinners/CircleLoader"


const Chakra = (props) => {
  const { essences, getEssenceDataByChakra , setLoadingEssences, loadingEssences } = useContext(EssencesContext);

  const chakra = unslugify(props.match.params.chakra).toLowerCase();

  useEffect(() => {
    async function getEssenceData(){
      getEssenceDataByChakra(props.match.params.chakra);
      setLoadingEssences(false);
    }
    getEssenceData();
    return () => {
      // Reset loading to true when component is removed
      setLoadingEssences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.chakra])

  
  const getCompanies = () => {
    const companies = [];
    essences.forEach(essence => {
      if (!companies.includes(essence.company)) {
        companies.push(essence.company)
      }
    })
    return companies;
  }

  const renderEssencesForCompany = (company) => {
    return essences.map(essence => {
      if (essence.company === company) {
        return (
          <li key={uuid()}>
            <Link to={`/essence/${essence.nameSlug}`}> 
              {essence.name}
            </Link>
          </li>
        )
      }
    })
  }
  
  const renderEssences = () => {
    const companies = getCompanies();
    return (
      <div>
        {companies.map(company => {
          return (
            <div className="company-section mb-2 pb-2" key={uuid()}>
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
          <h4 className="page-subheading">chakra</h4>
          <div id="heading-with-icon">
            <h1 id="chakra-heading">{chakra}</h1>
            {renderChakraIcon(chakra)}
          </div>
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

export default Chakra
