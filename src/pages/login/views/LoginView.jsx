import { useAuth } from "../../../auth/hooks/useAuth"
import LoginForm from "../components/LoginForm";


const LoginView = () => {

  const { login } = useAuth();


  return (
    <div>
      <h2>LOGIN</h2>
    <LoginForm/>
    </div>
  )
}

export default LoginView