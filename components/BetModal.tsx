import React from 'react';
import { BetHouse, Game } from '../types';

interface BetModalProps {
  house: BetHouse | null;
  onClose: () => void;
  games: Game[];
}

const BetModal: React.FC<BetModalProps> = ({ house, onClose, games }) => {
  if (!house) return null;

  // Função para renderizar o texto da recompensa com o título em destaque
  const renderRewardText = (text: string) => {
    const parts = text.split(':');
    if (parts.length > 1) {
      return (
        <>
          <span className="text-white font-black text-[12px] block mb-0.5 tracking-tight">{parts[0]}</span>
          <span className="text-white/60 font-medium text-[10px] lowercase first-letter:uppercase">{parts[1].trim()}</span>
        </>
      );
    }
    return <span className="text-white/80">{text}</span>;
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-0 md:p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}>
      <div 
        // OTIMIZAÇÃO APLICADA AQUI: md:max-h-[90vh]
        className="w-full h-full md:h-auto md:max-h-[90vh] md:max-w-md bg-[#0a0a0a] md:rounded-[3rem] overflow-hidden flex flex-col relative border-0 md:border-2 md:border-white/5 shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-6 flex items-center justify-between border-b border-white/5 bg-zinc-900/50 pr-16 shrink-0">
          <div className="flex flex-col">
            <h3 className="font-black text-lg text-white uppercase tracking-tighter">{house.name}</h3>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{house.license}</span>
          </div>
          <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 p-1.5 flex items-center justify-center shadow-inner">
            <img src={house.logo} alt="Logo" className="max-w-full max-h-full object-contain" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-24 relative">
          {/* Main Banner */}
          <div className="w-full aspect-[16/9] bg-zinc-900 overflow-hidden relative shadow-lg shrink-0">
            <img src={house.banner} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Rewards List */}
          <div className="px-6 py-8 space-y-8">
            <div className="text-center relative">
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-red-600/20"></div>
               <h4 className="relative inline-block px-6 py-2 bg-[#0a0a0a] border border-red-600/30 rounded-full text-[12px] font-black text-white uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(220,38,38,0.15)]">
                 RECOMPENSAS EXCLUSIVAS
               </h4>
            </div>
            
            <div className="space-y-4">
              {house.rewards.map((reward, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-5 rounded-[2.2rem] flex items-start gap-4 transition-all hover:bg-white/[0.08] group">
                  <div className="w-8 h-8 bg-red-600 rounded-2xl flex items-center justify-center text-[11px] font-black text-white shrink-0 shadow-lg shadow-red-900/40 group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    {renderRewardText(reward)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button Footer */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent shrink-0">
          <a 
            href={house.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-16 bg-green-600 text-white font-[1000] text-xs md:text-sm rounded-[2rem] flex items-center justify-center gap-2 shadow-2xl shadow-green-900/40 uppercase tracking-widest animate-pulse-action transition-all active:scale-95 border-0 relative overflow-hidden"
          >
            CADASTRAR E RESGATAR
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Fixed Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[1100] w-11 h-11 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all shadow-2xl active:scale-90"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BetModal;