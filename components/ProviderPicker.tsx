import React from 'react';
import { PROVIDERS } from '../constants';

interface ProviderPickerProps {
  selectedProvider: string;
  onSelect: (id: string) => void;
}

const ProviderPicker: React.FC<ProviderPickerProps> = ({ selectedProvider, onSelect }) => {
  return (
    <div className="flex flex-nowrap gap-2 no-scrollbar overflow-x-auto pb-2 pt-1 px-4 -mx-4 items-center">
      {PROVIDERS.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.id)}
          className={`
            px-3.5 py-1.5 rounded-full border text-[10px] font-[900] uppercase tracking-widest transition-all duration-200 whitespace-nowrap
            ${selectedProvider === p.id 
              ? "red-gradient text-white border-white/20 red-shadow scale-105" 
              : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
            }
          `}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
};

export default ProviderPicker;