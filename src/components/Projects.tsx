
import { ExternalLink, Github, Database, Server, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "High-Performance API Gateway",
      description: "Sistema de gateway de APIs escalável com rate limiting, autenticação JWT e balanceamento de carga automático. Processa mais de 10k requests/segundo.",
      technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
      icon: <Server className="text-neon-green" size={32} />,
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Data Pipeline",
      description: "Pipeline de processamento de dados em tempo real com Apache Kafka, processando streams de dados de múltiplas fontes com baixa latência.",
      technologies: ["Python", "Apache Kafka", "Pandas", "MongoDB", "AWS"],
      icon: <Database className="text-neon-blue" size={32} />,
      github: "#",
      demo: "#"
    },
    {
      title: "Microservices Architecture",
      description: "Arquitetura completa de microsserviços com comunicação assíncrona, circuit breakers e observabilidade avançada para aplicações enterprise.",
      technologies: ["Python", "Django", "RabbitMQ", "PostgreSQL", "Kubernetes"],
      icon: <Code className="text-neon-green" size={32} />,
      github: "#",
      demo: "#"
    },
    {
      title: "Analytics Engine",
      description: "Engine de analytics em tempo real com processamento distribuído, capaz de analisar terabytes de dados com agregações complexas.",
      technologies: ["Python", "Apache Spark", "Elasticsearch", "Grafana", "AWS"],
      icon: <Database className="text-neon-blue" size={32} />,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            <div className="flex items-center mb-4">
              {project.icon}
              <h3 className="text-xl font-bold text-white ml-3">{project.title}</h3>
            </div>
            
            <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-full text-xs border border-neon-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a 
                href={project.github}
                className="flex items-center text-text-secondary hover:text-neon-green transition-colors duration-300"
              >
                <Github size={20} className="mr-2" />
                <span>Code</span>
              </a>
              <a 
                href={project.demo}
                className="flex items-center text-text-secondary hover:text-neon-blue transition-colors duration-300"
              >
                <ExternalLink size={20} className="mr-2" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
