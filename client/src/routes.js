import Landing from './components/Landing/Landing'
import Intro from './components/Intro/Intro'
import Medicine from './components/Medicine/Medicine'
import Essence from './components/Essence/Essence'
// import EssenceKeywords from '../EssenceKeywords/EssenceKeywords'
import Company from './components/Company/Company'
import Group from './components/Group/Group'
import CrossReference from './components/CrossReference/CrossReference'
import Chakra from './components/Chakra/Chakra'
import Meridian from './components/Meridian/Meridian'
import Reference from './components/Reference/Reference'
import Education from './components/Education/Education'
import Beginner from './components/Beginner/Beginner'
import Intermediate from './components/Intermediate/Intermediate'
import Advanced from './components/Advanced/Advanced'
import Store from './components/Store/Store'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const routes = [
  { path: "/", name: "Home", Component: Landing },
  { path: "/intro", name: "Introduction", Component: Intro },
  { path: "/medicine", name: "Medicine", Component: Medicine },
  { path: "/medicine/:company", name: "Company", Component: Company },
  { path: "/medicine/:company/:group", name: "Group", Component: Group },
  { path: "/medicine/:company/:group/:name", name: "Essence", Component: Essence },
  { path: "/essence/:name", name: "Essence", Component: Essence },
  { path: "/crossreference", name: "Cross Reference", Component: CrossReference },
  { path: "/crossreference/:reference", name: "Reference", Component: Reference },
  { path: "/chakra/:chakra", name: "Chakra", Component: Chakra },
  { path: "/meridian/:meridian", name: "Meridian", Component: Meridian },
  { path: "/education", name: "Education", Component: Education },
  { path: "/education/beginner", name: "Beginner", Component: Beginner },
  { path: "/education/intermediate", name: "Intermediate", Component: Intermediate },
  { path: "/education/advanced", name: "Advanced", Component: Advanced },
  { path: "/store", name: "Store", Component: Store },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
];

export default routes;