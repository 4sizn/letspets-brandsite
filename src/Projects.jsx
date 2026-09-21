import { useState } from 'react';
import content from './projects.json';
export const projects = content.projects;
const colors = ['lilac', 'peach', 'sky', 'mint', 'yellow', 'rose'];
const labels = ['A different way to see.', 'Keep what moves you.', 'A sky of your own.', 'Take a little swing.', 'A little desk company.', 'Slow down. Glow on.'];

export function Work() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter(p => filter === 'All' || (filter === 'Desktop' ? p.slug === 'garden-eel-cove' : p.slug !== 'garden-eel-cove'));
  return <section className="work section-pad" id="work">
    <div className="work-heading" data-reveal><div><p className="eyebrow">02 / LITTLE THINGS WE MAKE</p><h2 className="display">Made to be<br/><em>played with.</em></h2></div><p>찍고, 모으고, 흔들고.<br/>직접 만져 보면 더 재미있는 것들.</p></div>
    <div className="work-filters" aria-label="프로젝트 종류">{['All','Mobile','Desktop'].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}<span>{f==='All'?'06':f==='Mobile'?'05':'01'}</span></button>)}</div>
    <div className="work-grid">{visible.map(p=>{const i=projects.indexOf(p);return <a className={`project-card project-${colors[i]}`} href={`/projects/${p.slug}`} key={p.slug}>
      <div className="project-visual"><span className="project-index">0{i+1} / LETSPETS</span><span className="project-motto">{labels[i]}</span><img src={p.heroImage} alt={p.heroAlt} width="800" height="600" loading="lazy"/><span className="project-open" aria-hidden="true"><img src="/assets/arrow-right.svg" alt=""/></span></div>
      <div className="project-caption"><h3>{p.title}</h3><span>{p.slug==='garden-eel-cove'?'DESKTOP':'MOBILE'}</span><p>{p.tagline}</p></div>
    </a>;})}</div>
  </section>;
}

export function Journal() {
  const noteProjects = ['garden-eel-cove', 'swing-golf', 'garden-eel-cove', 'lonely-candle'];
  return <section className="journal section-pad" id="notes"><div className="section-heading"><p className="eyebrow">FROM THE STUDIO</p><h2 className="display">Behind the little things.</h2></div><div className="journal-grid">{content.stories.map((n,i)=><a href={`/projects/${noteProjects[i]}#making`} key={n.title}><span className="eyebrow">0{i+1} / {n.team}</span><h3>{n.title}</h3><span>만든 이야기 읽기 <img className="arrow" src="/assets/arrow-right.svg" alt=""/></span></a>)}</div><div id="releases" className="release-list"><p className="eyebrow">STUDIO UPDATES</p>{content.news.slice(0,5).map(n=><div key={n.title}><time>{n.date}</time><p>{n.title}</p><span>{n.category}</span></div>)}</div></section>;
}

export function ProjectPage({project:p}) {
  const i=projects.indexOf(p);
  return <main className="project-detail"><a className="back-link" href="/#work">전체 프로젝트로 돌아가기</a><section className={`detail-hero project-${colors[i]}`}><div><p className="eyebrow">LETSPETS / PROJECT 0{i+1}</p><h1>{p.title}</h1><p className="detail-tagline">{p.tagline}</p><div className="detail-links">{p.links.map(l=><a className="button" href={l.href} key={l.href} target="_blank" rel="noreferrer">{l.label}<img className="arrow" src="/assets/arrow-right.svg" alt=""/></a>)}</div>{p.linkNotice&&<p className="availability">{p.linkNotice}</p>}</div><img src={p.heroImage} alt={p.heroAlt}/></section>
    <div className="detail-body"><div className="project-meta">{p.meta.map(m=><div key={m.label}><span>{m.label}</span><strong>{m.value}</strong></div>)}</div><p className="project-summary">{p.summary}</p><div className="detail-features">{p.features.map((f,j)=><article key={f.title}><span className="eyebrow">0{j+1}</span><h2>{f.title}</h2><p>{f.body}</p></article>)}</div><div className="detail-gallery">{p.gallery.map(g=><figure key={g.src}><img src={g.src} alt={g.alt} loading="lazy"/><figcaption>{g.alt}</figcaption></figure>)}</div><section id="making" className="making"><p className="eyebrow">MAKING NOTES</p><h2 className="display">The little details.</h2>{p.notes.map(n=><details key={n.title}><summary>{n.title}</summary><p>{n.body}</p></details>)}</section><section className="project-caveats"><h2>사용 전에 확인해 주세요</h2><ul>{p.caveats.map(c=><li key={c}>{c}</li>)}</ul></section><a className="next-project" href={`/projects/${projects[(i+1)%projects.length].slug}`}><span className="eyebrow">NEXT LITTLE THING</span><strong>{projects[(i+1)%projects.length].title}</strong><img className="arrow" src="/assets/arrow-right.svg" alt=""/></a></div>
  </main>;
}
