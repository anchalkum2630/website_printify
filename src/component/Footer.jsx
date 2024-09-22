import React from 'react';
const data = [
    {
        "src": "Integrations",
        "names": [
            "Shopify",
            "Etsy",
            "eBay",
            "Amazon",
            "TikTok Shop",
            "PrestaShop",
            "BigCommerce",
            "Wix",
            "WooCommerce",
            "Squarespace",
            "Printify Api",
            "Printify Pop-Up Store",
            "Shutterstock"
        ]
    },
    {
        "src": "Discover",
        "names": [
            "Blog",
            "Guides",
            "Products",
            "Etsy print-on-demand",
            "Shopify print-on-demand",
            "Woocommerce print-on-demand",
            "Wix print-on-demand",
            "Squarespace print-on-demand",
            "Make Your Own Shirt",
            "Brands",
            "Pricing",
            "Shipping Rates",
            "Mockup Generator",
            "Printify",
            "Print on Demand",
            "Print Providers",
        ]
    },
    {
        "src": "Start selling",
        "names": [
            "Custom T-shirts",
            "Custom Hoodies",
            "Custom Mugs",
            "Custom Socks",
            "Custom Backpacks",
            "Custom Branding",
            "About",
            "Sell on Etsy",
            "Printify",
            "Sell on Social Media",
            "Jobs",
            "Free T-shirt Designs",
            "Webinar",
            "Custom Products",
            "Printing",
            "Custom All-Over-Print Hoodies",
            "Start a Clothing Line",
            "Affiliate",
            "Start POD Business",
            "Bulk Orders",
            "POD Glossary",
            "Transfering To Printify",
        ]
    },
    {
        "src": "Printify",
        "names": [
            "Print on Demand",
            "Print Providers",
            "Experts Program",
            "Printify Express Delivery",
            "Become a Partner",
            "About",
            "Printify Quality Promise",
            "Jobs",
            "Webinars",
            "Printing Profits Podcast",
            "Contact Us",
            "Affiliate",
            "Contact Sales",
            "POD Glossary",
            "Network Fulfillment Status",
            "Merchant Protection",
            "Security",
            "Sitemap",
        ]
    },
];

const Navbar2 = () => (
    <div className="flex flex-col items-center py-8 text-sm mt-10 shadow bg-[#f3efef]">
        <ul className="flex space-x-8">
            <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Intellectual Property Policy</li>
            <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Terms of Service</li>
            <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Privacy Policy</li>
            <li className="text-gray-500 hover:text-[#39b75d] cursor-pointer">Security</li>
        </ul>
        <div className="mt-2 text-black">
            © 2024 Printify, Inc. All rights reserved.
        </div>
    </div>
);

const Content = ({ title, names }) => (
    <div className="w-[50%] xl:w-[20%] mx-auto my-8 px-8">
        <div className="font-bold py-4">{title}</div>
        {names.map((item, i) => (
            <p key={i} className="text-sm md:text-base p-1">{item}</p>
        ))}
    </div>
);

const Footer = () => {
    return (
        <div>  
            <div className="flex flex-wrap">
                {data.map((item, i) => (
                    <Content key={i} title={item.src} names={item.names} />
                ))}
            </div>
            <Navbar2 />
        </div>
    );
};

export default Footer;
