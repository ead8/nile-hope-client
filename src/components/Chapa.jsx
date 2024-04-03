import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chapa = ({ price, orderId }) => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const create_payment = async () => {
        try {
            const { data } = await axios.post('https://nile-hope-client.vercel.app/api/order/create-payment', {
                price,
                email: formData.email,
                first_name: formData.first_name,
                last_name: formData.last_name
            }, { withCredentials: true });

            // Redirect the user to the CHAPA payment page
            window.location.href = data.checkout_url;
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const verifyPaymentAndRedirect = async () => {
        // Extract the transaction ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const transactionId = urlParams.get('transactionId'); // Adjust this based on how CHAPA includes the transaction ID in the URL

        if (!transactionId) {
            console.log("Transaction ID not found in URL.");
            return;
        }

        try {
            const { data } = await axios.get(`http://localhost:5000/api/order/verify-payment/${transactionId}`, { withCredentials: true });

            if (data.message === 'success') {
                // Redirect to success page
                window.location.href = "/success";
            } else {
                // Handle payment verification failure
                console.log("Payment verification failed");
            }
        } catch (error) {
            console.log("Payment verification error", error);
        }
    };

    // Call verifyPaymentAndRedirect when the component mounts
    useEffect(() => {
        verifyPaymentAndRedirect();
    }, []);

    return (
        <div className='mt-4'>
                <div >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last Name" />
                    </div>
                </div>
         
                <button onClick={create_payment} className='px-10 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-white'>Pay With Chapa</button>
   
        </div>
    );
};

export default Chapa;