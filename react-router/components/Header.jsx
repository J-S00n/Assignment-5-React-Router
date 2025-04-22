import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    retrun(
        <div className="header">
            <h1>VibeVision</h1>
            <button class="login">Login</button>
            <button class="register">Register</button>
        </div>
    );
}

export default Header;
