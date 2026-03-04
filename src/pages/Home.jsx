import { useState, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

// Carousel slides
const slides = [
  {
    image: "/images/laptop.png",
    title: "Our Story",
    text: "Founded in 2010, Dickson Lane began his journey as an aspiring author with big dreams, a passion for storytelling. What started as a simple desire to share his imagination soon grew into a lifelong pursuit of creating meaningful stories that inspire and connect with readers around the world.",
  },
  {
    image: "/images/ebookk.png",
    title: "Our Mission",
    text: "To connect readers with books that inspire, educate, and entertain.",
  },
  {
    image: "/images/bookdic.png",
    title: "Our Team",
    text: "A passionate group of book lovers dedicated to literary excellence.",
  },
  {
    image: "/images/indiansdic.png",
    title: "Our Selection",
    text: "Curated collections for every taste, from classics to contemporary.",
  },
  {
    image: "/images/indians2.png",
    title: "Innovation",
    text: "Embracing technology to enhance the reading experience.",
  },
];

// Simple reusable popup
function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-[240px] text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon 🚀</h2>
        <p className="text-gray-600 mb-3 text-sm leading-snug">
          This feature is not available yet. Stay tuned!
        </p>
        <button
          onClick={onClose}
          className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600 transition text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [setPopupBook] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroLoaded(true), 300);
  }, [location.pathname]);

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Header with Navbar - MOVED OUTSIDE and ABOVE the video */}
      <header className="sticky top-0 z-50 bg-white shadow-sm py-3 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            onClick={() => navigate("/")}
            src="/images/charles-icon-orange.png"
            alt="Charles Feggans"
            className="h-16 w-auto cursor-pointer"
          />
          <Navbar />
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search books, authors..."
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 transition"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Hero Section - NOW BELOW the header */}
      <div
        className={`relative h-screen max-h-[900px] overflow-hidden transition-all duration-1000 ${
          heroLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/videobg2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif leading-tight">
              Find Your Next{" "}
              <span className="text-orange-400">Great Read</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Dive into stories that captivate the mind, spark imagination, and leave a lasting impact.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <section className="py-12 px-6 bg-gradient-to-br from-orange-100 via-white-100 to-orange-300 text-center">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">
            Featured <span className="text-orange-600">Books</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Book 1 */}
          <div
            onClick={() => navigate(`/bookdetails/1`)}
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-all h-[500px] bg-blue-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFCE1F] to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-3xl md:text-2xl font-bold text-sky-600 mb-4 font-serif leading-tight">TRAPPED BY IMPULSION</h3>
            </div>
            <img
              src="/images/image1.png"
              alt="Kakaki, The Medicine Woman"
              className="absolute inset-0 w-full h-[90%] object-contain transition mt-5"
            />
          </div>
          {/* Book 2 */}
          <div
            onClick={() => navigate(`/bookdetails/2`)}
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-all h-[500px] bg-red-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#EF4444] to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-3xl md:text-2xl font-bold text-red-700 mb-4 font-serif leading-tight">UNPLEASANT PASTURES</h3>
            </div>
            <img
              src="/images/image4.png"
              alt="Unpleasant Pastures"
              className="absolute inset-0 w-full h-full object-contain transition mt-5"
            />
          </div>

          {/* Book 3 */}
          <div
            onClick={() => navigate(`/bookdetails/3`)}
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-all h-[500px] bg-green-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#10B981] to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-3xl md:text-2xl font-bold text-green-700 mb-4 font-serif leading-tight">MILLER HOMES TRUTH AND FICTIONAL</h3>
            </div>
            <img
              src="/images/image2.png"
              alt="Miller Homes Truth and Fictional"
              className="absolute inset-0 w-full h-full object-contain transition mt-5"
            />
          </div>

          {/* Book 4 */}
          <div
            onClick={() => navigate(`/bookdetails/4`)}
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:-translate-y-2 transition-all h-[500px] bg-blue-100"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6] to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-3xl md:text-2xl font-bold text-blue-700 mb-4 font-serif leading-tight">MILLER HOMES II FIVE YEARS LATER</h3>
            </div>
            <img
              src="/images/image3.png"
              alt="Miller Homes II Five Years Later"
              className="absolute inset-0 w-full h-full object-contain transition mt-5"
            />
          </div>     
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F97316] text-gray-800 py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <img onClick={() => navigate('/')} src="/images/charles-icon-orange.png" alt="Dickson Lane" className="h-12 mb-4 rounded-2xl" />
            <p className="text-gray-700">
              Your gateway to exceptional books and reading experiences since 2010.
            </p>
          </div>
          
          {/* Explore */}
          <div>
            <h4 className="text-lg border-b-2 border-orange-800 font-semibold mb-4 text-gray-900 pb-2">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/bookshop" className="text-gray-700 hover:text-gray-900 transition-colors">Books</a></li>
              <li><a href="/ebooks" className="text-gray-700 hover:text-gray-900 transition-colors">eBooks</a></li>
              <li><a href="/audiobooks" className="text-gray-700 hover:text-gray-900 transition-colors">Audiobooks</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="border-b-2 border-orange-800 text-lg font-semibold mb-4 text-gray-900 pb-2">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="/contactus" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="border-b-2 border-orange-800 text-lg font-semibold mb-4 text-gray-900 pb-2">Connect</h4>
            <div className="flex gap-4 mb-4">
            </div>
            <p className="text-gray-700 text-sm">123 Book Street, Literary City, LC 12345</p>
            <p className="text-gray-700 text-sm">info@charlesfeggans.com</p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t-2 border-orange-800 mt-10 pt-5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Charles Feggans. All rights reserved. | 411 Socials LLC.</p>
        </div>
      </footer>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default Home;