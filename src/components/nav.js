import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../dataContext";
import { removeUserSession } from "../utils/common"


const Nav = () => {
    // context 
    const { context, setContext } = useContext(DataContext)

    return (
        <div className="navigation-container">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand">
                            <img
                                src={require("../images/Logo.png").default}
                                alt="logo"
                            />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span />
                            <span />
                            <span />
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item br"><Link to="/polls" className="nav-link">Polls</Link></li>
                                <li className="nav-item br"><Link to="/stories" className="nav-link">Stories</Link></li>
                                <li className="nav-item br"><Link to="/profiles" className="nav-link">Profiles</Link></li>
                                <li className="nav-item br d-flex align-items-center"><a className="nav-link" id="pvc" href="#">Take Course</a>
                                </li>
                                {localStorage.getItem('ballotbox_token') !== null ?
                                    <>
                                        <li className="nav-item d-flex align-items-center"><a href className="nav-link"><img src="images/Notification 1.png" alt="notifications" /></a></li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="images/Layer_x0020_1 2.png" className="img-fluid" alt="" />
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li>
                                                    <a className="dropdown-item" href="#"><img src={require("../images/Group.png").default} alt="profile" />Profile</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#"><img src={require("../images/ic_twotone-timeline.png").default} alt="Timeline" />Timeline</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={(e) => {
                                                        e.preventDefault();
                                                        removeUserSession();
                                                        setContext({ ...context, user: {} });
                                                    }}><img src={require("../images/ri_logout-circle-line.png").default} alt="Logout" />Logout</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item">
                                            <Link to="/signup" className="nav-link">Signup</Link>
                                        </li>
                                        <Link to="/login">
                                            <li className="nav-item"><button className="nav-btn">Login</button></li>
                                        </Link>
                                    </>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;