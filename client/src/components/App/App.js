import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../Landing/Landing'
import SideNav from '../SideNav/SideNav'
import Medicine from '../Medicine/Medicine'
import Essence from '../Essence/Essence'
import Company from '../Company/Company'
import Education from '../Education/Education'


const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={SideNav} />
      <Route exact path='/' component={Landing} />
      <Route path='/medicine' component={Medicine} />
      <Route path='/essence/:name' component={Essence} />
      <Route path='/company/:name' component={Company} />
      <Route path='/education' component={Education} />
    </BrowserRouter>
  );
}

export default App;