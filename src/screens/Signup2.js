import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { API } from "../components/apiRoot";
import { DataContext } from "../dataContext";
import Footer from "../components/footer";
import Nav from "../components/nav";

const Signup2 = () => {
    // context 
    const { context, setContext } = useContext(DataContext)

    // loading and error 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // handleSignup 
    const handleSignup = async () => {
        const fd = new FormData()
        fd.append('email', context.signUpForm.email)
        fd.append('password', context.signUpForm.password)
        fd.append('phonenumber', context.signUpForm.number)
        fd.append('name', context.signUpForm.name)
        fd.append('username', context.signUpForm.username)
        if (context.signUpForm.profilePicture !== null & context.signUpForm.profilePicture !== undefined) {
            fd.append('image', context.signUpForm.profilePicture)
        }
        const response = await axios
            .post(`${API.API_ROOT}/users/register`, fd)
            .catch((error) => {
                if (error.response.status === 401 || error.response.status === 400) {
                    setError(error.response.message)
                }
                else {
                    setError('Something went wrong, please try again')
                }
                console.error(error)
                setLoading(false)
            })
        if (response.status === 200) {
            setContext({ ...context, signUpForm: { email: '', password: '', number: '', name: '', username: "", profilePicture: null } })
        }
    }

    return (
        <div className="container-fluid">
            <div className="header">
                {/* navigation */}
                <Nav />
                {/* login form  */}
                <div className="container">
                    <div className="login">
                        <div className="row align-items-center">
                            <div className="col-lg-6 login-text">
                                <h1>Explore Politics, Learn and Share Insights Online</h1>
                                <p id="stage-2">Votes made on BallotBox are only limited to BallotBox
                                    and does not count for the National Election!</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-form d-flex flex-column justify-content-center align-items-center">
                                    <h1>Set up Your Account on BallotBox</h1>
                                    <p>Kindly fill your profile details</p>
                                    <div className="input">
                                        <label htmlFor="name">Full Name</label>
                                        <input id="name" type="text" placeholder="Full Name" value={context.signUpForm.name} onChange={(e) => setContext({ ...context, signUpForm: { ...context.signUpForm, name: e.target.value } })} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="username">Create Username</label>
                                        <input id="username" type="text" placeholder="Username" value={context.signUpForm.username} onChange={(e) => setContext({ ...context, signUpForm: { ...context.signUpForm, username: e.target.value } })} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="picture">Profile Picture (Optional)</label>
                                        <input type="file" id="picture" onChange={(e) => setContext({ ...context, signUpForm: { ...context.signUpForm, profilePicture: e.target.files[0] } })} />
                                    </div>
                                    <div className="progres-bar d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <Link to="/signup">
                                                <div className="bar">
                                                    <div className="indicator2" />
                                                </div>
                                            </Link>
                                            <div className="bar">
                                                <div className="indicator" />
                                            </div>
                                        </div>
                                        <p>Step 2 of 2</p>
                                    </div>
                                    <button id="login" onClick={handleSignup}>Continue<i className="fas fa-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer  */}
                <div className="container">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Signup2;