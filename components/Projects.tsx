import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section className="section-wrap section-block mx-auto" id="projetos">
      <Reveal>
        <SectionHeading eyebrow="Seleção de trabalhos" title="Projetos com propósito.">
          <p>Ideias que saíram do papel — e continuam evoluindo.</p>
        </SectionHeading>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal delay={index * 0.08} key={project.title}>
            <article className={`project-card accent-${project.accent}`}>
              <div className="project-visual" aria-hidden="true">
                <div className="preview-window">
                  <div className="preview-bar"><span /><span /><span /><i /></div>
                  <div className="preview-content">
                    <div className="preview-sidebar"><i /><i /><i /><i /></div>
                    <div className="preview-main">
                      <span className="preview-kicker">PROJETO / 0{index + 1}</span>
                      <span className="preview-title" />
                      <span className="preview-subtitle" />
                      <div className="preview-blocks"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-info">
                <div className="project-topline">
                  <span>{project.category}</span>
                  {project.isPlaceholder && <span className="placeholder-badge">Exemplo editável</span>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}><Sparkles size={13} />{highlight}</li>)}
                </ul>
                <ul className="tag-list" aria-label="Tecnologias utilizadas">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                {(project.liveUrl || project.sourceUrl) && (
                  <div className="project-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Ver projeto <ExternalLink size={14} /></a>}
                    {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">Código <Code2 size={14} /></a>}
                    <ArrowUpRight className="project-arrow" size={18} aria-hidden="true" />
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
