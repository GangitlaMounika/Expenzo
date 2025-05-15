import React, { useState } from 'react';
import '../css/Contact.css';
import { Link } from 'react-router-dom';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("✅ Message sent successfully!");
        setSubmitted(true);
      } else {
        alert("❌ Error sending message: Failed to send email.");
      }
      
    } catch (error) {
      alert('❌ Server error. Please try again later.');
      console.error('Error:', error);
    }
  };
  

  
  

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Expense Tracker</h1>
          
        </div>
        
      </header>
      <br></br>
      <br></br>
      <nav>
            <Link to="/">HOME</Link>
          </nav>

      <div className="contact-container">
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for reaching out! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Contact;
