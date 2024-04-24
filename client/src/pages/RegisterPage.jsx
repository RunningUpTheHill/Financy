import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            setEmailError('Email is required');
        } else if (!emailRegex.test(value)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const registerUser = () => {
        // Validate email before registering user
        validateEmail(email);

        // If there's an error in the email, do not proceed with registration
        if (emailError) {
            return;
        }

        axios.post('http://127.0.0.1:8080/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };

    return (
        <div>
            <div className="container h-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => validateEmail(e.target.value)} id="form3Example3" className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`} placeholder="Enter A Valid Email Address" style={{borderRadius: '100px',  border: 'none', backgroundColor: 'white', height: '30px', width: '200px', textAlign: 'center', borderColor: 'white', color: 'black'}}/>
                                    <label className="form-label" htmlFor="form3Example3"></label>
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>

                                <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

                                <div className="form-outline mb-3">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter Password" style={{borderRadius: '100px',  border: 'none', backgroundColor: 'white', height: '30px', width: '200px', textAlign: 'center', borderColor: 'white', color: 'black'}}/>
                                    <label className="form-label" htmlFor="form3Example4"></label>
                                    <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

                                    <PasswordChecklist
                                        rules={["minLength", "specialChar", "number", "capital"]}
                                        minLength={8}
                                        value={password}
                                        messages={{
                                            minLength: "Password must be at least 8 characters.",
                                            specialChar: "Must contain at least one special character.",
                                            number: "Must contain at least one number.",
                                            capital: "Must contain at least one capitalized character.",
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: '15px' }}></div> {/* Adding space */}

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => registerUser()} >Sign Up</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="/login" className="link-danger">Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
