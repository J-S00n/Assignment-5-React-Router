import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        password: null,
        firstName: null,
        lastName: null,
    });
    // const [email, setEmail] = useState(null);
    // const [password, setPassword] = useState(null);
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);

    const login = (userData) => {
        setUser(userData);
        // setEmail(userData.email);
        // setFirstName(userData.firstName);
        // setLastName(userData.lastName);
        // setPassword(userData.password);
    };
    const logout = () => {
        setUser({ email: null, password: null, firstName: null, lastName: null });
        // setEmail(null);
        // setFirstName(null);
        // setLastName(null);
        // setPassword(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useStoreContext = () => {
    const context = useContext(UserContext);
    // if (!context) {
    //     throw new Error("useUser must be used within a UserProvider");
    // }
    return context;
}
