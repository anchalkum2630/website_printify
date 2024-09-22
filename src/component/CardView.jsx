import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// Data array containing card information
const data = [
  {
    image: 'https://printify.com/pfh/assets/resources/rockstars.webp',
    title: 'Robert A. Voltaire',
    description: 'printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create design previously too expensive to print without having to have 1000 shirts in our jam space. Thanks Printify',
    linkText: 'Store link',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/youtube.webp',
    title: 'Quinten Barney',
    description: 'We chose printify because of their offerings as well as incredibly low prices. After several years, we have come to find that their customer service is also top notch, and platform just keeps getting better and better',
    linkText: 'Etsy Merchant',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/amplified.webp',
    title: 'Niki',
    description: 'printify has been an amazing partner to work and grow our business from the range of merch we are for our customers to working with our customer team (hi Martin!) its truly made the whole product breeze',
    linkText: 'Love more',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/printing-profits.webp',
    title: 'Spencer,Brett',
    description: 'Using Printify has been a great experience. Service is always very quick to respond to issues that our customers may have. The most beautiful has been more than paid for itself and has margins significantly',
    linkText: 'Great',
  },
  {
    image: 'https://printify.com/pfh/assets/resources/mentorship.webp',
    title: 'April Showers',
    description: '100s of profitable store owners have taken our free and paid courses',
    linkText: 'Happy',
  },
];

// Card component to render individual card
const Card = ({ image, title, description, linkText }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 h-[100%]">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 h-36 overflow-y-auto">
      <p className="text-gray text-left" style={{ color: "#2f2e0c" }}>{title}</p>
      <h3 className="text-xl text-left font-bold mt-2" style={{ color: "#2f2e0c" }}>{description}</h3>
      <a href="#" className="font-semibold text-left mt-4 underline block" style={{ color: "#2f2e0c" }}>
        {linkText}
      </a>
    </div>
  </div>
);

// Main CardView component
const CardView = () => {
  return (
    <div className="z-[-10] py-16 mt-24 bg-gray-100 mb-12"> {/* Adjusted margin-top for Navbar */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8" style={{ color: "#2f2e0c" }}>
          Trusted by 8M sellers around the world
        </h2>

        {/* Slider Layout */}
        <div className="py-20 z-[-10] justify-center items-center">
          <Slider {...settings}>
            {data.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardView;
