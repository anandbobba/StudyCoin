import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TransformingLearning from './components/TransformingAnswers';
import PremiumLearning from './components/PremiumLearning';
import JoinCommunity from './components/CommunitySection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Placeholder components for other pages
import AboutUs from './pages/AboutUs'; // Create this component
import Courses from './pages/Courses'; // Create this component
import OurService from './pages/OurService'; // Create this component
import ContactUs from './pages/ContactUs'; // Create this component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TransformingLearning />
                <PremiumLearning />
                <JoinCommunity />
                <SubscribeSection />
                <Footer />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/" element={<HeroSection />} />
          {/* <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/contact-us" element={<ContactUs />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;