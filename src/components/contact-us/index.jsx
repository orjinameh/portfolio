import React, { useRef } from 'react';
import "./index.css";
import emailjs from '@emailjs/browser';

export const ContactUs = ({clear}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d6ho5fl', 'template_fk4sbos', form.current, 'fP_wcR28LvZT36dGE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      clear(false);
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input placeholder='Your name' required type="text" name="user_name" />
      <input placeholder='Your email' required  type="email" name="user_email" />
      <textarea placeholder='Enter message' required name="message" />
      <button type="submit" className='submit-button'>Submit Message</button>
    </form>
  );
};