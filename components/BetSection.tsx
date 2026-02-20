import React, { useState } from 'react';
import { BET_HOUSES, GAMES } from '../constants';
import { BetHouse } from '../types';
import BetModal from './BetModal';

const BetSection: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<BetHouse | null>(null);

  // Lista de benefícios com Ícones SVG exatos (Fundo redondo vinho)
  const betBenefits = [
    { 
      title: 'REGULAMENTADAS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    },
    { 
      title: 'GIROS GRÁTIS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 12 20 22 4 22 4 12"></polyline>
          <rect x="2" y="7" width="20" height="5"></rect>
          <line x1="12" y1="22" x2="12" y2="7"></line>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
      )
    },
    { 
      title: 'BÔNUS E SALDO',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
          <line x1="12" y1="18" x2="12" y2="18.01"></line>
          <line x1="12" y1="5" x2="12" y2="5.01"></line>
        </svg>
      )
    },
    { 
      title: 'MISSÕES E TORNEIOS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-10 max-w-2xl mx-auto pb-10 px-2 animate-in fade-in duration-500 relative">
      {/* Title & Slogan Section */}
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center gap-4">
           {/* Ícone Temático 777 */}
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
        
        {/* Bloco de Benefícios - Igual ao Print (2 por linha mobile, Ícones Redondos) */}
        <div className="bg-[#121212]/80 border border-white/5 rounded-[2rem] p-5 md:p-8 shadow-[0_0_40px_rgba(255,0,0,0.05)] backdrop-blur-md mt-6 w-full max-w-3xl mx-auto flex justify-center">
          
          {/* AQUI ESTÁ A REGRA: grid-cols-2 força 2 colunas até no celular */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-5 md:gap-x-12 md:gap-y-8 w-full md:w-fit">
            
            {betBenefits.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 md:gap-4 group">
                
                {/* Ícone: Fundo vinho escuro (#3a0d0d) e totalmente redondo (rounded-full) */}
                <div className="w-8 h-8 md:w-11 md:h-11 shrink-0 bg-[#3a0d0d] border border-red-500/30 rounded-full flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                {/* Texto ajustado para não quebrar no mobile */}
                <div className="pt-[2px] text-left flex-1 overflow-hidden">
                  <p className="font-black text-white/90 uppercase text-[8.5px] md:text-[12px] tracking-wider md:tracking-widest leading-tight truncate md:whitespace-normal">
                    {item.title}
                  </p>
                </div>

              </div>
            ))}
            
          </div>
        </div>
      </div>

      {/* Grid Layout - 3 colunas de casas */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {BET_HOUSES.map((house) => (
          <button
            key={house.id}
            onClick={() => setSelectedHouse(house)}
            className="flex flex-col items-center gap-2 group animate-in zoom-in-95 duration-300"
          >
            {/* Outer Box */}
            <div className="relative w-full aspect-square bg-zinc-900 rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 active:scale-95 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none z-20"></div>
              
              <img 
                src={house.logo} 
                alt={house.name} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform group-hover:scale-110 z-10" 
              />

              <div className="absolute -top-[50%] -left-[50%] w-[150%] h-[150%] bg-gradient-to-br from-white/5 to-transparent rotate-45 pointer-events-none z-30"></div>
            </div>

            <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-tight transition-colors group-hover:text-red-500 text-center truncate w-full px-1">
              {house.name}
            </span>
          </button>
        ))}
      </div>

      {/* Legal Disclaimer */}
      <div className="pt-12 flex items-center justify-center gap-4 border-t border-white/5">
        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-black text-white/60">18+</span>
        </div>
        <div className="w-px h-6 bg-white/10"></div>
        <p className="text-[9px] md:text-[10px] font-[900] text-white/50 uppercase tracking-[0.2em] leading-tight">JOGUE COM RESPONSABILIDADE</p>
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