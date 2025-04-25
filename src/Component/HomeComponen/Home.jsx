import { useState, useEffect } from "react";
import CardGrid from '../CardComponent/Card'
import Footer from '../FooterComponent/Footer'
import  Content from '../ContentComponent/Content'
import Education from "../EducationComponent/Education";

import Logoslider  from "../LogosliderComponent/Logoslider";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
import { Link} from "react-router-dom";

const images = [
  "https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3JdBOE563pBT6zdCFbCfpBLphFq4DyTV7A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT770H3OoLSU6OFtG6qsQx9RY4qyS4qvW2cLA&s",
  "https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",
  "https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg",
];

function Home () {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      
<nav className="fixed top-0 left-0 w-full py-4 px-6 md:px-16 bg-white shadow-lg z-50">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        src="./img/file.png"
        alt="logo"
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-lg font-bold"><img src='./img/lohogo.png' className="w-28" alt='logoname'/> </h3>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6 text-sm">
      <h5 className="cursor-pointer hover:text-red-400 hover:underline"style={{"fontSize":"16px","color":"grey"}}>Home</h5>
      <div className="relative group">
  <h5
    className="cursor-pointer hover:text-red-400 hover:underline"
    style={{ fontSize: "16px", color: "grey" }}
  >
    Features
  </h5>

  {/* Dropdown Menu */}
  <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md min-w-[150px] z-50">
    <Link
      to="/feature"
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
    >
      Feature
    </Link>
    <Link
      to="/education"
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
    >
      Education
    </Link>
  </div>
</div>

      <h5 className="cursor-pointer hover:text-red-400 hover:underline"><Link to="/pricing" style={{"text-decoration": "none","color":"grey","fontSize":"16px"}}>Pricing</Link>  </h5>
      <h5 className="cursor-pointer hover:text-red-400 hover:underline"style={{"fontSize":"16px","color":"grey"}}>Testimonial</h5>
    </div>

    {/* Auth Buttons (Desktop) */}
    <div className="hidden md:flex items-center space-x-4 font-bold">
      <h5 className="cursor-pointer"style={{"fontSize":"16px","color":"grey"}}>Sign In</h5>
      <button
        type="button"
        className="border border-red-500 px-4 py-1 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"style={{"fontSize":"16px"}}
      >
        Sign Up
      </button>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-white py-4 rounded-lg shadow-lg">
      <h5 className="cursor-pointer hover:text-red-400 hover:underline" >Home</h5>
      <div className="w-full flex flex-col items-center">
  <button
    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
    className="cursor-pointer hover:text-red-400 hover:underline focus:outline-none text-base text-gray-700"
  >
    Features {isFeaturesOpen ? "▲" : "▼"}
  </button>

  {/* Dropdown menu */}
  {isFeaturesOpen && (
    <div className="mt-2 w-full flex flex-col items-center space-y-2">
      <Link
        to="/feature"
        className="text-sm text-gray-700 hover:underline"
      >
        Feature
      </Link>
      <Link
        to="/education"
        className="text-sm text-gray-700 hover:underline"
      >
        Education
      </Link>
    </div>
  )}
</div>

      <h5 className="cursor-pointer hover:text-red-400 hover:underline"><Link to="/pricing"style={{"color":"grey","fontSize":"16px"}}>Pricing </Link></h5>
      <h5 className="cursor-pointer hover:text-red-400 hover:underline">Testimonial</h5>
      <hr className="w-1/2 border-red-500" />
      <h5 className="cursor-pointer hover:text-red-400">Sign In</h5>
      <button
        type="button"
        className="border border-red-500 px-4 py-1 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
      >
        Sign Up
      </button>
    </div>
  )}
</nav>


     {/* Carousel */}
<div className="relative w-full mx-auto mt-24">
  {/* Carousel Wrapper */}
  <div className="relative h-56 md:h-96 w-full overflow-hidden rounded-lg">
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Slide ${index + 1}`}
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
  </div>

  {/* Slider indicators */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 rounded-full ${
          currentIndex === index ? "bg-red-500" : "bg-gray-400"
        }`}
      />
    ))}
  </div>

  {/* Previous Button */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50"
  >
    ◀
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50"
  >
    ▶
  </button>
</div>
 <Logoslider/>
 {/* <Feature/> */}

 <Content/>
 <br/><br/>
      <CardGrid/>
      <br/>
      <Footer/>
      
      


    </>
  );
}

export default Home;
