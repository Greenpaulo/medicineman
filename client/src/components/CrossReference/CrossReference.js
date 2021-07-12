import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ReferencesContext } from "../../context/ReferencesState"
import { checkLoading } from "../../helpers/helpers"

const CrossReference = () => {
  const { referenceTitles, getAllReferenceTitles, setLoadingReferences, loadingReferences } = useContext(ReferencesContext);

  useEffect(() => {
    async function getReferenceTitles(){
      getAllReferenceTitles();
      setLoadingReferences(false);
    }
    getReferenceTitles();
    return () => {
      // Reset loading to true when component is removed
      setLoadingReferences(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Check data has loaded before render
  let isLoading = checkLoading([referenceTitles], [loadingReferences]);

  return (
    <>
      {isLoading && 
        <div className="container">
          <h1>Loading</h1>
        </div>
      }

      {!isLoading &&
        <div className="container">
          <h1 id="essence-heading">Cross-Reference</h1>
          <section id="essence-info">
            <ul>
              {referenceTitles.map(ref => (
                <li key={ref.title}><Link to={`/crossreference/${ref.slug}`}>{ref.title}</Link></li>
              ))}
            </ul>
          </section>
        </div>
      }
    </>
  )
}

export default CrossReference
