import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
       {
         breakpoint: 480, // Small devices breakpoint
         settings: {
           slidesToShow: 1, // Show only one slide on small devices
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 640, // Tablet breakpoint
         settings: {
           slidesToShow: 2, // Show two slides on tablet
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 1024, // Desktop breakpoint
         settings: {
           slidesToShow: 3, // Show three slides on desktop
           slidesToScroll: 1,
         },
       },
    ],
   };
   

  return (
    <div className="max-w-4xl mx-auto mb-6 px-4 py-8 gap-4">
  <h2 className="text-2xl font-bold shadow-md border-gray-400 text-center mb-4 py-8">Meet Our Testimonials</h2>
  <Slider {...settings}>
    <div className="text-center bg-white rounded-lg shadow-lg px-6 py-8">
      <img src="/images/first_testimonial.jpg" alt="First Testimony" className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">Helen Johnson</h3>
      <p className="text-gray-700">Absolutely love shopping on this platform! It's so convenient to connect directly with sellers and get original products delivered without any extra delivery fees. The seamless experience makes it my go-to destination for all my shopping needs.</p>
    </div>
    <div className="text-center bg-white rounded-lg shadow-lg px-6 py-8">
      <img src="/images/second_testimonial.jpg" alt="Second Testimony" className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">Emily Smith</h3>
      <p className="text-gray-700">I've had such a great experience with this ecommerce website. It's refreshing to know that I'm getting authentic products directly from the store, and the fact that there's no delivery fee is just icing on the cake. Definitely recommend it to everyone!</p>
    </div>
    <div className="text-center bg-white rounded-lg shadow-lg px-6 py-8">
      <img src="/images/third_testimonials.jpg" alt="Third Testimony" className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">Michael & Laura</h3>
      <p className="text-gray-700">We've been using this ecommerce website for a while now, and it's become our favorite place to shop online. The direct connection with sellers ensures that we are getting genuine products, and the free delivery policy is a huge bonus. Shopping here is a breeze!</p>
    </div>
    <div className="text-center bg-white rounded-lg shadow-lg px-6 py-8">
      <img src="/images/fourth_testimonial.jpg" alt="Fourth Testimony" className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">Amanda Williams</h3>
      <p className="text-gray-700">This platform has revolutionized my shopping experience. I can find everything I need from trusted sellers and have it delivered right to my doorstep without worrying about any additional costs. It's efficient, reliable, and I couldn't be happier.</p>
    </div>
    <div className="text-center bg-white rounded-lg shadow-lg px-6 py-8">
      <img src="/images/fifth_testimonial.jpg" alt="Fifth Testimony" className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">John Doe</h3>
      <p className="text-gray-700">I can't say enough good things about this ecommerce platform. It's user-friendly, offers a wide range of products, and the no delivery fee policy is a game-changer. Shopping here feels like a personalized experience, and I wouldn't shop anywhere else.</p>
    </div>
    <div className="text-center bg-white rounded-lg shadow-lg px-6 py-8">
      <img src="/images/sixth_testimonial.jpg" alt="Sixth Testimony" className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">Emma Davis</h3>
      <p className="text-gray-700">I'm extremely impressed with the service provided by this ecommerce website. The convenience of connecting directly with sellers and having my orders delivered without any extra fees is unbeatable. It's made my shopping experience hassle-free and enjoyable.</p>
    </div>
  </Slider>
</div>

  );
};

export default Testimonials;






