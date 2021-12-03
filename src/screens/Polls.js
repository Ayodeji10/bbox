import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";

const Polls = () => {

    return (
        <div className="container-fluid">
            <div className="header">
                {/* navigation */}
                <Nav />
                <div className="container">
                    {/* profiles  */}
                    <div className="profiles">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="searchbar d-flex align-items-center">
                                    <input type="text" placeholder="Search Stories" />
                                    <img src="images/search-normal.png" alt="" />
                                </div>
                                <div className="categories mb-4">
                                    <h1 className="mb-3">Sort By Category</h1>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="All" />
                                        <label htmlFor="All">All</label>
                                    </div>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="Presidential" />
                                        <label htmlFor="Presidential">Presidential</label>
                                    </div>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="Gubernatorial" />
                                        <label htmlFor="Gubernatorial">Gubernatorial</label>
                                    </div>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="Senatorial" />
                                        <label htmlFor="Senatorial">Senatorial</label>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" id="reps" />
                                        <label htmlFor="reps">House of Representative</label>
                                    </div>
                                </div>
                                <div className="categories mb-4">
                                    <h1 className="mb-3">Sort By Time</h1>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="All2" />
                                        <label htmlFor="All2">All</label>
                                    </div>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="recent" />
                                        <label htmlFor="recent">Recently Added</label>
                                    </div>
                                    <div className="category mb-2">
                                        <input type="checkbox" id="ongoing" />
                                        <label htmlFor="ongoing">Ongoing Poll</label>
                                    </div>
                                    <div className="category">
                                        <input type="checkbox" id="concluded" />
                                        <label htmlFor="concluded">Concluded Poll</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="polls-container">
                                    <div className="title">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p>Poll</p>
                                            </div>
                                            <div className="col-lg-2">
                                                <p>Open Date</p>
                                            </div>
                                            <div className="col-lg-2">
                                                <p>End Date</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poll">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h1>Ekiti State 2021 Poll</h1>
                                                    <p>Gubernatorial</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/04/2021</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <p>14/09/2022</p>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to="/single-poll">
                                                        <h4 className="d-flex align-items-center">Open<i className="fas fa-angle-right" /></h4>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer  */}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Polls;