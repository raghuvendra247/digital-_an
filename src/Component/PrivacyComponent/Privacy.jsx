import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <>
     <div className="w-full bg-white overflow-x-hidden px-28">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:px-20 gap-4">
        {/* Logo */}
        <div>
           <img src="./public/assets/lohogo.png" alt="logo" className="w-24 h-auto" />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 font-semibold text-center text-gray-700" style={{"font-size":"14px"}}>
          <span className="hover:text-black cursor-pointer">Privacy Policy</span>
          <span className="hover:text-black cursor-pointer "><Link to='/term_condition ' style={{"text-decoration": "none","color":"black"}}>Terms & Condition</Link></span>
          <span className="hover:text-black cursor-pointer">Contact Us</span>
        </div>

        {/* Dashboard Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
          Dashboard
        </button>
      </div>

      {/* Search & Heading */}
      <div className="px-4 md:px-20 py-6 space-y-4 text-center">
        <input
          type="search"
          placeholder="Search..."
          className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="border-b-2 border-gray-200 pb-2 my-3">
          <h1 className="font-bold text-2xl md:text-3xl"style={{"font-size":"24px", "font-weight":"bold"}}>Privacy policy</h1>
        </div>
      </div>

       {/* Main Content */}
       <div className="w-full px-4 md:px-20 py-6 space-y-10 text-justify text-gray-800">
        <p style={{"font-size":"14px", "font-weight":"bold"}}>Dudumsg Privacy Policy</p>
        <p style={{"font-size":"14px"}}>Last Updated: September-02-2024</p>
        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className=" font-bold" style={{"font-size":"16.38px"}}><strong> Introduction</strong></h2>
          <p style={{"font-size":"14px"}}>
          When you use Dudumsg, you trust us with your information. We take this responsibility seriously and are committed to safeguarding your personal information. This Privacy Policy explains what information we collect, why we collect it, and how you can manage and protect your information.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold" style={{"font-size":"16px", "font-weight":"bold"}}> Definitions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li style={{"font-size":"14px"}}>
              <strong>Divisha Business Solutions Pvt Ltd</strong> (“Dudumsg,” “we,” “us,” or “our”) refers to the entity responsible for the collection and processing of Personal Data as outlined in this policy.
            </li>
            <li style={{"font-size":"14px"}}>
              <strong>Personal Data</strong> refers to any information relating to an identified or identifiable individual.
            </li>
            <li style={{"font-size":"14px"}}>
              <strong>Customer or Client</strong>  refers to a business entity that has entered into an agreement with Dudumsg to use our Services.
            </li>
           
          </ul>
        </section>
         {/* 3.  */}
         <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px", "font-weight":"bold"}}> What is Dudumsg?</h2>
          <p style={{"font-size":"14px"}}>
          Dudumsg is a messaging and customer relationship management platform provided by Divisha Business Solutions Pvt Ltd. It enables businesses to engage with their customers through various messaging channels, facilitating communication, data management, and customer interaction.
          </p>
        </section>
 {/* 4.  */}
       {/* 4. Information We Collect and How We Use It */}
<section className="space-y-4">
  <h2 className="text-xl font-bold" style={{"font-size":"16px", "font-weight":"bold"}}>Information We Collect and How We Use It</h2>

  {/* Subsection: Personal Data Collection */}
  <h3 className="text-lg font-bold" style={{"font-size":"14px", "font-weight":"bold"}}>Personal Data Collection</h3>
  <p style={{"font-size":"14px"}}>
    We collect information, including Personal Data, to provide, maintain, and improve our Services. This information is collected for the following purposes:
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li><span className="font-semibold" style={{"font-size":"14px"}}>Service Delivery:</span> To provide and manage our messaging services effectively.</li>
    <li><span className="font-semibold" style={{"font-size":"14px"}}>Communication:</span> To communicate with you, respond to inquiries, and provide support.</li>
    <li><span className="font-semibold" style={{"font-size":"14px"}}>Billing:</span> To process payments for our services.</li>
    <li><span className="font-semibold" style={{"font-size":"14px"}}>Service Improvement:</span> To understand how our Services are used and to improve them.</li>
  </ul>

  <p style={{"font-size":"14px"}}>
    The Personal Data we may collect includes your name, email address, phone number, and other information necessary to deliver our Services. This data is stored securely and used only for the purposes outlined in this Privacy Policy.
  </p>

  {/* Subsection: Third-Party Services */}
  <h3 className="text-lg font-bold" style={{"font-size":"14px", "font-weight":"bold"}}>Third-Party Services</h3>
  <p style={{"font-size":"14px"}}>
    We may use third-party services to enhance our Service offerings. These services may collect and use information to identify you. The privacy policies of these third-party services apply to their data collection practices:
  </p>

  <ul className="list-disc list-inside space-y-2">
    <li style={{"font-size":"14px"}}>Google Services</li>
    <li style={{"font-size":"14px"}}>Facebook Services</li>
    <li style={{"font-size":"14px"}}>Apple Services</li>
    <li style={{"font-size":"14px"}}>Shopify Services</li>
  </ul>

  <p style={{"font-size":"14px"}}>Please refer to the privacy policies of these third-party services for more information on their data handling practices.</p>
