import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ children }) {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1>VibeVision</h1>
            <button onClick={() => navigate('/login')} className="login">Login</button>
            <button onClick={() => navigate('/register')} className="register">Register</button>
            {children}
        </div>
    );
}

export default Header;
