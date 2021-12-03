import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../components/apiRoot";
import Footer from "../components/footer";
import Nav from "../components/nav";

const ProfileSettings = () => {
    // params 
    const { Id } = useParams()

    // fetch user 
    const fetchUser = async () => {
        const response = await axios
            .get(`${API.API_ROOT}/users/activate/${Id}`)
        console.log(response)
    }

    console.log(Id)

    useEffect(() => {
        if (Id && Id !== '') fetchUser()
    }, [Id])

    // page toggle 
    const [profileBody, setProfileBody] = useState(true)
    const [passwodBody, setPasswordBody] = useState(true)

    return (
        <div className="container-fluid">
            <div className="header">
                {/* navigation */}
                <Nav />
                <div className="container">
                    {/* profile  */}
                    <section className="profile-setting">
                        <header className="d-flex justify-content-between align-items-center" style={{ borderRadius: `${profileBody ? '10px 10px 0 0' : '10px'}` }}>
                            <p className="mb-0">Profile</p>
                            {profileBody ? <i className="fas fa-angle-up" onClick={() => setProfileBody(!profileBody)} /> : <i className="fas fa-angle-right" onClick={() => setProfileBody(!profileBody)} />}
                        </header>
                        <div className="body" style={{ display: `${profileBody ? 'block' : 'none'}` }}>
                            <div className="profile-pic mb-5">
                                <img src="images/Layer_x0020_1 2.png" className="img-fluid" alt="profile-pic" />
                                <input type="file" placeholder="Upload Picture    >" />
                            </div>
                            <div className="input d-flex align-items-center mb-5">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Mike" />
                                <input type="text" placeholder="Olukayode" />
                            </div>
                            <div className="input d-flex align-items-center mb-5">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder="mike@mikky.com" />
                            </div>
                            <div className="input d-flex align-items-center">
                                <label htmlFor="number">Phone Number</label>
                                <input type="text" id="number" placeholder="+234 700123456789" />
                            </div>
                            <button>Update Changes</button>
                        </div>
                    </section>
                    {/* password  */}
                    <section className="profile-setting password-setting">
                        <header className="d-flex justify-content-between align-items-center" style={{ borderRadius: `${passwodBody ? '10px 10px 0 0' : '10px'}` }}>
                            <p className="mb-0">Change Password</p>
                            {passwodBody ? <i className="fas fa-angle-up" onClick={() => setPasswordBody(!passwodBody)} /> : <i className="fas fa-angle-right" onClick={() => setPasswordBody(!passwodBody)} />}
                            {/* <i className="fas fa-angle-up" /> */}
                        </header>
                        <div className="body" style={{ display: `${passwodBody ? 'block' : 'none'}` }}>
                            <div className="input d-flex align-items-center mb-5">
                                <label htmlFor="current">Current Password</label>
                                <input type="password" id="current" placeholder="current" />
                            </div>
                            <div className="input d-flex align-items-center mb-5">
                                <label htmlFor="new">New Password</label>
                                <input type="password" id="new" placeholder="mike@mikky.com" />
                            </div>
                            <div className="input d-flex align-items-center">
                                <label htmlFor="confirm">Confirm Password</label>
                                <input type="text" id="confirm" placeholder="+234 700123456789" />
                            </div>
                            <button>Update Changes</button>
                        </div>
                    </section>
                    {/* footer  */}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;