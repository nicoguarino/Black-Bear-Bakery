import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Form, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';


function Contact() {
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

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_5yz59ch', 'template_wsxfd1j', e.target, 'user_bShaVV2wg9GG49xjwkvkS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <Container  className='contact-container'>
      <h1 style={{ textAlign: "center" }}>Contact me</h1>
      <Form onSubmit={handleSubmit, sendEmail} className="Cform" >
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
        <button className='button' type="submit">Submit</button>
      </Form>
    </Container>
  );

}

export default Contact;