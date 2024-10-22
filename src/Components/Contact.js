import React from 'react';
import "../App.css";

function Contact() {
  return (
    <div className='contact-page-wrapper'>
      <div className='contact-header'>
        <h1 className='primary-heading'>Have A Question In Mind?</h1>
        <h2 className='secondary-heading'>Let Us Help You</h2>
      </div>
      <div className='contact-form-container'>
        <input type='email' placeholder='yourmail@gmail.com' className='contact-input' />
        <button className='contact-button'>Submit</button>
      </div>
    </div>
  );
}

export default Contact;