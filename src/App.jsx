import { useEffect, useRef, useState } from 'react';
import { Work, Journal, ProjectPage, projects } from './Projects.jsx';
import StudioPage from './Studio.jsx';
import PrivacyPolicyPage from './Privacy.jsx';

const values = [
  { title: 'Stay curious.', tag: '01 — CURIOSITY', color: 'mint', ko: '당연한 것에 질문하기', copy: '매일 보는 화면에도 아직 발견하지 못한 재미가 있다고 믿습니다. 작은 ‘왜?’에서 다음 이야기가 시작됩니다.' },
  { title: 'Make it felt.', tag: '02 — FEELING', color: 'lilac', ko: '설명보다 먼저, 느낌', copy: '손끝에 닿는 반응, 예상하지 못한 움직임. 한 번 더 만져보고 싶은 순간을 만듭니다.' },
  { title: 'Keep it playful.', tag: '03 — PLAY', color: 'peach', ko: '끝까지, 재미있게', copy: '거창하지 않아도 괜찮습니다. 잠깐의 미소와 작은 즐거움이 일상에 오래 남을 수 있으니까요.' },
];
const words = '화면을 스치는 작은 움직임 하나가 하루의 기분을 바꿀 수 있다고 믿습니다. 렛츠펫츠는 그런 순간을 발견하고, 직접 만들고, 세상에 꺼내 놓는 1인 창작 스튜디오입니다.'.split(' ');
function Arrow({ left = false }) { return <img className="arrow" src={`/assets/arrow-${left ? 'left' : 'right'}.svg`} alt="" />; }
function Wordmark({footer=false}) { return <span className={footer ? 'wordmark footer-wordmark' : 'wordmark'}>letspets<span className="brand-period">.</span></span>; }

