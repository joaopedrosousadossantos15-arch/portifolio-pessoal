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
    title: "Projeto em destaque",
    category: "Produto digital · 2025",
    description:
      "Substitua por uma descrição do desafio, da solução desenvolvida e do impacto deste projeto.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Experiência responsiva", "Interface acessível"],
    accent: "lavender",
    isPlaceholder: true,
  },
  {
    title: "Uma ideia em construção",
    category: "Aplicação web · 2025",
    description:
      "Conte aqui como seu projeto funciona, para quem foi criado e quais decisões técnicas merecem destaque.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    highlights: ["Fluxo intuitivo", "Dados organizados"],
    accent: "mint",
    isPlaceholder: true,
  },
  {
    title: "Experimento pessoal",
    category: "Estudo · 2024",
    description:
      "Apresente um projeto autoral, um estudo de caso ou uma contribuição que represente sua forma de pensar.",
    technologies: ["Figma", "JavaScript", "CSS"],
    highlights: ["Prototipação", "Design system"],
    accent: "peach",
    isPlaceholder: true,
  },
];
