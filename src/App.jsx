import React, { useEffect, useRef } from 'react'
import Profile from './components/Profile';
import PortfolioStore from './components/useStore';

const App = () => {
  const root = document.documentElement;

  const theme = PortfolioStore((state) => state.theme);
  const prevThemeRef = useRef();

  useEffect(() => {
    const nextColor = theme ? '#ffffff' : '#100f0f';
    root.style.setProperty('--bg-color', nextColor);
  }, [theme]);

  return (
    <div className="max-w-230 mx-auto min-h-screen">
      <Profile />
    </div>
  )
}

export default App;
//  portfolio link* - https://akshad-work.vercel.app/
//  portfolio link* - https://ramx.in/ 
//  portfolio link  - https://ayushworks.com/  -- for project section ui 
//  portfolio link - https://siddz.com/
//  portfolio link - https://atharvaxdevs.xyz
//  portfolio link - https://www.69ftw.site/   

//  portfolio link* - https://ramx.in/
//  portfolio link - https://siddz.com/
//  portfolio link - https://atharvaxdevs.xyz
//  portfolio link - https://www.69ftw.site/   

// bio - 
// "I'm a Front-End Engineer who thrives in the zero-to-one phase. I don't just build from wireframes; I partner with founders to define the product, ship MVPs in weeks, and iterate based on real user feedback. Expert in React and Next.js, with a 'get-it-done' mindset and a deep belief that business needs should drive development, not the other way around."   