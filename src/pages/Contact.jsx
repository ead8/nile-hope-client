import React, { useState } from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';

const Contact = () => {
  // State to manage FAQ toggles
  const [faqToggles, setFaqToggles] = useState(Array(3).fill(false)); // Adjust the array length based on the number of FAQs

  // Function to toggle FAQ visibility
  const toggleFaq = (index) => {
    const newToggles = [...faqToggles];
    newToggles[index] = !newToggles[index];
    setFaqToggles(newToggles);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-4xl mx-auto justify-center items-center py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
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
              22, Golagol, Addis Ababa, Ethiopia
              <a href="https://maps.app.goo.gl/r556344mvUGXwzFT6" target="_blank" rel="noopener noreferrer" className="text-blue-500 px-3 hover:underline">View on Google Maps</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">FAQ</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between  px-4 items-center bg-slate-300">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <button className="text-sky-950 text-lg focus:outline-none p-3 px-3" onClick={() => toggleFaq(index)}>
                    {faqToggles[index] ? '-' : '+'}
                  </button>
                </div>
                {faqToggles[index] && <p className="text-gray-700 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

// FAQ data
const faqs = [
  {
    question: "How can i trust Nile?",
    answer: "We are a trusted online retailer with over 2 years of experience, having testimonials who satisfied with our services. We offer a secure shopping experience and hassle-free returns."
  },
  {
    question: "What if i want to return products?",
    answer: "We offer a 1-day return policy for most items. Please visit our Returns & Orders page for detailed instructions on how to initiate a return."
  },
  {
    question: "What are your shipping options?",
    answer: "We offer standard and express shipping options. Standard shipping typically takes 3-5 business days, while express shipping delivers within 1-2 business days."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this tracking number to monitor the status of your delivery."
  }
];


