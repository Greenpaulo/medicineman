import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { EssencesContext } from "../../context/EssencesState"
import { checkLoading, renderCompanyName, renderImagePath } from "../../helpers/helpers"
import uuid from 'react-uuid'
import CircleLoader from "react-spinners/CircleLoader";
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import TopNav from "../TopNav/TopNav"

const Essence = (props) => {
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
        <section id="essence-indications" className="bg-secondary px-2 py-2 mb-2 br-10">
          <h3>Indications</h3>
          <ul>
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
        <section id="essence-effects" className="bg-primary px-2 py-2 br-10">
          <h3>Effects</h3>
          <ul>
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

  const renderChakraIcon = (chakra) => {
    switch (chakra) {
      case "root":
        return <img className="icon" src="/images/muladhara-2.svg" alt="" />
      case "sacral":
        return <img className="icon" src="/images/svadhisthana-2.svg" alt="" />
      case "solar plexus":
        return <img className="icon" src="/images/manipura-2.svg" alt="" />
      case "heart":
        return <img className="icon" src="/images/anahata-2.svg" alt="" />
      case "throat":
        return <img className="icon" src="/images/vishuddha-2.svg" alt="" />
      case "third eye":
        return <img className="icon" src="/images/ajna-2.svg" alt="" />
      case "crown":
        return <img className="icon" src="/images/sahasrara-2.svg" alt="" />
      case "ba'hui point":
        return <img className="icon" src="/images/lotus-flower.svg" alt="" />
      case "ajana centre":
        return <img className="icon" src="/images/ajana-center.svg" alt="" />
      default:
        return <img className="icon" src="/images/mandala.svg" alt="" />;
    }
  }

  const renderMeridianIcon = (meridian) => {
    switch (meridian) {
      case "heart":
        return <img className="icon" src="/images/heart.svg" alt="" />
      case "lung":
        return <img className="icon" src="/images/lungs.svg" alt="" />
      case "kidney":
        return <img className="icon" src="/images/kidney.svg" alt="" />
      case "bladder":
        return <img className="icon" src="/images/bladder.svg" alt="" />
      case "spleen":
        return <img className="icon" src="/images/spleen.svg" alt="" />
      case "heart protector":
        return <img className="icon" src="/images/heart-protector.svg" alt="" />
      case "conception vessel":
        return <img className="icon" src="/images/pelvis.svg" alt="" />
      case "governing vessel":
        return <img className="icon" src="/images/spinal-cord.svg" alt="" />
      case "stomach":
        return <img className="icon" src="/images/stomach.svg" alt="" />
      case "gall bladder":
        return <img className="icon" src="/images/gallbladder.svg" alt="" />
      case "liver":
        return <img className="icon" src="/images/liver.svg" alt="" />
      case "large intestine":
        return <img className="icon" src="/images/large-intestine.svg" alt="" />
      case "small intestine":
        return <img className="icon" src="/images/small-intestine.svg" alt="" />
      default:
        return null;
    }
  }

  // Creat

  // Check data has loaded before render
  let isLoading = checkLoading([essence], [loadingEssences]);

  let sections;
  if (!isLoading) {
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

          <TopNav heading={essence.name} sections={sections}/>

          <div className="heading-underline"></div>
          <h4 id="company-subheading"><Link to={`/company/${essence.company}`}>{renderCompanyName(essence.company)}</Link></h4>
          <section id="description">
            <div id="essence-text">
              {renderDescription()}
              {essence.description.length > 0 &&
                <div className="heading-underline-my3"></div>
              }
              {renderIndications()}
              {renderEffects()}
            </div>
            <div id="essence-main-img">
              <img id="essence-img" src={renderImagePath(essence.images)} alt="" />
            </div>
          </section>
          <section id="chakrasMeridians">
            {renderChakras()}
            {renderSecondaryChakras()}
            {renderMeridians()}
            {renderSecondaryMeridians()}
          </section>
          <section id="gallery">
            <p>gallery...........</p>
          </section>
        </div>
      }
    </>
  )
}

export default Essence
