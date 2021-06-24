import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { GlobalContext } from "../../context/GlobalState"

const Company = (props) => {
  const { loading, essences, getEssencesByCompany, groupInfo, getGroupInfo } = useContext(GlobalContext);

  useEffect(() => {
    async function getData(){
      await getGroupInfo(props.match.params.name, 'general')
      await getEssencesByCompany(props.match.params.name);
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(essences)

  return (
    <>
      {loading && 
        <div className="container">
          <h1>Loading</h1>
        </div>
      }

      {!loading &&
        <div className="container">
          <h1 id="company-heading">{essences[0].company}</h1>
          <section id="Company-info">
            <ul>
              {essences.map(essence => (
                <li><Link to='#'>{essence.name}</Link></li>
              ))}
            </ul>
              
          </section>
        </div>
      }
    </>
  )
}

export default Company

