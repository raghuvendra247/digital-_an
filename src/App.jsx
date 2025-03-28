import { useState, useEffect } from "react";
import CardGrid from './Component/Card'
import Footer from './Component/Footer'
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const images = [
  "https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3JdBOE563pBT6zdCFbCfpBLphFq4DyTV7A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT770H3OoLSU6OFtG6qsQx9RY4qyS4qvW2cLA&s",
  "https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",
  "https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg",
];

function App() {
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
      {/* Navbar */}
      <nav className="py-4 px-6 md:px-16 bg-white shadow-lg ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg"
              alt="logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-lg font-bold">Logo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Home</h1>
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Features</h1>
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Pricing</h1>
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Testimonial</h1>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 font-bold">
            <h1 className="cursor-pointer">Sign In</h1>
            <button
              type="button"
              className="border border-red-500 px-4 py-1 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
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
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Home</h1>
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Features</h1>
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Pricing</h1>
            <h1 className="cursor-pointer hover:text-red-400 hover:underline">Testimonial</h1>
            <hr className="w-1/2 border-red-500" />
            <h1 className="cursor-pointer hover:text-red-400">Sign In</h1>
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
<div className="relative w-full mx-auto mt-6">
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

      <CardGrid/>
      <Footer/>
    </>
  );
}

export default App;
