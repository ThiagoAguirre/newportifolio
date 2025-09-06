
import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      period: "2024 - Presente",
      title: t("Senior Backend Developer"),
      company: t("TechCorp Solutions"),
      location: t("Remote"),
      description: t("Liderança técnica em projetos de alta complexidade, arquitetura de microsserviços escaláveis, otimização de performance de APIs e mentoria de equipes de desenvolvimento."),
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", "Redis"]
    },
    {
      period: "2023 - 2024",
      title: t("Backend Developer"),
      company: t("DataFlow Systems"),
      location: t("São Paulo, SP"),
      description: t("Desenvolvimento de pipelines de dados robustos, implementação de APIs RESTful de alta performance e integração com sistemas legados complexos."),
      technologies: ["Python", "Django", "Pandas", "Apache Kafka", "MongoDB"]
    },
    {
      period: "2022 - 2023",
      title: t("Python Developer"),
      company: t("CloudTech Innovations"),
      location: t("Remote"),
      description: t("Construção de aplicações backend escaláveis, automação de processos com Python e desenvolvimento de soluções de processamento de dados em tempo real."),
      technologies: ["Python", "Flask", "SQLAlchemy", "Celery", "Docker"]
    },
    {
      period: "2021 - 2022",
      title: t("Junior Backend Developer"),
      company: t("StartupLab"),
      location: t("Belo Horizonte, MG"),
      description: t("Início da especialização em backend, desenvolvimento de APIs, aprendizado de boas práticas de desenvolvimento e participação em projetos de inovação."),
      technologies: ["Python", "Django", "MySQL", "Git", "Linux"]
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="timeline" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          {t('Experience')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-green to-neon-blue rounded-full opacity-50"></div>
        
        {experiences.map((exp, index) => (
          <div 
            key={index}
            ref={el => itemRefs.current[index] = el}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div 
                className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-500 ${
                  visibleItems.includes(index) 
                    ? 'animate-slide-in opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-center mb-3">
                  <Calendar className="text-neon-green mr-2" size={16} />
                  <span className="text-neon-green font-semibold text-sm">{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <h4 className="text-neon-blue font-semibold mb-2">{exp.company}</h4>
                
                <div className="flex items-center mb-4">
                  <MapPin className="text-text-secondary mr-1" size={14} />
                  <span className="text-text-secondary text-sm">{exp.location}</span>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-neon-green/10 text-neon-green px-3 py-1 rounded-full text-xs border border-neon-green/20 hover:border-neon-green/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-neon-green to-neon-blue rounded-full border-4 border-bg-primary z-10 shadow-lg"></div>
            
            <div className="w-full md:w-5/12"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
