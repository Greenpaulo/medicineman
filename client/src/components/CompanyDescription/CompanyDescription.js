import Alaskan from '../Descriptions/Alaskan/Alaskan'
import Bach from '../Descriptions/Bach/Bach'
import Indigo from '../Descriptions/Indigo/Indigo'
import Pacific from '../Descriptions/Pacific/Pacific'
import WEAE from '../Descriptions/WEAE/WEAE'

const GroupDescription = ({groupInfo}) => {

  console.log(groupInfo)

  const renderDescription = () => {
    switch (groupInfo.company) {
      case 'Alaskan':
        return <Alaskan />
      case 'Bach':
        return <Bach />
      case 'Indigo':
        return <Indigo />
      case 'Pacific':
        return <Pacific />
      case 'WEAE':
        return <WEAE />
      default:
        return (
          <div>
            {groupInfo.description.map(paragraph => (
                <p>{paragraph}</p>
              ))}
          </div>
        )
    }
  }

  return (
    <>
    {renderDescription()}
    </>
  )
}

export default GroupDescription
