import { Navigate, createBrowserRouter } from "react-router-dom"
import HomeView from "../../pages/home/views/HomeView"
import LoginView from "../../pages/login/views/LoginView.JSX"
import UserProfile from "../../pages/userProfile/views/UserProfile"
import PublicRoute from "./PublicRoute"
import ProtectedRoute from "./ProtectedRoute"
import Layout from "../layout/Layout"

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PublicRoute>
                <Layout>
                    <HomeView />
                </Layout>
            </PublicRoute>
        ),
    },

    {
        path: "/login",
        element:
            (
                <PublicRoute>
                    <Layout>
                        <LoginView />
                    </Layout>
                </PublicRoute>
            )

    },
    {
        path: "/userProfile",
        element: (
            <ProtectedRoute>
                <Layout>
                    <UserProfile />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }


])

