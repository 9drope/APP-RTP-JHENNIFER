import React, { useState } from 'react';
import { BET_HOUSES, GAMES } from '../constants';
import { BetHouse } from '../types';
import BetModal from './BetModal';

const BetSection: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<BetHouse | null>(null);

  return (
    // Removido o z-index restritivo para permitir que o modal use seu z-1000 globalmente
    <div className="space-y-10 max-w-2xl mx-auto pb-10 px-2 animate-in fade-in duration-500 relative">
      {/* Title & Slogan Section */}
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center gap-4">
           {/* Ícone Temático 777 - Ajustado conforme pedido */}
           <div className="text-white flex items-center justify-center p-0">
             <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="10" rx="2" />
                <path d="M8 7v10M16 7v10" />
                <path d="M22 10h1.5l.5.5V13.5l-.5.5H22" />
                <text x="4" y="14.2" fontSize="7.5" fontWeight="900" fill="currentColor" fontFamily="monospace">7</text>
                <text x="10.5" y="14.2" fontSize="7.5" fontWeight="900" fill="currentColor" fontFamily="monospace">7</text>
                <text x="17.2" y="14.2" fontSize="7.5" fontWeight="900" fill="currentColor" fontFamily="monospace">7</text>
             </svg>
           </div>
           <div className="space-y-2">
             <h2 className="font-[1000] text-3xl uppercase tracking-tighter italic leading-none">CASAS <span className="text-red-neon">INDICADAS</span></h2>
             <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest px-4 leading-relaxed max-w-md mx-auto">
               ESSAS SÃO AS CASAS INDICADAS, SELECIONE UMA E CADASTRE-SE PARA RESGATAR AS RECOMPENSAS
             </p>
           </div>
        </div>
        
        {/* Quadrante de Benefícios - Destaque Reforçado */}
        <div className="flex flex-col items-center gap-3 bg-white/[0.15] p-6 rounded-[2.5rem] border border-white/20 shadow-[0_0_40px_rgba(255,0,0,0.15)] backdrop-blur-md">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-10">
            <div className="flex items-center gap-2 group">
              <span className="text-xl drop-shadow-lg">✅</span>
              <span className="text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap">REGULAMENTADAS</span>
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="text-xl drop-shadow-lg">🎁</span>
              <span className="text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap">GIROS GRÁTIS</span>
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="text-xl drop-shadow-lg">💰</span>
              <span className="text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap">BÔNUS E SALDO REAL</span>
            </div>

            <div className="flex items-center gap-2 group">
              <span className="text-xl drop-shadow-lg">🎯</span>
              <span className="text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap">MISSÕES E TORNEIOS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout - Logos preenchendo totalmente o quadrante */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {BET_HOUSES.map((house) => (
          <button
            key={house.id}
            onClick={() => setSelectedHouse(house)}
            className="flex flex-col items-center gap-2 group animate-in zoom-in-95 duration-300"
          >
            {/* Outer Box - Removido padding interno para preencher totalmente */}
            <div className="relative w-full aspect-square bg-zinc-900 rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 active:scale-95 border border-white/10 flex items-center justify-center overflow-hidden">
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none z-20"></div>
              
              {/* Logo preenchendo totalmente o espaço com object-cover */}
              <img 
                src={house.logo} 
                alt={house.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 z-10" 
              />

              {/* Shine highlight */}
              <div className="absolute -top-[50%] -left-[50%] w-[150%] h-[150%] bg-gradient-to-br from-white/5 to-transparent rotate-45 pointer-events-none z-30"></div>
            </div>

            {/* Label below the box */}
            <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-tight transition-colors group-hover:text-red-500 text-center truncate w-full px-1">
              {house.name}
            </span>
          </button>
        ))}
      </div>

      {/* Legal Disclaimer */}
      <div className="pt-12 flex items-center justify-center gap-4 border-t border-white/5">
        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
          <span className="text-[10px] font-black text-white/60">18+</span>
        </div>
        <div className="w-px h-6 bg-white/10"></div>
        <p className="text-[10px] font-[900] text-white/50 uppercase tracking-[0.2em]">JOGUE COM RESPONSABILIDADE</p>
      </div>

      {/* Popup Detail */}
      <BetModal 
        house={selectedHouse} 
        onClose={() => setSelectedHouse(null)} 
        games={[]} 
      />
    </div>
  );
};

export default BetSection;