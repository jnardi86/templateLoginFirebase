import React from 'react'
import { useAuth } from '../../auth/hooks/useAuth'

const PublicRoute = ({children}) => {
  
    const { isLoggedIn } = useAuth()

    if(isLoggedIn) {
        return <Navigate to="/"/>;
    }

    return children;
}

export default PublicRoute