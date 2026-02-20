import React from 'react';
import { Game } from '../types';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  if (!game) return null;

  const technicalImage = game.modalImage || game.image;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div className="w-full max-w-sm bg-[#0a0a0a] border-2 border-red-600 rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        
        {/* Technical Image Area - Adjusted for aspect ratio compatibility */}
        <div className="relative w-full bg-[#111] flex items-center justify-center border-b border-white/5 min-h-[160px]">
           <img 
             src={technicalImage} 
             className="w-full h-auto object-contain" 
             alt="Análise Técnica" 
             style={{ maxHeight: 'calc(80vh - 300px)' }}
           />
           <button onClick={onClose} className="absolute top-3 right-3 text-white/40 bg-black/60 p-1.5 rounded-full hover:text-white transition-colors z-10 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className="font-[900] text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">DADOS DE PERFORMANCE</h2>
            <h3 className="font-[900] text-sm uppercase tracking-widest text-white/80">{game.name}</h3>
            <div className="h-0.5 w-8 bg-red-600 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-1">
            <InfoRow label="RTP ATUAL" value={game.metadata?.rtp || "96.7%"} />
            <InfoRow label="VOLATILIDADE" value={game.metadata?.volatility || "Média"} />
            <InfoRow label="MAX WIN" value={game.metadata?.maxWin || "x5.000"} />
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 bg-red-600/10 border border-red-600/30 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-red-600/20 transition-all mt-2 text-[10px]"
          >
            CONFIRMAR SINAL
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-2.5 border-b border-white/5 px-2">
    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{label}</span>
    <span className="text-[11px] font-black text-white/70 uppercase tracking-tighter">{value}</span>
  </div>
);

export default GameModal;