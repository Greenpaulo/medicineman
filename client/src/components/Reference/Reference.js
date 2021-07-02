import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ReferencesContext } from "../../context/ReferencesState"
import { checkLoading } from "../../helpers/helpers"
import slugify from 'slugify'

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

  // Check data has loaded before render
  let isLoading = checkLoading([references], [loadingReferences]);

  let indications, descriptions;
  if (references !== null) {
    console.log(references[0])
    // Get the indications object from the reference
    indications = references[0].references
    // Get just the descriptions for each indication
    descriptions = Object.keys(indications)
  }

  const renderEssences = (desc) => {
    console.log(indications[desc])
    return indications[desc].map(essence => (
      <p className="essence"><Link to={`/essence/${slugify(essence, { lower: true, replacement: '_' })}`}>- {essence}</Link></p>
    ))
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
          <h1 id="essence-heading">{references[0].title}</h1>
          <section id="essence-info">
            <ul id="references">
              {descriptions.map(desc => (
                <li className="reference"><h4 className="indication">{desc}</h4>{renderEssences(desc)}</li>
              ))}
            </ul>
          </section>
        </div>
      }
    </>
  )
}

export default Reference
