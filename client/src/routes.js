import Landing from './components/Landing/Landing'
import Intro from './components/Intro/Intro'
import Medicine from './components/Medicine/Medicine'
import Essence from './components/Essence/Essence'
// import EssenceKeywords from '../EssenceKeywords/EssenceKeywords'
import Company from './components/Company/Company'
import Group from './components/Group/Group'
import CrossReference from './components/CrossReference/CrossReference'
import Reference from './components/Reference/Reference'
import Education from './components/Education/Education'
import Beginner from './components/Beginner/Beginner'
import Intermediate from './components/Intermediate/Intermediate'
import Advanced from './components/Advanced/Advanced'
import Store from './components/Store/Store'
import About from './components/About/About'

export default [
  { path: "/", name: "Home", Component: Landing },
  { path: "/intro", name: "Introduction", Component: Intro },
  { path: "/medicine", name: "Medicine", Component: Medicine },
  { path: "/company/:company", name: "Company", Component: Company },
  { path: "/company/:company/:group", name: "Group", Component: Group },
  { path: "/company/:company/:group/:name", name: "Essence", Component: Essence },
  { path: "/crossreference", name: "Cross Reference", Component: CrossReference },
  { path: "/crossreference/:reference", name: "Reference", Component: Reference },
  { path: "/education", name: "Education", Component: Education },
  { path: "/education/beginner", name: "Beginner", Component: Beginner },
  { path: "/education/intermediate", name: "Intermediate", Component: Intermediate },
  { path: "/education/advanced", name: "Advanced", Component: Advanced },
  { path: "/store", name: "Store", Component: Store },
  { path: "/about", name: "About", Component: About }
];