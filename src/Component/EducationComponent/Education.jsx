import React,{useEffect,useState} from 'react'
import './Education.css'


const brands = [
  { name: 'Sweet Shop', src: './public/assets/Infosys.png' },
  { name: 'Blue Dart', src: './public/assets/upstox.png' },
  { name: 'Zoop', src: './public/assets/tcs.jpg' },
  { name: 'Sweet Shop', src: './public/assets/Infosys.png' },
  { name: 'Blue Dart', src: './public/assets/upstox.png' },
  { name: 'Zoop', src: './public/assets/tcs.jpg' },
  { name: 'Sweet Shop', src: './public/assets/Infosys.png' },
  { name: 'Blue Dart', src: './public/assets/upstox.png' },
  { name: 'Zoop', src: './public/assets/tcs.jpg' },
];

const StatBox = ({ label, endValue, prefix = '', suffix = '', startValue = 0, duration = 1000 }) => {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    let start = startValue;
    const increment = (endValue - startValue) / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= endValue) || (increment < 0 && start <= endValue)) {
        clearInterval(interval);
        setValue(endValue);
      } else {
        setValue(Math.round(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [endValue, startValue, duration]);

  return (
    <div className="text-center px-4 py-3">
      <h3 className="fw-bold">
        {prefix}
        {value}
        {suffix}
      </h3>
      <p className="text-secondary">{label}</p>
    </div>
  );
};

const Education = () => {
  return (
    <>
      <div className="container-fluid py-5 px-0">
        <div className="row align-items-center m-4">
          <div className="col-lg-6 text-center text-lg-start px-0">
            <h1 className="display-4 fw-bold">
              3x <span style={{ color: '#03CF65' }}>More Enrollments</span>
              <br /> with AiSensy's <br /> WhatsApp Solution
            </h1>
            <p className="lead mt-3 "style={{ color: '#696969' }}>
              Take your educational institution to the next level with WhatsApp automation. <br />
              Increase enrollments, engage students, and maximize participation in events.
            </p>
            <p className="mt-2 text-muted fw-medium">
              🔦 Powered by <strong>Official WhatsApp Business API</strong>
            </p>
            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-success btn-lg">Start for FREE</button>
              <button className="btn btn-outline-dark btn-lg">Book a Demo</button>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0 py-2.5">
            <img
              src="./public/assets/kqmp.gif"
              alt="AiSensy Demo"
              className="img-fluid rounded"
              style={{ maxWidth: '50vw', maxHeight: '70vh' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10 px-4 overflow-hidden">
     <div className="text-center mb-5">
    <h2 className="fw-bold" style={{ fontSize: '48px' }}>
      Founders & Marketers Love us
    </h2>
    <p className="text-muted" style={{ fontSize: '18px' }}>
      Trusted by 100,000+ Businesses across 57 Countries
    </p>
  </div>
      <div className="relative overflow-hidden">
        <div className="flex justify-center">
          <div className="marquee flex items-center gap-12 ">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.name}
                className="h-8 sm:h-10 md:h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <br/><br/><br/>
   {/* Section third */}
<div className="px-4 px-md-5">
  <div>
    <h2 className="text-48px" style={{"fontSize":"48px"}}>Main Features</h2>
    <p className="text-18px"style={{"fontSize":"17px"}}>
      AiSensy is the smartest WhatsApp Engagement Platform. With AiSensy you can:
    </p>
  </div>

  <div className="row gx-4 mb-5">
    {/* Left Column */}
    <div className="col-md-6 d-flex flex-column align-items-start border p-3">
      <h3 className="fw-semibold" style={{ fontSize: '22px' }}>
        Build no-code Chatbot in minutes
      </h3>
      <p className="text-muted" style={{ fontSize: '18px' }}>
        Build your Own Chatbot Flows your Way! Easy-to-use Chatbot &<br />Catalog Flow builder to build your conversational journeys.
      </p>
      <img
        src="./public/assets/foypkz.png"
        alt="WhatsApp Education"
        className="img-fluid rounded shadow mt-3"
      />
    </div>

    {/* Right Column */}
    <div className="col-md-6 d-flex flex-column align-items-start border p-3">
      <h3 className="fw-semibold" style={{ fontSize: '22px' }}>
        Broadcast Offers to Unlimited Contacts
      </h3>
      <p className="text-muted" style={{ fontSize: '18px' }}>
        Broadcast personalized offers to unlimited users in one go - without getting your Number blocked!
      </p>
      <img
        src="./public/assets/rcf.gif"
        alt="WhatsApp Broadcast"
        className="img-fluid rounded shadow mt-3"
      />
    </div>
  </div>
</div>

{/* Section Fourth */}
<div className="container-fluid my-5 px-4 px-md-5">
  <div className="row justify-content-between align-items-start">
    
    {/* Left Side Card */}
    <div className="col-md-6 mb-4 pe-md-5">
      <div className="border rounded p-4 shadow">
        <h2 style={{ fontSize: '22px' }}>
          Import, Broadcast, Track Results and Retarget
        </h2>
        <p style={{ fontSize: '18px' }}>
          3x your conversions by sending Retargeting Campaigns to the most relevant audience group.
        </p>
        <img
          src="./public/assets/kajkirwmgaeuvwkq.jpg"
          alt="WhatsApp Broadcast"
          className="img-fluid rounded shadow mt-3"
        />
      </div>
    </div>

    {/* Right Side Card */}
    <div className="col-md-5 mb-4">
      <div className="border rounded p-4 shadow">
        <h2 style={{ fontSize: '22px' }}>
          Answer customer queries with 1:1<br />Live Chat
        </h2>
        <p style={{ fontSize: '18px' }}>
          Enable Chatbot Flows or have multiple team members to provide seamless Live Chat support on a single WhatsApp Business number.
        </p>
        <img
          src="./public/assets/3kls0hlr7t487fwt.jpg"
          alt="WhatsApp Broadcast"
          className="img-fluid rounded shadow mt-3"
        />
      </div>
    </div>

  </div>
</div>


{/* section five */}

    <div className="container py-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold" style={{ fontSize: '48px' }}>
      WhatsApp Education Use Cases
    </h2>
    <p className="text-muted" style={{ fontSize: '18px' }}>
      Key Features of WhatsApp Business API for Education
    </p>
  </div>

      <div className="row align-items-center">
        {/* Left Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 text-secondary opacity-25">#1</h1>
          <h4 className="fw-bold" style={{"fontSize":"20px"}}>
            Capture more leads with automated WhatsApp messages
          </h4>
          <p className="text-muted mt-3" style={{"fontSize":"17.6px"}}>
            Seamlessly generate and qualify leads through AiSensy&apos;s AI-driven WhatsApp Chatbot.
          </p>
          <p className="text-muted"style={{"fontSize":"17.6px"}} >
            Collect key details and automate follow-ups to ensure you capture high-quality prospects without the manual effort.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="./public/assets/zn4e0u1c0498uien.jpg"
            alt="WhatsApp Education"
            className="img-fluid rounded "
          />
        </div>
      </div>
    </div>
    {/* section six */}
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="./public/assets/f09o983bdw1hplyh.webp"
            alt="Application Drop-off Flow"
            className="img-fluid"
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6 text-center text-md-start"style={{"fontSize":"17.6px"}}>
          <h1 className="display-4 text-secondary opacity-25 mt-3">#2</h1>
          <h4 className="fw-bold"style={{"fontSize":"20px"}}>Reduce application drop-offs by 60%</h4>
          <p className="text-muted">
            Recover up to 60% of incomplete applications by sending timely,
            personalized WhatsApp reminders.
          </p>
          <p className="text-muted">
            AiSensy helps you guide students through the application process,
            ensuring more enrollments and fewer abandoned forms.
          </p>
          <button className="btn btn-outline-dark">Explore Template</button>
        </div>
      </div>
    </div>

{/* section seven */}
<div className="container my-5"style={{"fontSize":"17.6px"}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 text-muted">#3</h1>
          <h2 className="fw-bold"style={{"fontSize":"20px"}}>
            Boost event attendance with automated reminders
          </h2>
          <p className="text-secondary">
            Colleges and universities can boost participation in webinars, open houses,
            and events by sending automated WhatsApp reminders.
          </p>
          <p className="text-secondary">
            Personalized event invites and follow-up messages help ensure high attendance
            and engagement with prospective and current students.
          </p>
          <button className="btn btn-outline-dark mt-3">
            Explore Template
          </button>
        </div>
        <div className="col-md-6 text-center">
          <img  src="./public/assets/qvfvrcc9obbvaeh2.webp" alt="Boost attendance visual" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* section 8 */}
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="./public/assets/f2277416vydlvdqh.png"
            alt="Application Drop-off Flow"
            className="img-fluid"
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6 text-center text-md-start"style={{"fontSize":"17.6px"}}>
          <h1 className="display-4 text-secondary opacity-25 mt-3">#4</h1>
          <h4 className="fw-bold"style={{"fontSize":"20px"}}>24/7 Student Support with WhatsApp Chatbot</h4>
          <p className="text-muted">
            Enable 24/7 support for students with AiSensy's smart WhatsApp Chatbot.
          </p>
          <p className="text-muted">
            Whether it's admissions queries or course details,students receive instant responses,reducing the reliance on human support by up to 83%.
          </p>
         
        </div>
      </div>
    </div>
     {/* section 9 */}
   
<div className="container my-5"style={{"fontSize":"17.6px"}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 text-muted">#5</h1>
          <h2 className="fw-bold" style={{"fontSize":"20px"}}>
          Seamless Human Support
          </h2>
          <p className="text-secondary">
            Colleges and universities can boost participation in webinars, open houses,
            and events by sending automated WhatsApp reminders.
          </p>
          <p className="text-secondary">
            Personalized event invites and follow-up messages help ensure high attendance
            and engagement with prospective and current students.
          </p>
          
        </div>
        <div className="col-md-6 text-center">
          <img  src="./public/assets/3kls0hlr7t487fwt.jpg" alt="Boost attendance visual" className="img-fluid" />
        </div>
      </div>
    </div>

     {/* section 10 */}
     <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="./public/assets/qvfvrcc9obbvaeh2.webp"
            alt="Application Drop-off Flow"
            className="img-fluid"
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6 text-center text-md-start"style={{"fontSize":"17.6px"}}>
          <h1 className="display-4 text-secondary opacity-25 mt-3">#6</h1>
          <h4 className="fw-bold"style={{"fontSize":"20px"}}>Fee Reminders & Payment Confirmations</h4>
          <p className="text-muted">
          Automate reminders for tuition fees, registration, and other payments through WhatsApp.

          </p>
          <p className="text-muted">
          Institutions can also send payment confirmations and receipts instantly, ensuring transparency and reducing missed deadlines.

          </p>
         
        </div>
      </div>
    </div>

 {/* section 11 */}
   
 <div className="container my-5"style={{"fontSize":"17.6px"}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 text-muted">#7</h1>
          <h2 className="fw-bold"style={{"fontSize":"20px"}}>
          Exam & Result Notifications

          </h2>
          <p className="text-secondary">
          Institutions can use WhatsApp to send students personalized notifications about exam schedules, results, and deadlines.
          </p>
          <p className="text-secondary">
          This provides students with an instant and reliable communication channel to stay updated on their academic progress.

          </p>
          
        </div>
        <div className="col-md-6 text-center">
          <img  src="./public/assets/dwa6ccgejmefmfyq.webp" alt="Boost attendance visual" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* card section */}

    <div className="container my-5"style={{"fontSize":"15.2px"}}>
      <h1 className="mb-4 fw-bold"style={{"fontSize":"48px"}}>Education Case Studies</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <img src="./public/assets/gx3xsjbx36hkbp1d.png" alt="PhysicsWallah" className="mb-3" style={{ height: '40px' }} />
              <h5 className="card-title fw-bold"style={{"fontSize":"20px"}}>PhysicsWallah</h5>
              <p className="card-text text-secondary">
                Check out how PhysicsWallah, an Edtech giant used AiSensy to drive 3x more Leads
                through WhatsApp via AiSensy.
              </p>
              <button className="btn btn-outline-dark">Explore Case Study</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <img src="./public/assets/sojbz5jjh2cu8x64.png" alt="NMIMS" className="mb-3" style={{ height: '50px' }} />
              <h5 className="card-title fw-bold">NMIMS</h5>
              <p className="card-text text-secondary">
                Discover how NMIMS, a leading university with over 17,000 students, were able to
                recover 45–60% of Dropoff applications with AiSensy.
              </p>
              <button className="btn btn-outline-dark">Explore Case Study</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <img src="./public/assets/ksun3tu26wioyau8.png" alt="LiveLong Wealth" className="mb-3" style={{ height: '60px' }} />
              <h5 className="card-title fw-bold">LiveLong Wealth</h5>
              <p className="card-text text-secondary">
                Explore how LiveLong saw a 10x increase in lead generation and improved customer
                engagement with AiSensy.
              </p>
              <button className="btn btn-outline-dark">Explore Case Study</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* new section */}

    <div className="container text-center my-5">
      <h1 className="fw-bold mb-2"style={{"fontSize":"48px"}}>Why WhatsApp Marketing in 2025?</h1>
      <p className="text-secondary mb-4"style={{"fontSize":"18px"}}>
        WhatsApp is the One Platform that brings together Actionable Notifications & Customer Support!
      </p>
      <div className="row justify-content-center shadow-sm rounded py-4 bg-white">
  <div className="col-6 col-md-3 border border-secondary">
    <StatBox label="Open Rates" startValue={70} endValue={98} suffix="%" />
  </div>
  <div className="col-6 col-md-3 border border-secondary">
    <StatBox label="Click Rates"  startValue={45} endValue={60} suffix="%" />
  </div>
  <div className="col-6 col-md-3 border border-secondary">
    <StatBox label="Active Users" startValue={2} endValue={2.6} prefix="2.60Bn" />
  </div>
  <div className="col-6 col-md-3 border border-secondary">
    <StatBox label="Engagement Rate" startValue={60} endValue={70} suffix="%" />
  </div>
</div>

    </div>

    <div className="container my-5">
  <div className="row gy-4">
    {/* First Row */}
    <div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/y85xqrobp1ytjcgg.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ height: '150px', width: '150px' }}
    />
    <h5 className="card-title fw-bold">Education & Edtech 🎓</h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Engage students, automate inquiries, and simplify admissions. Explore how WhatsApp can revolutionize your edtech communication.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>


<div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/d5sg4zqrflei483f.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ "height": '150px', "width": '150px' }}
    />
    <h5 className="card-title fw-bold">Banking & Fintech 🏦 </h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Enhance customer service, streamline KYC, and much more. Discover how WhatsApp can revolutionize your banking and fintech operations.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>

