import { useAuth } from '../../auth/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

 const { isLoggedIn } = useAuth()

    if(isLoggedIn) {
        return children;
    }

    return <Navigate to="/"/>;
}

export default ProtectedRoute