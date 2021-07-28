import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ReferencesContext } from "../../context/ReferencesState"
import { checkLoading } from "../../helpers/helpers"
import slugify from 'slugify'
import CircleLoader from "react-spinners/CircleLoader";


const Reference = (props) => {
  const { references, getSingleReference, setLoadingReferences, loadingReferences } = useContext(ReferencesContext);

  useEffect(() => {
    async function getReference(){
      getSingleReference(props.match.params.reference);
      setLoadingReferences(false);
    }
    getReference();
    return () => {
      // Reset loading to true when component is removed
      setLoadingReferences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  let indications, descriptions;
  if (references !== null) {
    // Get the indications object from the reference
    indications = references[0].references
    // Get just the descriptions for each indication
    descriptions = Object.keys(indications)
  }
  
  const renderEssences = (desc) => {
    return indications[desc].map(essence => (
      <p className="essence"><Link to={`/essence/${slugify(essence, { lower: true, replacement: '_' })}`}> {essence}</Link></p>
      ))
    }
    
  // Check data has loaded before render
  let isLoading = checkLoading([references], [loadingReferences]);
  
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
          <h1 id="reference-heading">{references[0].title}</h1>
          <section id="reference-info">
            <ul id="references">
              {descriptions.map(desc => (
                <li className="reference br-10 my-2 px-1 py-1">
                  <h4 className="indication">{desc}</h4>
                  <div className="essence-links">
                    {renderEssences(desc)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {references[0].related.length > 0 &&
            <section id="related">
              <h3>Related</h3>
              <ul id="related-references">
                {references[0].related.map(ref => (
                  <li className="related-ref"><Link to="#">{ref}</Link></li>
                ))}
              </ul>
            </section>
          }
        </div>
      }
    </>
  )
}

export default Reference