<div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/iaqldjr6j0krkoq2.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ "height": '150px', width: '150px' }}
    />
    <h5 className="card-title fw-bold">Healthcare 🩺</h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Schedule appointments, share health tips, and provide personalized patient care. Explore how WhatsApp can elevate your healthcare communication
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>

    {/* Second Row */}
    <div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/klet8h34v6x1vu1s.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ height: '150px', width: '150px' }}
    />
    <h5 className="card-title fw-bold">Events & Webinar 🎫</h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
      Boost registrations, send reminders, and gather feedback effortlessly. Discover how WhatsApp can supercharge your event and webinar engagement.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>

    <div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/43ufuk6e3m5l9dyk.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ "height": '150px', "width": '150px' }}
    />
    <h5 className="card-title fw-bold">Automotive 🚗</h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Schedule test drives, send service reminders, and provide instant support. Explore how WhatsApp can transform your automotive business's CX.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>


<div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/0bgkczx94gy5ev3b.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ "height": '150px', "width": '150px' }}
    />
    <h5 className="card-title fw-bold">Real Estate🏠</h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Showcase properties, schedule viewings, and close deals faster. Discover how WhatsApp can streamline your real estate communication and boost lead generation.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>


<div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/cdcvpy7vrb2jnd4j.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ "height": '150px', "width": '150px' }}
    />
    <h5 className="card-title fw-bold">IT Services & Internet
    </h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Enhance lead generation, automate onboarding flows, and provide 24/7 support. Perfect for startups, IT providers, SaaS, and software companies.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>

