import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      id="contact" 
      className="py-16 min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black"
      ref={sectionRef}
    >
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
