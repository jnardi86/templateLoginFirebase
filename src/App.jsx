import { RouterProvider } from "react-router-dom"
import { appRouter } from "./core/router/AppRouter"
import AuthProvider from "./auth/context/AuthProvider"


function App() {

  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>

  )
}

export default App
