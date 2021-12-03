import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Nav from "../components/nav";

const Search = () => {

    return (
        <div className="container-fluid">
            <div className="header">
                {/* navigation */}
                <Nav />
                <div className="container">
                    {/* aspirant */}
                    <div className="search-page">
                        <div className="row">
                            <div className="col-lg-3 aside">
                                {/* search  */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <i className=" fas fa-arrow-left" />
                                    <div className="searchbar d-flex align-items-center">
                                        <input type="text" placeholder="Search for Profile Name" />
                                        <img src="images/search-normal.png" alt="" />
                                    </div>
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
                                <div className="categories">
                                    <div className="category">
                                        <input type="checkbox" id="alphabetically" />
                                        <label htmlFor="alphabetically">Sort Alphabetically</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 main">
                                {/* aspirants  */}
                                <div className="profile d-flex mb-4">
                                    <div className="img-container">
                                        <img src="images/Amotekun-and-Tinubu 1.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h1 className="mb-3">Ahmed Bola Tinubu</h1>
                                        <div className="row align-items-end mb-4">
                                            <div className="col-lg-11">
                                                <h3 className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.
                                                    Nullam vitae
                                                    dignissim leo dis viverra scelerisque volutpat
                                                    quam. Ornare tellus, egestas amet posuere at est tellus, auctor.
                                                    Lobortis ante cursus enim, neque ipsum.</h3>
                                            </div>
                                            <div className="col-lg-1">
                                                <div className="vote d-flex justify-content-between align-items-center">
                                                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M28.7063 20.359C29.3211 19.5801 29.6159 18.7451 29.5783 17.8851C29.5407 16.9379 29.114 16.1964 28.7627 15.7415C29.1705 14.732 29.3274 13.143 27.966 11.9092C26.9685 11.0056 25.2747 10.6006 22.9284 10.7128C21.2784 10.7875 19.8982 11.0929 19.8418 11.1053H19.8355C19.5218 11.1614 19.1893 11.23 18.8506 11.3047C18.8255 10.9059 18.8945 9.91514 19.6348 7.68429C20.513 5.0297 20.4629 2.99826 19.4716 1.63981C18.4302 0.212813 16.7678 0.100647 16.2784 0.100647C15.8079 0.100647 15.375 0.293821 15.0676 0.649012C14.3713 1.45287 14.4528 2.93594 14.5407 3.6214C13.7125 5.82732 11.3913 11.2362 9.42773 12.738C9.39009 12.7629 9.35872 12.7941 9.32735 12.8252C8.75019 13.4297 8.36123 14.084 8.09774 14.6572C7.7276 14.4578 7.30728 14.3457 6.85558 14.3457H3.02873C1.58582 14.3457 0.418945 15.511 0.418945 16.9379V27.064C0.418945 28.4972 1.59209 29.6563 3.02873 29.6563H6.85558C7.41393 29.6563 7.93463 29.4818 8.36123 29.1827L9.83551 29.3572C10.0614 29.3883 14.0764 29.8931 18.1981 29.8121C18.9447 29.8681 19.6473 29.8993 20.2997 29.8993C21.4227 29.8993 22.4014 29.8121 23.2169 29.6376C25.1366 29.2325 26.4478 28.4225 27.1128 27.2323C27.621 26.3225 27.621 25.4189 27.5394 24.8456C28.7878 23.724 29.0074 22.4839 28.9635 21.6115C28.9384 21.1068 28.8255 20.6768 28.7063 20.359ZM3.02873 27.9738C2.52058 27.9738 2.1128 27.5625 2.1128 27.064V16.9317C2.1128 16.427 2.52685 16.0219 3.02873 16.0219H6.85558C7.36374 16.0219 7.77152 16.4332 7.77152 16.9317V27.0578C7.77152 27.5625 7.35746 27.9676 6.85558 27.9676H3.02873V27.9738ZM27.1002 19.6299C26.8368 19.9041 26.7866 20.3216 26.9873 20.6456C26.9873 20.6519 27.2445 21.0881 27.2759 21.6863C27.3198 22.5026 26.9246 23.2255 26.0965 23.8424C25.8016 24.0667 25.6824 24.453 25.8079 24.802C25.8079 24.8082 26.0777 25.6308 25.6385 26.4097C25.2182 27.1575 24.2834 27.6934 22.8656 27.9925C21.7301 28.2355 20.1868 28.2791 18.2922 28.1296C18.2671 28.1296 18.2358 28.1296 18.2044 28.1296C14.1705 28.2168 10.0927 27.6934 10.0488 27.6872H10.0425L9.40891 27.6124C9.44655 27.4379 9.46537 27.251 9.46537 27.064V16.9317C9.46537 16.6638 9.42145 16.402 9.34617 16.159C9.4591 15.7415 9.77277 14.813 10.513 14.0216C13.3299 11.8033 16.0839 4.31932 16.2031 3.99529C16.2533 3.86443 16.2659 3.7211 16.2408 3.57778C16.1341 2.87986 16.1718 2.02616 16.3223 1.77067C16.6548 1.7769 17.5519 1.87037 18.0915 2.61191C18.7314 3.49054 18.7063 5.06086 18.0162 7.14215C16.9622 10.3139 16.8744 11.984 17.7088 12.7193C18.1228 13.0869 18.6749 13.1056 19.0764 12.9623C19.4591 12.8751 19.823 12.8003 20.168 12.7442C20.1931 12.738 20.2245 12.7317 20.2496 12.7255C22.1755 12.308 25.626 12.0525 26.8242 13.1368C27.8405 14.059 27.1191 15.2804 27.0375 15.4113C26.8054 15.7602 26.8744 16.2151 27.1881 16.4955C27.1944 16.5017 27.8531 17.1187 27.8844 17.9474C27.9095 18.502 27.646 19.0691 27.1002 19.6299Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0">Born: 13th January 1961</p>
                                            <p className="mb-0">Party: All Active Pary</p>
                                            <p className="mb-0">Presidential Poll</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile d-flex mb-4">
                                    <div className="img-container">
                                        <img src="images/Amotekun-and-Tinubu 1.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h1 className="mb-3">Ahmed Bola Tinubu</h1>
                                        <div className="row align-items-end mb-4">
                                            <div className="col-lg-11">
                                                <h3 className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.
                                                    Nullam vitae
                                                    dignissim leo dis viverra scelerisque volutpat
                                                    quam. Ornare tellus, egestas amet posuere at est tellus, auctor.
                                                    Lobortis ante cursus enim, neque ipsum.</h3>
                                            </div>
                                            <div className="col-lg-1">
                                                <div className="vote d-flex justify-content-between align-items-center">
                                                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M28.7063 20.359C29.3211 19.5801 29.6159 18.7451 29.5783 17.8851C29.5407 16.9379 29.114 16.1964 28.7627 15.7415C29.1705 14.732 29.3274 13.143 27.966 11.9092C26.9685 11.0056 25.2747 10.6006 22.9284 10.7128C21.2784 10.7875 19.8982 11.0929 19.8418 11.1053H19.8355C19.5218 11.1614 19.1893 11.23 18.8506 11.3047C18.8255 10.9059 18.8945 9.91514 19.6348 7.68429C20.513 5.0297 20.4629 2.99826 19.4716 1.63981C18.4302 0.212813 16.7678 0.100647 16.2784 0.100647C15.8079 0.100647 15.375 0.293821 15.0676 0.649012C14.3713 1.45287 14.4528 2.93594 14.5407 3.6214C13.7125 5.82732 11.3913 11.2362 9.42773 12.738C9.39009 12.7629 9.35872 12.7941 9.32735 12.8252C8.75019 13.4297 8.36123 14.084 8.09774 14.6572C7.7276 14.4578 7.30728 14.3457 6.85558 14.3457H3.02873C1.58582 14.3457 0.418945 15.511 0.418945 16.9379V27.064C0.418945 28.4972 1.59209 29.6563 3.02873 29.6563H6.85558C7.41393 29.6563 7.93463 29.4818 8.36123 29.1827L9.83551 29.3572C10.0614 29.3883 14.0764 29.8931 18.1981 29.8121C18.9447 29.8681 19.6473 29.8993 20.2997 29.8993C21.4227 29.8993 22.4014 29.8121 23.2169 29.6376C25.1366 29.2325 26.4478 28.4225 27.1128 27.2323C27.621 26.3225 27.621 25.4189 27.5394 24.8456C28.7878 23.724 29.0074 22.4839 28.9635 21.6115C28.9384 21.1068 28.8255 20.6768 28.7063 20.359ZM3.02873 27.9738C2.52058 27.9738 2.1128 27.5625 2.1128 27.064V16.9317C2.1128 16.427 2.52685 16.0219 3.02873 16.0219H6.85558C7.36374 16.0219 7.77152 16.4332 7.77152 16.9317V27.0578C7.77152 27.5625 7.35746 27.9676 6.85558 27.9676H3.02873V27.9738ZM27.1002 19.6299C26.8368 19.9041 26.7866 20.3216 26.9873 20.6456C26.9873 20.6519 27.2445 21.0881 27.2759 21.6863C27.3198 22.5026 26.9246 23.2255 26.0965 23.8424C25.8016 24.0667 25.6824 24.453 25.8079 24.802C25.8079 24.8082 26.0777 25.6308 25.6385 26.4097C25.2182 27.1575 24.2834 27.6934 22.8656 27.9925C21.7301 28.2355 20.1868 28.2791 18.2922 28.1296C18.2671 28.1296 18.2358 28.1296 18.2044 28.1296C14.1705 28.2168 10.0927 27.6934 10.0488 27.6872H10.0425L9.40891 27.6124C9.44655 27.4379 9.46537 27.251 9.46537 27.064V16.9317C9.46537 16.6638 9.42145 16.402 9.34617 16.159C9.4591 15.7415 9.77277 14.813 10.513 14.0216C13.3299 11.8033 16.0839 4.31932 16.2031 3.99529C16.2533 3.86443 16.2659 3.7211 16.2408 3.57778C16.1341 2.87986 16.1718 2.02616 16.3223 1.77067C16.6548 1.7769 17.5519 1.87037 18.0915 2.61191C18.7314 3.49054 18.7063 5.06086 18.0162 7.14215C16.9622 10.3139 16.8744 11.984 17.7088 12.7193C18.1228 13.0869 18.6749 13.1056 19.0764 12.9623C19.4591 12.8751 19.823 12.8003 20.168 12.7442C20.1931 12.738 20.2245 12.7317 20.2496 12.7255C22.1755 12.308 25.626 12.0525 26.8242 13.1368C27.8405 14.059 27.1191 15.2804 27.0375 15.4113C26.8054 15.7602 26.8744 16.2151 27.1881 16.4955C27.1944 16.5017 27.8531 17.1187 27.8844 17.9474C27.9095 18.502 27.646 19.0691 27.1002 19.6299Z" fill="white" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0">Born: 13th January 1961</p>
                                            <p className="mb-0">Party: All Active Pary</p>
                                            <p className="mb-0">Presidential Poll</p>
                                        </div>
                                    </div>
                                </div>
                                {/* stories  */}
                                <div className="story">
                                    <div className="row">
                                        <div className="col-lg-11">
                                            <h1>President Buhari Receives Jersey No10 From Gianni Infantino</h1>
                                            <div className="d-flex align-items-center">
                                                <p className="d-flex align-items-center"><img src="images/user.png" alt="user" /><span>Luther</span></p>
                                                <p className="d-flex align-items-center"><img src="images/clock.png" alt="clock" /><span>10 mins ago</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 d-flex align-items-center">
                                            <i className="fas fa-angle-right" />
                                        </div>
                                    </div>
                                </div>
                                <div className="story">
                                    <div className="row">
                                        <div className="col-lg-11">
                                            <h1>President Buhari Receives Jersey No10 From Gianni Infantino</h1>
                                            <div className="d-flex align-items-center">
                                                <p className="d-flex align-items-center"><img src="images/user.png" alt="user" /><span>Luther</span></p>
                                                <p className="d-flex align-items-center"><img src="images/clock.png" alt="clock" /><span>10 mins ago</span></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-1 d-flex align-items-center">
                                            <i className="fas fa-angle-right" />
                                        </div>
                                    </div>
                                </div>
                                {/* polls  */}
                                <div className="poll">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h1>Lagos State Poll</h1>
                                            <p>Gubernatorial</p>
                                        </div>
                                        <div className="col-lg-2">
                                            <h4>Start Date</h4>
                                            <h3>14/04/2021</h3>
                                        </div>
                                        <div className="col-lg-2">
                                            <h4>End Date</h4>
                                            <h3>14/09/2022</h3>
                                        </div>
                                        <div className="col-lg-1 d-flex align-items-center">
                                            <i className="fas fa-angle-right" />
                                        </div>
                                    </div>
                                </div>
                                <div className="poll">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h1>Lagos State Poll</h1>
                                            <p>Gubernatorial</p>
                                        </div>
                                        <div className="col-lg-2">
                                            <h4>Start Date</h4>
                                            <h3>14/04/2021</h3>
                                        </div>
                                        <div className="col-lg-2">
                                            <h4>End Date</h4>
                                            <h3>14/09/2022</h3>
                                        </div>
                                        <div className="col-lg-1 d-flex align-items-center">
                                            <i className="fas fa-angle-right" />
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

export default Search;