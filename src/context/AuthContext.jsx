import { createContext, useContext, useState } from "react";

const AuthContextProvider = createContext();
const AuthContext = ({ children }) => {
    const [error, setError] = useState(null)


    return (
        <AuthContextProvider.Provider value={{}}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default AuthContext

// coustom hooks
export const useAuthProvider = () => {
    return useContext(AuthContextProvider)
};