import { CheckCircle2, Code2, LayoutTemplate, Search, Send, Sparkle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { education } from "@/data/education";
import { personal } from "@/data/personal";
import { processSteps, type ProcessIcon } from "@/data/process";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

const processIcons: Record<ProcessIcon, LucideIcon> = {
  search: Search,
  layout: LayoutTemplate,
  code: Code2,
  check: CheckCircle2,
  send: Send,
};

export function About() {
  return (
    <section className="about-section" id="formacao" aria-label="Formação, habilidades e processo">
      <div className="about-grid section-wrap mx-auto">
        <Reveal className="about-column">
          <h2 className="column-title">Formação & habilidades</h2>

          <h3 className="column-label">Formação</h3>
          <ul className="education-list">
            {education.map((item) => (
              <li key={`${item.title}-${item.institution}`}>
                <div className="education-top">
                  <strong>{item.title}</strong>
                  <span>{item.period}</span>
                </div>
                <p>{item.institution}</p>
              </li>
            ))}
          </ul>

          <h3 className="column-label">Habilidades</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <span className="skill-group-title">{group.title}</span>
                <ul className="chip-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-column process-column" delay={0.08}>
          <h2 className="column-title" id="processo">Processo de trabalho</h2>
          <ol className="process-list">
            {processSteps.map((step, index) => {
              const Icon = processIcons[step.icon];
              return (
                <li key={step.title}>
                  <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="process-icon">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal className="quote-card" delay={0.16}>
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>{personal.quote}</blockquote>
          <p className="quote-signature">{personal.shortName}</p>
          <a className="quote-cta" href="#contato">
            Vamos criar algo juntos <Sparkle size={13} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
