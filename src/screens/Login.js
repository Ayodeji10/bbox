import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../dataContext";
import { API } from "../components/apiRoot";
import { setUserSession } from "../utils/common";
import GoogleLogin from "react-google-login"
// import FacebookLogin from "react-facebook-login"
import Footer from "../components/footer";
import Nav from "../components/nav";

const Login = () => {
    // context 
    const { context, setContext } = useContext(DataContext)
    // login Form 
    const [loginForm, setLoginForm] = useState({ email: "", password: "" })

    // loading and error
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // handle login 
    const handleLogin = () => {
        setError(null)
        setLoading(true)
        axios.post(`${API.API_ROOT}/users/signin`, loginForm)
            .then(response => {
                setLoading(false);
                console.log(response)
                if (response.data.message === "Eniola kayode Kindly VisIt Your Email In order to verify your account.") {
                    setError("Eniola kayode Kindly VisIt Your Email In order to verify your account.")
                } else if (response.data._id !== null) {
                    setUserSession(response.data._id)
                    setContext({ ...context, user: response.data })
                }
                // history.push('./cart')
            }).catch(error => {
                setLoading(false)
                if (error.response.status === 401 || error.response.status === 400) {
                    setError(error.response.data.message)
                    setLoginForm({ ...loginForm, password: "" })
                }
                else {
                    setError('Something went wrong, please try again')
                }
                console.error(error)
            })
    }

    // signup with google
    // const responseSuccessGoogle = (response) => {
    //     console.log(response);
    //     console.log(response.profileObj)
    //     axios.post('https://olf.online/ballot/api/users/googleLogin', { tokenId: response.tokenId })
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err));
    // }
    const responseSuccessGoogle = (response) => {
        console.log(response);
        axios({
            method: "post",
            url: "https://thawing-ocean-67754.herokuapp.com/api/users/googleLogin",
            data: { tokenId: response.tokenId }
        }).then((response) => {
            console.log(response)
            // setUserSession(response.data.token)
            // setContext({ ...context, user: { _id: response.data.user._id, email: response.data.user.email, name: response.data.user.name, token: response.data.token } })
            // history.push('./cart')
        }
        )
    }

    const responseErrorGoogle = () => {
    }

    // signup with facebok 
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
                                <p>If you dont have an account, you can <Link to='/signup'>Click Here to Create an Account</Link></p>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-form d-flex flex-column justify-content-center align-items-center">
                                    <h1>Login to Vote on Ballot Box</h1>
                                    <p>Votes made on BallotBox are only limited to BallotBox and does not count for the
                                        National Election!</p>
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
                                    {/* <button>Login with your Googe Account</button> */}
                                    <div className="or d-flex justify-content-between align-items-center">
                                        <div className="span" />
                                        <span>or</span>
                                        <div className="span" />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="username">Username or Phone Number</label>
                                        <input id="username" type="text" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} placeholder="Username or Phone Number" />
                                    </div>
                                    <div className="input">
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} placeholder="Username or Phone Number" />
                                    </div>
                                    <div className="remember-me d-flex justify-content-between">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                            {/* <a href>Remember Me</a> */}
                                        </div>
                                        <a href>Forgot Password?</a>
                                    </div>
                                    <p>{error}</p>
                                    <button id="login" onClick={handleLogin}>Login</button>
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

export default Login;