import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import TypedText from './TypedText';
import ParticlesBackground from './ParticlesBackground';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const typedStrings = React.useMemo(() => [
    t('Backend Developer'),
    t('Python Specialist'),
    t('API Architect'),
    t('Data Engineer'),
    t('System Designer')
  ], [i18n.language, t]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl text-text-secondary mb-4 font-light">
              {t('Welcome to my portfolio')}
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 neon-text text-white">
              THIAGO AGUIRRE
            </h2>
            <div className="text-2xl md:text-4xl text-neon-blue mb-8 h-12 flex items-center justify-center">
              <TypedText 
                strings={typedStrings}
                typeSpeed={100}
                backSpeed={50}
                className="font-semibold"
              />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('Especialista em desenvolvimento backend, criando sistemas robustos, APIs escaláveis e soluções de dados de alta performance')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-neon-green text-neon-green px-8 py-4 rounded-lg font-semibold hover:bg-neon-green hover:text-black transition-all duration-300 neon-border text-lg"
            >
              {t('VIEW MY WORK')}
            </button>
            <a
              href="/cv.pdf"
              download
              className="bg-neon-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-neon-blue transition-all duration-300 text-lg shadow-lg"
            >
              {t('Download CV')}
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/thiagoaguirre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-neon-green transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com/in/thiagoaguirre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-neon-blue transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:thiago@example.com"
              className="text-text-secondary hover:text-neon-green transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-neon-green" size={32} />
      </div>
    </section>
  );
};

export default Hero;
