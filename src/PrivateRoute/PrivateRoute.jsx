import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user}=use(AuthContext);
    return (
        <>
            {user?children:<Navigate state={location.pathname} to={"/login"} replace/>}
        </>
    );
};

export default PrivateRoute;