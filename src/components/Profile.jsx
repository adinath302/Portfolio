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
           <Quote theme={theme} />


            {/* Tech stack */}
            <TechStack />

            {/* github contribution */}
            <GitHubContributions />

            {/* Projects */}
            <section className='px-6 mt-10.5 mb-2'>
                <h2 className={`font-bold ${theme ? 'text-black' : 'text-white'} text-start mb-4 text-2xl`}>Projects</h2>
                <div className='text-center py-20'>
                    <h3 className={`${theme ? 'text-gray-600' : 'text-gray-400'} text-lg`}>Exciting projects in the works!</h3>
                    <p className={`${theme ? 'text-gray-600' : 'text-gray-400'} text-lg`}>Coming Soon</p>
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Profile;

