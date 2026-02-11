import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiGmail, SiDiscord } from "react-icons/si";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    subject: "",
    message: "" 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactMethods = [
    {
      icon: <SiGmail size={28} />,
      label: "Email",
      value: "satyajit28252@gmail.com",
      href: "mailto:satyajit28252@gmail.com",
      color: "text-red-500 dark:hover:text-red-200"
    },
    {
      icon: <FaGithub size={28} />,
      label: "GitHub",
      value: "@Satyajit-69",
      href: "https://github.com/Satyajit-69",
      color: "hover:text-black dark:hover:text-white"
    },
    {
      icon: <FaLinkedin size={28} />,
      label: "LinkedIn",
      value: "Satyajit Sahoo",
      href: "https://www.linkedin.com/in/satyajit-sahoo-b16795315/",
      color: "text-blue-600 dark:hover:text-blue-200"
    },
    {
      icon: <FaWhatsapp size={28} />,
      label: "WhatsApp",
      value: "+91 7064539367",
      href: "https://wa.me/7064539367",
      color: "text-green-500 dark:hover:text-green-200"
    },
    {
      icon: <FaTelegram size={28} />,
      label: "Telegram",
      value: "@satyajit",
      href: "https://t.me/yourusername",
      color: "text-blue-500 dark:hover:text-blue-200"
    },
    {
      icon: <SiDiscord size={28} />,
      label: "Discord",
      value: "satyajit#0000",
      href: "#",
      color: "text-indigo-500 dark:hover:text-indigo-200"
    },
    {
      icon: <FaTwitter size={28} />,
      label: "Twitter",
      value: "@satyajit",
      href: "https://twitter.com/yourusername",
      color: "text-sky-500 dark:hover:text-sky-200"
    },
    {
      icon: <FaInstagram size={28} />,
      label: "Instagram",
      value: "@satyajit",
      href: "https://instagram.com/yourusername",
      color: "text-pink-500 dark:hover:text-pink-200"
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 md:py-20 min-h-screen bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Font Awesome CDN */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Dancing+Script:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full">
            <i className="fas fa-envelope mr-2"></i>
            Get In Touch
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Let's Connect
          </h2>
          <p 
            className="text-black/80 dark:text-white/80 text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Have an idea, collaboration, or just want to say hello? Drop a message — I'll get back to you soon!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 
                className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold mb-2 text-black dark:text-white text-sm"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full border-2 ${
                      errors.name ? 'border-red-500' : 'border-black dark:border-white'
                    } bg-white dark:bg-black text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-2 text-black dark:text-white text-sm"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border-2 ${
                      errors.email ? 'border-red-500' : 'border-black dark:border-white'
                    } bg-white dark:bg-black text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-semibold mb-2 text-black dark:text-white text-sm"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-2 text-black dark:text-white text-sm"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    rows="5"
                    className={`w-full border-2 ${
                      errors.message ? 'border-red-500' : 'border-black dark:border-white'
                    } bg-white dark:bg-black text-black dark:text-white rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-black dark:bg-white text-white dark:text-black hover:scale-105 hover:shadow-2xl"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {isSubmitted ? (
                    <>
                      <i className="fas fa-check-circle mr-2"></i>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 
                className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <i className="fas fa-map-marker-alt text-2xl text-black dark:text-white mt-1"></i>
                  <div>
                    <h4 
                      className="font-semibold text-black dark:text-white mb-1"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Location
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <i className="fas fa-envelope text-2xl text-black dark:text-white mt-1"></i>
                  <div>
                    <h4 
                      className="font-semibold text-black dark:text-white mb-1"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Email
                    </h4>
                    <a 
                      href="mailto:satyajit28252@gmail.com"
                      className="text-black/70 dark:text-white/70 text-sm hover:text-black dark:hover:text-white transition-colors"
                    >
                      satyajit28252@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                  <i className="fas fa-clock text-2xl text-black dark:text-white mt-1"></i>
                  <div>
                    <h4 
                      className="font-semibold text-black dark:text-white mb-1"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Response Time
                    </h4>
                    <p className="text-black/70 dark:text-white/70 text-sm">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thank you note */}
            <div className="grid mt-3 gap-4">
               <h3 
            className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-8"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Thank you for reaching till the end 
            Eagerly waiting for your message &hearts; .
          </h3>
              
             
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="mt-12">
          <h3 
            className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-8"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Connect With Me
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex flex-col items-center gap-3 p-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${method.color}`}
              >
                <div className="">
                  {method.icon}
                </div>
                <div className="text-center">
                  <h4 
                    className="font-bold text-black dark:text-white mb-1"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {method.label}
                  </h4>
                  <p className="text-xs text-black/70 dark:text-white/70 truncate max-w-full">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;