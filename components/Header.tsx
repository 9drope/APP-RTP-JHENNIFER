import React from 'react';
import { CONFIG } from '../constants';
import { NavTab } from '../types';

interface HeaderProps {
  activeTab: NavTab;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  return (
    <div className="space-y-4 mb-2">
      <div className="flex flex-col items-center pt-2">
        <h1 className="text-xl md:text-2xl font-[900] tracking-tighter uppercase italic leading-none">
          <span className="text-red-neon">RTP</span> DA FORTUNA
        </h1>
        <div className="h-0.5 w-12 bg-red-neon mt-2 rounded-full"></div>
      </div>

      {activeTab === 'sinais' && (
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 animate-in fade-in duration-500">
          <picture>
            <source media="(min-width: 768px)" srcSet={CONFIG.banners.desktop} />
            <img src={CONFIG.banners.mobile} alt="Banner RTP" className="w-full h-auto object-cover" />
          </picture>
        </div>
      )}
    </div>
  );
};

export default Header;