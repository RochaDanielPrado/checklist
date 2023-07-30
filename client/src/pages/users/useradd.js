
import React, { useState, useEffect } from 'react';
import { Form, FormControl, FormLabel, Button } from "react-bootstrap";
import Main from '../../componentes/main';
import './Users.css';

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Clear the form on mount
    setUsername("");
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server
    // ...
  };

  return (
    <div className='formulario'>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormControl
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;