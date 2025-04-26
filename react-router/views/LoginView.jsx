import { useNavigate } from "react-router-dom";
import "./LoginView.css"

function LoginView() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/movies");
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
            </form>
        </div>
    );
}
export default LoginView;