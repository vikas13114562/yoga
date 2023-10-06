"use client"; // This is a client component
import { Btn } from "../utils/Allbtn";
import React, { useState } from "react";
import "./footer.css";
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleData(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/send-mail", formData);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
  };
  return (
    <div className="form-container">
      <div className="main-head">Say Hello</div>
      <input
        className="input"
        name="name"
        required
        placeholder="Name"
        type="text"
        value={formData.name}
        onChange={handleData}
      />
      <input
        className="input"
        name="email"
        required
        placeholder="Email"
        type="text"
        value={formData.email}
        onChange={handleData}
      />
      <input
        className="input"
        name="phone"
        required
        placeholder="Phone"
        type="number"
        value={formData.phone}
        onChange={handleData}
      />
      <Btn name="Submit" onClick={handleSubmit} />
    </div>
  );
}
