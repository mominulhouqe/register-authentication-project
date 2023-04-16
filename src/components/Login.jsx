import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import app from "../firebase/firebase-auth";
import Register from "./Register";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const emailRef = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess("");
    setError('')
    console.log(email, password);
    if (!/(?=.*[a-z])/.test(password)) {
      setError("At least one lowerCase");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (!loggedUser.emailVerified) {
          alert("You are not verify you email");
        }

        setSuccess("Login Successfully");

      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleReset = (event) => {
    const email = emailRef.current.value;
    if(!email){
      alert('Please provide your email address')
      return;
    }
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('Please check your Email')
    })
    .catch(error=>{
      setError(error.message)
    })
  };

  return (
    <div className="mt-5  mx-auto w-50 bg-light p-5 border rounded">
      <h5 className="text-primary text-center mb-5 fw-bold ">
        Please Login !!!
      </h5>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remeber" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p>
        <small>
          Forget Password ? please{" "}
          <button className="btn btn-primary" onClick={handleReset}>
            Reset
          </button>{" "}
        </small>
      </p>
      <p className="">
        Are you new here Please <Link to="/register">Register</Link>{" "}
      </p>
      <h5 className="text-success">{success}</h5>
      <h5>{error}</h5>
    </div>
  );
};

export default Login;
