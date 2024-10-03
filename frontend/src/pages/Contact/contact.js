import React, { useRef } from 'react';
import './contact.css';
import { useDarkMode } from '../../Darkmode';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const { isDarkMode } = useDarkMode();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v5560op', 'template_cqh2l63', form.current, 'f6MOtkzVAVwSL9aru')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className={`contact ${isDarkMode ? 'dark' : ''}`}>
      <div className='txt'>
        <h1 className={`ctc ${isDarkMode ? 'dark' : ''}`}>Contact Us!</h1>
      </div>
      <div className={`contact-container ${isDarkMode ? 'dark' : ''}`}>
        <form className={`contact-form ${isDarkMode ? 'dark' : ''}`} ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your-email@example.com" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="image-fader">
          <img src="/ctc1.png" alt="ctc1" />
          <img src="/ctc5.png" alt='ctc5' />
          <img src="/ctc3.png" alt='ctc3' />
          <img src="/ctc4.png" alt='ctc4' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
