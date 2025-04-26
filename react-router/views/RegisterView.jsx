import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context/user";
import { useState } from "react";
import "./RegisterView.css";

function RegisterView() {
    const navigate = useNavigate();
    // const { setUser} = useStoreContext();
    // const [formData, setFormData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    // });

    // const handleChange = (e) => {   
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // }

    const handleRegister = (e) => {
        e.preventDefault();

        // if (formData.password !== formData.confirmPassword) {
        //     alert("Passwords do not match!");
        //     return;
        // }
        // setUser(formData);
        // setfirstName = e.target[0].value;
        // setlastName = e.target[1].value;
        // setEmail = e.target[2].value;
        // setPassword = e.target[3].value;
        navigate("/home");
    }

    return (
        <div className="register-view">
            <h1>Register</h1>
            <form onSubmit={handleRegister} className="register-form"> 
                <input 
                type="text" 
                // value={formData.firstName} 
                // onChange={handleChange} 
                placeholder="First Name" required />
                <input 
                type="text" 
                // value={formData.lastName} 
                // onChange={handleChange} 
                placeholder="Last Name" required />
                <input 
                type="email" 
                // value={formData.firstName} 
                // onChange={handleChange} 
                placeholder="Email" required />
                <input 
                type="password" 
                // value={formData.firstName} 
                // onChange={handleChange} 
                placeholder="Password" required />
                <input 
                    type="password" 
                    className="confirmPassword"
                    // value={formData.confirmPassword}
                    // onChange={handleChange}
                    placeholder="Re-enter Password" 
                    required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
 
export default RegisterView;