import React from 'react'
import TechStack from './TechStack';
import Footer from './Footer';
import Bio from '../components/Bio.jsx';
import Navbar from './Navbar';
import GitHubContributions from './GitHubContributions';
import PortfolioStore from './useStore';
import ProfileImage from './Profile_Name.jsx';
import profile from '../assets/profile.jpg'
import Quote from './Quote.jsx';
import { motion } from 'framer-motion';
import Contact from './Contact_Us.jsx';

const Profile = () => {
    const theme = PortfolioStore((state) => state.theme);

    return (
        <>
            {/* <div className='mr-4'>
                <img src={profile} alt="" className={`-z-10 select-none h-83 w-full rounded-xl object-cover`} />
            </div> */}

            {/* Navbar is rendered here but progress bar is now in Navbar */}
            <Navbar />

            {/* profile image */}
            <ProfileImage theme={theme} />

            {/* bio */}
            <Bio />

            {/* quote */}
            {/* <Quote theme={theme} /> */}

            {/* Tech stack */}
            <TechStack />

            {/* github contribution */}
            <GitHubContributions />

            {/* Projects */}
            <section className='px-8 md:px-12 mt-12 mb-2'>
                <motion.h2
                    initial={{ opacity: 0, y: '-50px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-[12px] mb-7 font-bold uppercase tracking-widest text-green-500 ${theme ? 'text-black' : 'text-white'}`}
                >
                    Projects
                </motion.h2>
                <div className='text-center py-20'>
                    <h3 className={`${theme ? 'text-gray-600' : 'text-gray-400'} text-lg`}>Exciting projects in the works!</h3>
                    <p className={`${theme ? 'text-gray-600' : 'text-gray-400'} text-lg`}>Coming Soon</p>
                </div>
            </section>

            {/* Contact us  */}
            <Contact />

            {/* footer */}
            <Footer />
        </>
    )
}

export default Profile;

