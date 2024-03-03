import React from 'react';
import { useState } from 'react';
import Axios from 'axios';  
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';



function Form1() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState ('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState ('');
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
     }).then((response) => {
        console.log(response.data.message);
     });
   };
  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{marginTop: '-50px',backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-250px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-left'>

          <h2 className="fw-bold mb-3">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={(e) => {
                  setfirstname(e.target.value);
               }} />
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' onChange={(e) => {
                  setlastname(e.target.value);
               }} />
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => {
                  setemail(e.target.value);
               }} />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => {
                  setpassword(e.target.value);
               }} />

          <div className='d-flex justify-content-center mb-4'>
            {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
            <MDBBtn className='w-30 mb-4' size='lg' onClick={register}>Sign Up</MDBBtn>
          </div>

          

          <div className="text-center">

            {/* <p>or sign up with:</p> */}

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}


export default Form1;






