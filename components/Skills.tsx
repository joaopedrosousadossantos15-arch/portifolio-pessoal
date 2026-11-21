import { ArrowUpRight, Layers3 } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section className="section-wrap section-block skills-section mx-auto" id="habilidades">
      <Reveal>
        <SectionHeading eyebrow="Caixa de ferramentas" title="Conhecimento em prática.">
          <p>Tecnologias, ferramentas e fundamentos aplicados em projetos acadêmicos e pessoais.</p>
        </SectionHeading>
      </Reveal>
      <div className="skills-layout">
        <div className="skills-aside">
          <span className="skills-icon"><Layers3 size={24} /></span>
          <p>Meu foco atual é evoluir como desenvolvedor Java completo, combinando back-end robusto com boas práticas de engenharia.</p>
          <a href="#contato">Vamos construir algo? <ArrowUpRight size={15} /></a>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal delay={(index % 2) * 0.07} key={group.title}>
              <article className="skill-card">
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="tag-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
