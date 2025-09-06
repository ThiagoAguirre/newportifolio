
import { useEffect, useRef, useState } from 'react';
import { Database, Code, Server, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: t("Backend"),
      icon: <Server className="text-neon-green" size={32} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 88 },
        { name: "Django", level: 90 },
        { name: "FastAPI", level: 85 }
      ]
    },
    {
      title: t("Data"),
      icon: <Database className="text-neon-blue" size={32} />,
      skills: [
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 88 },
        { name: "SQL", level: 95 },
        { name: "PostgreSQL", level: 90 }
      ]
    },
    {
      title: t("Ferramentas"),
      icon: <Settings className="text-neon-green" size={32} />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "Linux", level: 88 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto relative z-10" ref={sectionRef}>
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          {t('Skills')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300 hover:scale-105"
            style={{
              animationDelay: `${index * 200}ms`,
              animation: isVisible ? 'fade-in 0.8s ease-out forwards' : 'none'
            }}
          >
            <div className="flex items-center justify-center mb-6">
              {category.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-secondary group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-neon-green text-sm font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="progress-bar h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
