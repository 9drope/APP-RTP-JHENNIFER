
import React from 'react';
import { SUPPORT } from '../constants';

const SupportSection: React.FC = () => {
  // Pegamos o link do WhatsApp das constantes, caso exista, ou usamos um padrão
  const whatsappLink = SUPPORT.find(s => s.id === 'whatsapp')?.url || 'https://chat.whatsapp.com/';

  const benefits = [
    {
      title: 'SUPORTE',
      desc: 'TIRE SUAS DÚVIDAS DIRETAMENTE COMIGO',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    {
      title: 'PROMOÇÕES',
      desc: 'RECEBA PROMOÇÕES EM PRIMEIRA MÃO DAS CASAS PARCEIRAS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      )
    },
    {
      title: 'SORTEIOS',
      desc: 'PARTICIPE DE SORTEIOS SEMANALMENTE',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'RESULTADOS',
      desc: 'FEEDBACKS REAIS DE QUEM JOGA CONOSCO',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-8 max-w-lg mx-auto pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
      {/* Cabeçalho */}
      <div className="text-center space-y-3">
        <h2 className="font-[1000] text-3xl md:text-4xl uppercase tracking-tighter italic leading-none">
          <span className="text-red-neon">GRUPO</span> VIP
        </h2>
        <p className="text-[11px] text-white/50 font-black uppercase tracking-[0.2em]">
          ENTRE AGORA NO GRUPO VIP E RECEBA:
        </p>
      </div>

      {/* Bloco de Benefícios */}
      <div className="bg-white/[0.08] border border-white/10 rounded-[2.5rem] p-6 md:p-8 space-y-6 shadow-[0_0_40px_rgba(255,0,0,0.05)] backdrop-blur-md">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 group">
            <div className="w-10 h-10 shrink-0 bg-red-600/20 border border-red-600/30 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="pt-1">
              <p className="text-xs md:text-sm font-medium leading-relaxed">
                <span className="font-black text-red-500 uppercase tracking-widest">{item.title}:</span>{' '}
                <span className="text-white/80 uppercase text-[10px] md:text-[11px] font-black tracking-tight">{item.desc}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de Ação CTA */}
      <div className="pt-4">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-16 bg-green-600 text-white font-[1000] text-sm md:text-base rounded-[2rem] flex items-center justify-center gap-3 shadow-2xl shadow-green-900/40 uppercase tracking-widest animate-pulse-action transition-all active:scale-95 border-0 relative overflow-hidden"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.54 4.193 1.562 6.04L0 24l6.117-1.605a11.82 11.82 0 005.928 1.594h.005c6.637 0 12.032-5.391 12.035-12.031a11.85 11.85 0 00-3.484-8.497z"/>
          </svg>
          ENTRAR AGORA
        </a>
      </div>
    </div>
  );
};

export default SupportSection;
