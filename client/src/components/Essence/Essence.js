import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { ReferencesContext } from "../../context/ReferencesState"
import { checkLoading, renderCompanyName, renderImagePath, renderChakraIcon, renderMeridianIcon } from "../../helpers/helpers"
import uuid from 'react-uuid'
import slugify from 'slugify'
import CircleLoader from "react-spinners/CircleLoader";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import TopNav from "../TopNav/TopNav"

const Essence = (props) => {
  const { essence, getEssenceByName, setLoadingEssences, loadingEssences } = useContext(EssencesContext);
  const { referenceTitlesWithoutSlugs, getAllReferenceTitlesWithoutSlugs, setLoadingReferences, loadingReferences } = useContext(ReferencesContext);

  useEffect(() => {
    async function getEssence(){
      await getEssenceByName(props.match.params.name);
      setLoadingEssences(false);
    }
    async function getReferenceTitlesWithoutSlugs(){
      getAllReferenceTitlesWithoutSlugs();
      setLoadingReferences(false);
    }
    getEssence();
    getReferenceTitlesWithoutSlugs();
    return () => {
      // Reset loading to true when component is removed
      setLoadingEssences(true);
      setLoadingReferences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderDescription = () => {
    if (essence.description.length > 0) {
      return (
        <section id="essence-description">
          {essence.description.map(paragraph => (
            <p key={uuid()}>{paragraph}</p>
          ))}
        </section>
        )   
      }
    }

  const renderIndications = () => {
    if (essence.indications.length > 0) {
      return (
        <section id="essence-indications" className="bg-secondary px-3 py-2 br-10">
          <h3>Indications</h3>
          <ul className="pl-2 pt-1" id="essence-indications-list">
            {essence.indications.map(indication => (
              <li key={uuid()} className="essence-indication">{indication}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderEffects = () => {
    if (essence.effects.length > 0) {
      return (
        <section id="essence-effects" className="bg-primary px-3 py-2 br-10">
          <h3>Effects</h3>
          <ul className="pl-2 pt-1" id="essence-effects-list">
            {essence.effects.map(effect => (
              <li key={uuid()} className="essence-effect">{effect}</li>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderChakras = () => {
    if (essence.chakras.length > 0) {
      return (
        <section id="chakras" className="px-2 py-2 br-10">
          <h3>Chakra resonance</h3>
          <ul>
            {essence.chakras.map(chakra => (
              <div className="chakra">
                {renderChakraIcon(chakra)}
                <li key={uuid()}>
                  {chakra}
                </li>
              </div>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderSecondaryChakras = () => {
    if (essence.chakrasSecondary.length > 0) {
      return (
        <section id="secondaryChakras" className="px-2 py-2 br-10">
          <h3>Secondary Chakra resonance</h3>
          <ul>
            {essence.chakrasSecondary.map(chakra => (
              <div className="chakra">
                {renderChakraIcon(chakra)}
                <li key={uuid()}>
                  {chakra}
                </li>
              </div>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderMeridians = () => {
    if (essence.meridians.length > 0) {
      return (
        <section id="meridians" className="px-2 py-2 br-10">
          <h3>Meridian resonance</h3>
          <ul>
            {essence.meridians.map(meridian => (
              <div className="meridian">
                {renderMeridianIcon(meridian)}
                <li key={uuid()}>
                  {meridian}
                </li>
              </div>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderSecondaryMeridians = () => {
    if (essence.meridiansSecondary.length > 0) {
      return (
        <section id="secondaryMeridians" className="px-2 py-2 br-10">
          <h3>Secondary Meridian resonance</h3>
          <ul>
            {essence.meridiansSecondary.map(meridian => (
              <div className="meridian">
                {renderMeridianIcon(meridian)}
                <li key={uuid()}>
                  {meridian}
                </li>
              </div>
            ))}
          </ul>
        </section>
      )   
    }
  }

  const renderKeywords = () => {
    return (
      <div className="bg-primary px-2 py-2 br-10">
        <h3>Keywords</h3>
        <ul id="keywords" className="px-2 py-1">
          {essence.keywords.map(keyword => {
            if (referenceTitlesWithoutSlugs.includes(keyword)) {
              return (
                <li key={uuid()}><Link to={`/crossreference/${slugify(keyword, { lower: true, replacement: '_' })}`} className="reference-link">{keyword}</Link></li>
              )
            } else {
              return (
                <li>{keyword}</li>
              )
            }
          })}
        </ul>
      </div>
    )
  }

  const renderCompanyInfo = () => {
    switch (essence.company) {
      case "Alaskan":
        return {
          img: "/images/company-logos/alaskan.gif",
          slug: essence.companySlug
        }
      case "ABFE":
        return {
          img: "/images/company-logos/abfe.gif",
          slug: essence.companySlug
        }
      case "Bach":
        return {
          img: "/images/company-logos/bach.gif",
          slug: essence.companySlug
        }
      case "Bailey":
        return {
          img: "/images/company-logos/bailey.gif",
          slug: essence.companySlug
        }
      case "Indigo":
        return {
          img: "/images/company-logos/indigo.gif",
          slug: essence.companySlug
        }
      case "Living Tree Orchid Essences":
        return {
          img: "/images/company-logos/ltoe.gif",
          slug: essence.companySlug
        }
      case "Pacific":
        return {
          img: "/images/company-logos/pacific.gif",
          slug: essence.companySlug
        }
      case "WEAE":
        return {
          img: "/images/company-logos/weae.gif",
          slug: essence.companySlug
        }
      default:
        return null;
    }
  } 
  
  // Check data has loaded before render
  let isLoading = (checkLoading([essence], [loadingEssences]) || checkLoading([referenceTitlesWithoutSlugs], [loadingReferences]));

  let sections;
  if (!isLoading) {
    sections = [
        {
          title: "Keywords",
          id: "essence-keywords",
          display: "block"
        },
        // {
        //   title: "Gallery",
        //   id: "gallery",
        //   display: "block"
        // }
      ]
      if ((essence.chakras.length > 0) || (essence.meridians.length > 0 )) {
        sections.unshift(
          {
            title: "Chakras/Meridians",
            id: "chakrasMeridians",
            display: "grid"
          }
        )
      }
      // Got description and indications
      if (essence.indications.length > 0 && essence.description.length > 0) {
        sections.unshift(
          {
            title: "Description",
            id: "description",
            display: "flex"
          },
          {
            title: "Indications/Effects",
            id: "indications-effects",
            display: "flex"
          },
        )
      }
      // Got description but no indications
      if (essence.indications.length === 0 && essence.description.length > 0) {
        sections.unshift(
          {
            title: "Description",
            id: "description",
            display: "flex"
          }
        )
      
      }
      // Got indications but no description 
      if (essence.indications.length > 0 && essence.description.length === 0) {
        sections.unshift(
          {
            title: "Indications/Effects",
            id: "description",
            display: "flex"
          }
        )
      }
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
          <Breadcrumbs props={props} company={renderCompanyName(essence.company)} group={essence.group} essence={essence.name} crumbs={props.crumbs} />

          <TopNav heading={essence.name} sections={sections} companyInfo={renderCompanyInfo()}/>

          <div className="heading-underline"></div>
          <section id="description" className="animate__animated animate__fadeIn">
            <div id="essence-text">
              {renderDescription()}
              {essence.description.length === 0 && 
                <>
                  {renderIndications()}
                  <div className="mt-1">
                  {renderEffects()}
                  </div>
                </>
              }
            </div>
            <div id="essence-main-img">
              <img id="essence-img" src={renderImagePath(essence.images)} alt="" />
            </div>
          </section>
          <section id="indications-effects" className="animate__animated animate__fadeIn">
            {renderIndications()}
            {renderEffects()}
          </section>
          <section id="chakrasMeridians" className="animate__animated animate__fadeIn">
            {renderChakras()}
            {renderSecondaryChakras()}
            {renderMeridians()}
            {renderSecondaryMeridians()}
          </section>
          <section id="essence-keywords" className="animate__animated animate__fadeIn">
            {renderKeywords()}
          </section>
          <section id="gallery" className="animate__animated animate__fadeIn">
            <p>gallery...........</p>
          </section>
        </div>
      }
    </>
  )
}

export default Essence
