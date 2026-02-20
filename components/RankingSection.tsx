import React, { useMemo } from 'react';
import { GAMES, PROVIDERS } from '../constants';
import { getRankedList } from '../utils';

interface RankingSectionProps {
  countdown: number;
}

const RankingSection: React.FC<RankingSectionProps> = ({ countdown }) => {
  const dayRanking = useMemo(() => getRankedList(GAMES, 'day'), []);
  const weekRanking = useMemo(() => getRankedList(GAMES, 'week'), []);

  const providerStats = useMemo(() => {
    const stats: Record<string, number> = {};
    weekRanking.forEach(item => {
      const pId = item.game.providerId;
      stats[pId] = (stats[pId] || 0) + 1;
    });
    
    return Object.entries(stats)
      .map(([id, count]) => ({
        name: PROVIDERS.find(p => p.id === id)?.name || id,
        count
      }))
      .sort((a, b) => b.count - a.count);
  }, [weekRanking]);

  return (
    <div className="space-y-10 animate-in fade-in duration-500 max-w-2xl mx-auto pb-10">
      {/* Ranking Header */}
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white mb-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17M14 14.66V17M18 2h-12v11a6 6 0 0 0 12 0V2z"/>
          </svg>
          <h2 className="font-[1000] text-2xl uppercase tracking-tighter italic"><span className="text-red-neon">RANKING</span> DE ALTA</h2>
          <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest max-w-[280px] mx-auto">
            Acompanhe o ranking de jogos e provedores em tempo real.
          </p>
        </div>
        
        {/* Sync Timer */}
        <div className="bg-black/60 border border-white/10 px-6 py-2.5 rounded-2xl flex items-center justify-center gap-3 whitespace-nowrap mx-auto w-fit">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse-red"></div>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
            ATUALIZA EM: <span className="text-white">{countdown}s</span>
          </span>
        </div>
      </div>

      {/* SECTION: DAILY (TOP 5) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <h3 className="font-black text-[11px] text-white uppercase tracking-[0.2em]">RANKING DO DIA</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        
        <Podium top3={dayRanking.slice(0, 3)} />
        
        <div className="space-y-2.5 mt-4">
          {dayRanking.slice(3).map((item) => (
            <RankCard key={item.game.id + 'day'} item={item} />
          ))}
        </div>
      </div>

      {/* SECTION: WEEKLY (TOP 10) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <h3 className="font-black text-[11px] text-white uppercase tracking-[0.2em]">RANKING DA SEMANA</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>

        <Podium top3={weekRanking.slice(0, 3)} />

        <div className="space-y-2.5 mt-4">
          {weekRanking.slice(3).map((item) => (
            <RankCard key={item.game.id + 'week'} item={item} />
          ))}
        </div>
      </div>

      {/* SECTION: PROVIDERS */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-3 px-2">
          <h3 className="font-black text-[11px] text-white uppercase tracking-[0.2em]">RANK DE PROVEDORES (SEMANAL)</h3>
          <div className="flex-1 h-px bg-white/5"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-2">
          {providerStats.map((stat, idx) => (
            <div key={stat.name} className="flex justify-between items-center bg-white/5 border border-white/5 px-5 py-3 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-white/20">#0{idx+1}</span>
                <span className="font-black text-[10px] text-white/70 uppercase tracking-widest">{stat.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xs text-white">{stat.count}</span>
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">JOGOS NO TOP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Podium: React.FC<{ top3: any[] }> = ({ top3 }) => {
  if (top3.length < 3) return null;
  
  const [p1, p2, p3] = [top3[0], top3[1], top3[2]];

  return (
    <div className="flex items-end justify-center gap-3 md:gap-6 px-2 pt-4 pb-4">
      {/* 2nd Place */}
      <PodiumStep item={p2} position={2} height="h-32" color="from-slate-300 to-slate-500" />
      {/* 1st Place */}
      <PodiumStep item={p1} position={1} height="h-44" color="from-yellow-400 to-yellow-600" isMain />
      {/* 3rd Place */}
      <PodiumStep item={p3} position={3} height="h-28" color="from-orange-400 to-orange-700" />
    </div>
  );
};

const PodiumStep: React.FC<{ item: any; position: number; height: string; color: string; isMain?: boolean }> = ({ item, position, height, color, isMain }) => (
  <div className={`flex flex-col items-center flex-1 max-w-[140px] animate-in slide-in-from-bottom-8 duration-700 delay-${position * 100}`}>
    {/* Image Area */}
    <div className="relative mb-3 flex flex-col items-center">
      <div className={`
        relative overflow-hidden rounded-2xl border-2 border-white/10 p-0.5 bg-zinc-900 animate-pulse-subtle
        ${isMain ? 'w-20 h-20 md:w-24 md:h-24 scale-110 shadow-xl shadow-yellow-500/20' : 'w-16 h-16 md:w-20 md:h-20'}
      `}>
        <img src={item.game.image} className="w-full h-full object-cover rounded-xl" alt={item.game.name} />
      </div>

      {/* Rank Change Below Image */}
      <div className="mt-2 h-4 flex items-center justify-center">
        <RankMovement change={item.change} />
      </div>
    </div>
    
    {/* The Podium Step */}
    <div className={`w-full ${height} bg-white/5 border border-white/10 rounded-t-2xl flex flex-col items-center justify-start py-4 px-2 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent"></div>
      
      {/* Rank Info inside the step */}
      <div className="flex flex-col items-center justify-center mb-auto pt-1">
        <span className={`text-2xl md:text-3xl font-[1000] bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
          {position}º
        </span>
        <span className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-[0.2em] -mt-1">
          LUGAR
        </span>
      </div>

      <div className="w-full text-center mt-auto">
        <p className="text-[8px] md:text-[10px] font-black text-white uppercase truncate w-full tracking-tight">
          {item.game.name}
        </p>
      </div>
    </div>
  </div>
);

const RankMovement: React.FC<{ change?: number }> = ({ change }) => {
  if (change === undefined || change === 0) {
    return <span className="text-[10px] text-white/20 font-black">—</span>;
  }
  
  if (change > 0) {
    return (
      <div className="flex items-center gap-0.5 text-green-500">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
          <path d="M7 14l5-5 5 5H7z"/>
        </svg>
        <span className="text-[9px] font-black">+{change}</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center gap-0.5 text-red-500">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M7 10l5 5 5-5H7z"/>
      </svg>
      <span className="text-[9px] font-black">{change}</span>
    </div>
  );
};

const RankCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="card-matte flex items-center gap-4 p-2.5 rounded-2xl border border-white/5 relative transition-all hover:bg-white/[0.02]">
    <div className={`w-9 h-9 shrink-0 rounded-xl bg-white/10 flex items-center justify-center font-[1000] text-white shadow-lg z-10 text-xs border border-white/5`}>
      {item.position}º
    </div>

    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-zinc-900">
      <img src={item.game.image} className="w-full h-full object-cover" alt={item.game.name} />
    </div>

    <div className="flex-1 min-w-0">
      <h4 className="font-black text-[11px] text-white/90 uppercase truncate tracking-wide">
        {item.game.name}
      </h4>
      <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
        {PROVIDERS.find(p => p.id === item.game.providerId)?.name}
      </p>
    </div>

    <div className="flex items-center gap-4 pr-2">
      <div className="flex flex-col items-center">
        <RankMovement change={item.change} />
        <span className="text-[7px] font-bold text-white/20 uppercase tracking-tighter">POSIÇÕES</span>
      </div>
      <div className="text-right hidden xs:block">
        <div className="text-[9px] font-black text-green-vivid tracking-widest">ALTA PERFORMANCE</div>
      </div>
    </div>
  </div>
);

export default RankingSection;