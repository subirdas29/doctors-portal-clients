import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user}=useContext(AuthContext)
    let location = useLocation();
    if(!user)
    {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRouter;