import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
    <Form onSubmit={handleFormSubmit}>
      <Link to="/signup">← Go to Signup</Link>
      <h2>Login</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="email">Email address:</Form.Label>
      <Form.Control 
        placeholder="youremail@test.com" 
        name="email" 
        type="email" 
        id="email" 
        onChange={handleChange} />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control 
          placeholder="*******"
          name="password"
          type="password"
          id="password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </Container>
    



    // <div className="container my-1">
    //   <Link to="/signup">← Go to Signup</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Login;
