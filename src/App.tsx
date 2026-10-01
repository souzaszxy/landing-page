import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="container nav">

          <a href="#inicio" className="logo">
            <span>&lt;/&gt;</span>
            SENAI TECH
          </a>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#aprendizado">Aprendizado</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#mercado">Mercado</a>
            <a href="#projetos">Projetos</a>
          </nav>

          <a href="#cta" className="nav-button">
            Conheça o curso
          </a>

        </div>
      </header>


      <main>

        {/* ================= HERO ================= */}
        <section className="hero" id="inicio">

          <div className="container hero-content">

            <div className="hero-text">

              <span className="eyebrow">
                SENAI • TECNOLOGIA
              </span>

              <h1>
                Transforme ideias em
                <span> sistemas.</span>
              </h1>

              <p>
                Aprenda a criar soluções digitais, desenvolver aplicações
                e construir seu futuro na área de tecnologia.
              </p>

              <div className="hero-buttons">

                <a href="#sobre" className="button primary">
                  Conheça o curso →
                </a>

                <a href="#aprendizado" className="button secondary">
                  O que você vai aprender
                </a>

              </div>

              <div className="hero-info">

                <div>
                  <strong>01</strong>
                  <span>Programação</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Projetos</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Tecnologia</span>
                </div>

              </div>

            </div>


            {/* ÁREA VISUAL DO HERO */}
            <div className="hero-visual">

              <div className="code-window">

                <div className="window-top">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <small>
                    developer.js
                  </small>

                </div>


                <div className="code">

                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    <span className="green">
                      criatividade
                    </span>
                    : <span className="orange">true</span>,
                  </p>

                  <p className="indent">
                    <span className="green">
                      tecnologia
                    </span>
                    : <span className="orange">
                      "future"
                    </span>,
                  </p>

                  <p className="indent">
                    <span className="green">
                      aprendizado
                    </span>
                    : <span className="orange">
                      "constante"
                    </span>
                  </p>

                  <p>
                    {"}"}
                  </p>

                  <p className="code-comment">
                    // Seu próximo projeto começa aqui.
                  </p>

                </div>

              </div>


              <div className="floating-card card-one">

                <span>⚡</span>

                <div>
                  <strong>
                    + Tecnologia
                  </strong>

                  <small>
                    Aprendizado prático
                  </small>
                </div>

              </div>


              <div className="floating-card card-two">

                <span>🚀</span>

                <div>
                  <strong>
                    Seu futuro
                  </strong>

                  <small>
                    Começa aqui
                  </small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SOBRE O CURSO ================= */}
        <section className="section about" id="sobre">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                SOBRE O CURSO
              </span>

              <h2>
                Aprenda a transformar
                <span> problemas em soluções.</span>
              </h2>

              <p>
                Desenvolvimento de Sistemas é a área responsável por criar,
                implementar e manter sistemas e aplicações que facilitam
                tarefas e resolvem problemas do dia a dia.
              </p>

            </div>


            <div className="about-grid">

              <div className="about-card main-about">

                <div className="icon">
                  &lt;/&gt;
                </div>

                <h3>
                  O que é Desenvolvimento de Sistemas?
                </h3>

                <p>
                  É o processo de criar soluções digitais utilizando
                  programação, bancos de dados e diferentes tecnologias.
                  Desenvolvedores transformam ideias e necessidades em
                  sistemas que podem ser utilizados por pessoas e empresas.
                </p>

              </div>


              <div className="about-card">

                <span className="number">
                  01
                </span>

                <h3>
                  Crie
                </h3>

                <p>
                  Desenvolva sites, sistemas, aplicativos e outras
                  soluções digitais.
                </p>

              </div>


              <div className="about-card">

                <span className="number">
                  02
                </span>

                <h3>
                  Resolva
                </h3>

                <p>
                  Utilize lógica e tecnologia para encontrar soluções
                  para diferentes problemas.
                </p>

              </div>


              <div className="about-card">

                <span className="number">
                  03
                </span>

                <h3>
                  Inove
                </h3>

                <p>
                  Explore novas tecnologias e transforme ideias em
                  projetos reais.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= APRENDIZADO ================= */}
        <section
          className="section learning"
          id="aprendizado"
        >

          <div className="container">

            <div className="section-heading centered">

              <span className="section-label">
                APRENDIZADO
              </span>

              <h2>
                O que você vai
                <span> aprender?</span>
              </h2>

              <p>
                Durante sua formação, você terá contato com diferentes
                conceitos e ferramentas utilizados no desenvolvimento
                de sistemas.
              </p>

            </div>


            <div className="learning-grid">

              <article className="learning-card">

                <div className="card-icon">
                  01
                </div>

                <h3>
                  Lógica de programação
                </h3>

                <p>
                  Desenvolva seu raciocínio lógico e aprenda a estruturar
                  soluções utilizando código.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  02
                </div>

                <h3>
                  Desenvolvimento Web
                </h3>

                <p>
                  Crie interfaces modernas e aplicações para a web.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  03
                </div>

                <h3>
                  Frontend
                </h3>

                <p>
                  Desenvolva a parte visual e interativa de aplicações.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  04
                </div>

                <h3>
                  Backend
                </h3>

                <p>
                  Aprenda a construir a lógica e os serviços por trás
                  das aplicações.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  05
                </div>

                <h3>
                  Banco de dados
                </h3>

                <p>
                  Organize, armazene e consulte informações de sistemas.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  06
                </div>

                <h3>
                  APIs
                </h3>

                <p>
                  Entenda como diferentes sistemas podem se comunicar.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  07
                </div>

                <h3>
                  Aplicativos
                </h3>

                <p>
                  Conheça conceitos relacionados ao desenvolvimento
                  de aplicações.
                </p>

              </article>


              <article className="learning-card">

                <div className="card-icon">
                  08
                </div>

                <h3>
                  Versionamento
                </h3>

                <p>
                  Utilize ferramentas como Git para controlar a evolução
                  dos projetos.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* ================= TECNOLOGIAS ================= */}
        <section
          className="section technologies"
          id="tecnologias"
        >

          <div className="container">

            <div className="tech-layout">

              <div className="section-heading">

                <span className="section-label">
                  TECNOLOGIAS
                </span>

                <h2>
                  Ferramentas para
                  <span> construir o futuro.</span>
                </h2>

                <p>
                  Conheça algumas das tecnologias e ferramentas relacionadas
                  ao universo do desenvolvimento de sistemas.
                </p>

              </div>


              <div className="tech-grid">

                <div className="tech-item html">
                  <strong>HTML</strong>
                  <span>Estrutura</span>
                </div>

                <div className="tech-item css">
                  <strong>CSS</strong>
                  <span>Estilo</span>
                </div>

                <div className="tech-item js">
                  <strong>JS</strong>
                  <span>JavaScript</span>
                </div>

                <div className="tech-item react">
                  <strong>⚛</strong>
                  <span>React</span>
                </div>

                <div className="tech-item node">
                  <strong>JS</strong>
                  <span>Node.js</span>
                </div>

                <div className="tech-item sql">
                  <strong>SQL</strong>
                  <span>Banco de dados</span>
                </div>

                <div className="tech-item git">
                  <strong>◆</strong>
                  <span>Git</span>
                </div>

                <div className="tech-item github">
                  <strong>◉</strong>
                  <span>GitHub</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= ÁREAS DE ATUAÇÃO ================= */}
        <section
          className="section market"
          id="mercado"
        >

          <div className="container">

            <div className="section-heading centered">

              <span className="section-label">
                ÁREAS DE ATUAÇÃO
              </span>

              <h2>
                Onde você pode
                <span> atuar?</span>
              </h2>

              <p>
                O conhecimento em desenvolvimento de sistemas pode abrir
                diferentes possibilidades dentro do mercado de tecnologia.
              </p>

            </div>


            <div className="market-grid">

              <div className="market-card">

                <span>01</span>

                <h3>
                  Frontend
                </h3>

                <p>
                  Criação de interfaces e experiências digitais para
                  usuários.
                </p>

                <div className="arrow">
                  ↗
                </div>

              </div>


              <div className="market-card">

                <span>02</span>

                <h3>
                  Backend
                </h3>

                <p>
                  Desenvolvimento da lógica, serviços e funcionalidades
                  dos sistemas.
                </p>

                <div className="arrow">
                  ↗
                </div>

              </div>


              <div className="market-card">

                <span>03</span>

                <h3>
                  Full Stack
                </h3>

                <p>
                  Atuação tanto no frontend quanto no backend de aplicações.
                </p>

                <div className="arrow">
                  ↗
                </div>

              </div>


              <div className="market-card">

                <span>04</span>

                <h3>
                  Aplicações
                </h3>

                <p>
                  Desenvolvimento de sistemas e aplicações para diferentes
                  necessidades.
                </p>

                <div className="arrow">
                  ↗
                </div>

              </div>


              <div className="market-card">

                <span>05</span>

                <h3>
                  Banco de dados
                </h3>

                <p>
                  Organização, manutenção e gerenciamento de informações.
                </p>

                <div className="arrow">
                  ↗
                </div>

              </div>


              <div className="market-card">

                <span>06</span>

                <h3>
                  Suporte
                </h3>

                <p>
                  Manutenção, análise e suporte para sistemas e aplicações.
                </p>

                <div className="arrow">
                  ↗
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROJETOS ================= */}
        <section
          className="section projects"
          id="projetos"
        >

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                PROJETOS
              </span>

              <h2>
                Coloque o conhecimento
                <span> em prática.</span>
              </h2>

              <p>
                Durante sua jornada, você pode aplicar seus conhecimentos
                na criação de diferentes tipos de sistemas.
              </p>

            </div>


            <div className="projects-grid">

              <div className="project project-large">

                <div className="project-content">

                  <span>
                    SISTEMA
                  </span>

                  <h3>
                    Cadastro de clientes
                  </h3>

                  <p>
                    Uma aplicação para registrar, consultar e gerenciar
                    clientes.
                  </p>

                </div>

                <div className="project-number">
                  01
                </div>

              </div>


              <div className="project">

                <div className="project-content">

                  <span>
                    GESTÃO
                  </span>

                  <h3>
                    Sistema de estoque
                  </h3>

                  <p>
                    Controle de produtos e movimentações.
                  </p>

                </div>

                <div className="project-number">
                  02
                </div>

              </div>


              <div className="project">

                <div className="project-content">

                  <span>
                    WEB
                  </span>

                  <h3>
                    Loja virtual
                  </h3>

                  <p>
                    Uma experiência de compra digital.
                  </p>

                </div>

                <div className="project-number">
                  03
                </div>

              </div>


              <div className="project">

                <div className="project-content">

                  <span>
                    PRODUTIVIDADE
                  </span>

                  <h3>
                    Aplicativo de tarefas
                  </h3>

                  <p>
                    Organização de tarefas e atividades.
                  </p>

                </div>

                <div className="project-number">
                  04
                </div>

              </div>


              <div className="project">

                <div className="project-content">

                  <span>
                    DASHBOARD
                  </span>

                  <h3>
                    Painel administrativo
                  </h3>

                  <p>
                    Visualização e gerenciamento de informações.
                  </p>

                </div>

                <div className="project-number">
                  05
                </div>

              </div>


              <div className="project project-large">

                <div className="project-content">

                  <span>
                    SERVIÇOS
                  </span>

                  <h3>
                    Sistema de agendamentos
                  </h3>

                  <p>
                    Uma solução para organizar horários e atendimentos.
                  </p>

                </div>

                <div className="project-number">
                  06
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section
          className="cta"
          id="cta"
        >

          <div className="container">

            <div className="cta-content">

              <span className="section-label">
                SEU PRÓXIMO PASSO
              </span>

              <h2>
                Seu futuro na tecnologia
                <span> pode começar aqui.</span>
              </h2>

              <p>
                Conheça o curso Técnico em Desenvolvimento de Sistemas
                e comece a construir suas próprias soluções.
              </p>

              <a
                href="#inicio"
                className="button cta-button"
              >
                Conheça o curso →
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container footer-content">

          <div>

            <a
              href="#inicio"
              className="logo"
            >
              <span>&lt;/&gt;</span>
              SENAI TECH
            </a>

            <p>
              Técnico em Desenvolvimento de Sistemas.
            </p>

          </div>


          <div className="footer-info">

            <span>
              SENAI
            </span>

            <span>
              2026
            </span>

            <span>
              Nome do aluno
            </span>

          </div>

        </div>


        <div className="container footer-bottom">

          <span>
            © 2026 SENAI Tech
          </span>

          <span>
            Projeto acadêmico
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;
