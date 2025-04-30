import { useNavigate, Link } from "react-router-dom";
import "./LoginView.css"

function LoginView() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/movies/genre/28");
    };

    return (
        <div className="login-view">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className="login-input"
                />
                <button type="submit" className="login-button">
                    Login
                </button>
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}
export default LoginView;