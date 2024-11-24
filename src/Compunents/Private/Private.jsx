import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    console.log(location.pathname);

    if (loader) {
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login' replace ></Navigate>
    }
    return children;
};

export default Private;