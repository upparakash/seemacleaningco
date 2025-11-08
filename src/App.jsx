import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 🔔 Top Alert Bar */}
      <div className="text-white flex flex-col md:flex-row justify-between items-center p-2 bg-[#323549] px-6 text-sm md:text-base border-b border-gray-700">

        {/* Left Section: Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center md:text-left space-y-1 md:space-y-0">
          <p className="text-white">
            <span className="font-semibold">E-Mail:</span>{" "}
            seemaunitedcontracting@gmail.com
          </p>
          <p className="text-white">
            <span className="font-semibold">Phone:</span>{" "}
            +965 66850444 &nbsp; | &nbsp; +965 65050805
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex justify-center space-x-4 mt-3 md:mt-0">
          <a href="/" className="hover:text-blue-500 transition duration-300 text-lg">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-pink-500 transition duration-300 text-lg">
            <FaInstagram />
          </a>
          <a href="/" className="hover:text-red-500 transition duration-300 text-lg">
            <FaYoutube />
          </a>
        </div>
      </div>

      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
