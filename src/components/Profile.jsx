import React from 'react'
import profile from '../assets/profile.jpg'
import TechStack from './TechStack';
import Footer from './Footer';
import Bio from '../components/Bio.jsx';
import Navbar from './Navbar';
import GitHubContributions from './GitHubContributions';
import PortfolioStore from './useStore';

const Profile = () => {
    const theme = PortfolioStore((state) => state.theme);

    return (
        <>
            {/* Navbar is rendered here but progress bar is now in Navbar */}
            <Navbar />
            <section className='flex flex-col px-6 pt-30'>
                <div className='flex items-center'>
                    <div className='mr-4'>
                        <img src={profile} alt="" className={`select-none rounded-xl h-19 w-19 object-cover border-2 ${theme ? 'border-green-500' : 'border-white'}`} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className={`${theme ? 'text-black' : 'text-white'} text-2xl flex-col flex bg-linear-to-r from-slate-200 via-white to-slate-300 bg-clip-text relative group cursor-pointer overflow-hidden hover:from-cyan-400 hover:via-cyan-200 hover:to-emerald-400 transition-all duration-700 ease-out`}
                            data-text="Adinath Gaware"
                        >
                            <span className="block absolute inset-0 from-slate-200 via-white to-slate-300 bg-clip-text -skew-x-12 opacity-0 group-hover:opacity-100 font-normal group-hover:translate-x-full transition-all duration-1000 ease-out delay-200 origin-left"></span>
                            Adinath Gaware
                        </h1>
                        <div className={`font-sans font-light text-md ${theme ? 'text-black' : 'text-white'}`}>
                            Front-end Developer
                        </div>
                    </div>
                </div>
            </section>
            {/* bio */}
            <Bio />
            {/* Tech stack */}
            <TechStack />
            {/* github contribution */}
            <GitHubContributions />
            {/* Projects */}
            <section className='px-6 mt-10.5 mb-2'>
                <h2 className={`${theme ? 'text-black' : 'text-white'} text-start mb-4 text-2xl`}>Projects</h2>
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