<div className="col-12 col-md-4">
  <div className="card h-100 shadow-sm p-3 text-center">
    <img
      src="./public/assets/ogrig1t7n7f3g0bk.png"
      alt="logo"
      className="mb-3 mx-auto d-block"
      style={{ "height": '150px', "width": '150px' }}
    />
    <h5 className="card-title fw-bold">Offline & Retail</h5>
    <p className="card-text text-secondary"style={{"fontSize":"15.2px"}}>
    Streamline your retail operations with WhatsApp. Share catalogs, send personalized promotions, offer real-time customer support, and more.
    </p>
    <button className="btn btn-outline-dark mt-auto">Explore WhatsApp Use Cases</button>
  </div>
</div>
  </div>
</div>
{/* Bottom second section */}
<div className="d-flex justify-content-between align-items-center px-5 py-4 bg-light">
  <div className="  p-4 rounded"style={{"fontSize":"18px"}}>
    <h2 style={{"fontSize":"20px"}}>Drive 3x Revenue with AiSensy</h2>
    <p>Get Started for FREE and unlock the power of WhatsApp automation for your school. No Credit Card needed.</p>
    <p>⚡️Powered by <strong>official WhatsApp Business API</strong></p>
  </div>
  <div className="d-flex gap-3 align-items-center  p-3 rounded">
    <button type="button" className="btn btn-success d-flex align-items-center gap-2">
      Start for Free <span>&rarr;</span>
    </button>
    <button type="button" className="btn btn-outline-dark text-bold d-flex align-items-center gap-2 rounded-2xl">
      Book a Demo <span>&rarr;</span>
    </button>
  </div>
