import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] flex font-mono">
      <aside className="w-80 border-r border-[#3b4b37]/30 bg-[#0e0e0e] p-6 flex flex-col">
        <h1 className="text-xl font-bold text-[#00FF41] mb-8">SYNTH_VOICE_V2</h1>
        <div className="space-y-4 flex-1">
          <h2 className="text-xs text-[#84967e] uppercase tracking-widest border-b border-[#3b4b37]/30 pb-2">Voice Profiles</h2>
          {['Aria (Female, Calm)', 'Nexus (Male, Deep)', 'Echo (Neutral, Synth)'].map((voice, i) => (
            <div key={i} className="p-4 bg-[#131313] border border-[#3b4b37]/30 hover:border-[#00FF41]/50 cursor-pointer transition-colors group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm group-hover:text-[#00FF41]">{voice.split(' ')[0]}</span>
                {i === 0 && <span className="w-2 h-2 bg-[#00FF41] rounded-full shadow-[0_0_5px_#00FF41]"></span>}
              </div>
              <div className="text-xs text-[#84967e]">{voice.split(' ')[1].replace('(', '')}</div>
            </div>
          ))}
        </div>
      </aside>
      
      <section className="flex-1 p-10 flex flex-col">
        <div className="flex-1 bg-[#0e0e0e] border border-[#3b4b37]/30 p-8 relative flex items-center justify-center mb-6 overflow-hidden">
          <div className="absolute top-4 left-4 text-xs text-[#84967e] uppercase tracking-widest">Audio Output Stream</div>
          {/* Simulated Waveform */}
          <div className="flex items-center gap-1 h-32">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="w-1 bg-[#00FF41]" style={{height: `${Math.random() * 100}%`, opacity: Math.random()}}></div>
            ))}
          </div>
        </div>
        
        <div className="h-48 border border-[#3b4b37]/30 bg-[#0e0e0e] relative">
          <textarea 
            className="w-full h-full bg-transparent p-6 outline-none text-sm resize-none"
            placeholder="> Enter text for synthesis here..."
            defaultValue="> The monolithic structure loomed over the neon-drenched city, humming with digital life."
          />
          <button className="absolute bottom-4 right-4 px-6 py-2 bg-[#00FF41] text-[#003907] font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all">Generate Audio</button>
        </div>
      </section>
    </main>
  );
}
