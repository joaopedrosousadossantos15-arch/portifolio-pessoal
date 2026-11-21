import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner mx-auto">
        <a className="brand" href="#inicio"><span className="brand-mark">JP.</span><span>{personal.shortName}</span></a>
        <p>Feito com intenção, café e curiosidade.</p>
        <a className="back-top" href="#inicio">Voltar ao topo <ArrowUpRight size={15} /></a>
        <span className="footer-copy">© {new Date().getFullYear()} · Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
