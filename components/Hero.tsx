import React from 'react';
import { ArrowRight, Star, Trophy } from 'lucide-react';

export const Hero: React.FC = () => {
  const bgVideos = [
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/capa%20andre%201.mp4",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/capa%20andre%202.mp4",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/capa%20andre%203.mp4"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden bg-black">
      
      {/* Background Videos Layer */}
      <div className="absolute inset-0 z-0 flex opacity-40">
        {bgVideos.map((video, index) => (
          <div key={index} className="flex-1 h-full relative overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
            {/* Subtle vertical divide blur */}
            <div className="absolute inset-y-0 left-0 w-px bg-white/5 backdrop-blur-3xl"></div>
          </div>
        ))}
      </div>

      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#171717]/80 via-transparent to-[#171717]"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#171717] via-[#171717]/40 to-transparent lg:block hidden"></div>
      
      {/* Smoky / Foggy Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-[2] pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#171717] via-[#171717]/80 to-transparent"></div>
        <div className="absolute bottom-[-10px] left-[-10%] right-[-10%] h-32 bg-[#171717] blur-[40px] opacity-90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#E30613] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Star size={12} fill="currentColor" /> ADEMICON CENTRO - LOJA 200
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Trophy size={12} fill="currentColor" /> MELHOR LOJA PREMIER
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Equipe <span className="text-[#E30613]">Samaria</span>.<br />
              A referência da Ademicon Centro.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Sob a liderança de André Borba, transformamos a unidade referência de Curitiba no berço da alta performance em investimentos e consultoria patrimonial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="https://wa.link/70toxx" 
                className="w-full sm:w-auto px-12 py-5 bg-[#E30613] text-white rounded-2xl font-black text-lg hover:bg-[#c40510] transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/40 uppercase tracking-widest"
              >
                Falar com André
              </a>
              <a 
                href="#carreira" 
                className="w-full sm:w-auto px-8 py-5 glass-card text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group border-white/20"
              >
                Seja Equipe Samaria <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 divide-x divide-white/10">
              <div className="text-center lg:text-left">
                <span className="block text-4xl font-black text-white">4.5 ★</span>
                <span className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.2em] mt-1 block">Avaliação Google</span>
              </div>
              <div className="pl-12 text-center lg:text-left">
                <span className="block text-4xl font-black text-white">#1 BR</span>
                <span className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.2em] mt-1 block">André Borba</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Preview */}
          <div className="flex-1 relative lg:max-w-md hidden lg:block">
            <div className="relative z-10 glass-card p-2 rounded-[2.5rem] transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-3xl border-white/20">
              <img 
                src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/andre.jpeg" 
                alt="André Borba" 
                className="w-full h-auto rounded-[2.3rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-3xl shadow-3xl border-white/20 backdrop-blur-2xl max-w-[280px]">
                <p className="text-white font-black text-xl mb-1">André Borba</p>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-4">Líder Equipe Samaria</p>
                <div className="flex items-center -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                     <img key={i} src={`https://picsum.photos/seed/${i+50}/100/100`} className="w-10 h-10 rounded-full border-2 border-neutral-800 shadow-lg" alt="Team member" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-[#E30613] border-2 border-neutral-800 flex items-center justify-center text-[10px] font-black text-white">+200</div>
                </div>
              </div>
            </div>
            {/* Decorative background glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E30613]/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};