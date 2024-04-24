import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('rememberedEmail');
        const storedPassword = localStorage.getItem('rememberedPassword');
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
        }
    }, []);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const logInUser = () => {
        if (email.length === 0) {
            alert("Email has been left Blank!");
        } else if (password.length === 0) {
            alert("password has been left Blank!");
        } else {
            axios.post('http://127.0.0.1:8080/login', {
                email: email,
                password: password
            })
                .then(function (response) {
                    console.log(response);
                    if (rememberMe) {
                        localStorage.setItem('rememberedEmail', email);
                        localStorage.setItem('rememberedPassword', password);
                    } else {
                        localStorage.removeItem('rememberedEmail');
                        localStorage.removeItem('rememberedPassword');
                    }
                    navigate("/FinancePage");
                })
                .catch(function (error) {
                    console.log(error, 'error');
                    if (error.response.status === 401) {
                        alert("Invalid credentials");
                    }
                });
        }
    }

    return (
        <div>
            <div className="container h-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Login To Your Account</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter Email address" style={{borderRadius: '100px',  border: 'none', backgroundColor: 'white', height: '30px', width: '200px', textAlign: 'center', borderColor: 'white', color: 'black'}} />
                                    <label className="form-label" htmlFor="form3Example3"></label>
                                </div>

                                <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

                                <div className="form-outline mb-3">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter Password"  style={{borderRadius: '100px',  border: 'none', backgroundColor: 'white', height: '30px', width: '200px', textAlign: 'center', borderColor: 'white', color: 'black'}}/>
                                    <label className="form-label" htmlFor="form3Example4"></label>
                                </div>

                                <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value={rememberMe} id="form2Example3" onChange={handleRememberMeChange} />
                                        <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={logInUser} >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0"> No account? <a href="/register" className="link-danger">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
