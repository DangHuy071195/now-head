// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="w-full  z-10 p-6  bg-[#2d1064] text-white bg-opacity-90 shadow-lg rounded-lg max-w-xl">
      <h1 className="text-4xl font-semibold text-center mb-4">Contact Me</h1>
      <form className="space-y-4">
        <div>
          <label
            className="block font-medium text-[14px]"
            htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            className="block font-medium text-[14px]"
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            className="block font-medium text-[14px]"
            htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-[#1e5e4a] border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
