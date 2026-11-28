import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const socialLinks = [
    { label: "LinkedIn", href: personal.profiles.linkedin, Icon: Linkedin },
    { label: "GitHub", href: personal.profiles.github, Icon: Github },
    { label: "Instagram", href: personal.profiles.instagram, Icon: Instagram },
  ].filter((link) => link.href);

  return (
    <section className="section-wrap section-block contact-section mx-auto" id="contato">
      <Reveal>
        <SectionHeading eyebrow="Seu próximo passo" title="Boas conversas começam aqui.">
          <p>Tem uma ideia, uma oportunidade ou só quer trocar experiências? Minha caixa de entrada está aberta.</p>
        </SectionHeading>
      </Reveal>
      <div className="contact-layout">
        <Reveal className="contact-details">
          <p className="contact-prompt">Vamos tirar uma boa ideia do papel?</p>
          {personal.email ? (
            <a className="contact-email" href={`mailto:${personal.email}`}>
              <Mail size={18} />
              {personal.email}
            </a>
          ) : (
            <p className="contact-email-placeholder">
              <Mail size={18} />
              Adicione seu e-mail em data/personal.ts
            </p>
          )}
          <p className="contact-note">Normalmente respondo em até dois dias úteis.</p>
          {socialLinks.length > 0 && (
            <div className="contact-socials">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
