// Register.jsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const [formError, setFormError] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const Navigate = useNavigate()

  const validate = (data) => {
    let errors = {};

    if (data.username.trim() === '') {
      errors.username = 'Please enter the username';
    }
    if (data.email.trim() === '') {
      errors.email = 'Please enter the email';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (data.password.trim() === '') {
      errors.password = 'Please enter the password';
    } else if (data.password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
      errors.password = 'Password should be at least 10 characters long and contain at least one special character';
    }
    if (data.password !== data.rePassword) {
      errors.rePassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
      toast.success('Registration successful!');
      setUser(formData.username);
      setFormSubmit(true);
      window.localStorage.setItem("name" , formData.username)
      Navigate("/")

    } else {
      setFormError(errors);
    }
  };

  return (
    <div id="register-container">
    <ToastContainer />
    <img id="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Logo" />
    <div className="form-parent">
      <form onSubmit={handleSubmit}>
        <h1 id="register-heading">Sign Up</h1>
        <div>{formSubmit && <p>Registration Successful!</p>}</div>
        <input type="text" name="username" placeholder="Enter User name..." onChange={handleInput} />
        {formError.username && <p className="red-col">{formError.username}</p>}
        <input type="email" name="email" placeholder="Enter Email....." onChange={handleInput} />
        {formError.email && <p className="red-col">{formError.email}</p>}
        <input type="password" name="password" placeholder="Enter Password....." onChange={handleInput} />
        {formError.password && <p className="red-col">{formError.password}</p>}
        <input type="password" name="rePassword" placeholder="ReEnter Password....." onChange={handleInput} /> <br />
        {formError.rePassword && <p className="red-col iup">{formError.rePassword}</p>}
        <input id="register-button" type="submit" value="Register" />
      </form>
    </div>
  </div>
  );
};

export default Register;
