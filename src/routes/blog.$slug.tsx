import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";
import articles from "../data/articles.json";
const titles: Record<string,string> = {"introducing-osprey":"Introducing Osprey: Security Visibility for the Software Supply Chain","eu-cybersecurity-rules":"Cyber Resilience Act (CRA): What Companies Need to Know"};
export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({params}) => {if(!titles[params.slug]) throw notFound();},
  head: ({params}) => ({meta:[{title:`${titles[params.slug] ?? "Research"} — PurpleLotus`},{name:"description",content:params.slug==="introducing-osprey"?"Explore Osprey, the open-source CLI for SBOM generation, KEV detection, and version-aware supply chain security.":"Understand the EU Cyber Resilience Act and why continuous software supply chain visibility matters."},{property:"og:title",content:`${titles[params.slug] ?? "Research"} — PurpleLotus`},{property:"og:description",content:"Research and analysis from PurpleLotus on software supply chain security."},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"}]}),
  component:Article
});
function Article(){const {slug}=Route.useParams();const article=articles.find(a=>a.slug===slug);if(!article)return null;return <SiteLayout><div className="blog-article"><Link to="/blogs" className="article-back">← ALL RESEARCH</Link><div className="article-meta">PURPLELOTUS / SEP 19, 2026</div><div dangerouslySetInnerHTML={{__html:article.html}} /></div></SiteLayout>}
