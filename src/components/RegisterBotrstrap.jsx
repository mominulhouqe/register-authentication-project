import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterBotrstrap = () => {

  const handleFrom = (event) => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

  };

  return (
    <div className=" mx-lg-auto w-75 border bg-light p-5 ">
      <h2 className="text-primary mb-5 text-center">Please Register !!!</h2>
      <Form onSubmit={handleFrom}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterBotrstrap;
