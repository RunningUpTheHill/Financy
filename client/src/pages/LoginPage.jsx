import React, { useState } from "react";
import axios from 'axios';
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

    const navigate = useNavigate();

    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:8080/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
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
        <div style={backgroundlogin}>
          <form>
          <p>Login To Your Account</p>
          <div style={{ marginLeft: '4px' }}>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
              style={{ backgroundColor: 'white', border: '1px solid #000000', borderRadius: '25px', padding: '0.5rem 1rem', color: 'black',}}
/>            <label style={{ marginLeft: '2px', color: 'black' }}> Email address </label>
              </div>
          <div style={{ marginBottom: '10px' }}></div> {/* Adding space */}

          <div className="form-outline mb-3"  style={{ marginLeft: '-25px' }}> 
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              style={{ backgroundColor: 'white', border: '1px solid #000000', borderRadius: '25px', padding: '0.5rem 1rem', color: '#000000',}}
            />

            <label style={{ marginLeft: '5px' }}>Password</label>
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
}
