import { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'
import { GlobalContext } from "../../context/GlobalState"

const Essence = (props) => {
  const { essence, loading, getEssenceByName } = useContext(GlobalContext);

  useEffect(() => {
    async function getEssence(){
      await getEssenceByName(props.match.params.name);
    }
    getEssence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(essence)

  return (
    <>
      {loading && 
        <div className="container">
          <h1>Loading</h1>
        </div>
      }

      {!loading &&
        <div className="container">
          <h1 id="essence-heading">{essence.name}</h1>
          <section id="essence-info">
            <h3><Link to={`/company/${essence.company}`}>{essence.company}</Link></h3>
          </section>
        </div>
      }
    </>
  )
}

export default Essence
