"use client";

import React from "react";

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <main className="contact-main">
      <div className="form-container">
        <h1 className="contact-title">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Message" className="message" required />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </main>
  );
}


