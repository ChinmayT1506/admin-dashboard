import React from 'react'
import { useState } from 'react'
import './compCSS/login.css'

function Login() {
    const adminCred = {
        username: "chinmay",
        password: "xyz123"
    }
    const [loginEntry, setLoginEntry] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginEntry(prevVal => {
            return {
                ...prevVal,
                [name]: value
            };
        });
    }

    const checkAuth = (event) => {
        event.preventDefault();
        if (JSON.stringify(adminCred) === JSON.stringify(loginEntry)) {
            localStorage.setItem('my_item', JSON.stringify(loginEntry))
            console.log("stored in local storage")
            window.location.reload();
        }
        else {
            setLoginEntry({
                username: "",
                password: ""
            })
            alert("Login Credentials are wrong");
        }
    }

    function togglePassword() {
        const passwordInput = document.getElementById("password")
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
        }
        else {
            passwordInput.type = "password"
        }
    }

    return (
        <>
            <div className='login-container'>
                <div className='login-left-box'>
                    <div className='upperImage'></div>
                    <div className='lowerImage'></div>
                </div>
                <div className='login-right-box'>
                    <div className='inner-login-area'>
                        <div className='loginHeading'>
                            <img src="images/logo.png" alt="logo" />
                            <h4>ChatBot <br /> Management System</h4>
                        </div>
                        <div className='adminHeading'>
                            <h3>Super Admin Login</h3>
                        </div>
                        <div className='loginForm'>
                            <form>
                                <label htmlFor="name">Enter Username</label><br />
                                <input name="username" type="text" className='username' placeholder='username' value={loginEntry.username} onChange={handleChange} required></input>
                                <br /><label htmlFor="password">Enter Password</label><br />
                                <div className='passwordContainer'>
                                    <input name="password" id="password" type="password" className='fname' placeholder='enter password' value={loginEntry.password} onChange={handleChange} required></input>
                                    <i class="fa-solid fa-eye" id="eye" onClick={togglePassword}></i>
                                </div>
                                <div className='rememberPass'>
                                    <div className='remPass'>
                                        <input type='checkbox' id="checkbox" name="checkbox" />
                                        <label for="checkbox">Remember Me</label>
                                    </div>
                                    <div className='remPass'>
                                        <a className='anchor1'>Forgot Password?</a>
                                    </div>
                                </div>
                                <br /><button onClick={checkAuth}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login