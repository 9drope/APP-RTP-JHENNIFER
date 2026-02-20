import React from 'react';
import { NavTab } from '../types';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { 
      id: 'sinais', 
      label: 'SINAIS', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ) 
    },
    { 
      id: 'ranking', 
      label: 'RANKING', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17M14 14.66V17M18 2h-12v11a6 6 0 0 0 12 0V2z"/>
        </svg>
      ) 
    },
    { 
      id: 'bets', 
      label: 'BETS', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M8 7v10M16 7v10" />
          <text x="4" y="14.2" fontSize="7" fontWeight="900" fill="currentColor" fontFamily="monospace">7</text>
          <text x="10.5" y="14.2" fontSize="7" fontWeight="900" fill="currentColor" fontFamily="monospace">7</text>
          <text x="17.2" y="14.2" fontSize="7" fontWeight="900" fill="currentColor" fontFamily="monospace">7</text>
        </svg>
      ) 
    },
    { 
      id: 'grupo', 
      label: 'GRUPO', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.54 4.193 1.562 6.04L0 24l6.117-1.605a11.82 11.82 0 005.928 1.594h.005c6.637 0 12.032-5.391 12.035-12.031a11.85 11.85 0 00-3.484-8.497z"/>
        </svg>
      ) 
    }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[400px] bg-black/60 border border-white/10 rounded-[2rem] backdrop-blur-xl shadow-2xl p-1.5 flex gap-1 z-[150]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex-1 py-3 px-1 rounded-[1.5rem] text-[9px] font-black uppercase tracking-widest transition-all flex flex-col items-center gap-1.5
            ${activeTab === tab.id 
              ? "red-gradient text-white red-shadow" 
              : "text-white/40 hover:text-white"
            }
          `}
        >
          <div className={`${activeTab === tab.id ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
            {tab.icon}
          </div>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;