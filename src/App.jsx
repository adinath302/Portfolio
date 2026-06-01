import React, { useEffect, useRef } from 'react'
import Profile from './components/Profile';
import PortfolioStore from './components/useStore';

const App = () => {
  const root = document.documentElement;

  const theme = PortfolioStore((state) => state.theme);
  const prevThemeRef = useRef();

  useEffect(() => {
    const nextBg = theme ? '#ffffff' : '#100f0f';
    const nextFg = theme ? '#0b0b0b' : '#f5f5f5';

    root.style.setProperty('--bg-color', nextBg); // legacy
    root.style.setProperty('--page-bg', nextBg);
    root.style.setProperty('--page-fg', nextFg);
  }, [theme]);


  return (
    <div className="max-w-230 mx-auto min-h-screen">
      <Profile />
    </div>
  )
}

export default App;

//  portfolio link* - https://www.prasen.dev/
//  portfolio link* - https://www.krishx.dev/   -- tech stack ui   
//  portfolio link* - https://akshad-work.vercel.app/ -- for experience section ui 
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