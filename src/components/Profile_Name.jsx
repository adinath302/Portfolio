import React from 'react';
import profile from '../assets/profile.jpg';

const ProfileName = ({ theme }) => {
  // Define colors based on theme for cleaner JSX
  const textColor = theme ? 'text-slate-900' : 'text-white';
  const subTextColor = theme ? 'text-slate-600' : 'text-slate-300';
  const borderColor = theme ? 'border-green-500' : 'border-slate-700';

  return (
    <section className="flex flex-col px-6 md:px-12 pt-24 pb-8">
      <div className="flex items-center gap-6">
        {/* Profile Image Container */}
        <div className="relative">
          <img
            src={profile}
            alt="Adinath Gaware"
            className={`select-none rounded-full h-24 w-24 object-cover border-4 shadow-lg transition-colors duration-300 ${borderColor}`}
          />
          {/* Optional: Small status indicator dot */}
          <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className={`font-bold text-4xl tracking-tight mb-1 transition-colors duration-300 ${textColor}`}>
            Adinath Gaware
          </h1>
          <div className={`text-xl font-medium tracking-wide transition-colors duration-300 ${subTextColor}`}>
            Full-stack Developer
          </div>
          
          {/* Subtle location or availability tag */}
          <div className="flex items-center mt-2">
             <span className={`text-sm px-3 py-1 rounded-full border ${theme ? 'bg-slate-100 border-slate-200' : 'bg-slate-800 border-slate-700'} ${subTextColor}`}>
               Available for opportunities
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileName;