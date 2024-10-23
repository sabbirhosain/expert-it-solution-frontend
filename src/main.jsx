import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx'
import DashboardContext from './context/DashboardContext.jsx'
import CoursesContext from './context/CoursesContext.jsx'
import StudentContext from './context/StudentContext.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <UserContext>
        <DashboardContext>
          <CoursesContext>
            <StudentContext>
              <App />
            </StudentContext>
          </CoursesContext>
        </DashboardContext>
      </UserContext>
    </AuthContext>
  </BrowserRouter>
)
