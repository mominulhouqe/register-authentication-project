import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase-auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('')
    const email = event.target.email.value;
    const password = event.target.password.value;
    // validation
    if(!/(?=.*[A-Z])/.test(password)){
      setError('At least one character is UpperCase')
      return;
    }
    else if(!/(?=.*\d)/.test(password)){
      setError('At least one Number')
      return;
    }
    else if(!/(?=.*[a-z])/.test(password)){
      setError('At least one LowerCase')
      return
    }
    else if(!/(?=.*[@$!%*?&])/.test(password)){
      setError('At least one Special Character')
      return;
    }
    else if(!/$/.test(password)){
      setError('At least one string')
      return;
    }
    else if(password.length < 6){
      setError('Password must be 6 characters long');
      return;
    }


    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      setError('');
      console.log(user);
      event.target.reset();
      setSuccess('User has Created Succesfully')
      emailVarifiaction(user)
    })
    .catch(error =>{
      console.error(error.message);
      setError(error.message);
      
    })
  };

  const emailVarifiaction = (user)=>{
    sendEmailVerification(user)
    .then(result =>{
      alert('Please verify your Email address !!');
      
    })
  }

  const handlePass = (event) => {
    // console.log(event.target.value);
    // setEmail(event.target.value);
  };

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    // setEmail(event.target.value);
  };
  return (
    <div className="w-75 mx-auto text-center mt-5">
      <h5 className="mb-5">Please Register </h5>

      <form onSubmit={handleSubmit}>
        <input className="mb-3 p-3 border"
           
          type="name"
          name="name"
          id="" required
          placeholder="Your name"
        /> <br />
        <input className="mb-3 p-3 border"
           onChange={handleEmailChange}
          type="email"
          name="email"
          id="" required
          placeholder="Your Email"
        />
        <br />
        <input className="mb-3 p-3 border"
          onBlur={handlePass}
          type="password"
          name="password"
          id="" required
          placeholder="Your Password"
        />{" "}
        <br />
        <input className="mb-3 btn btn-primary" type="submit"  value="register" />
      </form>
      <p><small>Already have an account? Please <Link className="text-primary fw-bold " to='/login'>Login</Link></small></p>
        <p className="text-danger text-center">{error}</p>
        <p className="text-success">{success}</p>
    </div>
  );
};

export default Register;
