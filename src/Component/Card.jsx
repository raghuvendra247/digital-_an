import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12 lg:px-38 justify-center">
      {/* Card 1 */}
      <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-yellow-100 p-6">
        <p className="text-lg font-semibold">Starter</p>
        <div className="font-bold text-2xl mb-2">₹2,757</div>
        <p className="text-gray-700 text-base font-bold">Pick any one channel</p>
         <div className="flex  gap-1 mt-2">
          <span className="flex items-center bg-green-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <RiWhatsappLine className="mr-1 text-green-500 text-xl" /> WhatsApp
          </span>
          <span className="flex items-center bg-gray-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <FaSquareInstagram className="mr-1 text-red-400 text-xl" /> Instagram
          </span>
        </div>
        <p className="mt-4 font-bold">Unlimited Agents <span className="font-normal">lowest</span></p>
        <p className="font-bold mt-2">Conversation Charges*</p>
        <table className="w-full border-collapse text-left mt-2">
          <tbody>
            <tr><td className="py-2 pr-10">Marketing</td><td className="py-2">Rs 0.882</td></tr>
            <tr><td className="py-2 pr-10">Authentication</td><td className="py-2">Rs 0.129</td></tr>
            <tr><td className="py-2 pr-10">Utility</td><td className="py-2">Rs 0.160</td></tr>
            <tr><td className="py-2 pr-10">Service</td><td className="py-2">FREE</td></tr>
          </tbody>
        </table>
        <button className="bg-yellow-500 w-full py-2 rounded-md font-semibold hover:bg-yellow-600 transition mt-4">
          Start Free Trial
        </button>
      </div>
      
      {/* Card 2 */}
      <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg text-white bg-green-400 p-6">
        <p className="text-lg font-semibold">Growth</p>
        <div className="font-bold text-2xl mb-2">₹6,897</div>
        <p className="text-white font-bold">Includes both channels</p>
        <div className="flex  gap-1 mt-2">
          <span className="flex items-center bg-green-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <RiWhatsappLine className="mr-1 text-green-500 text-xl" /> WhatsApp
          </span>
          <span className="flex items-center bg-gray-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <FaSquareInstagram className="mr-1 text-red-400 text-xl" /> Instagram
          </span>
        </div>
        <p className="mt-4 font-bold">Unlimited Agents <span className="font-normal">lowest</span></p>
        <p className="font-bold mt-2">Conversation Charges*</p>
        <table className="w-full border-collapse text-left mt-2">
          <tbody>
            <tr><td className="py-2 pr-10">Marketing</td><td className="py-2">Rs 0.871</td></tr>
            <tr><td className="py-2 pr-10">Authentication</td><td className="py-2">Rs 0.128</td></tr>
            <tr><td className="py-2 pr-10">Utility</td><td className="py-2">Rs 0.150</td></tr>
            <tr><td className="py-2 pr-10">Service</td><td className="py-2">FREE</td></tr>
          </tbody>
        </table>
        <button className="bg-green-700 w-full py-2 rounded-md text-white font-semibold hover:bg-yellow-600 transition mt-4">
          Start Free Trial
        </button>
      </div>
      
      {/* Duplicate Card 1 */}
      <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-300 p-6">
        <p className="text-lg font-semibold text-blue-400">Advance</p>
        <div className="font-bold text-2xl mb-2">₹9,657</div>
        <p className="text-gray-700 text-base font-bold">Includes both channels</p>
        <div className="flex  gap-1 mt-2">
          <span className="flex items-center bg-green-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <RiWhatsappLine className="mr-1 text-green-500 text-xl" /> WhatsApp
          </span>
          <span className="flex items-center bg-gray-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <FaSquareInstagram className="mr-1 text-red-400 text-xl" /> Instagram
          </span>
        </div>
         {/* Unlimited Agents & Charges */}
      <p className="mt-4 font-bold">Unlimited Agents <span className="font-normal">lowest</span></p>
      <p className="font-bold mt-2">Conversation Charges*</p>

      {/* Pricing Table */}
      <div className="overflow-x-auto mt-2">
        <table className="w-full border-collapse text-left">
          <tbody>
            <tr >
              <td className="py-2 pr-10">Marketing</td>
              <td className="py-2">Rs 0.863</td>
            </tr>
            <tr >
              <td className="py-2 pr-10">Authentication</td>
              <td className="py-2">Rs 0.127</td>
            </tr>
            <tr >
              <td className="py-2 pr-10">Utility</td>
              <td className="py-2">Rs 0.140</td>
            </tr>
            <tr>
              <td className="py-2 pr-10">Service</td>
              <td className="py-2">FREE</td>
            </tr>
          </tbody>
        </table>
      </div>
        <button className="bg-yellow-500 w-full py-2 rounded-md font-semibold hover:bg-yellow-600 transition mt-4">
          Start Free Trial
        </button>
      </div>
      
      {/* Duplicate Card 2 */}
      <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg  bg-cyan-200 text-black p-6">
        <p className="text-lg font-semibold">Enterprise</p>
        <div className="font-bold text-2xl mb-2">On request</div>
        <p className="text-white font-bold">Includes both channels</p>
        <div className="flex  gap-1 mt-2">
          <span className="flex items-center bg-green-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <RiWhatsappLine className="mr-1 text-green-500 text-xl" /> WhatsApp
          </span>
          <span className="flex items-center bg-gray-200 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700">
            <FaSquareInstagram className="mr-1 text-red-400 text-xl" /> Instagram
          </span>
        </div>
         {/* Unlimited Agents & Charges */}
      <p className="mt-4 font-bold py-2">Unlimited Agents <span className="font-normal">lowest</span></p>
      <p className="font-bold mt-2 pb-2">Conversation Charges*</p>
      <p className="font-bold mt-2 pb-2">No Markup Charges</p>
      <p className="font-bold mt-2 pb-2">Dedicates Account Manager</p>

      
<br/><br/>
        <button className="bg-green-700 w-full py-2 rounded-md text-white font-semibold hover:bg-yellow-600 transition mt-5">
          Get  In Touch
        </button>
      </div>
    </div>
  );
}

export default CardGrid;
