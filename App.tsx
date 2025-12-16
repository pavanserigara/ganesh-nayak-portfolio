import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Teaching from './components/Teaching';
import WorkExperience from './components/WorkExperience';
import NSS from './components/NSS';
import MediaCoverage from './components/MediaCoverage';
import Research from './components/Research';
import ResearchProfiles from './components/ResearchProfiles';
import SkillsAndCerts from './components/SkillsAndCerts';
import Leadership from './components/Leadership';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      <CustomCursor />
      
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="animate-fade-in-up">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Teaching />
                <WorkExperience />
                <NSS />
                <MediaCoverage />
                <Research />
                <ResearchProfiles />
                <SkillsAndCerts />
                <Leadership />
                <Gallery />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
      )}
    </div>
  );
};

export default App;