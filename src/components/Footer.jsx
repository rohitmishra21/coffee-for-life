import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white font-sans px-6 pt-12 pb-4">
            <div className="max-w-7xl mx-auto py-16 flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                    <img
                        src="https://www.coffeeforlife.co.uk/wp-content/uploads/2019/03/Coffee-For-Life-Logo.png"
                        alt="Coffee for Life Logo"
                        className="w-44"
                    />
                </div>


                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest">Contact</h3>
                        <div className="w-10 h-1 bg-blue-400 my-2 mx-auto md:mx-0" />
                        <p className="text-sm">0800 634 8610</p>
                        <p className="text-sm text-blue-400">info@coffeeforlife.co.uk</p>
                    </div>

                    {/* Visit */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest">Visit</h3>
                        <div className="w-10 h-1 bg-blue-400 my-2 mx-auto md:mx-0" />
                        <p className="text-sm">Burnfield Avenue</p>
                        <p className="text-sm">Glasgow, G46 7TL</p>
                    </div>

                    {/* Opening */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest">Opening</h3>
                        <div className="w-10 h-1 bg-blue-400 my-2 mx-auto md:mx-0" />
                        <p className="text-sm">Monday - Friday</p>
                        <p className="text-sm">9.00am – 5.00pm</p>
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-10">
                <a href="#" className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition">
                    <FaFacebookF />
                </a>
                <a href="#" className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition">
                    <FaTwitter />
                </a>
                <a href="#" className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition">
                    <FaInstagram />
                </a>
            </div>

            {/* Bottom Info */}
            <div className="text-xs text-gray-400 text-center border-t border-gray-800 mt-8 pt-4">
                Website designed by <span className="text-gray-300">Soapbox Digital Media</span>.{' '}
                <a href="#" className="text-blue-400 underline">Cookie Policy</a> |{' '}
                <a href="#" className="text-blue-400 underline">Privacy Policy</a> |{' '}
                <a href="#" className="text-blue-400 underline">Sitemap</a> |{' '}
                <span>Copyright © 2025. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
