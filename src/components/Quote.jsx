import React from 'react'

const Quote = ({ theme }) => {
    return (
        <section className='px-6 mt-8 mb-0'>
            <div
                className={`max-w-3xl mx-auto rounded-xl border backdrop-blur-md p-4 transition-colors ${theme
                    ? 'border-gray-800/30 bg-white/40'
                    : 'border-gray-700/40 bg-black/20'
                    }`}
            >
                <p className={`text-[14px] leading-[1.7] tracking-wide ${theme ? 'text-gray-900' : 'text-white'}`}>
                    “By believing in something that still does not exist, we create it.”
                    <span className={`block mt-1 text-xs font-light ${theme ? 'text-gray-600' : 'text-gray-300'}`}>
                        ~ Franz Kafka
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Quote