import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className="header">
            <h1>VibeVision</h1>
            <button onClick={() => navigate('/login')}className="login">Login</button>
            <button onClick={() => navigate('/register')}className="register">Register</button>
        </div>
    );
}

export default Header;
