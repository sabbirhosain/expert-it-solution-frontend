import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavStyle.css";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar_top">
            <div className="container-fluid">
                <div className="navbar_row">
                    {/*====>> Offcanvas bar start <<====*/}
                    <button
                        className="offcanvas_close_btn btn btn-dark d-flex align-items-center rounded-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        <FaBars className="offcanvas_bar_icon" />
                    </button>
                    {/*====>> Offcanvas bar end <<====*/}

                    <div className="d-none d-md-flex align-items-center gap-2">
                        {/* <h5 className="company_brand">Expert It Solutions</h5> */}
                        {/* <small className="bg-danger text-white py-0 px-2">Admin</small> */}
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-outline-dark rounded-0 text-uppercase dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-expanded="false"
                            >
                            Sabbir Hosain
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end mt-2 py-0 rounded-0">
                                <li>
                                    {" "}
                                    <button
                                        type="button"
                                        className="dropdown-item d-flex align-items-center gap-2"
                                    >
                                        <BiLogOut />
                                        Logout
                                    </button>
                                </li>
                                <hr className="dropdown-divider p-0 m-0" />
                                <li>
                                    <Link
                                        to={"/"}
                                        className="dropdown-item d-flex align-items-center gap-2"
                                    >
                                        <CgProfile />
                                        Profile
                                    </Link>
                                </li>
                                <hr className="dropdown-divider p-0 m-0" />
                                <li>
                                    <Link
                                        to={"/setting"}
                                        className="dropdown-item d-flex align-items-center gap-2"
                                    >
                                        <SlSettings />
                                        Setting
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;