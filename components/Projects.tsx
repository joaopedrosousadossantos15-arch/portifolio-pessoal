import { ArrowRight, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section className="section-wrap section-block mx-auto" id="projetos">
      <Reveal>
        <div className="section-bar">
          <h2>Projetos selecionados</h2>
          <span className="section-bar-line" aria-hidden="true" />
          {personal.profiles.github && (
            <a href={personal.profiles.github} target="_blank" rel="noreferrer">
              Ver todos <ArrowRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => {
          const number = String(index + 1).padStart(2, "0");
          const mainUrl = project.liveUrl ?? project.sourceUrl;

          return (
            <Reveal delay={(index % 3) * 0.08} key={project.title}>
              <article className={`project-card accent-${project.accent}`}>
                <div className="project-visual" aria-hidden="true">
                  <div className="preview-window">
                    <div className="preview-bar"><span /><span /><span /><i /></div>
                    <div className="preview-content">
                      <div className="preview-sidebar"><i /><i /><i /><i /></div>
                      <div className="preview-main">
                        <span className="preview-kicker">PROJETO / {number}</span>
                        <span className="preview-title" />
                        <span className="preview-subtitle" />
                        <div className="preview-blocks"><i /><i /><i /></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-row">
                  <span className="project-number">{number}</span>
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  {mainUrl ? (
                    <a
                      className="project-arrow"
                      href={mainUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${project.title}`}
                    >
                      <ArrowRight size={20} />
                    </a>
                  ) : (
                    <ArrowRight className="project-arrow" size={20} aria-hidden="true" />
                  )}
                </div>

                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label="Tecnologias utilizadas">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                {(project.liveUrl || project.sourceUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Ver projeto <ExternalLink size={14} />
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                        Código <Code2 size={14} />
                      </a>
                    )}
                    <ArrowUpRight className="project-links-arrow" size={16} aria-hidden="true" />
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
