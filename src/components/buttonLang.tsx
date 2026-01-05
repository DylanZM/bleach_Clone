import { useState } from 'react';

export default function ButtonLang() {
  const [activeBtn, setActiveBtn] = useState('JP');

  return (
    <div className="absolute top-4 right-4 z-10 flex gap-1">
      <button 
        onClick={() => setActiveBtn('JP')}
        className={`font-abril w-10 transition-colors border-2 border-white font-bold ${
          activeBtn === 'JP' 
            ? 'bg-white text-black' 
            : 'bg-bg-main text-white hover:bg-white hover:text-black'
        }`}
      >
        JP
      </button>
      <button 
        onClick={() => setActiveBtn('EN')}
        className={`font-abril w-10 transition-colors border-2 border-white font-bold ${
          activeBtn === 'EN' 
            ? 'bg-white text-black' 
            : 'bg-bg-main text-white hover:bg-white hover:text-black'
        }`}
      >
        EN
      </button>
    </div>
  );
}