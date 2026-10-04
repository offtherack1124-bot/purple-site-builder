import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, ButtonLink } from "./Button";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => setMenuOpen(false), [pathname]);
  return <div className="site-shell">
    {bannerOpen && <div className="announcement"><span>OPEN SOURCE, OPEN EYES. &nbsp; EXPLORE OSPREY ON GITHUB <ArrowUpRight size={11}/></span><Button className="announcement-close" variant="light" aria-label="Dismiss announcement" onClick={() => setBannerOpen(false)}><X size={15}/></Button></div>}
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="PurpleLotus home"><span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/></span><span>PURPLELOTUS</span></Link>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <Link to="/" hash="product">PRODUCT</Link><Link to="/threat-feed">THREAT FEED</Link><Link to="/" hash="services">SERVICES</Link><Link to="/blogs">RESEARCH</Link><Link to="/" hash="pricing">PRICING</Link>
        </nav>
        <div className="header-actions"><ButtonLink href="https://github.com/Purplelotusec/Osprey" target="_blank" rel="noreferrer" variant="dark">VIEW ON GITHUB <ArrowUpRight size={13}/></ButtonLink><ButtonLink href="mailto:security@purplelotus.tech" variant="outline">CONTACT US</ButtonLink></div>
        <Button variant="outline" className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</Button>
      </div>
    </header>
    <main>{children}</main>
    <div className="wordmark-banner" aria-hidden="true"><span className="wordmark-text">PurpleLotus</span></div>
    <footer className="site-footer"><div className="footer-top"><div><Link to="/" className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/></span><span>PURPLELOTUS</span></Link><p>Security that ships with your code.</p></div><div className="footer-links"><Link to="/" hash="product">Product</Link><Link to="/threat-feed">Threat feed</Link><Link to="/blogs">Research</Link><Link to="/" hash="pricing">Pricing</Link><a href="mailto:security@purplelotus.tech">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PURPLELOTUS</span><span>BUILT FOR WHAT COMES NEXT.</span><a href="mailto:security@purplelotus.tech">SECURITY@PURPLELOTUS.TECH ↗</a></div></footer>
  </div>;
}
