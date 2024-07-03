import React, { useState } from 'react';
import './Contact.css';
import mail from '../../assets/mail.png';
import location from '../../assets/location.png';
import call from '../../assets/call.png';

const Contact = () => {
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', 'f46f43d2-dce6-4b29-8f14-12750152a23d');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
        alert("email sent successfully");
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult('Error: Network error, please try again later.');
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to call.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail} width='20px' height='20px' alt='' />
              <p>hemapatil2022@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call} width='20px' height='20px' alt='' />
              <p>8088293879</p>
            </div>
            <div className='contact-detail'>
              <img src={location} width='20px' height='20px' alt='' />
              <p>Near pes university</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' />
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' />
          <label htmlFor='message'>Write your Message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message' />
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
