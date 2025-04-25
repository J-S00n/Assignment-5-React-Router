import { useNavigate } from "react-router-dom";
import "./RegisterView.css";

function RegisterView() {
    const navigate = useNavigate();

    return (
        <div className="register-view">
            <h1>Register</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                // Handle registration logic here
                navigate('/home');
            }}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Re-enter Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default RegisterView;