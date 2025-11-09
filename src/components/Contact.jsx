import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden 
                 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Let’s Connect
        </h2>

        <p className="mt-4 text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Have an idea, collaboration, or just want to say hello?  
          Drop a message — I’ll get back to you soon!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 
                   text-gray-800 dark:text-gray-200 rounded-2xl p-8 shadow-lg transition-colors duration-300"
      >
        {/* Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block font-semibold mb-2 text-gray-800 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black 
                       text-gray-800 dark:text-gray-200 rounded-lg px-4 py-3 focus:outline-none 
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block font-semibold mb-2 text-gray-800 dark:text-gray-300"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black 
                       text-gray-800 dark:text-gray-200 rounded-lg px-4 py-3 focus:outline-none 
                       focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block font-semibold mb-2 text-gray-800 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="5"
            required
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black 
                       text-gray-800 dark:text-gray-200 rounded-lg px-4 py-3 resize-none focus:outline-none 
                       focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-500 transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-3 text-lg font-semibold rounded-xl transition-all ${
              isSubmitted
                ? "bg-green-500 text-white cursor-default"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 text-white"
            }`}
          >
            {isSubmitted ? "Message Sent ✅" : "Send Message"}
          </motion.button>
        </div>
      </motion.form>

      {/* Footer Links with Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-14 flex flex-wrap items-center justify-center gap-8 text-gray-700 dark:text-gray-400 text-lg"
      >
        <a
          href="mailto:satyajit28252@example.com"
          className="hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-2"
        >
          <SiGmail size={24} /> Gmail
        </a>
        <a
          href="https://github.com/Satyajit-69"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
        >
          <FaGithub size={24} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/satyajit-sahoo-b16795315/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