</section>

        {/* 5.  */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold" style={{"font-size":"16px", "font-weight":"bold"}}> Data Security          </h2>
          <p style={{"font-size":"14px"}}>
          We implement a variety of security measures to protect your personal information. These measures include encryption, secure data storage, and restricted access to your data. We continually assess and update our security practices to address new threats and vulnerabilities.
          </p>
        </section>
        {/* 6.  */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold" style={{"font-size":"16px", "font-weight":"bold"}}> Your Rights       </h2>
          <p style={{"font-size":"14px"}}>
          You have the right to access, update, or request the deletion of your Personal Data. To exercise these rights, please contact us at the email address provided below. We may request certain information to verify your identity before processing your request.


          </p>
        </section>
        {/* 7.  */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold" style={{"font-size":"16px", "font-weight":"bold"}}> Changes to This Privacy Policy        </h2>
          <p style={{"font-size":"14px"}}>
          We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. Any updates will be posted on our website, and we will notify you of significant changes. Your continued use of our Services after any changes are made indicates your acceptance of the revised policy.
          </p>
        </section>


         {/* 8. Contact Us */}
         <section className="space-y-4" >
          <h2 className="text-xl font-bold" style={{"font-size":"16px", "font-weight":"bold"}}> Contact Us</h2>
          <p style={{"font-size":"14px"}}>
          If you have any questions or concerns about these Terms and Conditions, please contact us at:
          </p>
        </section>

 {/* Divisha Business Solutions Pvt Ltd  */}
 <section className="space-y-4">
          <h2 className="text-lg font-bold" style={{"font-size":"16px", "font-weight":"bold"}}> Divisha Business Solutions Pvt Ltd</h2>
          <p style={{"font-size":"14px"}}>
          Email: support@dudumsg.com
          </p>
        </section>

        </div>
        <div className="w-full bg-black text-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-12 gap-6">
    {/* Logo and Links */}
    <div className="flex flex-col gap-2">
      <img src="./public/assets/lohogo.png" alt="Logo" className="w-24 mb-2 rounded-2xl" />
      <h1 className="text-blue-500 font-bold text-lg" style={{"font-size":"18px", "font-weight":"bold"}}>Useful Links</h1>
      <p className="hover:underline cursor-pointer" style={{"font-size":"16px"}}>Privacy Policy</p>
      <p className="hover:underline cursor-pointer" style={{"font-size":"16px"}}>Terms & Conditions</p>
      <p className="hover:underline cursor-pointer" style={{"font-size":"16px"}}>Contact Us</p>
    </div>

    {/* Pages */}
    <div className="flex flex-col gap-2">
      <h1 className="text-green-500 font-bold text-lg" style={{"font-size":"18px"}}>Pages</h1>
      {/* You can add links here if needed */}
    </div>

    {/* Language */}
    <div className="flex flex-col gap-2">
      <h1 className="text-blue-500 font-bold text-lg" style={{"font-size":"18px"}}>Language</h1>
      <select className="bg-gray-800 text-white p-2 rounded">
        <option >English</option>
        <option>Hindi</option>
        <option>Spanish</option>
      </select>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Privacy

