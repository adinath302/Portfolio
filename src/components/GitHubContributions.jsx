import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import PortfolioStore from './useStore';

const GitHubContributions = () => {
  const theme = PortfolioStore((state) => state.theme);

  const calendarTheme = {
    light: ['#e8e8f0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#1a1b2e', '#0e4429', '#006d2c', '#26a641', '#39d353'],
  };

  return (
    <section className="border-y border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Stellar Activity
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            My consistent commitment to building software day-to-day.
          </p>
        </div>

        <div className="glass mx-auto mt-10 max-w-3xl rounded-3xl p-6">
          <div className="overflow-x-auto">
            <div className="min-w-[760px] py-2">
              <GitHubCalendar
                username="adinath302"
                theme={calendarTheme}
                colorScheme={theme ? 'light' : 'dark'}
                showWeekdayLabels={false}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
