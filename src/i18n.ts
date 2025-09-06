import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      Home: 'Home',
      Skills: 'Skills',
      Experience: 'Experience',
      Projects: 'Projects',
      Contact: 'Contact',
      
      // Hero Section
      'Backend Developer': 'Backend Developer',
      'Python Specialist': 'Python Specialist',
      'API Architect': 'API Architect',
      'Data Engineer': 'Data Engineer',
      'System Designer': 'System Designer',
      'Welcome to my portfolio': 'Welcome to my portfolio',
      'Especialista em desenvolvimento backend, criando sistemas robustos, APIs escaláveis e soluções de dados de alta performance': 'Backend development specialist, creating robust systems, scalable APIs and high-performance data solutions',
      'VIEW MY WORK': 'VIEW MY WORK',
      'Download CV': 'Download CV',
      
      // Skills Section
      'Backend': 'Backend',
      'Data': 'Data',
      'Ferramentas': 'Tools',
      
      // Timeline Section
      'Senior Backend Developer': 'Senior Backend Developer',
      'Python Developer': 'Python Developer',
      'Junior Backend Developer': 'Junior Backend Developer',
      'TechCorp Solutions': 'TechCorp Solutions',
      'DataFlow Systems': 'DataFlow Systems',
      'CloudTech Innovations': 'CloudTech Innovations',
      'StartupLab': 'StartupLab',
      'Remote': 'Remote',
      'São Paulo, SP': 'São Paulo, SP',
      'Belo Horizonte, MG': 'Belo Horizonte, MG',
      'Liderança técnica em projetos de alta complexidade, arquitetura de microsserviços escaláveis, otimização de performance de APIs e mentoria de equipes de desenvolvimento.': 'Technical leadership in high-complexity projects, scalable microservices architecture, API performance optimization and development team mentoring.',
      'Desenvolvimento de pipelines de dados robustos, implementação de APIs RESTful de alta performance e integração com sistemas legados complexos.': 'Development of robust data pipelines, high-performance RESTful API implementation and integration with complex legacy systems.',
      'Construção de aplicações backend escaláveis, automação de processos com Python e desenvolvimento de soluções de processamento de dados em tempo real.': 'Building scalable backend applications, process automation with Python and development of real-time data processing solutions.',
      'Início da especialização em backend, desenvolvimento de APIs, aprendizado de boas práticas de desenvolvimento e participação em projetos de inovação.': 'Beginning of backend specialization, API development, learning development best practices and participation in innovation projects.',
      
      // Projects Section
      'High-Performance API Gateway': 'High-Performance API Gateway',
      'Sistema de gateway de APIs escalável com rate limiting, autenticação JWT e balanceamento de carga automático. Processa mais de 10k requests/segundo.': 'Scalable API gateway system with rate limiting, JWT authentication and automatic load balancing. Processes over 10k requests/second.',
      'Real-time Data Pipeline': 'Real-time Data Pipeline',
      'Pipeline de processamento de dados em tempo real com Apache Kafka, processando streams de dados de múltiplas fontes com baixa latência.': 'Real-time data processing pipeline with Apache Kafka, processing data streams from multiple sources with low latency.',
      'Microservices Architecture': 'Microservices Architecture',
      'Arquitetura completa de microsserviços com comunicação assíncrona, circuit breakers e observabilidade avançada para aplicações enterprise.': 'Complete microservices architecture with asynchronous communication, circuit breakers and advanced observability for enterprise applications.',
      'Analytics Engine': 'Analytics Engine',
      'Engine de analytics em tempo real com processamento distribuído, capaz de analisar terabytes de dados com agregações complexas.': 'Real-time analytics engine with distributed processing, capable of analyzing terabytes of data with complex aggregations.',
      
      // Contact Section
      'Vamos Conversar': 'Let\'s Talk',
      'Pronto para seu próximo projeto?': 'Ready for your next project?',
      'Estou sempre interessado em novos desafios e oportunidades de colaboração. Vamos criar algo incrível juntos!': 'I\'m always interested in new challenges and collaboration opportunities. Let\'s create something amazing together!',
      'Email': 'Email',
      'LinkedIn': 'LinkedIn',
      'GitHub': 'GitHub',
      'Nome': 'Name',
      'Seu nome': 'Your name',
      'Mensagem': 'Message',
      'Conte-me sobre seu projeto...': 'Tell me about your project...',
      'Enviar Mensagem': 'Send Message',
      '© 2024 Thiago Aguirre. Desenvolvido com React e Tailwind CSS.': '© 2024 Thiago Aguirre. Built with React and Tailwind CSS.',
    },
  },
  pt: {
    translation: {
      // Navigation
      Home: 'Início',
      Skills: 'Habilidades',
      Experience: 'Experiência',
      Projects: 'Projetos',
      Contact: 'Contato',
      
      // Hero Section
      'Backend Developer': 'Desenvolvedor Backend',
      'Python Specialist': 'Especialista Python',
      'API Architect': 'Arquiteto de APIs',
      'Data Engineer': 'Engenheiro de Dados',
      'System Designer': 'Designer de Sistemas',
      'Welcome to my portfolio': 'Bem-vindo ao meu portfólio',
      'Especialista em desenvolvimento backend, criando sistemas robustos, APIs escaláveis e soluções de dados de alta performance': 'Especialista em desenvolvimento backend, criando sistemas robustos, APIs escaláveis e soluções de dados de alta performance',
      'VIEW MY WORK': 'VER MEU TRABALHO',
      'Download CV': 'Baixar CV',
      
      // Skills Section
      'Backend': 'Backend',
      'Data': 'Dados',
      'Ferramentas': 'Ferramentas',
      
      // Timeline Section
      'Senior Backend Developer': 'Desenvolvedor Backend Sênior',
      'Python Developer': 'Desenvolvedor Python',
      'Junior Backend Developer': 'Desenvolvedor Backend Júnior',
      'TechCorp Solutions': 'TechCorp Solutions',
      'DataFlow Systems': 'DataFlow Systems',
      'CloudTech Innovations': 'CloudTech Innovations',
      'StartupLab': 'StartupLab',
      'Remote': 'Remoto',
      'São Paulo, SP': 'São Paulo, SP',
      'Belo Horizonte, MG': 'Belo Horizonte, MG',
      'Liderança técnica em projetos de alta complexidade, arquitetura de microsserviços escaláveis, otimização de performance de APIs e mentoria de equipes de desenvolvimento.': 'Liderança técnica em projetos de alta complexidade, arquitetura de microsserviços escaláveis, otimização de performance de APIs e mentoria de equipes de desenvolvimento.',
      'Desenvolvimento de pipelines de dados robustos, implementação de APIs RESTful de alta performance e integração com sistemas legados complexos.': 'Desenvolvimento de pipelines de dados robustos, implementação de APIs RESTful de alta performance e integração com sistemas legados complexos.',
      'Construção de aplicações backend escaláveis, automação de processos com Python e desenvolvimento de soluções de processamento de dados em tempo real.': 'Construção de aplicações backend escaláveis, automação de processos com Python e desenvolvimento de soluções de processamento de dados em tempo real.',
      'Início da especialização em backend, desenvolvimento de APIs, aprendizado de boas práticas de desenvolvimento e participação em projetos de inovação.': 'Início da especialização em backend, desenvolvimento de APIs, aprendizado de boas práticas de desenvolvimento e participação em projetos de inovação.',
      
      // Projects Section
      'High-Performance API Gateway': 'Gateway de APIs de Alta Performance',
      'Sistema de gateway de APIs escalável com rate limiting, autenticação JWT e balanceamento de carga automático. Processa mais de 10k requests/segundo.': 'Sistema de gateway de APIs escalável com rate limiting, autenticação JWT e balanceamento de carga automático. Processa mais de 10k requests/segundo.',
      'Real-time Data Pipeline': 'Pipeline de Dados em Tempo Real',
      'Pipeline de processamento de dados em tempo real com Apache Kafka, processando streams de dados de múltiplas fontes com baixa latência.': 'Pipeline de processamento de dados em tempo real com Apache Kafka, processando streams de dados de múltiplas fontes com baixa latência.',
      'Microservices Architecture': 'Arquitetura de Microsserviços',
      'Arquitetura completa de microsserviços com comunicação assíncrona, circuit breakers e observabilidade avançada para aplicações enterprise.': 'Arquitetura completa de microsserviços com comunicação assíncrona, circuit breakers e observabilidade avançada para aplicações enterprise.',
      'Analytics Engine': 'Engine de Analytics',
      'Engine de analytics em tempo real com processamento distribuído, capaz de analisar terabytes de dados com agregações complexas.': 'Engine de analytics em tempo real com processamento distribuído, capaz de analisar terabytes de dados com agregações complexas.',
      
      // Contact Section
      'Vamos Conversar': 'Vamos Conversar',
      'Pronto para seu próximo projeto?': 'Pronto para seu próximo projeto?',
      'Estou sempre interessado em novos desafios e oportunidades de colaboração. Vamos criar algo incrível juntos!': 'Estou sempre interessado em novos desafios e oportunidades de colaboração. Vamos criar algo incrível juntos!',
      'Email': 'Email',
      'LinkedIn': 'LinkedIn',
      'GitHub': 'GitHub',
      'Nome': 'Nome',
      'Seu nome': 'Seu nome',
      'Mensagem': 'Mensagem',
      'Conte-me sobre seu projeto...': 'Conte-me sobre seu projeto...',
      'Enviar Mensagem': 'Enviar Mensagem',
      '© 2024 Thiago Aguirre. Desenvolvido com React e Tailwind CSS.': '© 2024 Thiago Aguirre. Desenvolvido com React e Tailwind CSS.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
