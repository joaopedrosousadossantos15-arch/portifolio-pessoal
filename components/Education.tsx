import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section className="section-wrap section-block mx-auto" id="trajetoria">
      <Reveal>
        <SectionHeading eyebrow="Aprendizado contínuo" title="Uma jornada em evolução.">
          <p>Formações, cursos e experiências que fazem parte do caminho.</p>
        </SectionHeading>
      </Reveal>
      <div className="education-layout">
        <div className="education-intro">
          <GraduationCap size={25} aria-hidden="true" />
          <p>A formação acadêmica complementa projetos práticos em desenvolvimento web, dados e inteligência artificial.</p>
        </div>
        <ol className="timeline">
          {education.map((item, index) => (
            <Reveal delay={index * 0.08} key={`${item.title}-${item.institution}`}>
              <li className="timeline-item">
                <span className="timeline-marker" aria-hidden="true" />
                <div className="timeline-meta"><span>{item.period}</span><span>{item.status}</span></div>
                <h3>{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                {item.description && <p className="timeline-description">{item.description}</p>}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
