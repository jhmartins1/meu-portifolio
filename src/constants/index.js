import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sabetudo,
  darkflix,
  hoobank,
  arismario,
  renzo,
  paula,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Nodejs Developer",
    icon: nodejs,
  },
  {
    title: "Reactjs Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desenvolvedor PHP",
    company_name: "UnB",
    icon: html,
    iconBg: "#383E56",
    date: "Junho 2021 - Agosto 2021",
    points: [
      "Desenvolvimento de sistema web em php e mysql.",
      "Inclusão de dados por meio de excel.",
      "Implementação de design responsivo e garatindo compatibilidade.",
    ],
  },
  {
    title: "Desenvolvedor Full-Stack",
    company_name: "EVOLUE",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Junho 2022 - **",
    points: [
      "Desenvolvimento de plataformas EAD.",
      "Desenvolvimento e manutenção de aplicações web usando PHP e Laravel.",
      "Desenvolvimento e manutenção de aplicações baseados em microserviços, Nodejs e Reactjs.",
      "Automação de softwares utilizando Python(Selenium).",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eu pensei que era impossível fazer um site tão bonito quanto o nosso produto, mas João Heitor provou que eu estava errado.",
    name: "Arismario Neves",
    designation: "Tech Leader",
    company: "Matriz",
    image: arismario,
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor da Web que realmente se preocupasse com o sucesso de seus clientes como João Heitor.",
    name: "Renzo Nogueira",
    designation: "Software Enginer",
    company: "Matriz",
    image: renzo,
  },
  {
    testimonial:
      "Depois que João otimizou nosso site, nosso tráfego aumentou 50%. Não podemos agradecê-los o suficiente.",
    name: "Paula Iohanne",
    designation: "CMO",
    company: "Ameise Group",
    image: paula,
  },
];

const projects = [
  {
    name: "Sabe Tudo",
    description:
      "O Sabe-Tudo é um chatbot que utiliza a API da OpenAI para fornecer respostas precisas e úteis para uma variedade de perguntas e consultas. Ele é baseado no ChatGPT.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: sabetudo,
    source_code_link: "https://github.com/jhmartins1/sabe-tudo-web",
  },
  {
    name: "DarkFlix",
    description:
      "DarkFlix é uma plataforma de filmes gratuitos disponibilizado pra você assiste qualquer filme ou serie, simples e modesta.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: darkflix,
    source_code_link: "https://github.com/jhmartins1/dark-flix-react",
  },
  {
    name: "Hookbank",
    description:
      "Um site moderno ux/ui sobre um sistema de banco com pagamento revolucionario feito em react e tailwind .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/jhmartins1/react-banco-moderno",
  },
];

export { services, technologies, experiences, testimonials, projects };
