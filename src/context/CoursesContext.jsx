import { createContext } from "react";

const CoursesContextProvider = createContext();
const CoursesContext = ({children}) => {









    
    return (
        <CoursesContextProvider.Provider value={{}}>
            {children}
        </CoursesContextProvider.Provider>
    )
}

export default CoursesContext