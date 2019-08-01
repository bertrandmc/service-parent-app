import { routes } from '../shared/config/routes';
import { matchPath } from "react-router-dom";

export const getMatchedRoute = location => {
  const matched = routes
    .find(route => matchPath(location, route));
  return {
    scriptUrl: matched.scriptUrl,
    componentName: matched.componentName,
    htmlUrl: matched.htmlUrl
  };
};
