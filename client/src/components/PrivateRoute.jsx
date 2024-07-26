import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
/**
 * We want to make the user profile page private.
 * So we wrap this private route with the profile page/dashboard route with this component in the App.jsx
 *We use the current user from our store through useSelector then we use only the current logged in user should have access to the dashboard.
 If the current user exist the we use <Outlet to render the children prop contained otherwise we return to the signin page
 */

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
