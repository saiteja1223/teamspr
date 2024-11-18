import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home() {
  const navigate=useNavigate();
  
  return (
    <div>
      {/* Hero Section */}
      <div className='homePageImage'>
        <div className='homeContent'>
          <h1>Looking for the Perfect Partner?</h1>
          <p>Your journey to find love starts here. Join the thousands of successful matches!</p>
          <div className='ctaButtons'>
            <button className='ctaButton'><Link to={'/register'}>Sign Up Now</Link> </button>
            <button className='ctaButton'>Learn More</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='aboutSection'>
        <h2>About Us</h2>
        <p>
          We are dedicated to helping you find your life partner with personalized matchmaking. Our platform offers a
          safe and secure environment to meet like-minded individuals.
        </p>
      </div>

      {/* Services Section */}
      <div className='servicesSection'>
        <h2>Our Services</h2>
        <div className='servicesGrid'>
          <div className='serviceCard'>
            <h3>Personalized Matchmaking</h3>
            <p>We connect you with compatible individuals based on your preferences and interests.</p>
          </div>
          <div className='serviceCard'>
            <h3>Secure & Confidential</h3>
            <p>Your privacy is our priority. All your details are securely stored and confidential.</p>
          </div>
          <div className='serviceCard'>
            <h3>24/7 Support</h3>
            <p>Our support team is always available to assist you at every step of your journey.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='testimonialsSection'>
        <h2>What Our Users Say</h2>
        <div className='testimonialCard'>
          <p>"Thanks to this platform, I found my soulmate! The matchmaking process was smooth and easy."</p>
          <span>- Priya & Raj</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
