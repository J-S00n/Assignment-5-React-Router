import { useNavigate, Link } from "react-router-dom";
import "./RegisterView.css";

function RegisterView() {

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/movies/genre/28");
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleRegister} className="register-form">
                <input
                    type="text"
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    className="confirmPassword"
                    placeholder="Re-enter Password"
                    required />
                <button type="submit">Register</button>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default RegisterView;