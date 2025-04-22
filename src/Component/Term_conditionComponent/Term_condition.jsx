import React from 'react';
import { Link } from 'react-router-dom';

const Term_condition = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden px-28">
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:px-20 gap-4">
        {/* Logo */}
        <div>
          <img src="./public/assets/lohogo.png" alt="logo" className="w-24 h-auto" />
        </div>

        {/* Nav Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 font-semibold text-center text-gray-700" >
          <span className="hover:text-black cursor-pointer" style={{"font-size":"14px"}}><Link to="/privacy" style={{"text-decoration": "none","color":"black"}}>Privacy Policy </Link></span>
          <span className="hover:text-black cursor-pointer" style={{"font-size":"14px"}}>Terms & Condition</span>
          <span className="hover:text-black cursor-pointer" style={{"font-size":"14px"}}>Contact Us</span>
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
          <h1 className="font-bold text-2xl md:text-3xl"style={{"font-size":"24px","fontWeight":"bold"}}>Terms & Conditions</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 md:px-20 py-6 space-y-10 text-justify text-gray-800">
      <p style={{"font-size":"14px", "font-weight":"bold"}}>Dudumsg Terms and Conditions</p>
      <p style={{"font-size":"14px"}}>Last Updated: September-02-2024</p>
        {/* 1. Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>1. Introduction</h2>
          <p style={{"font-size":"14px"}}>
            Welcome to <span className="font-semibold">Dudumsg</span>, a product of{' '}
            <span className="font-semibold">Divisha Business Solutions Pvt Ltd</span>. By using
            Dudumsg’s services, you agree to comply with and be bound by these Terms and Conditions.
            Please read them carefully. If you do not agree to these terms, you must not use our
            services.
          </p>
        </section>

        {/* 2. Definitions */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>2. Definitions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li style={{"font-size":"14px"}}>
              <strong>"Dudumsg," "we," "us," or "our"</strong> refers to Divisha Business Solutions
              Pvt Ltd and its product, Dudumsg.
            </li>
            <li style={{"font-size":"14px"}}>
              <strong>"User," "you," or "your"</strong> refers to the individual or entity that uses
              Dudumsg services.
            </li>
            <li style={{"font-size":"14px"}}>
              <strong>"Services"</strong> refers to all features, applications, and services
              provided by Dudumsg.
            </li>
            <li style={{"font-size":"14px"}}>
              <strong>"Content"</strong> refers to any data, information, or material uploaded,
              transmitted, or posted by the user through Dudumsg.
            </li>
          </ul>
        </section>

        {/* 3. Acceptance of Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>3. Acceptance of Terms</h2>
          <p style={{"font-size":"14px"}}>
            By accessing or using Dudumsg, you acknowledge that you have read, understood, and agree
            to be bound by these Terms and Conditions, along with our Privacy Policy. These Terms
            constitute a legally binding agreement between you and Dudumsg.
          </p>
        </section>

        {/* 4. Use of Services */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold" style={{"font-size":"16px","fontWeight":"bold"}}>4. Use of Services</h2>

          {/* 4.1 Eligibility */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg" style={{"font-size":"14px","font-weight":"bold"}}>4.1 Eligibility</h3>
            <p>
              To use Dudumsg services, you must be at least 18 years old or have the legal authority
              to enter into these Terms. By using our services, you represent and warrant that you
              meet these eligibility requirements.
            </p>
          </div>

          {/* 4.2 User Accounts */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg" style={{"font-size":"14px","fontWeight":"bold"}}>4.2 User Accounts</h3>
            <p style={{"font-size":"14px"}}>
              To access certain features of Dudumsg, you may be required to create an account. You
              agree to provide accurate and complete information during the registration process and
              to update such information to keep it accurate and complete. You are responsible for
              maintaining the confidentiality of your account and password and for restricting
              access to your account.
            </p>
          </div>

          {/* 4.3 Prohibited Activities */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg" style={{"font-size":"14px","fontWeight":"bold"}}>4.3 Prohibited Activities</h3>
            <p style={{"font-size":"14px"}}>You agree not to use Dudumsg for any unlawful or prohibited activities, including:</p>
            <ul className="list-disc list-inside space-y-1">
              <li style={{"font-size":"14px"}}>Sending spam or unsolicited messages.</li>
              <li style={{"font-size":"14px"}}>Engaging in fraudulent or misleading activities.</li>
              <li style={{"font-size":"14px"}}>
                Uploading or transmitting harmful content, including viruses, malware, or other
                malicious software.
              </li>
              <li style={{"font-size":"14px"}}>Infringing on the intellectual property rights of others.</li>
              <li style={{"font-size":"14px"}}>Violating any applicable laws or regulations.</li>
            </ul>
          </div>
        </section>
         {/* 5. Use of Services */}
         <section className="space-y-6">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>5. Content Ownership and Responsibility</h2>

          {/* 5.1 Eligibility */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg"style={{"font-size":"14px","fontWeight":"bold"}}>5.1  Your Content</h3>
            <p style={{"font-size":"14px"}}>
            You retain ownership of all content you upload, post, or transmit through Dudumsg. By using our services, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, display, and transmit your content solely for the purpose of providing and improving our services.
            </p>
          </div>

          {/* 5.2 User Accounts */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg"style={{"font-size":"14px","fontWeight":"bold"}}>5.2  Responsibility for Content</h3>
            <p style={{"font-size":"14px"}}>
            You are solely responsible for the content you upload, post, or transmit through Dudumsg. We do not endorse or assume any responsibility for any content posted by users. We reserve the right to remove or modify any content that violates these Terms or is deemed inappropriate at our sole discretion.
            </p>
          </div>
          </section>

{/* 6. Use of Services */}
<section className="space-y-6">
          <h2 className="text-xl font-bold" style={{"font-size":"16px","fontWeight":"bold"}}>6. Payment and Subscription</h2>

          {/* 6.1 Eligibility */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg"style={{"font-size":"14px","fontWeight":"bold"}}>6.1  Fees</h3>
            <p style={{"font-size":"14px"}}>
            Certain features of Dudumsg may require payment. You agree to pay all applicable fees in connection with your use of these features. All fees are non-refundable unless otherwise stated.


            </p>
          </div>

          {/* 6.2 User Accounts */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg" style={{"font-size":"14px","fontWeight":"bold"}}>6.2  Payment Information</h3>
            <p style={{"font-size":"14px"}}>
            You must provide accurate and complete payment information when subscribing to Dudumsg's paid services. By providing payment information, you authorize us to charge your payment method for the agreed-upon fees. You are responsible for any fees or charges incurred by your payment method.
            </p>
          </div>
          </section>

          {/* 7. Termination*/}
<section className="space-y-6">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>7. Termination</h2>

          {/* 7.1 Termination by You */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg" style={{"font-size":"14px","fontWeight":"bold"}}>7.1 Termination by You</h3>
            <p style={{"font-size":"14px"}}>
            You may terminate your account at any time by following the instructions provided in your account settings or contacting our support team. Termination of your account does not relieve you of any obligations to pay any accrued fees or charges.


            </p>
          </div>

          {/* 7.2 Termination by Dudumsg */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg"style={{"font-size":"14px","fontWeight":"bold"}}>7.2  Termination by Dudumsg</h3>
            <p style={{"font-size":"14px"}}>
            We reserve the right to suspend or terminate your account or access to Dudumsg services at any time, with or without notice, for any reason, including but not limited to violation of these Terms, illegal activity, or non-payment of fees.
            </p>
          </div>
          </section>
           {/* 8. Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>8. Limitation of Liability</h2>
          <p style={{"font-size":"14px"}}>
          To the maximum extent permitted by law, Dudumsg shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the services; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from our services.
          </p>
        </section>
        {/* 9.  Indemnification */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>9.  Indemnification</h2>
          <p style={{"font-size":"14px"}}>
          You agree to indemnify, defend, and hold harmless Dudumsg, Divisha Business Solutions Pvt Ltd, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the services, your violation of these Terms, or your infringement of any third-party rights.
          </p>
        </section>
         {/* 10. Governing Law
 */}
         <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>10. Governing Law          </h2>
          <p style={{"font-size":"14px"}}>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Divisha Business Solutions Pvt Ltd is headquartered, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located within that jurisdiction.
          </p>
        </section>
         {/* 11. Changes to Terms */}
         <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>11. Changes to Terms</h2>
          <p style={{"font-size":"14px"}}>
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the services following the posting of changes constitutes your acceptance of such changes.
          </p>
        </section>
         {/* 12. Contact Us */}
         <section className="space-y-4">
          <h2 className="text-xl font-bold"style={{"font-size":"16px","fontWeight":"bold"}}>12. Contact Us</h2>
          <p style={{"font-size":"14px"}}>
          If you have any questions or concerns about these Terms and Conditions, please contact us at:
          </p>
        </section>

 {/* Divisha Business Solutions Pvt Ltd  */}
 <section className="space-y-4">
          <h2 className="text-lg font-bold"style={{"font-size":"14px","fontWeight":"bold"}}> Divisha Business Solutions Pvt Ltd</h2>
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
      <h1 className="text-blue-500 font-bold text-lg" style={{"font-size":"18px"}}>Useful Links</h1>
      <p className="hover:underline cursor-pointer"style={{"font-size":"14px"}}>Privacy Policy</p>
      <p className="hover:underline cursor-pointer"style={{"font-size":"14px"}}>Terms & Conditions</p>
      <p className="hover:underline cursor-pointer"style={{"font-size":"14px"}}>Contact Us</p>
    </div>

    {/* Pages */}
    <div className="flex flex-col gap-2">
      <h1 className="text-green-500 font-bold text-lg"style={{"font-size":"18px"}}>Pages</h1>
      {/* You can add links here if needed */}
    </div>

    {/* Language */}
    <div className="flex flex-col gap-2">
      <h1 className="text-blue-500 font-bold text-lg"style={{"font-size":"18px"}}>Language</h1>
      <select className="bg-gray-800 text-white p-2 rounded">
        <option>English</option>
        <option>Hindi</option>
        <option>Spanish</option>
      </select>
    </div>
  </div>
</div>

    </div>
  );
};

export default Term_condition;
