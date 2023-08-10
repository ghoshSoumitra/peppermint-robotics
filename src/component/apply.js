import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [showApplyPage, setShowApplyPage] = useState(false);

  const applyPageRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowApplyPage(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
      window.location.reload();
      setShowApplyPage(false);
    }, 2000);
  };

  const handleOutsideClick = (event) => {
    if (applyPageRef.current && !applyPageRef.current.contains(event.target)) {
      setShowApplyPage(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (showApplyPage) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [showApplyPage]);

  return (
    <div className="apply-page" ref={applyPageRef}>
      {showApplyPage ? (
        <div className="success-message">
          <h2 style={{color:"white"}}>Thank you for applying!</h2>
          <p style={{color:"white"}}>Your application has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="application-form">
          <h2>Apply for the Position</h2>
          <div className="form-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <button type="submit">Submit Application</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplyPage;
