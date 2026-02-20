import React from 'react';
import { Game, Metrics } from '../types';
import { BET_HOUSES } from '../constants';

interface GameCardProps {
  game: Game;
  metrics: Metrics;
  highlight: boolean;
  onInfo: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, metrics, highlight, onInfo }) => {
  const getStatusColorClass = (val: number) => {
    if (val < 40) return "status-red";
    if (val < 70) return "status-orange";
    return "status-green";
  };

  const betIndication = metrics.chanceBonus > 70 ? "BET BAIXA" : "BET ALTA";
  
  // Usar a URL da Superbet por padrão para o botão "JOGAR" rápido no card
  const mainBetUrl = BET_HOUSES.find(h => h.id === 'superbet')?.url || BET_HOUSES[0].url;

  return (
    <div className={`
      card-matte transition-all duration-300 rounded-2xl overflow-hidden flex flex-col group relative
      ${highlight ? 'matte-red-border' : ''}
    `}>
      
      {/* Distribution Header */}
      <div className="px-3 pt-3 pb-2 space-y-1">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
           <span className="text-white/30">DISTRIBUIÇÃO</span>
           <span className="green-vivid font-black">{metrics.dist}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-vivid rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${metrics.dist}%` }}
          ></div>
        </div>
      </div>

      {/* Image Area */}
      <div className="poster-aspect bg-zinc-900 overflow-hidden relative mx-2 mb-2 rounded-xl">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Top Icons Overlap */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start pointer-events-none">
          <div className="flex flex-col gap-1">
            {highlight && (
              <div className="px-2.5 py-1.5 flex items-center justify-center red-gradient backdrop-blur-sm rounded-lg text-[10px] font-[900] text-white red-shadow animate-pulse uppercase tracking-wider">
                TOP 🔥
              </div>
            )}
          </div>
          <button 
            onClick={() => onInfo(game)}
            className="pointer-events-auto w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="px-3 pb-4 space-y-3">
        <h3 className="font-[800] text-[11px] md:text-xs text-white/80 uppercase tracking-tight text-center truncate">
          {game.name}
        </h3>

        <div className="space-y-1.5 bg-black/40 rounded-xl p-2.5 border border-white/5">
           <div className="flex justify-between items-center text-[9px] font-bold text-white/40 uppercase">
             <span>CHANCE BÔNUS</span>
             <span className={`font-black ${getStatusColorClass(metrics.chanceBonus)}`}>
               {metrics.chanceBonus}%
             </span>
           </div>
           <div className="flex justify-between items-center text-[9px] font-bold text-white/40 uppercase">
             <span>GANHO GIRO</span>
             <span className={`font-black ${getStatusColorClass(metrics.ganhoGiro)}`}>
               {metrics.ganhoGiro}%
             </span>
           </div>
           <div className="pt-1.5 mt-1.5 border-t border-white/5 flex justify-between items-center whitespace-nowrap">
             <span className="text-[9px] font-black text-white/30 uppercase">INDICAÇÃO:</span>
             <span className="text-[10px] font-black text-white/70 uppercase truncate">{betIndication}</span>
           </div>
        </div>

        <a 
          href={mainBetUrl} 
          target="_blank" 
          className="block w-full py-2.5 bg-[#8b0000] text-white/90 text-center text-xs font-black uppercase tracking-widest rounded-xl hover:bg-red-800 transition-all"
        >
          JOGAR
        </a>
      </div>
    </div>
  );
};

export default GameCard;
