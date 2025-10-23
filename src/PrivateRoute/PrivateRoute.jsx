import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=use(AuthContext);
    if(loading)return <Loading/>
    return (
        <>
            {user?children:<Navigate state={location.pathname} to={"/login"} replace/>}
        </>
    );
};

export default PrivateRoute;