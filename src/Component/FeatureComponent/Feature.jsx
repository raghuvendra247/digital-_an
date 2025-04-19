import React, { useEffect, useState } from 'react';
import Brand from '../BrandComponent/Brand';
import Term_condition from '../Term_conditionComponent/Term_condition'
import Privacy from '../PrivacyComponent/Privacy'
import Testimonial from '../TestimonialComponent/Testimonial'
import SignupPage from '../SignupComponent/SignupPage'
import Bottom from '../BottomComponent/Bottom'
import IntegrationSection from "../IntegrationComponent/IntegrationSection"



import { CheckCircle, Smartphone, Users, Settings, BarChart2, Shield } from 'lucide-react';
// import logo from '../assets/logo.png'; // ✅ Update this path based on your file structure

const words = [
  { text: 'Commerce', color: 'green' },
  { text: 'CRM', color: 'blue' },
  { text: 'Marketing', color: 'goldenrod' }
];



const features = [
  {
    icon: <CheckCircle className="text-green-900 w-6 h-6" />,
    title: 'Get Green Tick Verified',
  },
  {
    icon: <Smartphone className="text-green-900 w-6 h-6" />,
    title: 'One time & recurring Campaigns on WhatsApp',
  },
  {
    icon: <Users className="text-green-900 w-6 h-6" />,
    title: 'Shared Team Inbox with auto chat assignment',
  },
  {
    icon: <Settings className="text-green-900 w-6 h-6" />,
    title: 'Build your own Workflows',
  },
  {
    icon: <BarChart2 className="text-green-900 w-6 h-6" />,
    title: 'Campaign & Agent Analytics',
  },
  {
    icon: <Shield className="text-green-900 w-6 h-6" />,
    title: 'Simplicity for SMBs with Enterprise grade Scale & Security',
  },
];

const Feature = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWord = words[wordIndex];
    const { text, color } = currentWord;

    if (charIndex <= text.length) {
      const coloredText = `<span style="color: ${color};">${text.slice(0, charIndex)}</span>`;
      setDisplayText(coloredText);

      const timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  return (
    <>
      {/* Top Banner */}
      <div className="fixed top-0 w-full z-50 flex justify-center items-center bg-amber-200 font-bold text-center py-3 text-xs sm:text-sm md:text-base">
        <h5>Get Started @799/month [Annual plans only] 🚀</h5>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 pt-28 gap-10 max-w-screen-xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 rounded-xl space-y-6">
          {/* <div className="flex flex-wrap justify-between items-center gap-4 mb-4 font-semibold">
            <h5>Interakt</h5>
            <h5>Jio</h5>
            <h5>Haptik</h5>
          </div> */}
<br/>
          <div
            className="text-lg sm:text-xl md:text-2xl font-bold leading-snug"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <span className="text-4xl">
              Transform Conversations into Conversions with<br/> WhatsApp &nbsp;
              <span dangerouslySetInnerHTML={{ __html: displayText }} />
            </span>
          </div>

          <div className="space-y-2 text-sm sm:text-base leading-relaxed">
            <p>
              (Logo) <span className="font-bold">Meta</span> <br /> Business Partner
            </p>
            <p>
              Integrate effortlessly with the WhatsApp Business API. The only full-stack
              platform to offer a seamless customer experience & grow your business on WhatsApp.
            </p>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded mt-4">
            Start Free Trial
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center overflow-visible px-2 lg:px-4">
          <img
            src="./public/assets/whatsapp_girl.png"
            alt="WhatsApp Girl"
            className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] scale-[1.4] md:scale-[1.5] lg:scale-[1.6] object-contain transition-transform duration-300"
          />
        </div>
      </div>
<br/><br/><br/>
<div className="bg-green-100 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-stretch">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center lg:items-center text-start lg:text-center px-4 relative w-full lg:w-1/6 py-4"
          >
            <div className="flex items-center gap-3 lg:flex-col lg:justify-center lg:gap-0 w-full">
              {/* Circle icon */}
              <div className="bg-white rounded-full p-2 shadow-sm w-fit">
                {item.icon}
              </div>

              {/* Title */}
              <p className="text-sm sm:text-base text-green-900 font-medium">
                {item.title}
              </p>
            </div>

            {/* Vertical Divider on large screens only */}
            {index < features.length - 1 && (
              <div className="hidden lg:block absolute top-0 right-0 h-full border-r border-green-300" />
            )}
          </div>
        ))}
      </div>
    </div>
    <Brand/>
    
    <IntegrationSection/>
    <SignupPage/>
    
   
    {/* <Testimonial/> */}
    <Bottom/>
    {/* <Privacy/> */}

    </>
  );
};

export default Feature;
