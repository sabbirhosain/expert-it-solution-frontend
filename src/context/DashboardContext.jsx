import { createContext } from "react";

const DashboardContextProvider = createContext();
const DashboardContext = ({ children }) => {
    return (
        <DashboardContextProvider.Provider value={{}}>
            {children}
        </DashboardContextProvider.Provider>
    )
}

export default DashboardContext