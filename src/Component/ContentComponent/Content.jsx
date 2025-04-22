import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

const Content = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-5 space-y-5 md:space-y-0 md:space-x-5 '>
      <div className=' w-full md:w-1/2 flex justify-center'>
        <img 
          src='https://www.interakt.shop/wp-content/uploads/2024/02/Frame-37076.png' 
          alt='image' 
          className='w-full max-w-xs md:max-w-sm lg:max-w-md'
        />
      </div>
      <div className='w-full md:w-1/2  p-5 '>
        <p className='text-sm md:text-base lg:text-lg' style={{"fontSize":"16px"}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ea optio, numquam natus sit molestiae perferendis ipsam laboriosam illo soluta aliquid, facere eos? Optio, accusantium! Iste odio ex molestias cupiditate.<br/><br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ea optio, numquam natus sit molestiae perferendis ipsam laboriosam illo soluta aliquid, facere eos? Optio, accusantium! Iste odio ex molestias cupiditate.
        </p>
      </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-5 space-y-5 md:space-y-0 md:space-x-5 '>
     
      <div className='w-full md:w-1/2  p-5 '>
      <h5 className="text-lg md:text-xl font-bold text-4xl lg:text-3xl">
  Acquire New Customers in Minutes with AI-powered WhatsApp Chat Ads
</h5>
<br/>
<div className='flex justify-between items-center'>
{/* <FaRegCircleCheck className="text-green-600 font-bold " /> */}
Run Click to WhatsApp Ads (CTWA) without leaving the platform
</div>

<br/>
        <h5> Get AI generated ads on WhatsApp personalised to your business and auto targeted for best results</h5><br/>
        <h5> Advanced WhatsApp analytics to track CTWA conversions and ROAS</h5>
      </div>

      <div className=' w-full md:w-1/2 flex justify-center'>
        <img 
          src='https://www.interakt.shop/wp-content/uploads/2024/02/Frame-37076.png' 
          alt='image' 
          className='w-full max-w-xs md:max-w-sm lg:max-w-md'
        />
      </div>
 
    </div>

    {/* Section 3 */}

    <div className='flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-5 space-y-5 md:space-y-0 md:space-x-5 '>
    <div >
    <img src="./src/assets/Frame.webp " alt="imag"/>
    </div>
    <div >
    <h5 className="text-lg md:text-xl font-bold text-4xl lg:text-3xl" >
    Provide Better Customer Support on WhatsApp and Instagram
</h5><br/>
    

<ol className="text-2xl space-y-3.5">
    <li className="flex items-center gap-2" style={{"fontSize":"16px"}}>
        
        <span>Provide support to your customer across their favourite channels - WhatsApp and Instagram</span>
    </li>
    <li style={{"fontSize":"16px"}}>CRM to manage your customers</li>
    <li style={{"fontSize":"16px"}}>Auto routing of multiple agents on WhatsApp and rule-based routing for better handling customer queries</li>
    <li style={{"fontSize":"16px"}}>Shared Team inbox with Agent performance analytics</li>
</ol>


    </div>


    </div>

    </>
  )
}

export default Content;
