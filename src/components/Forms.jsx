import React from "react";
import "../styles/Forms.css";
import { useState } from "react";
import Axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function Forms() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loggedIn, isLoggedIn] = useState(false);
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.status != 200) {
        setLoginStatus(response.data.error);
        isLoggedIn(false);
      } else {
        setLoginStatus(response.data.message);
        isLoggedIn(true);
      }
    });
  };

  return (
    <MDBContainer className="nikhil">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="src\\assets\\SignIn_img.png"
              alt="login form"
              className="signInphoto"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Login</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={(e) => {
                  setemail(e.target.value);
               }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => {
                  setpassword(e.target.value);
               }}
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={login}>
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
              <h1>{loginStatus} </h1>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Forms;

// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// } from 'mdb-react-ui-kit';

// function Forms() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       // User successfully logged in
//       console.log('User logged in');
//     } catch (error) {
//       // Handle login errors
//       console.error('Error signing in:', error.message);
//     }
//   };

//   return (
//     <MDBContainer className="my-5">
//       <MDBCard>
//         <MDBRow className='g-0'>
//           <MDBCol md='6'>
//             <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
//           </MDBCol>
//           <MDBCol md='6'>
//             <MDBCardBody className='d-flex flex-column'>
//               {/* Your form content */}
//               <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
//               <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
//               <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>Login</MDBBtn>
//               {/* Forgot password, registration link, etc. */}
//             </MDBCardBody>
//           </MDBCol>
//         </MDBRow>
//       </MDBCard>
//     </MDBContainer>
//   );
// }

// export default Forms;
