import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
      )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  return <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="user_name"></input>
      <label>Email</label>
      <input type="text" name="user_email"></input>
      <label>Subject</label>
      <input type="text" name="subject"></input>
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here..." name="message"/>
      {/* <button className="btn">Submit</button> */}
      <input type="submit" value="Send" className="btn"/>
    </form>
  </div>;
};

export default Form;
