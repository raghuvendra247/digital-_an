import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white mt-5 pt-5">
      <div className="container mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> 123 Street, New York, USA</p>
          <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> +012 345 67890</p>
          <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> info@example.com</p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition"><FaYoutube /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"><FaLinkedinIn /></a>
          </div>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">General Carpentry</a></li>
            <li><a href="#" className="hover:text-blue-400">Furniture Remodeling</a></li>
            <li><a href="#" className="hover:text-blue-400">Wooden Floor</a></li>
            <li><a href="#" className="hover:text-blue-400">Wooden Furniture</a></li>
            <li><a href="#" className="hover:text-blue-400">Custom Carpentry</a></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Our Services</a></li>
            <li><Link to="/Term_condition" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400">Privacy</Link></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="mb-4">Subscribe to our newsletter for updates.</p>
          <div className="relative w-full bg-white max-w-xs">
            <input type="email" placeholder="Your email" className="w-full p-3 rounded-lg border-none text-gray-900 focus:outline-none" />
            <button className="absolute top-1 right-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-700 mt-5 py-4 text-center text-sm">
        &copy; 2025 <a href="#" className="text-blue-400 hover:underline">Your Site Name</a>. All Rights Reserved.
        <br /> Designed by <a href="https://htmlcodex.com" className="text-blue-400 hover:underline">HTML Codex</a>.
      </div>
    </footer>
  );
};

export default Footer;