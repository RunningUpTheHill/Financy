import React, { useState, useEffect } from "react";
import axios from 'axios';
<<<<<<< HEAD
import {useNavigate} from "react-router-dom";

const backgroundlogin={
  alignItems: 'center', // center items vertically (only works if 'display' is set to 'flex')
  justifyContent: 'center', // center items horizontally (only works if 'display' is set to 'flex')
  display: 'flex',// center items horizontally (only works if 'display' is set to 'flex')
    width: '900px',
    height: '450px',
    backgroundColor: '#ffb9de',
    borderRadius: '25px',
    paddingLeft: '30px',
    paddingRight: '30px',
  }

export default function LoginPage(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 82d1fc1ec7adf24f15f5904e9a24cf39ea66f5d1

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
<<<<<<< HEAD
    return (
        <div style={backgroundlogin}>
          <form>
          <p>Login To Your Account</p>
          <div>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Email"
              style={{ backgroundColor: 'white', border: '1px solid #ffffff', borderRadius: '25px', padding: '0.5rem 1rem', color: 'black',}}
          ></input>
          </div>
=======

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
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>
>>>>>>> 82d1fc1ec7adf24f15f5904e9a24cf39ea66f5d1

                                <div className="form-outline mb-3">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

<<<<<<< HEAD
          <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

          <div className="form-outline mb-3"> 
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Password"
              style={{ backgroundColor: 'white', border: '1px solid #ffffff', borderRadius: '25px', padding: '0.5rem 1rem', color: '#000000',}}
            />
          </div>

          <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}


          <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" form="form2Example3">
                        Remember me
                      </label>

                      <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

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
      );
=======
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value={rememberMe} id="form2Example3" onChange={handleRememberMeChange} />
                                        <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

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
>>>>>>> 82d1fc1ec7adf24f15f5904e9a24cf39ea66f5d1
}
