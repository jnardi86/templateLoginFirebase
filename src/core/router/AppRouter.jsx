import { Navigate, createBrowserRouter } from "react-router-dom"
import HomeView from "../../pages/home/views/HomeView"
import LoginView from "../../pages/login/views/LoginView.JSX"
import UserProfile from "../../pages/userProfile/views/UserProfile"
import PublicRoute from "./PublicRoute"
import ProtectedRoute from "./ProtectedRoute"

export const appRouter = createBrowserRouter([
    {   
        path:"/",
        element: (
            <ProtectedRoute>
                <HomeView/>
            </ProtectedRoute>
        ),
    },

    {
        path: "/login",
        element: 
        (
            <PublicRoute>
               <LoginView/>     
            </PublicRoute>
        )
        
    },
    {
        path: "/userProfile",
        element: (
            <ProtectedRoute>
                <UserProfile/>
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/"/>,
    }


])

