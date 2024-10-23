import { createContext } from "react";

const StudentContextProvider = createContext();
const StudentContext = ({ children }) => {
    return (
        <StudentContextProvider.Provider value={{}}>
            {children}
        </StudentContextProvider.Provider>
    )
}

export default StudentContext