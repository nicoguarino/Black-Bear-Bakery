import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, Container } from 'react-bootstrap';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
      e.preventDefault();
      if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
      }
  }

  function handleChange(e) {
      if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);

          console.log(isValid);

          // isValid conditional statement
          if (!isValid) {
              setErrorMessage('Your email is invalid.');
          } else {
              if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
              } else {
                  setErrorMessage('');
              }
          }

          if (!errorMessage) {
              setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
  }
  console.log(formState);

  return (
      <Container className='contact-container'>
          <h1>Contact me</h1>
          <Form onSubmit={handleSubmit} >
              <Form.Group className="" controlId="Name">
                  <Form.Label>Name:</Form.Label>
                  <br />
                  <Form.Control type="text" defaultValue={name} name="name" placeholder="Name" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlInput1" >
                  <Form.Label>Email address:</Form.Label>
                  <br />
                  <Form.Control type="email" defaultValue={email} name="email" placeholder="name@example.com" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="" controlId="exampleForm.ControlTextarea1" >
                  <Form.Label>Message:</Form.Label>
                  <br />
                  <Form.Control as="textarea" placeholder="Message" defaultValue={message} name="message" rows={3} onChange={handleChange} />
              </Form.Group>
              {errorMessage && (
                  <div>
                      <p className="error-text">{errorMessage}</p>
                  </div>
              )}
              <button type="submit">Submit</button>
          </Form>
      </Container>
  );

}

export default Contact;