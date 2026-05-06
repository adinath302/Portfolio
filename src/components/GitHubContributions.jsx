import React from 'react'
import { GitHubCalendar } from 'react-github-calendar';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const GitHubContributions = () => {
  const blueTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: [
      '#161b22',
      '#00441b',
      '#006d2c',
      '#238b45',
      '#71eb8d'
    ],
  };
  const theme = PortfolioStore((state) => state.theme);
  return (
    <div className='px-6 mt-10.5 lg:mt-'>
      <motion.h2
        initial={{ opacity: 0, y: '-50px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-[12px] mb-7 font-bold uppercase tracking-widest text-green-500 ${theme ? 'text-black' : 'text-white'}`}
      >
        Github Contributions
      </motion.h2>

      <GitHubCalendar
        username="adinath302"
        theme={blueTheme}
        colorScheme={theme ? 'light' : 'dark'}
        style={{ color: `${theme ? 'black' : 'white'}` }}
        showWeekdayLabels={false}
        blockSize={12}
        blockMargin={4}
      />
    </div>
  )
}

export default GitHubContributions;

