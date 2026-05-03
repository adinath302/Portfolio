import React from 'react'
import profile from '../assets/profile.jpg'

const ProfileImage = ({theme}) => {
    return (
        <section className='flex flex-col px-8 pt-30'>
            <div className='flex items-center'>
                <div className='mr-4'>
                    <img src={profile} alt="" className={`select-none rounded-xl h-19 w-19 object-cover border-2 ${theme ? 'border-green-500' : 'border-white'}`} />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className={`${theme ? 'text-black' : 'text-white'} text-[30px] font-bold font-InstrumentSerif flex-col flex bg-linear-to-r from-slate-200 via-white to-slate-300 bg-clip-text relative group cursor-pointer overflow-hidden transition-all duration-700 ease-out`}
                        data-text="Adinath Gaware"
                    >
                        Adinath Gaware
                    </h1>
                    <div className={`font-InstrumentSerif font-normal text-md ${theme ? 'text-black' : 'text-white'}`}>
                        Front-end Developer
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileImage