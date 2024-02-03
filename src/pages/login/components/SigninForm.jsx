import { useAuth } from '../../../auth/hooks/useAuth';

const SigninForm = () => {
    
    const { login } = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const { email, password } = Object.fromEntries(form.entries());
        login({
            email: email,
        });
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

export default SigninForm