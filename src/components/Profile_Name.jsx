import React from 'react';
import profile from '../assets/profile.jpg';

const ProfileName = ({ theme }) => {
  // Using the same subtle colors from your Bio UI
  const textColor = theme ? 'text-slate-900' : 'text-white';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';

  return (
    <section className="px-8 md:px-12 pt-32 pb-6">
      <div className="flex items-center gap-5">
        {/* Simple, clean circular image without heavy borders */}
        <img
          src={profile}
          alt="Adinath Gaware"
          className="h-20 w-20 rounded-full object-cover select-none grayscale-[20%]"
        />

        {/* Minimalist Text Stack */}
        <div className="flex flex-col">
          <h1 className={`text-2xl font-bold tracking-tight ${textColor}`}>
            Adinath Gaware
          </h1>
          <p className={`text-[16px] font-normal ${subTextColor}`}>
            Front-end Developer
          </p>
          
          {/* Very simple availability indicator - no background box */}
          <div className="flex items-center gap-2 mt-1">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className={`text-[13px] font-medium uppercase tracking-wider ${subTextColor}`}>
              Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileName;