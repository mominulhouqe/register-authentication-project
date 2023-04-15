import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  };

  const handlePass = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  return (
    <div className="w-75 mx-auto text-center mt-5">
      <h5 className="mb-5">Please Register </h5>
      <form onSubmit={handleSubmit}>
        <input className="mb-3 p-3 border"
           onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input className="mb-3 p-3 border"
          onBlur={handlePass}
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />{" "}
        <br />
        <input className="mb-3 btn btn-primary" type="submit" value="register" />
      </form>
    </div>
  );
};

export default Register;
