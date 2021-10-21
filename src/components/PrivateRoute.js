// import necessary utility from rrd
import { Redirect, Route } from "react-router-dom";

// create component here
const PrivateRoute = ({ component: Component, ...rest }) => {
  // create statement for validation (by hardcode first)
  const isSignin = true;

  return (
    <>
      <Route {...rest} render={(props) => (isSignin ? <Component {...props} /> : <Redirect to="/signin" />)} />
    </>
  );
};

export default PrivateRoute;
