export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
};

export const education: EducationEntry[] = [
  {
    title: "Nome do curso ou formação",
    institution: "Nome da instituição",
    period: "AAAA — em andamento",
    status: "Em andamento",
    description:
      "Adicione uma breve descrição sobre sua formação, áreas de estudo ou atividades relevantes.",
  },
  {
    title: "Curso ou certificação",
    institution: "Instituição responsável",
    period: "AAAA",
    status: "Concluído",
    description:
      "Informe a carga horária e o que você desenvolveu ou aprendeu, se for relevante.",
  },
];
