import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../Landing/Landing'
import SideNav from '../SideNav/SideNav'
import Intro from '../Intro/Intro'
import Medicine from '../Medicine/Medicine'
import Essence from '../Essence/Essence'
import EssenceKeywords from '../EssenceKeywords/EssenceKeywords'
import Company from '../Company/Company'
import Group from '../Group/Group'
import CrossReference from '../CrossReference/CrossReference'
import Reference from '../Reference/Reference'
import Education from '../Education/Education'
import Beginner from '../Beginner/Beginner'
import Advanced from '../Advanced/Advanced'
import About from '../About/About'


const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={SideNav} />
      <Route exact path='/' component={Landing} />
      <Route path='/intro' component={Intro} />
      <Route path='/medicine' component={Medicine} />
      <Route exact path='/essence/:name' component={Essence} />
      <Route exact path='/essence/:name/:keywords' component={EssenceKeywords} />
      <Route exact path='/company/:company' component={Company} />
      <Route path='/company/:company/:group' component={Group} />
      <Route exact path='/crossreference' component={CrossReference} />
      <Route path='/crossreference/:reference' component={Reference} />
      <Route exact path='/education' component={Education} />
      <Route path='/education/beginner' component={Beginner} />
      <Route path='/education/advanced' component={Advanced} />
      <Route path='/about' component={About} />
    </BrowserRouter>
  );
}

export default App;