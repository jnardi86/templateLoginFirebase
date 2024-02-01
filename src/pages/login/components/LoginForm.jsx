import React from 'react'
import { useAuth } from '../../../auth/hooks/useAuth';

const LoginForm = () => {

    const { login, isLoggedIn } = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries());
        login();
        

    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                Email
                <input type="email" name="email" required />
            </div>
            <div>
                Password
                <input type="password" name="password" required />
            </div>
            <button type="submit">
                Iniciar Sesión
            </button>
        </form>

    )
}

export default LoginForm