import { BrowserRouter, Route } from 'react-router-dom'
import routes from "../../routes"
import MainNav from '../MainNav/MainNav'

const App = () => {
  return (
    <BrowserRouter>
        <Route path='/' component={MainNav} />
        {routes.map(({ path, name, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={props => {
              const crumbs = routes
                // Get all routes that contain the current one.
                .filter(({ path }) => props.match.path.includes(path))
                // Swap out any dynamic routes with their param values.
                // E.g. "/pizza/:pizzaId" will become "/pizza/1"
                .map(({ path, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                        (path, param) =>
                          path.replace(`:${param}`, props.match.params[param]),
                        path
                      )
                    : path,
                  ...rest
                }));

              return (
                <div id="app">
                  {/* <Breadcrumbs crumbs={crumbs} /> */}
                  <Component {...props} crumbs={crumbs}/>
                </div>
              );
            }}
          />
        ))}
    </BrowserRouter>
  );
}

export default App;