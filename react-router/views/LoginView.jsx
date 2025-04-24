import { useNavigate } from "react-router-dom";
import "./LoginView.css"

function LoginView() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        // Perform validation here (e.g., check if username and password are correct)
        if (!username || !password) {
            alert("Please fill in all fields.");
            return;
        }
        // Perform login logic here
        // After successful login, navigate to the movies view
        navigate("/home");
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