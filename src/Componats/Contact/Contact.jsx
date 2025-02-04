import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="md:w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-2">We'd love to hear from you!</p>

        {/* Contact Info Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-md">
            <FaPhone className="text-blue-500 text-xl" />
            <span>+880 123 456 789</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-md">
            <FaEnvelope className="text-red-500 text-xl" />
            <span>info@yourconstruction.com</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-md">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <span>1234 Main Street, Dhaka</span>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-md shadow-md text-left">
          <h3 className="text-xl font-bold text-gray-800">🏗️ Our Office Hours</h3>
          <div className="flex items-center gap-3 mt-2">
            <FaClock className="text-yellow-500 text-xl" />
            <span>Monday - Friday: 9 AM - 6 PM</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-8 bg-white p-6 rounded-md shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-2 border-l-2 border-r-2 rounded-md mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border-l-2 border-r-2 rounded-md mb-4" />
          <input type="tel" placeholder="Your Phone Number" className="w-full p-2 border-l-2 border-r-2 rounded-md mb-4" />

          {/* Subject Dropdown */}
          <select className="w-full p-2 border-l-2 border-r-2 rounded-md mb-4">
            <option>General Inquiry</option>
            <option>Project Estimate</option>
            <option>Partnership</option>
            <option>Job Application</option>
            <option>Other</option>
          </select>

          {/* File Upload */}
          <input type="file" className="w-full p-2 border-l-2 border-r-2 rounded-md mb-4" />

          {/* Message Field */}
          <textarea placeholder="Your Message" className="w-full p-2 border-l-2 border-r-2 rounded-md mb-4 h-32"></textarea>

          <button className="bg-yellow-300 text-black py-2 px-4 rounded-md hover:bg-yellow-200 cursor-progress transition">
            Send Message
          </button>
        </form>

        {/* Office Hours */}
      

        {/* Schedule a Consultation (Calendly) */}
        {/* <div className="mt-6">
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition inline-block"
          >
            📅 Schedule a Consultation
          </a>
        </div> */}

        {/* Newsletter Signup */}
        {/* <div className="mt-8 bg-white p-6 rounded-md shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800">🚀 Subscribe to Our Newsletter</h3>
          <p className="text-gray-600">Stay updated with our latest news and offers.</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 p-2 border rounded-md"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition ml-2">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
