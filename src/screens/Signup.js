import React, { useContext } from "react";
import axios from "axios";
import { API } from "../components/apiRoot";
import { DataContext } from "../dataContext";
import { setUserSession } from "../utils/common";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login"
// import FacebookLogin from "react-facebook-login"
import Footer from "../components/footer";
import Nav from "../components/nav";


const Signup = () => {
    // context 
    const { context, setContext } = useContext(DataContext)

    // history 
    const navigate = useNavigate()

    // signup with google
    // const responseSuccessGoogle = (response) => {
    //     console.log(response.tokenId)
    //     axios({
    //         method: "post",
    //         url: "https://olf.online/ballot/api/users/googleLogin",
    //         data: { tokenId: response.tokenId }
    //     }).then((response) => {
    //         console.log(response)
    //         setUserSession(response.data.token)
    //         // setContext({ ...context, user: response })
    //         // history.push('./cart')
    //     }
    //     )
    // }

    const responseSuccessGoogle = (response) => {
        console.log(response);
        axios({
            method: "post",
            url: "https://olf.online/ballot/api/users/googleLogin",
            data: { tokenId: response.tokenId }
        }).then((response) => {
            console.log(response)
        }
        )
    }

    const responseErrorGoogle = () => {
    }

    // signup with facebook 
    // const responseFacebook = (response) => {
    //     console.log(response)
    // }

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
                                <p>Do you have an account already? <Link to="/login">Click Here to Login</Link></p>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-form d-flex flex-column justify-content-center align-items-center">
                                    <h1>Create an Account on Ballot Box</h1>
                                    <p>Votes made on BallotBox are only limited to BallotBox
                                        and does not count for the National Election!</p>
                                    <GoogleLogin
                                        clientId="400193780425-47gblne8q32vr01bh0qd4tlnv4bd152q.apps.googleusercontent.com"
                                        buttonText="Signup with your Googe Account"
                                        onSuccess={responseSuccessGoogle}
                                        onFailure={responseErrorGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        className='google-login-btn'
                                    />
                                    {/* <div className="facebook-login">
                                        <i class="fab fa-facebook-f"></i>
                                        <FacebookLogin
                                            appId="1061096171343828"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            // onClick={componentClicked}
                                            callback={responseFacebook} />
                                    </div> */}
                                    {/* <button>Signup with your Googe Account</button> */}
                                    <div className="or d-flex justify-content-between align-items-center">
                                        <div className="span" />
                                        <span>or</span>
                                        <div className="span" />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="Email">Email</label>
                                        <input id="Email" type="text" placeholder="Email" value={context.signUpForm.email} onChange={(e) => setContext({ ...context, signUpForm: { ...context.signUpForm, email: e.target.value } })} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" placeholder="password" value={context.signUpForm.password} onChange={(e) => setContext({ ...context, signUpForm: { ...context.signUpForm, password: e.target.value } })} />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="number">Phone Number</label>
                                        <input id="number" type="tel" placeholder="+234 | 70012345678" value={context.signUpForm.number} onChange={(e) => setContext({ ...context, signUpForm: { ...context.signUpForm, number: e.target.value } })} />
                                    </div>
                                    <div className="progres-bar d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <div className="bar">
                                                <div className="indicator" />
                                            </div>
                                            <Link to="/finish-signup">
                                                <div className="bar" />
                                            </Link>
                                        </div>
                                        <p>Step 1 of 2</p>
                                    </div>
                                    <button id="login" onClick={() => navigate('/finish-signup')}>Continue<i className="fas fa-angle-right" /></button>
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

export default Signup;