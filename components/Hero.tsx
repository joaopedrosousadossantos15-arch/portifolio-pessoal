import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Sparkle } from "lucide-react";
import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const totalSkills = new Set(skillGroups.flatMap((group) => group.skills)).size;

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Projetos desenvolvidos" },
  { value: String(totalSkills), label: "Tecnologias e ferramentas" },
  { value: "4º", label: "Período de Engenharia" },
];

export function Hero() {
  const [firstName, ...lastNames] = personal.shortName.split(" ");
  const socialLinks = [
    { label: "GitHub", href: personal.profiles.github, Icon: Github },
    { label: "LinkedIn", href: personal.profiles.linkedin, Icon: Linkedin },
  ].filter((link) => link.href);

  return (
    <section className="hero" id="sobre" aria-labelledby="hero-title">
      <p className="hero-backdrop" aria-hidden="true">Portfólio</p>

      <div className="hero-inner section-wrap mx-auto">
        <div className="hero-copy">
          <p className="hero-hello">Olá, eu sou</p>
          <h1 id="hero-title" title={personal.name}>
            <span>{firstName}</span>
            <span>{lastNames.join(" ")}</span>
          </h1>
          <p className="hero-role">{personal.role}</p>
          <p className="hero-intro">{personal.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contato">
              Contato <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta">
            {personal.location && (
              <span>
                <MapPin size={15} aria-hidden="true" /> {personal.location}
              </span>
            )}
            {socialLinks.map(({ label, href, Icon }) => (
              <a href={href} key={label} target="_blank" rel="noreferrer">
                <Icon size={15} aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <div className="portrait-frame">
            <div className="portrait-glow" />
            <div className="avatar-head" />
            <div className="avatar-body" />
          </div>
        </div>

        <aside className="hero-side" aria-label="Destaques">
          <div className="hero-tagline">
            <span className="star-circle">
              <Sparkle size={15} aria-hidden="true" />
            </span>
            <p>{personal.tagline}</p>
          </div>
          <ul className="hero-stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
