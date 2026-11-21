export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
};

export const education: EducationEntry[] = [
  {
    title: "Engenharia de Computação",
    institution: "Universidade CEUMA — Campus Renascença",
    period: "Em andamento · 4º período",
    status: "Em andamento",
    description:
      "Graduação em andamento em São Luís – MA, com estudos em programação, estruturas de dados, bancos de dados, redes neurais e engenharia de software.",
  },
];
