import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        <Link to="/login">← Go to Login</Link>
        <h2>Signup</h2>

        <Form.Group className="mb-3">
          <Form.Label htmlForm="firstName">First Name:</Form.Label>
          <Form.Control 
            placeholder="First name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlForm="lastName">Last Name:</Form.Label>
          <Form.Control 
            placeholder="Last name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlForm="email">Email:</Form.Label>
          <Form.Control 
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlForm="password">Password:</Form.Label>
          <Form.Control 
            placeholder="********"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>
    </Container>

  );
}

export default Signup;