import React from 'react';
import Navbar from './Navbar';
import Hero from './Profile_Name.jsx';
import About from './Bio.jsx';
import Skills from './TechStack';
import Projects from './Projects.jsx';
import GitHubContributions from './GitHubContributions';
import Contact from './Contact_Us.jsx';
import Footer from './Footer';

const Profile = () => {
  return (
    <div className="relative z-10 min-h-screen">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubContributions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
