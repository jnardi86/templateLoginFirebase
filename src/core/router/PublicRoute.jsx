import React from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  
    const { isLoggedIn } = useAuth()

    if(isLoggedIn) {
        return <Navigate to='/userProfile'/>
    }

    return children;
}

export default PublicRoute