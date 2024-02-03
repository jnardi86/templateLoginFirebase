import { useState } from "react"
import SigninForm from "../components/SigninForm"
import SignUpForm from "../components/SignUpForm"


const LoginView = () => {

  const [showLogin, setShowLogin] = useState(true)
  // console.log(showLogin)

  const toggleForm = ()=> {
    setShowLogin((prevShowLogin)=> !prevShowLogin);
  }


  return (
    <div>
      <h2>{showLogin ? 'Login' : 'Registration'}</h2>
      {
        showLogin ? (
          <SigninForm />
        ) : (
          <SignUpForm 
          setShowLogin= {setShowLogin}
          />
        )
      }
      <p>
        {showLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <button onClick={toggleForm}>
          {showLogin ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  )
}

export default LoginView