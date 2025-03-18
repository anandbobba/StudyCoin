import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TransformingLearning from './components/TransformingAnswers';
import PremiumLearning from './components/PremiumLearning';
import JoinCommunity from './components/CommunitySection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/footer';
import Content from './components/content'; // Ensure correct casing
import '@fortawesome/fontawesome-free/css/all.min.css';

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

          {/* Content Route */}
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
