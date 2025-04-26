import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/user";
import { useState } from "react";
import "./ProtectedRoutes.jsx"
import "./LoginView.css"

function LoginView() {
    const navigate = useNavigate();
    // const { login } = useStoreContext();
    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (e) => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const handleLogin = (e) => {
        e.preventDefault();
        // const email = e.target[2].value;
        // const password = e.target[3].value;
        // Perform validation here (e.g., check if email and password are correct)
        // if (!formData.email || !formData.password) {
        //     alert("Email or Password incorrect!");
        //     return;
        // }
        // Perform login logic here
        // After successful login, navigate to the movies view
        // login(formData);
        
        navigate("/home");
    };

    return (
        <div className="login-view">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Email"
                    required
                    className="login-input" />
                <input
                    type="password"
                    // value={formData.password}
                    // onChange={handleChange}
                    placeholder="Password"
                    required
                    className="login-input" />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}
export default LoginView;