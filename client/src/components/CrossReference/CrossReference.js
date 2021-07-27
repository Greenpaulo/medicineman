import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ReferencesContext } from "../../context/ReferencesState"
import { checkLoading } from "../../helpers/helpers"
import TopNav from "../TopNav/TopNav"

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

  // Create section object for top nav
  const sections = [
    {
      title: "Keywords",
      id: "keywords",
      display: "block"
    },
    {
      title: "Chakras/Meridians",
      id: "chakras-meridians-list",
      display: "block"
    },
    {
      title: "Guide To Cross-Reference",
      id: "cross-reference-guide",
      display: "block"
    },
  ]

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
          <TopNav heading="Cross-Reference" sections={sections} />
          <div className="heading-underline-left"></div>
          <section id="keywords" className="mt-2">
            <ul>
              {referenceTitles.map(ref => (
                <li key={ref.title}><Link to={`/crossreference/${ref.slug}`}>{ref.title}</Link></li>
              ))}
            </ul>
          </section>
          <section id="chakras-meridians-list">
            <h3>List of chakras and meridians</h3>
          </section>
          <section id="cross-reference-guide">
            <h3>The Guide</h3>
          </section>
        </div>
      }
    </>
  )
}

export default CrossReference
