import { matchPath, useLocation } from "react-router-dom";
import routes from "../pages/routes";

const usePathPattern = (): string | undefined => {
  const { pathname } = useLocation();
  const route = routes.find((route) => matchPath(route.path, pathname));
  return route?.path;
};
export default usePathPattern;