export function App({ initialPath } = {}) {
  const path = (initialPath || window.location.pathname).replace(/\/$/, '') || '/';
  const project = projects.find(p => path === `/projects/${p.slug}`);
  const isHome = path === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(() => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef(null);
  const statementRef = useRef(null);
  const menuButtonRef = useRef(null);
  const swipeStart = useRef(null);
  const copyTimer = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const changed = () => setMotion(!media.matches);
    media.addEventListener('change', changed);
    return () => media.removeEventListener('change', changed);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    let frame = 0;
    const paint = () => {
      frame = 0;
      const hero = heroRef.current;
      const statement = statementRef.current;
      if (hero) hero.style.setProperty('--scroll', motion ? `${Math.min(window.scrollY * .15, 120)}px` : '0px');
      if (statement) {
        const rect = statement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * .85 - rect.top) / (rect.height + window.innerHeight * .22)));
        statement.querySelectorAll('span').forEach((el, i) => { el.style.opacity = !motion || i / words.length <= progress ? '1' : '.22'; });
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(paint); };
    paint(); window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [motion]);
  useEffect(() => {
    const key = e => { if (e.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButtonRef.current?.focus(); } };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [menuOpen]);
  useEffect(() => () => clearTimeout(copyTimer.current), []);

  useEffect(() => {
    document.title = project ? `${project.title} | letspets` : path === '/privacy' ? '개인정보처리방침 | letspets' : path === '/studio' ? '스튜디오 소개 | letspets' : 'letspets — Make room for play.';
  }, [path, project]);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1)) || (path === '/studio' ? 'studio' : '');
    const frame = requestAnimationFrame(() => { if (id) document.getElementById(id)?.scrollIntoView({behavior:'instant'}); });
    return () => cancelAnimationFrame(frame);
  }, [path]);

  const closeMenu = () => setMenuOpen(false);
  const changeSlide = direction => setActive(value => (value + direction + values.length) % values.length);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('4sizn@naver.com'); setCopied(true);
      clearTimeout(copyTimer.current); copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch { window.location.href = 'mailto:4sizn@naver.com'; }
  };
  const parallax = e => {
    if (!motion || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width - .5) * 14}px`);
    e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height - .5) * 12}px`);
  };

  return <>
    <a className="skip-link" href="/#studio">본문으로 이동</a>
    <header className={`navigation ${menuOpen ? 'is-open' : ''}`}>
      <a href="/#home" aria-label="렛츠펫츠 홈" className="logo-link" onClick={closeMenu}><Wordmark /></a>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        <a href="/#studio">Studio</a><a href="/#work">Work</a><a href="/#notes">Notes</a>
      </nav>
      <a className="nav-contact" href="/#hello">Say hello <Arrow /></a>
      <button ref={menuButtonRef} className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="모바일 메뉴">
        <a href="/#studio" onClick={closeMenu}>Studio <span>01</span></a>
        <a href="/#work" onClick={closeMenu}>Work <span>02</span></a>
        <a href="/#notes" onClick={closeMenu}>Notes <span>03</span></a>
        <a className="mobile-contact" href="/#hello" onClick={closeMenu}>Say hello <Arrow /></a>
      </nav>}
    </header>
    {isHome ? <main>
      <section className="hero" id="home" ref={heroRef} onPointerMove={parallax} onPointerLeave={e => { e.currentTarget.style.setProperty('--mx','0px'); e.currentTarget.style.setProperty('--my','0px'); }}>
        <img className="hero-art" src="/assets/playground.webp" alt="" fetchPriority="high" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">A SMALL STUDIO. A PLAYFUL WORLD.</p>
          <h1><span className="hero-line"><span className="underword">Make</span> room<span className="sticker sticker-make" aria-hidden="true">Make</span></span><span className="hero-line">for <span className="underword">play.</span><span className="sticker sticker-play" aria-hidden="true">play.</span></span></h1>
          <p className="hero-korean">일상에, 작은 재미가 들어갈 자리.</p>
          <a href="/#work" className="button hero-cta">만든 것들 만나기 <Arrow /></a>
        </div>
        <div className="hero-bottom" aria-hidden="true">
          <span className="floating-note note-one">작은 호기심에서 시작해</span>
          <span className="floating-note note-two">오래 남는 즐거움으로.</span>
          <div className="brand-postcard"><span className="postcard-top">FROM LETSPETS, WITH PLAY.</span><p>Good things<br/>start with<br/><em>a little fun.</em></p><span className="postcard-bottom">ONE PERSON, ENDLESS CURIOSITY.</span></div>
        </div>
        <div className="hero-caption"><span>INDEPENDENT CREATIVE STUDIO</span><a href="/#studio">SCROLL TO EXPLORE <span className="scroll-line" /></a></div>
      </section>

      <section className="studio section-pad" id="studio">
        <div className="intro-copy">
          <p className="eyebrow" data-reveal>01 / HELLO, WE'RE LETSPETS</p>
          <h2 className="display" data-reveal><span className="marked">Curious about<span className="sticker blue-label" aria-hidden="true">Curious</span></span><br/>small delights.</h2>
          <span className="sentence-tag" data-reveal>사소한 순간을, 특별한 재미로.</span>
          <p className="scroll-statement" ref={statementRef}>{words.map((word, i) => <span key={i}>{word}{' '}</span>)}</p>
          <p className="intro-ending" data-reveal>크게 만들기보다, 기분 좋게 남도록.</p><a className="studio-more" href="/studio">스튜디오 이야기 <Arrow /></a>
        </div>
        <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0,1,2,3].map(i => <div className="marquee-group" key={i}><span className="pill mint">A little wonder</span><span className="pill peach">Made with care</span><span className="pill lilac">Just for the joy</span><span className="pill yellow">한 번 더 만지고 싶은</span></div>)}</div></div>
        <div className="studio-stamp" data-reveal><span>We make</span><strong>little joys.</strong><span>What makes you smile?</span></div>
      </section>

      <Work />

      <section className="approach" id="approach">
        <div id="how-we-work" className="section-heading studio-route-anchor" data-reveal><p className="eyebrow">03 / HOW WE MAKE</p><h2 className="display">A little thought.<br/>A lot of feeling.</h2><p>호기심은 가볍게. 만드는 마음은 깊게.</p></div>
        <div className="approach-grid">
          <div className="feature-art" data-reveal><img src="/assets/playground.webp" alt="구름빛 하늘에 떠 있는 말랑한 조형물로 표현한 렛츠펫츠의 장난스러운 세계" loading="lazy" /><div className="glass-caption"><span>Not just on a screen.</span><p>손끝에서 시작해서,<br/>마음에 남는 경험.</p></div><span className="sticker image-sticker">Feel something.</span></div>
          <div className="principles studio-route-anchor" id="tools">
            <article data-reveal><span className="principle-number mint">01</span><div><h3>Find the spark.</h3><p>‘이런 게 있으면 어떨까?’<br/>작은 생각을 그냥 지나치지 않습니다.</p></div></article>
            <article data-reveal><span className="principle-number peach">02</span><div><h3>Make it move.</h3><p>생각을 손으로 옮깁니다.<br/>직접 만져볼 수 있을 때까지.</p></div></article>
            <article data-reveal><span className="principle-number lilac">03</span><div><h3>Mind the little.</h3><p>움직임, 간격, 반응 하나까지.<br/>좋은 느낌은 작은 차이에서 옵니다.</p></div></article>
            <article data-reveal><span className="principle-number yellow">04</span><div><h3>Keep playing.</h3><p>만들고, 써보고, 다시 다듬고.<br/>재미가 살아날 때까지 이어갑니다.</p></div></article>
          </div>
        </div>
        <a className="button lime-button" href="/#spirit">우리가 지키는 마음 <Arrow /></a>
      </section>

      <section className="spirit section-pad" id="spirit">
        <div className="section-heading" data-reveal><p className="eyebrow">04 / THE LETSPETS SPIRIT</p><h2 className="display">Small studio.<br className="mobile-break"/> Big curiosity.</h2><p>한 사람이 만들지만,<br className="mobile-break"/> 가능성까지 작을 필요는 없으니까.</p></div>
        <div className="carousel" role="region" aria-roledescription="carousel" aria-label="렛츠펫츠의 세 가지 태도" tabIndex="0" onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();changeSlide(-1);} if(e.key==='ArrowRight'){e.preventDefault();changeSlide(1);}}} onPointerDown={e=>{swipeStart.current={x:e.clientX,y:e.clientY};}} onPointerUp={e=>{if(swipeStart.current){const dx=e.clientX-swipeStart.current.x,dy=e.clientY-swipeStart.current.y; if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy))changeSlide(dx<0?1:-1);swipeStart.current=null;}}} onPointerCancel={()=>{swipeStart.current=null;}}>
          {values.map((item,index)=>{let pos=(index-active+3)%3; if(pos===2)pos=-1; return <article className={`spirit-card ${item.color} position-${pos===-1?'prev':pos===0?'active':'next'}`} key={item.title} aria-hidden={pos!==0}>
            <span className="card-overline">{item.tag}</span><h3>{item.title}</h3><span className="card-rule"/><h4>{item.ko}</h4><p>{item.copy}</p><span className="card-signature">letspets.</span>
          </article>;})}
        </div>
        <div className="carousel-controls"><button onClick={()=>changeSlide(-1)} aria-label="이전 브랜드 이야기"><Arrow left /></button><span aria-live="polite" aria-atomic="true">0{active+1} <span>/ 03</span></span><button onClick={()=>changeSlide(1)} aria-label="다음 브랜드 이야기"><Arrow /></button></div>
        <p className="sr-only" aria-live="polite">{values[active].ko}: {values[active].copy}</p>
      </section>

      <Journal />

      <section className="hello" id="hello">
        <div className="hello-top"><div data-reveal><p className="eyebrow">05 / START A CONVERSATION</p><h2 className="display">Got a little<br/><em>what if?</em></h2><span className="sticker hello-sticker">Let's talk.</span></div><div className="hello-copy" data-reveal><p>재미있는 생각이 떠올랐나요?<br/>작은 아이디어도, 가벼운 인사도 좋아요.</p><p>다음 즐거움은<br/>우리의 대화에서 시작될지도 모르니까요.</p><a className="email-link" href="mailto:4sizn@naver.com">4sizn@naver.com <Arrow /></a><button className="copy-email" onClick={copyEmail}>{copied?'이메일 주소를 복사했어요':'이메일 주소 복사'}</button><span className="sr-only" role="status">{copied?'4sizn@naver.com을 복사했습니다.':''}</span></div></div>
        <div className="hello-bottom" aria-hidden="true"><span>LET'S MAKE</span><span>ROOM FOR PLAY.</span></div>
      </section>
    </main> : project ? <ProjectPage project={project}/> : path === "/studio" ? <div className="studio-page"><StudioPage /></div> : path === "/privacy" ? <div className="legal-page"><PrivacyPolicyPage /></div> : <main className="not-found"><h1>이 페이지는 찾지 못했어요.</h1><a className="button" href="/">홈으로 돌아가기</a></main>}
    <footer>
      <div className="footer-top"><div className="footer-brand"><Wordmark /><p>재미를 만드는 1인 창작 스튜디오.<br/>작은 호기심, 새로운 즐거움.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="/#studio">Studio</a><a href="/#work">Work</a><a href="/#notes">Notes</a></div><div><span>CONNECT</span><a href="/privacy">개인정보처리방침</a><a href="mailto:4sizn@naver.com">Email <Arrow /></a><a href="https://github.com/4sizn" target="_blank" rel="noreferrer">GitHub <Arrow /></a><button className="motion-toggle" onClick={()=>setMotion(!motion)} aria-pressed={!motion}>{motion?'움직임 일시정지':'움직임 다시 재생'}</button></div></div></div>
      <a className="footer-home" href="/#home" aria-label="페이지 맨 위로"><Wordmark footer /></a>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} letspets. All rights reserved.</span><span>INDEPENDENT BY NATURE. PLAYFUL AT HEART.</span><a href="/#home">BACK TO TOP <Arrow /></a></div>
    </footer>
  </>;
}
