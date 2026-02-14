import React from 'react';
import { MapPin, Star, Store, TrendingUp, Target, Sparkles, MessageCircle } from 'lucide-react';

export const Authority: React.FC = () => {
  const careerFeatures = [
    {
      icon: <TrendingUp className="text-[#E30613]" size={24} />,
      title: "R$ 10.000+",
      desc: "Ganhos reais acima de R$ 10k mensais com plano de carreira sólido."
    },
    {
      icon: <Target className="text-[#E30613]" size={24} />,
      title: "Mentalidade Premier",
      desc: "Acesso à cultura da melhor loja premier, focada em investimentos."
    },
    {
      icon: <Sparkles className="text-[#E30613]" size={24} />,
      title: "Equilíbrio",
      desc: "Crescimento material aliado ao desenvolvimento emocional e espiritual."
    },
    {
      icon: <MapPin className="text-[#E30613]" size={24} />,
      title: "Localização",
      desc: "Atue na Ademicon Centro, o coração pulsante do mercado em Curitiba."
    }
  ];

  const videos = [
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/andre%20c1.mp4",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/andre%20c2.mp4",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/andre%20c3.mp4"
  ];

  return (
    <section id="autoridade" className="py-24 bg-neutral-900/20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Unidade Referência (Map Section) */}
        <div className="mb-12">
          <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">
            ONDE TUDO ACONTECE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Ademicon Centro: A Unidade<br />Referência.
          </h2>
          
          <div className="max-w-3xl space-y-6">
            <p className="text-neutral-300 text-lg leading-relaxed">
              André Borba atua na <span className="text-white font-bold">Ademicon Centro (Loja 200)</span>, um escritório de referência em Curitiba, Paraná, reconhecido pela infraestrutura de ponta e atendimento de excellence.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <div className="glass-card flex items-center gap-4 px-6 py-4 rounded-2xl border-white/5 bg-white/5">
            <div className="bg-[#E30613]/10 p-2.5 rounded-lg">
              <Store className="text-[#E30613]" size={24} />
            </div>
            <div>
              <p className="text-white font-extrabold text-lg leading-none">Loja 200</p>
              <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-1">UNIDADE PREMIER</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-4 px-6 py-4 rounded-2xl border-white/5 bg-white/5">
            <div className="bg-yellow-500/10 p-2.5 rounded-lg">
              <Star className="text-yellow-500" size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-white font-extrabold text-lg leading-none">4.5 ★</p>
              <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-1">RATING GOOGLE</p>
            </div>
          </div>
        </div>

        <div className="relative glass-card rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl mb-32">
          <div className="aspect-video w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.116962058309!2d-49.289111624609825!3d-25.434327277559132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce409893d9b4b%3A0xc3f25c7e163b2f2!2sAv.%20Vicente%20Machado%2C%201412%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080420-011!5e0!3m2!1spt-BR!2sbr!4v1709400000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-neutral-400">
              <MapPin size={20} className="text-[#E30613]" />
              <span className="text-sm font-medium">Av. Vicente Machado, 1412 - Centro, Curitiba - PR, 80420-011</span>
            </div>
            <a href="https://goo.gl/maps/x1S89E9p9h3M9p9B6" target="_blank" className="px-6 py-3 border border-[#E30613]/30 text-[#E30613] rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#E30613] hover:text-white transition-all">
              ABRIR NO GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* --- NEW CAREER SECTION (AS REQUESTED) --- */}
        <div id="carreira" className="mt-20">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Left Column: Info + Videos + Features */}
            <div className="lg:col-span-3">
              <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">
                CARREIRA NA ADEMICON CENTRO
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Junte-se à Equipe Samaria.
              </h2>
              <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
                Venha trabalhar na <span className="text-white font-bold">Loja 200</span>, o centro de excelência da Ademicon em Curitiba. Buscamos pessoas prontas para se tornarem referência no mercado.
              </p>

              {/* Triple Video Row */}
              <div className="grid grid-cols-3 gap-4 mb-16">
                {videos.map((src, idx) => (
                  <div key={idx} className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-neutral-800 shadow-2xl">
                    <video 
                      src={src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {careerFeatures.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/5 group-hover:bg-[#E30613]/10 group-hover:border-[#E30613]/20 transition-all">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <div className="glass-card rounded-[2.5rem] p-10 md:p-12 text-center border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613]/5 blur-[60px]"></div>
                
                <div className="bg-[#E30613]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <MessageCircle size={32} className="text-[#E30613]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                  Inicie sua Trajetória
                </h3>
                
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
                  Não buscamos apenas currículos, buscamos talentos com propósito. Clique abaixo para iniciar seu processo seletivo diretamente com nossa liderança na <span className="text-white font-bold">Loja 200</span>.
                </p>

                <a 
                  href="https://wa.link/70toxx"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full bg-[#E30613] text-white py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest hover:bg-[#c40510] hover:scale-[1.02] transition-all shadow-xl shadow-red-600/20 mb-8"
                >
                  <MessageCircle size={20} /> Candidatar-se via WhatsApp
                </a>

                <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em]">
                  ADEMICON CENTRO • UNIDADE REFERÊNCIA
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};