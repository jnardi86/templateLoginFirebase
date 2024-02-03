import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/hooks/useAuth"
import { useState } from "react";


const SignUpForm = ({setShowLogin}) => {

    const [error, setError] = useState('');
    const navigate = useNavigate()
    const { signUp } = useAuth();



    const handleSubmit = async (event) => {
       
        event.preventDefault();
        const form = new FormData(event.target);
        const { email, password } = Object.fromEntries(form.entries());

        try {
            const response = await signUp(email, password);
            console.log(response)

        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }

        if(!error) {
            navigate("/login", { replace: true });
        }
        
        setShowLogin(true);


    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                Email
                <input type="email" name="email" required />
            </div>
            <div>
                Password
                <input type="password" name="password" required />
            </div>
            <button type="submit">
                Registrarse
            </button>
        </form>
    )
}

export default SignUpForm