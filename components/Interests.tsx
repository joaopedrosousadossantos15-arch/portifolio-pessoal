import { ArrowUpRight } from "lucide-react";
import { interests } from "@/data/interests";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Interests() {
  return (
    <section className="section-wrap section-block interests-section mx-auto" id="interesses">
      <Reveal>
        <SectionHeading eyebrow="Além do código" title="Curiosidade também é ferramenta.">
          <p>Um pouco do que me inspira, me diverte e me faz olhar para as coisas por outro ângulo.</p>
        </SectionHeading>
      </Reveal>
      <div className="interest-grid">
        {interests.map((interest, index) => (
          <Reveal delay={index * 0.08} key={interest.title}>
            <article className={`interest-card interest-${index + 1}`}>
              <span className="interest-symbol">{interest.symbol}</span>
              <span className="interest-spark">✳</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
              <ArrowUpRight className="interest-arrow" size={17} aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
