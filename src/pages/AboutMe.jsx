import React, { useEffect, useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import NavigationBar from './NavigationBar';
import BookTrailer from './BookTrailer';
import ImageGallery from './ImageGallery';
import Events from './Events';
import PressRelease from './PressRelease';

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/images/cfhome.png" 
            alt="Dickson Lane" 
            className="w-full h-full object-fill object-center"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          {/* Optional button */}
        </div>
      </section>

      
      {/* About Section */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About The Author
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Author, Educator, and Literary Visionary bridging timeless wisdom with contemporary storytelling
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-28">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/profile.jpg" 
                alt="Dickson Lane" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-orange-400 rounded-xl"></div>
          </div>
          
          <div className="pt-10">
            <h2 className="text-3xl font-serif text-gray-800 mb-8">
              The Story Behind the Words
            </h2>
            
            <div className="space-y-6">
<p className="text-lg leading-relaxed text-gray-600">
Charles Feggans: The Voice of Uncompromising Realism

</p>
                             
              <p className="text-lg leading-relaxed text-gray-600">
Charles Feggans is a compelling voice in contemporary fiction, known for a "no-holds-barred" narrative style that bridges the gap between raw reality and immersive storytelling. A veteran of both the U.S. Marine Corps and a thirty-five-year career in the culinary trades, Feggans brings a unique, blue-collar grit to the literary world, crafting stories that are as disciplined as they are deeply human.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
               The Craft of Authenticity
Feggans’ literary journey is defined by the same precision and dedication he applied to his decades as a skilled baker and his service to his country. After launching his writing career at age forty-three, he has curated a body of work—including the evocative Unpleasant Pastures and the Miller Homes series—that explores the complexities of identity, history, and the human condition. His writing doesn’t just tell a story; it captures a texture, informed by a life lived with purpose and observation.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                A Legacy of Resilience
A Philadelphia native raised in Trenton, New Jersey, Feggans’ academic and professional background provides the steel-boned structure for his prose. Balancing the demands of a full-time trade and family life, he earned his Bachelor’s degree from Thomas Edison State University, a testament to the perseverance that now defines his characters. This lived experience allows him to write with a level of authority rarely found in contemporary fiction.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                The Works: From Truth to Fiction
With his debut novel, Trapped By Impulsion, Feggans established himself as a master of high-stakes, uncompromising drama. Whether navigating the shadows of the past or the challenges of the present, his work—available globally via Amazon and major retailers—resonates with readers who seek substance over artifice. Charles Feggans continues to evolve as an artist, proving that the most powerful stories are those forged in the fires of experience and told with an unwavering commitment to the truth.
</p>
              
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Published Works</h3>
            <p className="text-gray-600">4 books</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Education</h3>
            <p className="text-gray-600">Webber-Douglas Academy of Dramatic Art in London, BA in English and Theatre Arts from Catawba College</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Writing Style</h3>
            <p className="text-gray-600">Literary fiction with historical depth</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <FaBookOpen className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">Awards</h3>
            <p className="text-gray-600">3-time Booker Prize nominee</p>
          </div>
        </div>
      </div>

      {/* Press Release Section */}
      {/* <PressRelease /> */}

      {/* Book Trailer Section */}
      <BookTrailer />

      {/* Events Section */}
      {/* <Events /> */}

      {/* Gallery Section */}
      {/* <ImageGallery /> */}

      {/* Floating CTA Button */}
      <button 
        onClick={() => navigate('/home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-50"
      >
        <FaBookOpen size={18} />
        <span>Explore His Work</span>
      </button>
    </div>
  );
}

export default AboutMe;