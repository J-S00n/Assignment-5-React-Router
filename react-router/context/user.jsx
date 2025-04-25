import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState(null);

    const login = (userData) => {
        setEmail(userData);
    };

    const logout = () => {
        setEmail(null);
    };

    return (
        <UserContext.Provider value={{ email, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useStoreContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
