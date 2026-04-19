import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0e15] text-[#eeedf7] font-['Manrope'] selection:bg-[#00F5FF] selection:text-black">
      {/* Top Nav */}
      <nav className="fixed w-full z-50 bg-[#0d0e15]/80 backdrop-blur-xl border-b border-[#474750]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#00F5FF] font-['Space_Grotesk']">SONIC_SINGULARITY</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#abaab4] font-['Space_Grotesk']">
            <a href="#studio" className="hover:text-[#00F5FF] transition-colors">Studio</a>
            <a href="#features" className="hover:text-[#00F5FF] transition-colors">Tech</a>
            <a href="#pricing" className="hover:text-[#00F5FF] transition-colors">Tiers</a>
          </div>
          <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#00e5ee] text-[#004346] text-sm uppercase font-bold tracking-widest hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all">
            Access Terminal
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF00FF] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#00F5FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none font-['Space_Grotesk'] uppercase">
          SYNTHESIZE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#FF00FF]">THE UNREAL.</span>
        </h1>
        <p className="text-xl text-[#abaab4] mb-12 max-w-2xl mx-auto font-light">
          Hyper-realistic AI voice cloning interface. Capture human emotion, synthesize audio waveforms in real-time, and deploy globally.
        </p>
        <button className="px-12 py-5 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#00e5ee] text-[#004346] font-bold uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all font-['Space_Grotesk']">
          GET STARTED
        </button>
      </section>

      {/* Voice Cloning Studio Demo */}
      <section id="studio" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#12131b] border border-[#474750]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row">
           {/* Sidebar: Profiles */}
           <div className="w-full md:w-80 bg-[#000000] p-6 border-r border-[#474750]/30">
             <h3 className="text-sm font-['Space_Grotesk'] uppercase tracking-widest text-[#abaab4] mb-6">Voice Profiles</h3>
             <div className="space-y-4">
               {['CYBER SYNTH', 'NEON ECHO', 'VOID DRIFTER'].map((voice, i) => (
                 <div key={i} className="bg-[#12131b] border border-[#474750]/30 p-4 rounded-xl hover:border-[#00F5FF]/50 transition-all cursor-pointer relative group">
                   <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00F5FF] shadow-[0_0_5px_#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="font-['Space_Grotesk'] text-[#eeedf7] mb-1">{voice}</div>
                   <div className="text-xs text-[#abaab4]">English (US) • Synthetic</div>
                 </div>
               ))}
             </div>
           </div>
           {/* Main Studio Area */}
           <div className="flex-1 p-8 flex flex-col">
             <div className="flex-1 bg-[#181922] border border-[#474750]/30 rounded-xl mb-6 p-6 relative overflow-hidden flex items-center justify-center">
               <div className="absolute top-4 left-4 text-xs font-['Space_Grotesk'] uppercase tracking-widest text-[#00F5FF]">Live Waveform Output</div>
               {/* Simulated Animated Waveform */}
               <div className="flex items-center gap-1 h-32 w-full max-w-lg">
                 {[...Array(40)].map((_, i) => (
                   <div key={i} className="flex-1 bg-gradient-to-t from-[#00F5FF] to-[#FF00FF] rounded-full" style={{height: `${Math.random() * 80 + 20}%`, opacity: Math.random() * 0.5 + 0.5}}></div>
                 ))}
               </div>
             </div>
             <div className="relative">
               <textarea className="w-full h-32 bg-[#181922] border border-[#474750]/30 rounded-xl p-4 text-sm font-['Space_Grotesk'] outline-none focus:border-[#00F5FF]/50 text-[#eeedf7] resize-none" placeholder="Enter text to synthesize..."></textarea>
               <button className="absolute bottom-4 right-4 px-6 py-2 rounded-full bg-[#FF00FF] text-white text-xs font-bold uppercase tracking-widest font-['Space_Grotesk'] hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] transition-all">GENERATE</button>
             </div>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-widest text-center mb-16 font-['Space_Grotesk']">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {t: "Instant Cloning", d: "Generate a hyper-realistic voice profile from just 3 seconds of audio input."},
            {t: "Emotion Synthesis", d: "Adjust tone, pitch, and emotional resonance using our proprietary slider matrix."},
            {t: "Global Reach", d: "Output in over 40 languages with native accents and dialect preservation."}
          ].map((f, i) => (
            <div key={i} className="bg-[#12131b] border border-[#474750]/30 p-8 rounded-2xl hover:bg-[#181922] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#00F5FF]/10 flex items-center justify-center text-[#00F5FF] font-['Space_Grotesk'] font-bold mb-6 border border-[#00F5FF]/30">0{i+1}</div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#eeedf7] mb-4 font-['Space_Grotesk']">{f.t}</h3>
              <p className="text-[#abaab4] text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-center mb-16 font-['Space_Grotesk']">Access Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
             <div className="bg-[#12131b] border border-[#474750]/30 p-8 rounded-3xl">
               <h3 className="text-xl uppercase tracking-widest text-[#abaab4] mb-2 font-['Space_Grotesk']">Free</h3>
               <div className="text-4xl font-bold text-[#eeedf7] mb-8 font-['Space_Grotesk']">./process_batch2_true_stitch.sh</div>
               <button className="w-full py-3 rounded-full border border-[#abaab4] text-[#abaab4] uppercase font-bold text-sm tracking-widest mb-8 hover:bg-[#abaab4] hover:text-black transition-colors">Select</button>
               <ul className="space-y-4 text-sm text-[#abaab4]">
                 <li>10 mins synthesis / mo</li>
                 <li>3 Default Voices</li>
               </ul>
             </div>
             
             <div className="bg-[#181922] border-2 border-[#00F5FF] p-10 rounded-3xl shadow-[0_0_30px_rgba(0,245,255,0.1)] relative md:-translate-y-4">
               <div className="absolute top-0 right-8 bg-[#00F5FF] text-[#004346] text-xs font-bold px-3 py-1 uppercase tracking-widest font-['Space_Grotesk'] rounded-b-md">Popular</div>
               <h3 className="text-xl uppercase tracking-widest text-[#00F5FF] mb-2 font-['Space_Grotesk']">Pro</h3>
               <div className="text-4xl font-bold text-[#eeedf7] mb-8 font-['Space_Grotesk']">9<span className="text-sm text-[#abaab4]">/mo</span></div>
               <button className="w-full py-4 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#00e5ee] text-[#004346] uppercase font-bold text-sm tracking-widest mb-8 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">Go Pro</button>
               <ul className="space-y-4 text-sm text-[#eeedf7]">
                 <li className="text-[#00F5FF]">Unlimited Synthesis</li>
                 <li>Instant Voice Cloning</li>
                 <li>Commercial License</li>
               </ul>
             </div>

             <div className="bg-[#12131b] border border-[#474750]/30 p-8 rounded-3xl">
               <h3 className="text-xl uppercase tracking-widest text-[#abaab4] mb-2 font-['Space_Grotesk']">Studio</h3>
               <div className="text-4xl font-bold text-[#eeedf7] mb-8 font-['Space_Grotesk']">9<span className="text-sm text-[#abaab4]">/mo</span></div>
               <button className="w-full py-3 rounded-full border border-[#abaab4] text-[#abaab4] uppercase font-bold text-sm tracking-widest mb-8 hover:bg-[#abaab4] hover:text-black transition-colors">Select</button>
               <ul className="space-y-4 text-sm text-[#abaab4]">
                 <li>API Access</li>
                 <li>Custom AI Models</li>
                 <li>24/7 Support</li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#474750]/30 text-center bg-[#0d0e15] text-[#abaab4] text-xs uppercase tracking-widest font-['Space_Grotesk']">
        <p>SONIC_SINGULARITY © 2024 | ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}
