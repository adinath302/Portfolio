import React from 'react';
import Navbar from './Navbar';
import ProfileImage from './Profile_Name.jsx';
import Bio from '../components/Bio.jsx';
import TechStack from './TechStack';
import GitHubContributions from './GitHubContributions';
import Projects from './Projects.jsx';
import Contact from './Contact_Us.jsx';
import Footer from './Footer';
import PortfolioStore from './useStore';

const Profile = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Shared background/foreground colors come from CSS variables (set by App.jsx)
  const pageBg = 'bg-[var(--page-bg)] text-[var(--page-fg)]';




  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${pageBg}`}>

      {/* 
        Fixed Navbar floating safely above content 
      */}
      <Navbar />

      {/* 
        Global Layout Wrapper:
        This creates a continuous vertical structural column.
        By isolating max-width properties here, all child elements are guaranteed 
        to snap to the exact same vertical left/right grid lines.
      */}
      <main className="w-full space-y-0">
        
        {/* Profile Identity Intro */}
        <ProfileImage theme={theme} />

        {/* About / Bio Copy */}
        <Bio />

        {/* Tech Stack Component */}
        <TechStack />

        {/* Open Source Metrics */}
        <GitHubContributions />

        {/* Work / Engineering Projects */}
        <Projects />
        
        {/* Communication Form Block */}
        <Contact />

      </main>

      {/* Structural Footer */}
      <Footer />
    </div>
  );
};

export default Profile;