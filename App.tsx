import React, { useState, useEffect, useMemo } from 'react';
import { NavTab, Game, Metrics } from './types';
import { GAMES, CONFIG } from './constants';
import { computeMetrics } from './utils';
import Header from './components/Header';
import ProviderPicker from './components/ProviderPicker';
import GameCard from './components/GameCard';
import BetSection from './components/BetSection';
import SupportSection from './components/SupportSection';
import BottomNav from './components/BottomNav';
import GameModal from './components/GameModal';
import RankingSection from './components/RankingSection';

const App: React.FC = () => {
  const [nav, setNav] = useState<NavTab>('sinais');
  const [provider, setProvider] = useState<string>('pgsoft');
  const [search, setSearch] = useState<string>('');
  const [selectedGameInfo, setSelectedGameInfo] = useState<Game | null>(null);

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const windowSizeMs = CONFIG.refreshSeconds * 1000;
  const currentTimeWindow = Math.floor(now / windowSizeMs);
  const countdown = Math.ceil((windowSizeMs - (now % windowSizeMs)) / 1000);

  const gameMetrics = useMemo(() => {
    const metrics: Record<string, Metrics> = {};
    GAMES.forEach(g => {
      metrics[g.id] = computeMetrics(g, currentTimeWindow);
    });
    return metrics;
  }, [currentTimeWindow]);

  const processedGames = useMemo(() => {
    let list = [...GAMES];
    if (provider !== 'all') list = list.filter(g => g.providerId === provider);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(g => g.name.toLowerCase().includes(q));
    }
    list.sort((a, b) => (gameMetrics[b.id]?.dist || 0) - (gameMetrics[a.id]?.dist || 0));
    return list;
  }, [provider, search, gameMetrics]);

  const topIds = useMemo(() => new Set(processedGames.slice(0, 3).map(g => g.id)), [processedGames]);

  return (
    <div className="max-w-[1000px] mx-auto px-4 pt-4 pb-32 min-h-screen">
      <Header activeTab={nav} />

      <div className="mt-6 space-y-6">
        {nav === 'sinais' && (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
               <div className="bg-black/60 border border-white/10 px-6 py-2.5 rounded-2xl flex items-center justify-center gap-3 whitespace-nowrap self-center md:self-auto w-full md:w-auto order-1 md:order-2">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse-red"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  Sinal atualiza em: <span className="text-white">{countdown}s</span>
                </span>
              </div>
               <div className="flex-1 order-2 md:order-1">
                  <ProviderPicker selectedProvider={provider} onSelect={setProvider} />
               </div>
            </div>
            
            <div className="mb-4 relative">
              <input 
                type="text"
                placeholder="PROCURAR MEU JOGO..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border border-white/30 rounded-2xl py-3.5 px-12 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-white/60 transition-all text-white placeholder:text-white/40"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {processedGames.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {processedGames.map(game => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    metrics={gameMetrics[game.id]}
                    highlight={topIds.has(game.id)}
                    onInfo={setSelectedGameInfo}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-3xl text-white/10 uppercase font-black text-xs tracking-widest">
                NENHUM JOGO ENCONTRADO.
              </div>
            )}

            {/* Legal Disclaimer Refined */}
            <div className="pt-10 flex items-center justify-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
                <span className="text-[10px] font-black text-white/60">18+</span>
              </div>
              <div className="w-px h-6 bg-white/10"></div>
              <p className="text-[10px] font-[900] text-white/50 uppercase tracking-[0.2em]">JOGUE COM RESPONSABILIDADE</p>
            </div>
          </div>
        )}

        {nav === 'ranking' && <RankingSection countdown={countdown} />}
        {nav === 'bets' && <BetSection />}
        {nav === 'grupo' && <SupportSection />}
      </div>

      <BottomNav activeTab={nav} onTabChange={setNav} />
      <GameModal game={selectedGameInfo} onClose={() => setSelectedGameInfo(null)} />
    </div>
  );
};

export default App;