</div>

{/* Bottom */}
<div className="container py-5">
      <div className="row justify-content-between align-items-start">
        
        {/* Left Side */}
        <div className="col-12 col-md-4 mb-4">
          <h5>© 2025 AiSensy Communications Private Limited</h5>
          <h6>Made with ♥️ in India</h6>
          <img src="./public/assets/8bo8xhe56gywx1ck.png" alt="meta_logo" className="img-fluid mt-2" />
        </div>

        {/* Right Side Columns */}
        <div className="col-12 col-md-7 offset-md-1">
          <div className="row">

            {/* Platform */}
            <div className="col-6 col-lg-3 mb-3">
              <strong>Platform</strong>
              <ul className="list-unstyled mt-2">
                <li>Features</li>
                <li>Industries</li>
                <li>Pricing</li>
                <li>Book a Demo</li>
                <li>Become a Partner</li>
                <li>WhatsApp Marketing</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-6 col-lg-3 mb-3">
              <strong>Resources</strong>
              <ul className="list-unstyled mt-2">
                <li>Help Center</li>
                <li>Blog</li>
                <li>About AiSensy</li>
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Free Tools */}
            <div className="col-6 col-lg-3 mb-3">
              <strong>FREE Tools</strong>
              <ul className="list-unstyled mt-2">
                <li>WhatsApp Button</li>
                <li>Generate WhatsApp Link</li>
                <li>Download Android App</li>
                <li>Download iOS App</li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-6 col-lg-3 mb-3">
              <strong>Legal</strong>
              <ul className="list-unstyled mt-2">
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>



    </>
  )
}

export default Education
