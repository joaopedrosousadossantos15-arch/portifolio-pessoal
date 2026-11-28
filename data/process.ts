export type ProcessIcon = "search" | "layout" | "code" | "check" | "send";

export type ProcessStep = {
  title: string;
  description: string;
  icon: ProcessIcon;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Entender",
    description: "Levanto requisitos, regras de negócio e o problema real a ser resolvido.",
    icon: "search",
  },
  {
    title: "Modelar",
    description: "Organizo a solução com diagramas UML, MER/DER e a arquitetura do sistema.",
    icon: "layout",
  },
  {
    title: "Desenvolver",
    description: "Construo APIs e back-end com Java, Spring Boot e boas práticas.",
    icon: "code",
  },
  {
    title: "Testar",
    description: "Valido fluxos, trato erros e reviso o código antes da entrega.",
    icon: "check",
  },
  {
    title: "Entregar",
    description: "Publico, documento e deixo o projeto pronto para evoluir.",
    icon: "send",
  },
];
