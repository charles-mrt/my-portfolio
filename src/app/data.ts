import javascript from '/public/assets/technologies/javascript.svg';
import reactjs from '/public/assets/technologies/reactjs.svg';
import reactnative from '/public/assets/technologies/reactnative.svg';
import nextjs from '/public/assets/technologies/nextjs.svg';
import nodejs from '/public/assets/technologies/nodejs.svg';
import typescript from '/public/assets/technologies/typescript.svg';
import php from '/public/assets/technologies/php.svg';
import socketio from '/public/assets/technologies/socketio.svg';
import wordpress from '/public/assets/technologies/wordpress.svg';
import css from '/public/assets/technologies/css.svg';
import cssmodule from '/public/assets/technologies/cssmodule.svg';
import sass from '/public/assets/technologies/sass.svg';
import styledcomponent from '/public/assets/technologies/styledcomponent.svg';
import mongodb from '/public/assets/technologies/mongodb.svg';
import tailwind from '/public/assets/technologies/tailwind.svg';
import html from '/public/assets/technologies/html.svg';
import figma from '/public/assets/technologies/figma.svg';


import vertigo_login from '/public/assets/projects/vertigo-login.jpg'
import design_system from '/public/assets/projects/design-system.jpg'
import let_me_ask from '/public/assets/projects/letmeask.jpg'
import filter_category from '/public/assets/projects/toggle-filtro-categoria.jpg'
import star_rating from '/public/assets/projects/star-rating.jpg'
import sidebar_widget from '/public/assets/projects/sidebar-widget.jpg'
import happy from '/public/assets/projects/happy.jpg'
import podcast_time from '/public/assets/projects/podcast-time.jpg'
import portfolio from '/public/assets/projects/portfolio.jpg'
import moveit from '/public/assets/projects/moveit.jpg'
import hang_man_game from '/public/assets/projects/hangman-game.jpg'
import my_code_draws from '/public/assets/projects/my-code-draws.jpg'
import tic_tac_game from '/public/assets/projects/tic-tac-game.jpg'
import kids_ckeckin from '/public/assets/projects/kids-checkin.jpg'
import lorraine_nail_designer from '/public/assets/projects/lorraine-nail-designer.jpg'
import multitrack_br from '/public/assets/projects/multitrack-br.jpg'

