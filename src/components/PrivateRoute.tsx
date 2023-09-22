import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem('status');

  if(user === "200") {
    return true
  }

  return false;
};

const PrivateRoute = (props : any) => {
  const { children } = props;

  const auth = useAuth();
  console.log('PrivateRoute status: ', status);
  console.log("PrivateRoute auth: ", auth);

  /* if (auth) {
    return <Navigate to="/dogs" />;
  } */

  
  return (
    auth ? children : <Navigate to="/" replace />
  );
};

export default PrivateRoute;