"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export function Contact() {
  const [status, setStatus] = useState<FormStatus>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (!personal.email) {
      setStatus({
        kind: "error",
        message: "Adicione seu e-mail em data/personal.ts para ativar o formulário.",
      });
      return;
    }

    const data = new FormData(form);
    const subject = String(data.get("subject")).trim();
    const body = [
      `Nome: ${String(data.get("name")).trim()}`,
      `E-mail: ${String(data.get("email")).trim()}`,
      "",
      String(data.get("message")).trim(),
    ].join("\n");
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    form.reset();
    setStatus({
      kind: "success",
      message: "Seu aplicativo de e-mail deve abrir com a mensagem pronta para envio.",
    });
  }

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
            <a className="contact-email" href={`mailto:${personal.email}`}><Mail size={18} />{personal.email}</a>
          ) : (
            <p className="contact-email-placeholder"><Mail size={18} />Adicione seu e-mail em data/personal.ts</p>
          )}
          <p className="contact-note">Normalmente respondo em até dois dias úteis.</p>
          {socialLinks.length > 0 && (
            <div className="contact-socials">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /></a>
              ))}
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Seu nome<input name="name" type="text" autoComplete="name" placeholder="Como posso te chamar?" required minLength={2} maxLength={100} /></label>
              <label>Seu e-mail<input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" required maxLength={254} /></label>
            </div>
            <label>Assunto<input name="subject" type="text" placeholder="Sobre o que vamos conversar?" required minLength={3} maxLength={120} /></label>
            <label>Mensagem<textarea name="message" rows={4} placeholder="Conte um pouco mais..." required minLength={10} maxLength={3000} /></label>
            <div className="form-footer">
              <p className="form-disclaimer">O envio abre seu aplicativo de e-mail — nenhuma mensagem é armazenada neste site.</p>
              <button className="button button-primary" type="submit">Preparar mensagem <ArrowUpRight size={16} /></button>
            </div>
            {status && (
              <p className={`form-status ${status.kind}`} role="status">
                {status.kind === "success" && <Check size={16} aria-hidden="true" />}
                {status.message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
