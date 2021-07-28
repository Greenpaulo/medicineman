import { Link } from "react-router-dom";

const Breadcrumbs = ({props, crumbs, company, group, essence}) => {
  // Don't render a single breadcrumb.
  // let crumbs = props.crumbs
  if (crumbs.length <= 1) {
    return null;
  }

  const renderCrumb = (name, path, key) => {
    if (name === "Group") {
      return (
        key + 1 === crumbs.length ? (
            <span key={key} className="bold">
              {group}
            </span>
          ) : (
            <Link key={key} className="mr-2" to={path}>
              {`${group} >`}
            </Link>
          )
      )
    } else if (name === "Company") {
      return (
        key + 1 === crumbs.length ? (
            <span key={key} className="bold">
              {company}
            </span>
          ) : (
            <Link key={key} className="mr-2" to={path}>
              {`${company} >`}
            </Link>
          )
      )
    } else if (name === "Essence") {
      return (
        key + 1 === crumbs.length ? (
            <span key={key} className="bold">
              {essence}
            </span>
          ) : (
            <Link key={key} className="mr-2" to={path}>
              {`${essence} >`}
            </Link>
          )
      )
    } else {
      return (
        key + 1 === crumbs.length ? (
            <span key={key} className="bold">
              {name}
            </span>
          ) : (
            <Link key={key} className="mr-2" to={path}>
              {`${name} >`}
            </Link>
          )
      )
    }
  }

  return (
    <div className="mb-4">
      {/* Link back to any previous steps of the breadcrumb. */}
      {crumbs.map(({ name, path }, key) => (

        renderCrumb(name, path, key)
      ))}

    </div>
  );
};

export default Breadcrumbs;