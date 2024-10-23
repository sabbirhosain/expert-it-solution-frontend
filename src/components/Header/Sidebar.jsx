import { IoIosArrowDown } from 'react-icons/io'
import { MdAccountBalance, MdDashboardCustomize, MdInventory } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { GrDashboard } from 'react-icons/gr'
import { PiStudentBold } from "react-icons/pi";
import { IoBook } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { BiRightArrow } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
// import logo from "../../assets/dashboard.png"
import { NavLink, useLocation } from 'react-router-dom'
import { LuFileSpreadsheet } from "react-icons/lu";
import "./NavStyle.css"


const Sidebar = () => {
    const URL = useLocation()

    return (
        <div className="sidebar">
            <div className="offcanvas offcanvas-start offcanvas_sidebar" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header justify-content-center">
                    <NavLink to={"/"} className="d-flex align-items-center justify-content-center text-uppercase fw-bold">Expert It Solutions</NavLink>
                    {/* <button type="button" className="btn-close offcanvas_close_btn" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                </div>
                <div className="offcanvas-body">
                    <ul className="dropdown_item pb-5">

                        <li className="dropdown_list">
                            <NavLink to={"/"} className="dropdown_btn">
                                <span className="dropdown_list_name"><MdDashboardCustomize className="dropdown_list_icon" />Dashboard</span>
                            </NavLink>
                        </li>

                        <div className="accordion accordion-flush" id="accordionFlushExample">

                            <li className="dropdown_list">
                                <NavLink to={"/users"} className="dropdown_btn">
                                    <span className="dropdown_list_name">
                                        <FaUserGroup className="dropdown_list_icon" />Users List</span>
                                </NavLink>
                            </li>
                            <li className="dropdown_list">
                                <NavLink to={"/courses"} className="dropdown_btn">
                                    <span className="dropdown_list_name">
                                        <IoBook className="dropdown_list_icon" />Courses List</span>
                                </NavLink>
                            </li>

                            <li className="dropdown_list">
                                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePaymenta" aria-expanded="false" aria-controls="flush-collapsePaymenta">
                                    <span className="dropdown_list_name">
                                        <PiStudentBold className="dropdown_list_icon" />Students</span>
                                    <IoIosArrowDown className="dropdown_icon" />
                                </button>

                                <div id="flush-collapsePaymenta" className={URL.pathname === "/students" || URL.pathname === "/student-fee" || URL.pathname === "/attendance" || URL.pathname === "/student-history" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingPaymenta" data-bs-parent="#accordionFlushExample">
                                    <NavLink to={"/students"} className="dropdown_link"><BiRightArrow className='dropdown_link_icon' />Student List</NavLink>
                                    <NavLink to={"/student-fee"} className="dropdown_link"><BiRightArrow className='dropdown_link_icon' />Student Fee</NavLink>
                                    <NavLink to={"/attendance"} className="dropdown_link"><BiRightArrow className='dropdown_link_icon' />Attendance Sheet</NavLink>
                                    <NavLink to={"/student-history"} className="dropdown_link"><BiRightArrow className='dropdown_link_icon' />Student History</NavLink>
                                </div>
                            </li>

                            <li className="dropdown_list">
                                <NavLink to={"/trainer"} className="dropdown_btn">
                                    <span className="dropdown_list_name"><HiMiniUsers className="dropdown_list_icon" />Trainer List</span>
                                </NavLink>
                            </li>

                            <li className="dropdown_list">
                                <NavLink to={"/expense"} className="dropdown_btn">
                                    <span className="dropdown_list_name">
                                        <FiDollarSign className="dropdown_list_icon" />Expense</span>
                                </NavLink>
                            </li>

                            <li className="dropdown_list">
                                <NavLink to={"/setting"} className="dropdown_btn">
                                    <span className="dropdown_list_name">
                                        <IoSettings className="dropdown_list_icon" />Settings</span>
                                </NavLink>
                            </li>

                        </div>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default Sidebar