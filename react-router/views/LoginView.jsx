import { useNavigate } from "react-router-dom";

function LoginView() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here
        // After successful login, navigate to the movies view
        navigate("/movies");
    };

    return (
        <div className="login-view">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input type="text" placeholder="Username" required className="login-input" />
                <input type="password" placeholder="Password" required className="login-input" />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}
export default LoginView;