export const projectsData = [
  {
    is_public: true,
    image: kids_ckeckin,
    alt: "kids check-in",
    title: "kids check-in",
    tecnologies: [reactjs, nextjs, typescript, nodejs, mongodb, tailwind, figma],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind"],
    description: "O Kids é uma plataforma projetada para otimizar a gestão de crianças em ambientes institucionais, como igrejas. O design foi cuidadosamente desenvolvido para ser intuitivo e fácil de usar, garantindo uma experiência fluida para todos os usuários. Utilizando a tecnologia Progressive Web App (PWA), a plataforma combina a conveniência de um aplicativo com a acessibilidade de um site, proporcionando um acesso rápido e confiável em qualquer dispositivo, seja desktop ou móvel. Atualmente, o sistema está em operação na Igreja Palavra Viva Canasvieiras. A principal função do sistema é registrar a presença das crianças quando chegam ao culto. O processo é simples: ao chegar, os pais levam as crianças até o professor, e o sistema marca a presença automaticamente. Em seguida, a criança recebe uma pulseira com sua matrícula, garantindo a identificação e acesso às funcionalidades do sistema. O Kids oferece um conjunto abrangente de funcionalidades, incluindo: Cadastro Detalhado: Armazena informações essenciais sobre cada criança, como alergias, condições especiais e necessidades individuais. Perfis Administrativos: Facilita a gestão e o acompanhamento das atividades por parte dos administradores e professores. Comunicação Direta: Permite o contato rápido com os pais por meio de uma integração com o WhatsApp, promovendo uma comunicação eficiente em situações importantes. Monitoramento em Tempo Real: Acompanha todas as atividades, desde check-ins até check-outs, de forma instantânea. Essa plataforma visa melhorar a organização e a segurança, proporcionando uma experiência mais eficiente e transparente para todos os envolvidos. Esse projeto foi desenvolvido em equipe Charles Martins e Lucas Reis",
    tec_description: "reactjs, nextjs, typescript, nodejs, tailwind , mongodb, figma",
    url: "",
    github: ""
  },
  {
    is_public: true,
    image: lorraine_nail_designer,
    alt: "lorraine nail designer",
    title: "lorraine nail designer",
    tecnologies: [reactjs, nextjs, typescript,tailwind, figma],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind"],
    description: " Lorraine Nail Designer, é um projeto  para um salão especializado em cuidados e design de unhas. O objetivo principal foi criar uma página intuitiva e eficiente que facilitasse a gestão de agendamentos e melhorasse a experiência dos clientes. Agendamentos Online: A página permite que os clientes agendem seus serviços diretamente online. Com um design amigável e fácil de navegar, os usuários podem selecionar o serviço desejado e escolher o horário que melhor se adapta à sua agenda. O sistema está integrado com o Google Agenda. Isso significa que todas as reservas feitas através da landing page são automaticamente sincronizadas com o Google Agenda de Lorraine. Assim, tanto os clientes quanto Lorraine recebem notificações e lembretes automáticos, reduzindo o risco de esquecimentos e melhorando a organização do salão.",
    tec_description: "reactjs, nextjs, typescript, tailwind, figma, google agenda",
    url: "https://esmalterialorrainebarros.vercel.app",
    github: ""
  },

  {
    is_public: true,
    image: multitrack_br,
    alt: "multitrack-br",
    title: "multitrack-br",
    tecnologies: [reactjs, nextjs, typescript,tailwind, figma],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind"],
    description: "Esta landing page foi desenvolvida para a Multitrack BR. O foco da página é promover a venda de faixas de áudio, destacando os produtos oferecidos em uma seção de promoção. Os clientes podem adquirir produtos através de opções selecionáveis, e, de forma dinâmica, uma mensagem pré-formatada é enviada para a Multitrack via WhatsApp, facilitando a comunicação e o fechamento da venda. A página conta com seções de perguntas frequentes, informações sobre a Multitrack, depoimentos de clientes e várias chamadas para ação, otimizando a experiência do usuário e incentivando as conversões. Esses elementos tornam a página envolvente e informativa, ajudando a construir confiança e aumentar as vendas.",
    tec_description: "reactjs, nextjs, typescript, tailwind, figma",
    url: "https://multitrackbr.com",
    github: ""
  },
  
  {
    is_public: false,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGcxYmh1dW05bTh1azFxcWNicWpxdjh1cW03MnNpOWZwNDJmbHFjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/evHtzG1TLlQh9CSsHd/giphy.gif",
    alt: "tech world login",
    title: "tech world login",
    tecnologies: [ reactjs, nextjs, typescript, tailwind, nodejs, figma],
    categories: ["todas",  "reactjs", "nextjs", "typescript", "tailwind", "nodejs", "figma"],
    description: "Tech World Login é um sistema de autenticação e registro de usuários com um design minimalista e contemporâneo. Além disso, oferece um plano de fundo interativo que permite personalizar as cores e imagens de fundo de acordo com suas preferências. Além disso, a plataforma dispõe de um painel administrativo intuitivo que permite aos usuários gerenciar facilmente as informações da conta.",
    tec_description: "reactjs, reactjs, nextjs, typescript, tailwind, nodejs, figma",
    url: "",
    github: "https://github.com/charles-mrt/tech-world-login"
  },
  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGcxYmh1dW05bTh1azFxcWNicWpxdjh1cW03MnNpOWZwNDJmbHFjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/evHtzG1TLlQh9CSsHd/giphy.gif",
    alt: "walk landing page",
    title: "walk",
    tecnologies: [reactjs, cssmodule],
    categories: ["todas", "reactjs", "cssmodule"],
    description: "WALK é um projeto de landing page para venda de tênis. O foco da página é direcionar o usuário a aquisição do produto, através de uma página atraente, onde os modelos de tênis são exibidos em slide. Entre as transições dos modelos ocorre a alteração da cor de fundo baseado nas cores do tênis.",
    tec_description: "reactjs, cssmodule",
    url: "http://walk-ld-page-charles-mrt.vercel.app/",
    github: "https://github.com/charles-mrt/walk"
  },
  {
    is_public: true,
    image: hang_man_game,
    alt: "hang man game",
    title: "hang man game",
    tecnologies: [reactjs, nextjs, typescript, tailwind],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind", "game"],
    description: "'Hang man Game' é uma versão digital do clássico jogo da Forca, no qual os participantes tentam adivinhar uma palavra oculta ao arriscar letras a cada tentativa. A dinâmica do jogo envolve descobrir a palavra antes que um desenho completo do enforcado seja desenhado.",
    tec_description: "reactjs, nextjs, typescript, tailwind",
    url: "https://hangman-game-weld.vercel.app/",
    github: "https://github.com/charles-mrt/hangman-game"
  },
  
  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjd5aXAxZ29ubXNsbjhxYzZtazV0aDdleDJraWR0NDhyNzRzNTNrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WqEcA6aRIBXQGbR2Ne/giphy.gif",
    alt: "planning poker",
    title: "planning poker",
    tecnologies: [nodejs, reactjs, nextjs, typescript, socketio, tailwind, figma],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind", "nodejs", "game"],
    description: "O Planning Poker é um sistema destinado a simplificar a estimativa de esforço temporal. Através de uma abordagem inovadora que combina a gamificação do planning poker com o método T-shirt sizing, proporcionando uma maneira eficaz de colaboração entre os participantes, aproveitando a tecnologia de socket para interações em tempo real. E o melhor de tudo: esta plataforma é inteiramente gratuita. Agora, sua equipe pode estimar projetos com precisão e envolvimento, aproveitando os benefícios da interatividade em tempo real, sem nenhum custo associado. Esse projeto foi desenvolvido em equipe. Front-end: Charles Martins. Backend: Lucas Reis e Renato Viegas",
    tec_description: "nodejs, reactjs, nextjs, typescript, socketio, tailwind, figma",
    url: "",
    github: "https://github.com/charles-mrt/planning-poker-client"
  },
  
  {
    is_public: true,
    image: my_code_draws,
    alt: "my code draws",
    title: "my code draws",
    tecnologies: [reactjs, nextjs, typescript ,javascript ,css ,html],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind","javascript" ,"css" ,"html", "code-art"],
    description: "My Code Draws é o meu espaço digital, onde dou vida às minhas criações artísticas usando código. Neste site, mergulho na fascinante interseção entre arte e programação para expressar minha criatividade. De formas simples a composições mais complexas, o My Code Draws é o meu ateliê virtual, onde cada linha de código se transforma em uma desenho digital. Descubra o poder da programação criativa no My Code Draws, o meu espaço pessoal para explorar e compartilhar o mundo emocionante das artes com código.",
    tec_description: "reactjs, nextjs, typescript, javascript ,css ,html",
    url: "https://my-code-draws.vercel.app/",
    github: "https://github.com/charles-mrt/my-code-draws"
  },
  
  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FlM2owOW85cThiZ2tsb2wxeGF5dm94ZW5veHlhb3ZiNDl1YjhzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xzl64JLv8e9GQhq1u0/giphy.gif",
    alt: "espaço conecta",
    title: "espaço conecta",
    tecnologies: [php, wordpress, html, javascript, css],
    categories: ["todas", "php", "wordpress", "html", "javascript", "css"],
    description: "Um tema WordPress projetado para o Espaço Conecta, focado principalmente em impulsionar as estratégias de marketing digital para afiliados e empreendedores digitais. Construído com uma abordagem centrada na conversão e na experiência do usuário, apresentando um layout minimalista.",
    tec_description: "php, wordpress, html, javascript, css",
    url: "",
    github: "https://github.com/charles-mrt/espaco-conecta-theme"
  },

  {
    is_public: true,
    image: moveit,
    alt: "move it",
    title: "move it",
    tecnologies: [reactjs, nextjs, typescript, cssmodule],
    categories: ["todas", "reactjs", "nextjs", "typescript", "cssmodule"],
    description: "Move-it é um aplicativo web baseado na técnica Pomodoro que combina intervalos regulares de trabalho ou estudo com atividades físicas leves, como alongamentos. Os usuários ganham pontos e sobem de níveis à medida que completam as atividades, tornando a experiência mais envolvente e motivadora. Além disso, o aplicativo apresenta um gráfico que permite aos usuários acompanhar sua pontuação ao longo do tempo, oferecendo uma visão de seu progresso.",
    tec_description: "reactjs, nextjs, typescript, cssmodule",
    url: "https://move-it-nlw4-charles-mrt.vercel.app/",
    github: "https://github.com/charles-mrt/nlw4-move.it/tree/main"
  },
  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFnazQ1MTMxc3IxZHM1d2xvZ2d3YWZ3aGhneGd4ajZiY2NiemMwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Syn4JbGEtyPx41Lh13/giphy.gif",
    alt: "nike lebron",
    title: "nike lebron landing page",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "landing page de alta conversão para venda de tenis com interação entre os modelos de tenis apresentados",
    tec_description: "javascript, html, css, figma",
    url: "",
    github: "https://github.com/charles-mrt/nike-lebron-landing-page"
  },
  {
    is_public: true,
    image: portfolio,
    alt: "portfolio",
    title: "portfolio",
    tecnologies: [reactjs, nextjs, typescript, tailwind],
    categories: ["todas", "reactjs", "nextjs", "typescript", "tailwind"],
    description: "Meu portfólio é um projeto que aborda minha pessoa, destacando as tecnologias nas quais tenho concentrado meus estudos, além de exibir alguns dos projetos que desenvolvi.",
    tec_description: "reactjs, nextjs, typescript, tailwind",
    url: "https://github.com/charles-mrt/my-portfolio",
    github: "https://github.com/charles-mrt/my-portfolio"
  },
  
  {
    is_public: true,
    image: tic_tac_game,
    alt: "tic tac game",
    title: "tic tac game",
    tecnologies: [javascript, html, css],
    categories: ["todas", "javascript", "html", "css", "game"],
    description: "O Tic Tac Game é uma aplicação clássica de entretenimento conhecida como 'Jogo da Velha', a qual coloca dois jogadores para competir em um tabuleiro 3x3. O objetivo é preencher uma linha horizontal, vertical ou diagonal com suas próprias peças (X ou O) antes do seu oponente. Além disso, este jogo oferece a capacidade de ativar ou desativar o som, reiniciar partidas a qualquer momento e conta com um contador de pontos para tornar as partidas ainda mais emocionantes.",
    tec_description: "javascript, html, css",
    url: "https://charles-mrt.github.io/tic-tac-game/",
    github: "https://github.com/charles-mrt/tic-tac-game"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG90em9qZzJybTNhY3cxZnhsMzIzdmw4d2l0ZGVmdXFlZm51cTV3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DlfVS1XqiklbBjoh9c/giphy.gif",
    alt: "rocket contact",
    title: "rocket contact",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "Rocket Contact é uma aplicação web que oferece aos usuários a capacidade de realizar buscas de contatos de forma rápida e eficaz.",
    tec_description: "javascript, html, css, figma",
    url: "https://charles-mrt.github.io/rocket-contact/",
    github: "https://github.com/charles-mrt/rocket-contact"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanFrOWJxOGZiNTZwNG5ub2RrcW54MWd3eGltdDIydWVlcmNtY2U5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9zBSO8XdvjnKR9uogv/giphy.gif",
    alt: "rocket upload",
    title: "rocket upload",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "Rocket Upload é uma aplicação web que permite aos utilizadores fazer upload de arquvios usando a funcionalidade de arrastar e soltar.",
    tec_description: "javascript, html, css, figma",
    url: "https://charles-mrt.github.io/rocket-upload/",
    github: "https://github.com/charles-mrt/rocket-upload"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXdjMmUxOWZtZjFzMThvbzFuZjJpdnhycjBqYXY4dzczcXJ5ODBlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8qOeNU706QD3M1vPYE/giphy.gif",
    alt: "rocket kanban",
    title: "rocket kanban",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "Rocket Kanban é uma aplicação web que oferece uma plataforma visual e colaborativa para gerir projetos e tarefas utilizando a metodologia Kanban utilizando funcionalidade de arrastar e soltar.",
    tec_description: "javascript, html, css, figma",
    url: "https://charles-mrt.github.io/rocket-kanban/",
    github: "https://github.com/charles-mrt/rocket-kanban"
  },

  {
    is_public: true,
    image: vertigo_login,
    alt: "vertigo login",
    title: "vertigo login",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "O projeto 'Vertigo Login' é uma página web simples que demonstra como implementar uma funcionalidade de login utilizando HTML, CSS e JavaScript. A página inclui um formulário de login no qual os utilizadores podem inserir o seu nome de utilizador e palavra-passe para entrar. O projeto também inclui validação para garantir que o utilizador inseriu um nome de utilizador e palavra-passe válidos. O projeto destina-se como ponto de partida para o desenvolvimento de funcionalidades de login mais complexas em aplicações web.",
    tec_description: "javascript, html, css, figma",
    url: "https://charles-mrt.github.io/vertigo-login/",
    github: "https://github.com/charles-mrt/vertigo-login"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXFjZ3huOGNkdWRiYWZ5Zng2anRsNmJxdHE4bjQ4a25na3ZzbnB3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kIveFB6r6zelWoml93/giphy.gif",
    alt: "tomorrow it will rain",
    title: "tomorrow it will rain",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "O aplicativo 'Amanhã Choverá' é uma aplicação de previsão do tempo que permite aos utilizadores obter atualizações em tempo real sobre as condições meteorológicas de uma cidade específica. Ao fornecer o nome de uma cidade, o aplicativo exibe a temperatura atual, condição do tempo e uma previsão de cinco dias. O aplicativo foi desenvolvido utilizando HTML, CSS, JavaScript e utiliza a API do OpenWeatherMap para buscar dados meteorológicos.",
    tec_description: "javascript, html, css, figma",
    url: "https://charles-mrt.github.io/Tomorrow-will-rain/",
    github: "https://github.com/charles-mrt/Tomorrow-will-rain"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWQ4NWVtcmhhMWgwcnc2d3Fnb2ozYmlua2g5djdxcmJxMGxrNnhvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AKBoWaNnsZr9gnNhhC/giphy.gif",
    alt: "currency converter",
    title: "currency converter",
    tecnologies: [javascript, html, css, figma],
    categories: ["todas", "javascript", "html", "css", "figma"],
    description: "Currency Converter é um aplicativo que converte valores de moeda, permitindo que você insira o valor desejado e escolha o tipo de moeda. O aplicativo foi desenvolvido utilizando HTML, CSS, JavaScript e consome dados da a API Exchange Rate.",
    tec_description: "javascript, html, css, figma",
    url: "https://charles-mrt.github.io/currency-converter/",
    github: "https://github.com/charles-mrt/currency-converter"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzVwNGxjczY0eW1hdnI0Z2U4eGhpN3prbmdpajN0N3V4czFlbHVkcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BTmIskEkrvEHgKVQtv/giphy.gif",
    alt: "my grandma's clock",
    title: "my grandma's clock",
    tecnologies: [javascript, html, css],
    categories: ["todas", "javascript", "html", "css"],
    description: "My Grandma's Clock  é um app que simula um relógio de parede digital para pessoas com dificuldade em memorizar a data do mês e o ciclo do dia, especialmente ao amanhecer. É possível adicionar o nome do usuário, alterar as cores e alternar dinamicamente entre AM/PM ou os ciclos do dia, como manhã, tarde, noite e amanhecer.",
    tec_description: "javascript, html, css",
    url: "https://charles-mrt.github.io/my-grandma-clock/",
    github: "https://github.com/charles-mrt/my-grandma-clock"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHdzbjFkbHZ6ZXdod3dndzM3dmJnaG0yb3VkanlzNGdmeXp0NTc5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mPyXtFO2XZ3gZSabf6/giphy.gif",
    alt: "rocketpay",
    title: "rocketpay",
    tecnologies: [javascript, html, css],
    categories: ["todas", "javascript", "html", "css"],
    description: "O Rocketpay simula um formulário de preenchimento de cartão de crédito, com a capacidade de adicionar máscaras aos campos de entrada.",
    tec_description: "javascript, html, css",
    url: "http://rocket-pay-iota.vercel.app/",
    github: "https://github.com/charles-mrt/explorer-lab-creditcard"
  },

  {
    is_public: true,
    image: design_system,
    alt: "ignite lab design system",
    title: "ignite lab design system",
    tecnologies: [reactjs, typescript, css, figma],
    categories: ["todas", "reactjs", "typescript", "css", "figma"],
    description: "O Ignite Design System é um projeto de login com foco principal em facilitar a compreensão e a implementação de um design system. Utiliza o Storybook como plataforma para o design system e Vite como tecnologia. Este projeto simplifica o desenvolvimento e aprimora a experiência do usuário. Foi desenvolvindo durante um evento da RocketSeat.",
    tec_description: "reactjs, typescript, css, figma",
    url: "https://www.figma.com/proto/SMaUwZEnJCGJtHiDWWTuFj/Ignite-lab-design-system?type=design&node-id=1-2&t=zUmmpllmSVq4PQzB-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
    github: "https://github.com/charles-mrt/ignite-lab-design-system"
  },

  {
    is_public: true,
    image: star_rating,
    alt: "star rating shortcode for Wordpress",
    title: "star rating shortcode for Wordpress",
    tecnologies: [php, wordpress],
    categories: ["todas", "php", "wordpress"],
    description: "O Star Rating for WordPress é um plugin que adiciona uma lista de estrelas para classificar um produto ou post em seu site WordPress. Isso é feito através de um shortcode, o que significa que você pode incorporar facilmente a funcionalidade de avaliação de estrelas em suas páginas ou postagens usando um código curto específico fornecido pelo plugin.",
    tec_description: "php, wordpress",
    url: "",
    github: "https://github.com/charles-mrt/star-rating-for-wordpress"
  },

  {
    is_public: true,
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBnN2pocDdlZHV5dXNlaTlyMnByOTloeGZmdmNwY3FqNG94OXRsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1ZIE8oPCbTuQSLf8oI/giphy.gif",
    alt: "custom login wp",
    title: "custom login wp",
    tecnologies: [php, wordpress, javascript, css],
    categories: ["todas", "php", "wordpress", "javascript", "css"],
    description: "O Custom Login WP é uma funcionalidade para WordPress que reformula a página de login do WordPress, oferecendo interações visuais que operam por meio da validação de login.",
    tec_description: "php, wordpress, javascript, css",
    url: "",
    github: "https://github.com/charles-mrt/custom_loginWp"
  },

  {
    is_public: true,
    image: filter_category,
    alt: "filtro de categorias para Wordpress",
    title: "toogle para filtro de categorias",
    tecnologies: [php, wordpress, javascript, css],
    categories: ["todas", "php", "wordpress", "javascript", "css"],
    description: "O toogle é uma feature para wordpress que utiliza os plugins elementor e Livemesh addons-for-elementor. Essa feature customiza o modo em que o filtro de categorias de postagem é apresentado em telas de dispositivos móveis, através do addons Post Grid, disponível no plugin Livemesh. Facilita e melhora a maneira que a lista de postagem é apresentada.",
    tec_description: "php, wordpress, javascript, css",
    url: "",
    github: "https://github.com/charles-mrt/toogle-category-list-post-grid"
  },

  {
    is_public: false,
    image: "",
    alt: "badge do while",
    title: "badge do while",
    tecnologies: [javascript, html, css],
    categories: ["todas", "javascript", "html", "css"],
    description: "Cartão de presenta para evento do while da rocketseat. O projeto utiliza a funcionalidade de light e dark theme.",
    tec_description: "javascript, html, css",    
    url:"https://github.com/charles-mrt/projeto-Badge-Do-While2021/deployments/github-pages",
    github: "https://github.com/charles-mrt/projeto-Badge-Do-While2021"
  },

  {
    is_public: true,
    image: let_me_ask,
    alt: "let me ask",
    title: "let me ask",
    tecnologies: [reactjs, typescript, cssmodule],
    categories: ["todas", "reactjs", "typescript", "cssmodule"],
    description: "O Let me Ask é um app para criar perguntas sobre um determinado assundo, onde os usuários podem acessar a sala através de um código gerado e podem dar likes nas perguntas dos participantes, além das tecnologias mencionadas, foi utilizado o firebase. O projeto disponobiliza a escolha entre light e dark theme. O app foi criado em um evento da rocketseat.",
    tec_description: "reactjs, typescript, cssmodule",
    url: "https://letmeask-cd2e2.web.app/",
    github: "https://github.com/charles-mrt/letme-Ask/tree/master"
  },

  {
    is_public: true,
    image: podcast_time,
    alt: "podcast time",
    title: "podcast time",
    tecnologies: [reactjs, nextjs, typescript, sass],
    categories: ["todas", "reactjs", "nextjs", "typescript", "sass"],
    description: "Podcast time é um app focado em podcast, onde o usuário pode escolher os assuntos e escutar na integra. O projeto disponobiliza a escolha entre light e dark theme. O app foi criado em um evento da rocketseat.",
    tec_description: "reactjs, nextjs, typescript, sass",
    url: "http://podcast-time.vercel.app/",
    github: "https://github.com/charles-mrt/podcast-Time/tree/main"
  },

  {
    is_public: true,
    image: happy,
    alt: "happy",
    title: "happy",
    tecnologies: [reactjs, typescript, css, reactnative, nodejs],
    categories: ["todas", "reactjs", "typescript", "css", "react-native", "nodejs"],
    description: "Este projeto apresenta um sistema para registrar orfanatos, permitindo que as pessoas escolham facilmente orfanatos para visitar. Por meio de um mapa interativo, os usuários podem explorar orfanatos em sua região, tornando o processo de localização e agendamento de visitas mais acessível e eficiente. Além disso, foi desenvolvido um aplicativo móvel para proporcionar uma experiência ainda mais conveniente. Este projeto foi desenvolvido durante um evento da RocketSeat.",
    tec_description: "reactjs, typescript, css, reactNative, nodejs",
    url: "",
    github: "https://github.com/charles-mrt/Happy-nlw3-rocket-seat"
  },

  {
    is_public: true,
    image: sidebar_widget,
    alt: "sidebar widget",
    title: "sidebar widget",
    tecnologies: [php, wordpress, html, css],
    categories: ["todas", "php", "wordpress", "html", "css"],
    description: "SideBar widget é uma feature que adiciona uma sidebar no do thema Hello-Elementor. Por padrão o tema vem sem opção de sidebar.",
    tec_description: "php, wordpress, html, css",
    url: "",
    github: "https://github.com/charles-mrt/wp-default-sidebar-hello-theme-child"
  },
  {
    is_public: false,
    image: "",
    alt: "top gear template",
    title: "top gear template",
    tecnologies: [javascript, html, css],
    categories: ["todas", "javascript", "html", "css"],
    description: "Como um grande fã da série de jogos Top Gear, senti a inspiração para homenageá-la recriando uma imagem icônica do jogo, com veículos, árvores e outros elementos. Este projeto foi construído exclusivamente com código JavaScript, CSS e HTML, e está sempre em constante desenvolvimento. É uma paixão em evolução que continuamente aprimoro e expando.",
    tec_description: "javascript, html, css",
    url: "",
    github: "https://github.com/charles-mrt/top-gear-template"
  }
]