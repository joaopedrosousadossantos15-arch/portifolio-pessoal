import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { personal } from "@/data/personal";

export function Hero() {
  const socialLinks = [
    { label: "GitHub", href: personal.profiles.github, Icon: Github },
    { label: "LinkedIn", href: personal.profiles.linkedin, Icon: Linkedin },
  ].filter((link) => link.href);

  return (
    <section className="hero section-wrap mx-auto" id="sobre" aria-labelledby="hero-title">
      <div className="hero-copy">
        {personal.availability && (
          <p className="availability">
            <span className="availability-dot" />
            {personal.availability}
          </p>
        )}
        <p className="eyebrow">Olá, eu sou</p>
        <h1 id="hero-title">
          {personal.name}
          <span className="hero-period">.</span>
        </h1>
        <p className="hero-role">{personal.role}</p>
        <p className="hero-intro">{personal.introduction}</p>
        <p className="hero-statement">{personal.statement}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Explorar projetos <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contato">
            Entrar em contato <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-meta">
          {personal.location && <span><MapPin size={15} aria-hidden="true" /> {personal.location}</span>}
          {socialLinks.map(({ label, href, Icon }) => (
            <a href={href} key={label} target="_blank" rel="noreferrer">
              <Icon size={15} aria-hidden="true" /> {label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-art" aria-label="Ilustração abstrata de perfil">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-sun" />
        <div className="art-card">
          <div className="art-card-top"><span /><span /><span /></div>
          <div className="art-avatar">
            <div className="avatar-halo" />
            <div className="avatar-head" />
            <div className="avatar-body" />
          </div>
          <div className="art-lines"><span /><span /><span /></div>
        </div>
        <div className="art-note note-top">CRIATIVIDADE <span>✳</span></div>
        <div className="art-note note-bottom"><span>✦</span> FEITO COM CUIDADO</div>
        <span className="art-index">01 — 06</span>
      </div>
      <a className="scroll-cue" href="#projetos" aria-label="Rolar para projetos">
        <span>Role para explorar</span><ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
