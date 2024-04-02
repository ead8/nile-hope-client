import React from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';


const About = () => {
  
 return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl leading-6 font-extrabold text-gray-900">
              About Our E-commerce Platform 
            </h1>
          </div>
          <div className="border-t border-gray-200">
            <dl className="grid md-lg:grid-cols-1 grid-cols-2 gap-4">
              <div className="bg-sky-950 text-white p-6 text-extrabold cursor-pointer shadow rounded-lg animate-fade-in hover:bg-sky-900  hover:shadow-lg">
                <dt className="text-lg font-semibold text-slate-400">
                 Our Mission
                </dt>
                <dd className="mt-2 text-sm text-slate-400">
                 We connect buyers and sellers, providing a seamless online shopping experience. Our platform is designed to deliver products without a delivery fee, ensuring a cost-effective shopping experience for our customers.
                </dd>
              </div>
              <div className="bg-sky-950 text-white p-6 text-extrabold cursor-pointer shadow rounded-lg animate-fade-in hover:bg-sky-900 hover:text-slate-300 hover:shadow-lg">
                <dt className="text-lg font-semibold text-slate-400">
                 Seller Conditions
                </dt>
                <dd className="mt-2 text-sm text-slate-400">
                 Sellers can sell their products on our platform if they meet our stringent quality and delivery standards. We ensure that only the best products reach our customers, providing a high-quality shopping experience.
                </dd>
              </div>
              <div className="bg-sky-950 text-white p-6 text-extrabold cursor-pointer shadow rounded-lg animate-fade-in hover:bg-sky-900  hover:shadow-lg">
                <dt className="text-lg font-semibold text-slate-400">
                 Delivery Policy
                </dt>
                <dd className="mt-2 text-sm text-slate-400">
                 We offer free delivery on all orders. Our team works tirelessly to ensure that your products are delivered on time and in perfect condition. We believe in providing value to our customers, and free delivery is a part of that value.
                </dd>
              </div>
              <div className="bg-sky-950 text-white p-6 text-extrabold cursor-pointer shadow rounded-lg animate-fade-in hover:bg-sky-900  hover:shadow-lg">
                <dt className="text-lg font-semibold text-slate-400">
                 Customer Support
                </dt>
                <dd className="mt-2 text-sm text-slate-400">
                 Our customer support team is always ready to assist you. Whether you have questions about our products, need help with your order, or have any other inquiries, we're here to help. We strive to provide a hassle-free shopping experience for all our customers.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div>

     <div className="flex justify-center items-center min-h-screen md:min-h-0">
    <div class="max-w-2xl mx-auto mx-2 bg-sky-950 text-slate-400 shadow-md border-md px-4 py-8 rounded-lg hover:bg-bg-sky-800 cursor-pointer">
    <h1 class="text-3xl text-center font-bold mb-4">Return Policy</h1>
    <p class="mb-4">
        At Nile Ethiopia, we strive to provide you with the best shopping experience possible. 
        If you are not completely satisfied with your purchase, we're here to help.
    </p>
    <h2 class="text-2xl font-bold mb-2">24 hours Satisfaction Guarantee</h2>
    <p class="mb-4">
        We offer a 24 hours satisfaction guarantee on all products purchased through our platform. 
        If for any reason you are not satisfied with your purchase, you may return the item(s) within 24 hours of delivery for a full refund or exchange.
    </p>
    <h2 class="text-2xl font-bold mb-2">Conditions for Return</h2>
    <p class="mb-4">
        To be eligible for a return, your item must be unused and in the same condition that you received it.
        It must also be in the original packaging. 
        Some products may be exempt from our return policy due to hygiene or safety reasons.
    </p>
    <h2 class="text-2xl font-bold mb-2">Initiating a Return</h2>
    <p class="mb-4">
        To initiate a return, please contact our customer support team at Phone:+251-938-817656. 
        Our team will provide you with a return authorization and instructions for returning the item(s). 
        Please include your order number and reason for return in your communication.
    </p>
    <h2 class="text-2xl font-bold mb-2">Return Shipping</h2>
    <p class="mb-4">
        Customers are responsible for the cost of return shipping unless the return is due to a mistake on our part or a defective product. 
        We recommend using a trackable shipping service and purchasing shipping insurance for high-value items, 
        as we cannot guarantee that we will receive your returned item.
    </p>
    <h2 class="text-2xl font-bold mb-2">Refunds</h2>
    <p class="mb-4">
        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.
        We will also notify you of the approval or rejection of your refund. 
        If approved, your refund will be processed and a credit will automatically be applied to your original method of payment within 3 days.
    </p>
    <h2 class="text-2xl font-bold mb-2">Exchanges</h2>
    <p class="mb-4">
        If you would like to exchange an item for a different size, color, or style, please contact our customer support team to arrange for an exchange. 
        We will provide you with instructions for returning the original item and placing a new order for the desired item.
    </p>
    <h2 class="text-2xl font-bold mb-2">Contact Us</h2>
    <p>
        If you have any questions about our return policy or need assistance with a return, 
        please contact our customer support team at nile.support@gmail.com.
    </p>
</div>
</div>
        <Testimonials/>
      </div>
      <Footer /> 
    </div>
 );
}

export default About;




