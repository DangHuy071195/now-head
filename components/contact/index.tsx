import React, { useState } from 'react';
import classes from './index.module.css';
import { toast } from 'react-toastify';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('You are subcribed successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to store message. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to store message. Please try again later.');
    }
  };

  return (
    <div className="m-auto w-full z-10 p-24 bg-[#2d1064] text-white bg-opacity-90 shadow-lg rounded-lg max-w-screen-sm">
      <h1 className="text-4xl font-semibold text-center mb-4">Contact Me</h1>
      <form
        className="space-y-12 mt-[36px]"
        onSubmit={handleSubmit}>
        <div>
          <label
            className="block font-medium text-[24px]"
            htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${classes.input} mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            required
          />
        </div>
        <div>
          <label
            className="block font-medium text-[24px]"
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${classes.input} mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            required
          />
        </div>
        <div>
          <label
            className="block font-medium text-[24px]"
            htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            className={`${classes.input} mt-2 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            required></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2 bg-[#1e5e4a] border border-transparent rounded-md font-semibold text-white text-[24px] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Subcribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
