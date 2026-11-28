import { ArrowRight, Github, Globe, Instagram, Linkedin, Mail, MapPin, Sparkle } from "lucide-react";
import { personal } from "@/data/personal";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const contactItems = [
    { label: personal.email, href: personal.email ? `mailto:${personal.email}` : "", Icon: Mail },
    { label: personal.website, href: personal.website ? `https://${personal.website}` : "", Icon: Globe },
    { label: "GitHub", href: personal.profiles.github, Icon: Github },
    { label: "LinkedIn", href: personal.profiles.linkedin, Icon: Linkedin },
    { label: "Instagram", href: personal.profiles.instagram, Icon: Instagram },
  ].filter((item) => item.href);

  return (
    <section className="contact-section" id="contato">
      <div className="contact-grid section-wrap mx-auto">
        <Reveal className="contact-intro">
          <h2>
            Vamos trabalhar{" "}
            <span>
              juntos
              <Sparkle className="contact-star" size={18} aria-hidden="true" />
            </span>
          </h2>
          <p>Estou aberto a estágios, projetos e colaborações. Vamos tirar uma boa ideia do papel.</p>
          <a className="contact-cta" href={contactItems[0]?.href ?? "#inicio"}>
            <span className="contact-cta-icon">
              <ArrowRight size={16} aria-hidden="true" />
            </span>
            {personal.availability}
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="contact-list">
            {contactItems.map(({ label, href, Icon }) => (
              <li key={href}>
                <span className="contact-icon">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
            {personal.location && (
              <li>
                <span className="contact-icon">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span>{personal.location}</span>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal className="laptop" delay={0.16}>
          <div className="laptop-screen" aria-hidden="true">
            <div className="laptop-page">
              <span className="laptop-kicker">Portfólio</span>
              <strong>Sistemas bem estruturados</strong>
              <span className="laptop-line" />
              <span className="laptop-line short" />
              <span className="laptop-block" />
            </div>
          </div>
          <div className="laptop-base" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
