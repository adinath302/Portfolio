import React from 'react'
import { GitHubCalendar } from 'react-github-calendar';
import PortfolioStore from './useStore';

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
      {/* <div className={`${theme ? 'text-black' : 'text-white'} mb-4`}>Github Contributions</div> */}

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

