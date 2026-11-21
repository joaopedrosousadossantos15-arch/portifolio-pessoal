export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  accent: "lavender" | "mint" | "peach";
  liveUrl?: string;
  sourceUrl?: string;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Orienta Pós",
    category: "Plataforma acadêmica · Java",
    description:
      "Plataforma para encontrar especializações, mestrados e doutorados em tecnologia usando dados oficiais da CAPES. Inclui busca por localização e país, cadastro com verificação por e-mail e área administrativa.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: ["Autenticação e verificação por e-mail", "Documentação com 8 diagramas UML"],
    accent: "lavender",
  },
  {
    title: "Central de Cursos",
    category: "Plataforma pessoal · Java",
    description:
      "Aplicação local para centralizar cursos do Telegram, acompanhar o progresso de estudos e praticar com exercícios organizados por tecnologia e nível.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: ["Controle de progresso", "Exercícios por tecnologia e nível"],
    accent: "mint",
  },
  {
    title: "IRIS",
    category: "Sistema inteligente · Visão computacional",
    description:
      "Sistema de presença por reconhecimento facial para as ligas acadêmicas de tecnologia da CEUMA. Desenvolvi o back-end da API e a documentação dos fluxos e painéis.",
    technologies: ["Python", "FastAPI", "InsightFace", "PostgreSQL", "pgvector", "Docker Compose", "Azure"],
    highlights: ["Back-end e documentação", "Arquitetura com bancos vetoriais"],
    accent: "peach",
  },
  {
    title: "Sistema Inteligente de Extração de Documentos",
    category: "Aplicação acadêmica · IA",
    description:
      "Sistema que recebe PDFs e imagens de comprovantes, usa IA generativa para extrair dados em JSON e permite revisão humana antes de salvar no banco.",
    technologies: ["PHP", "MVC", "MySQL", "HTML", "CSS", "JavaScript", "LGPD"],
    highlights: ["Camada de IA desacoplada", "Revisão humana dos dados"],
    accent: "lavender",
  },
  {
    title: "Barsa",
    category: "Portal de notícias · Projeto acadêmico",
    description:
      "Portal colaborativo de notícias verificadas com integração à NewsAPI, recursos sociais e sistema de gamificação baseado em XP.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL", "NewsAPI"],
    highlights: ["Integração com API externa", "Gamificação e XP"],
    accent: "mint",
  },
  {
    title: "Site da LIA",
    category: "Site institucional · GitHub Pages",
    description:
      "Site institucional da Liga Acadêmica de Inteligência Artificial da CEUMA, desenvolvido em parceria para apresentar a liga e suas atividades.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    highlights: ["Desenvolvimento colaborativo", "Publicação institucional"],
    accent: "peach",
  },
];
