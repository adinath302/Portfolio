import React from 'react';
import profile from '../assets/profile.jpg';

const ProfileName = ({ theme }) => {
  const textColor = theme ? 'text-slate-900' : 'text-slate-100';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';

  return (
    // Max-width 5xl and mx-auto forces this exactly in line with the Navbar container
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-4">
      <div className="flex items-start sm:items-center gap-5 sm:gap-6">
        
        {/* Profile Avatar with subtle high-quality accent ring */}
        <div className="relative flex-shrink-0">
          <img
            src={profile}
            alt="Adinath Gaware"
            className={`h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover select-none ring-2 ${
              theme ? 'ring-slate-100' : 'ring-white/5'
            }`}
          />
          {/* Status Ping Indicator positioned right over the avatar */}
          <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-current text-white animate-pulse" />
        </div>
 
        {/* Typographic Text Stack */}
        <div className="space-y-1">
          <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight ${textColor}`}>
            Adinath Gaware
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <p className={`text-base font-medium ${subTextColor}`}>
              Front-end Developer
            </p>
            
            {/* Elegant visual separation dot for desktop */}
            <span className={`hidden sm:inline text-xs ${theme ? 'text-slate-300' : 'text-slate-700'}`}>•</span>
            
            <span className={`text-xs font-semibold tracking-wider uppercase ${
              theme ? 'text-emerald-700' : 'text-emerald-400'
            }`}>
              Available for work
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfileName; 