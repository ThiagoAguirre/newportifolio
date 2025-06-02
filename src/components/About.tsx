
const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-white/80 leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e funcionais. 
            Com experiência em desenvolvimento full-stack, combino habilidades técnicas sólidas 
            com um olhar atento ao design e experiência do usuário.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Especializo-me em tecnologias modernas como React, Node.js, TypeScript e bancos de dados, 
            sempre buscando as melhores práticas e tendências do mercado para entregar projetos de alta qualidade.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h3 className="text-blue-400 font-semibold mb-2">Frontend</h3>
              <p className="text-white/70 text-sm">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h3 className="text-purple-400 font-semibold mb-2">Backend</h3>
              <p className="text-white/70 text-sm">Node.js, Python, APIs REST</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="bg-white/5 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Localização</span>
                <span className="text-white">Brasil</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Experiência</span>
                <span className="text-white">3+ anos</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Projetos</span>
                <span className="text-white">20+ entregues</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Status</span>
                <span className="text-green-400">Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
