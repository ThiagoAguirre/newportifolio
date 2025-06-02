const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Vamos Conversar
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para seu próximo projeto?
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Estou sempre interessado em novos desafios e oportunidades de colaboração. 
              Vamos criar algo incrível juntos!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">@</span>
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-white/70">thiago.aguirre@email.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">in</span>
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-white/70">linkedin.com/in/thiago-aguirre</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">gh</span>
              </div>
              <div>
                <p className="text-white font-semibold">GitHub</p>
                <p className="text-white/70">github.com/thiagoaguirre</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2 font-semibold">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2 font-semibold">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Conte-me sobre seu projeto..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-white/10">
        <p className="text-white/60">
          © 2024 Thiago Aguirre. Desenvolvido com React e Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
