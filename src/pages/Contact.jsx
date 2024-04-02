import React from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';

const Contact = () => {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900 cursor-pointer focus:outline-none focus:bg-blue-600">Send Message</button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Email:</span> nilesupport@gmail.com</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Phone:</span> +251 938 817 656</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Address:</span> 
            22,Golagol,Addis Ababa, Ethiopia
            <a href="https://maps.app.goo.gl/r556344mvUGXwzFT6" target="_blank" rel="noopener noreferrer" className="text-blue-500 px-3 hover:underline">View on Google Maps</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

