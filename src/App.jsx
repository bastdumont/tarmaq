import React, { useEffect, useState } from "react";

export default function App(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const year = new Date().getFullYear();

  // --- Sanity tests (console only) ---
  useEffect(() => {
    const results = [];
    const assert = (name, cond) => { const pass = !!cond; results.push({ name, pass }); if(!pass) console.error(`[TEST FAIL] ${name}`); };
    assert('hero section exists', document.querySelector('section.hero'));
    assert('exactly 4 pills', document.querySelectorAll('.pill').length === 4);
    assert('primary/grad CTAs exist', document.querySelector('.btn.btn-primary') && document.querySelector('.btn.btn-grad'));
    assert('partners grid exists', document.querySelector('.partners'));
    console.info('[Sanity tests]', results);
  }, []);

  // Header scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu autoclose: click-away, Esc, and body scroll lock
  useEffect(() => {
    if (menuOpen) {
      const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
      document.addEventListener('keydown', onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; };
    }
  }, [menuOpen]);

  return (
    <div>
      {/* === Enhanced styles for a refined, light & immersive UI === */}
      <style>{`
:root{
  /* Brand & Neutrals */
  --brand:#DA2F2C;            /* primary */
  --brand-600:#C52824;        /* hover/darken */
  --ink:#161616;              /* body text */
  --ink-2:#2A2A2A;            /* titles */
  --bg:#FCFCFD;               /* page bg */
  --card:#FFFFFF;             /* surfaces */
  --stroke:#E8E8EC;           /* borders */
  --muted:#6F6F78;

  /* Radii */
  --r-lg:16px; --r-xl:22px; --r-2xl:28px;

  /* Shadows */
  --sh-soft:0 6px 24px rgba(0,0,0,.06);
  --sh-elev:0 16px 40px rgba(0,0,0,.10);

  /* Gradients */
  --grad-hero: radial-gradient(1200px 600px at 10% 20%, #FFE7E6 0%, rgba(255,231,230,.6) 40%, rgba(255,255,255,0) 60%),
               linear-gradient(135deg, #FF8B8A 0%, #DA2F2C 45%, #B61E1B 100%);
  --grad-accent: linear-gradient(140deg, #FF9D9B, #DA2F2C);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
html,body{margin:0;padding:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:var(--ink);background:var(--bg)}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font:inherit}

/* Layout */
.wrap{max-width:1200px;margin:0 auto;padding:0 22px}
header .wrap.head{max-width:none;padding:0 22px}
#programmes{margin-top:20px}
#agenda{margin-top:20px}
#experiences{margin-top:80px}

/* Header */
header{position:sticky;top:0;z-index:50;backdrop-filter:saturate(160%) blur(8px)}
.head{display:flex;align-items:center;justify-content:space-between;gap:16px;height:72px;transition:background .25s ease, box-shadow .25s ease, border-color .25s ease}
header .head{border-bottom:1px solid transparent}
header.scrolled .head{background:rgba(255,255,255,.75);border-bottom-color:var(--stroke);box-shadow:var(--sh-soft)}
.brand{display:flex;align-items:center;gap:12px}
.logo-type{font-weight:800;letter-spacing:.2px;color:var(--ink-2);font-size:20px}

.nav-links{display:flex;align-items:center;gap:22px}
.nav-links a{font-weight:600;opacity:.92}

/* Buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;border-radius:14px;font-weight:700;border:1px solid transparent;transition:transform .15s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease}
.btn:focus{outline:2px solid transparent;box-shadow:0 0 0 4px rgba(218,47,44,.18)}
.btn-ghost{background:rgba(255,255,255,.6);border-color:var(--stroke)}
.btn-ghost:hover{transform:translateY(-2px);box-shadow:var(--sh-soft)}
.btn-primary{background:var(--brand);color:#fff}
.btn-primary:hover{background:var(--brand-600);transform:translateY(-2px);box-shadow:var(--sh-soft)}
.btn-grad{background:var(--grad-accent);color:#fff}
.btn-grad:hover{transform:translateY(-2px);box-shadow:var(--sh-soft)}

/* Burger */
.burger{display:none;border:none;background:transparent;padding:8px;cursor:pointer;flex-direction:column;gap:5px}
.burger span{width:26px;height:2px;background:var(--ink-2);display:block;transition:transform .2s ease}

#mobileMenu{display:none}
#mobileMenu.open{display:flex;flex-direction:column;gap:12px;padding:14px;border-top:1px solid var(--stroke);background:#fff}

/* Hero */
.hero{color:#fff;position:relative; padding: 15px;}
.hero-inner{padding:72px 0}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:32px;align-items:center}
.eyebrow{font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#FFD6D5;font-size:12px}
.h1{font-size:clamp(40px, 6vw, 62px);line-height:1.05;margin:12px 0 14px;color:#fff}
.gradient-text{color:#FFFFFF}
.lead{font-size:18px;max-width:60ch;opacity:.95}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
.hero-card{background:rgba(255,255,255,.78);border:1px solid rgba(255,255,255,.7);border-radius:var(--r-2xl);padding:16px;box-shadow:var(--sh-elev);backdrop-filter:saturate(160%) blur(10px)}
.hero-card img{border-radius:18px}

/* Pill stats */
.pills{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:18px}
.pill{background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.7);border-radius:999px;padding:10px 14px;font-weight:700;display:flex;align-items:center;justify-content:center;color:var(--ink-2);box-shadow:var(--sh-soft)}

/* Sections */
section{padding:72px 0}
.section-head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin-top:20px;margin-bottom:24px}
h2{font-size:32px;margin:0;color:var(--ink-2)}

/* Cards */
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{background:var(--card);border:1px solid var(--stroke);border-radius:var(--r-xl);padding:20px;box-shadow:var(--sh-soft);transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease}
.card:hover{transform:translateY(-4px);box-shadow:var(--sh-elev);border-color:#E1E1E8}
.card h3{margin:6px 0 8px;font-size:20px;color:var(--ink-2)}
.card p{margin:0;color:#444}
.card .icon{width:36px;height:36px;border-radius:12px;background:linear-gradient(140deg,#FFE3E2,#FFD2D1);display:flex;align-items:center;justify-content:center}

/* Programs */
.program-list{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}
.program{background:var(--card);border:1px solid var(--stroke);border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;transition:transform .2s ease, box-shadow .2s ease}
.program:hover{transform:translateY(-3px);box-shadow:var(--sh-soft)}
.tag{display:inline-flex;align-items:center;gap:8px;background:#FFF1F1;border:1px solid #F4C1C0;color:#7A1210;border-radius:999px;padding:6px 10px;font-weight:700;width:max-content}

/* Agenda */
.agenda{display:grid;grid-template-columns:2fr 1fr;gap:16px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.stat{background:#FFF6F6;border-radius:16px;padding:18px;border:1px solid #F4C1C0;box-shadow:var(--sh-soft);text-align:center}
.stat b{font-size:clamp(22px, 4vw, 32px);background:linear-gradient(90deg,#FF9D9B,#DA2F2C);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

/* Partners */
.partners{display:grid;grid-template-columns:repeat(6,1fr);gap:16px;align-items:center}
.partner{background:var(--card);border:1px solid var(--stroke);border-radius:14px;height:80px;display:flex;align-items:center;justify-content:center;filter:grayscale(1);opacity:.8;transition:filter .2s ease, opacity .2s ease, transform .2s ease}
.partner:hover{filter:grayscale(0);opacity:1;transform:translateY(-2px)}

/* CTA band */
.cta{background:linear-gradient(135deg,#101010,#1A1A1A);color:#fff;padding:50px 0}
.cta .actions{display:flex;gap:12px;flex-wrap:wrap}

/* Footer */
footer{background:#fff;border-top:1px solid var(--stroke)}
.foot{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:18px;padding:36px 0}
.foot h4{margin:0 0 10px;font-size:16px;color:var(--ink-2)}
.fine{font-size:12px;color:#666;border-top:1px dashed var(--stroke);padding:16px 0}

/* Backdrop for click-away on mobile menu */
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.35);backdrop-filter:blur(1px);border:0;margin:0;padding:0;z-index:40}

/* === Contrast fixes to avoid white-on-white === */
.hero::before{ content:""; position:absolute; inset:0; 
  background: radial-gradient(800px 420px at 6% 12%, rgba(0,0,0,.22), rgba(0,0,0,0) 60%),
              linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,0));
  pointer-events:none; }
.hero .wrap, .hero-inner, .hero-grid{ position:relative; z-index:1; }
.h1, .lead{ text-shadow: 0 2px 10px rgba(0,0,0,.25); }
/* Make eyebrow readable on bright areas */
.eyebrow{ color:#FFFFFF; opacity:.95; }
/* Safer fallback for gradient text */
@supports not ((-webkit-background-clip:text) or (background-clip:text)){
  .gradient-text{ -webkit-text-fill-color:initial; color:#FFFFFF; background:none; }
}

/* Hero background image */
.hero {
  background-image: url('./assets/hero-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(218, 47, 44, 0.85) 0%, rgba(182, 30, 27, 0.9) 100%),
              radial-gradient(800px 420px at 10% 20%, rgba(0,0,0,.3), rgba(0,0,0,0) 60%);
  pointer-events: none;
}

/* Enhanced text shadows for better readability on image background */
.h1, .lead, .eyebrow { 
  text-shadow: 0 2px 8px rgba(0,0,0,.4), 0 4px 16px rgba(0,0,0,.3); 
}

.pill {
  text-shadow: 0 1px 4px rgba(0,0,0,.2);
  backdrop-filter: blur(8px);
}

/* Ensure buttons are readable */
.btn-grad, .btn-primary {
  text-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-shadow: 0 4px 16px rgba(0,0,0,.2);
}

/* Responsive */
@media (max-width: 1080px){ .hero-grid{grid-template-columns:1fr} }
@media (max-width: 980px){
  .pills{grid-template-columns:repeat(2,1fr)}
  .grid-3{grid-template-columns:1fr}
  .program-list{grid-template-columns:1fr 1fr}
  .agenda{grid-template-columns:1fr}
  .partners{grid-template-columns:repeat(3,1fr)}
  .foot{grid-template-columns:1fr 1fr}
  .nav-links{display:none}
  .burger{display:flex}
}
      `}</style>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="wrap head" role="navigation" aria-label="Navigation principale">
          <div className="brand">
            <a href="#" className="logo" aria-label="Aller à l’accueil tarmaq" style={{display:'flex',alignItems:'center',gap:10}}>
              <img src="src/assets/logo.png" alt="tarmaq" style={{width:'35%',height:'45%'}} />
            </a>
          </div>
          <nav className="nav-links" aria-label="Liens">
            <a href="#programmes">Kesako</a>
            <a href="#experiences">Expériences</a>
            <a href="#communaute">Communauté</a>
            <a href="#agenda">Agenda</a>
            <a href="#partenaires">Partenaires</a>
            <a className="btn btn-ghost" href="#soutien">Appel à soutien</a>
            <a className="btn btn-grad" href="#don">Faire un don</a>
          </nav>
          <button
            className="burger"
            aria-label="Ouvrir le menu"
            aria-controls="mobileMenu"
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={()=>setMenuOpen(o=>!o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
        <div id="mobileMenu" className={`wrap ${menuOpen ? 'open' : ''}`}>
          {menuOpen && (
            <>
              <a href="#programmes" onClick={()=>setMenuOpen(false)}>Quésaco ?</a>
              <a href="#communaute" onClick={()=>setMenuOpen(false)}>Communauté</a>
              <a href="#agenda" onClick={()=>setMenuOpen(false)}>Agenda</a>
              <a href="#partenaires" onClick={()=>setMenuOpen(false)}>Partenaires</a>
              <a className="btn btn-ghost" href="#soutien" onClick={()=>setMenuOpen(false)}>Soumettre un projet</a>
              <a className="btn btn-grad" href="#don" onClick={()=>setMenuOpen(false)}>Soutenir tarmaq</a>
            </>
          )}
        </div>
      </header>

      {/* Backdrop for click-away close (under header z-index) */}
      {menuOpen && (
        <button className="backdrop" aria-label="Fermer le menu" onClick={()=>setMenuOpen(false)} />
      )}

      <main>
        {/* HERO */}
        <section className="hero" data-testid="hero">
          <div className="wrap hero-inner">
            <div className="hero-grid">
              <div>
                <div className="eyebrow">Genève • Formation • Innovation</div>
                <h1 className="h1"><span className="gradient-text">Accélérateur d'opportunités</span><br/>pour la relève</h1>
                <p className="lead">Pour les jeunes qui souhaitent explorer l'IA, entreprendre, créer et rêver. Nous proposons un espace ouvert à tous, avec des équipements de pointe, des programmes concrets, des expériences terrain et une communauté active pour apprendre en faisant.</p>
                <div className="hero-cta">
                  <a className="btn btn-grad" href="#programmes">Découvrir les programmes</a>
                  <a className="btn btn-primary" href="#devenir-partenaire">Devenir partenaire</a>
                </div>
                <div className="pills" aria-label="Indicateurs clés">
                  <div className="pill">Voyages</div>
                  <div className="pill">Formations</div>
                  <div className="pill">Atliers</div>
                  <div className="pill">Projets</div>
                </div>
              </div>
              <div className="hero-card" aria-label="Aperçu du lieu">
                <img src="src/assets/hero-background.png" alt="Espace de co-working moderne et collaboratif à Genève" />
              </div>
            </div>
          </div>
        </section>

        {/* 3 pillars */}
        <section className="wrap" id="experiences">
          <div className="section-head">
            <h2>Notre approche</h2>
            <a className="btn btn-ghost" href="#communaute">Rejoindre la communauté</a>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#B61E1B" d="M4 4h16v2H4zm0 7h16v2H4zm0 7h10v2H4z"/></svg>
              </div>
              <h3>Formation</h3>
              <p>Bootcamps IA, ateliers no‑code, entrepreneuriat, créa & soft‑skills. Des formats courts, pédagogiques et appliqués.</p>
            </article>
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#B61E1B" d="M12 2L1 21h22L12 2zm0 4.8L19.2 19H4.8L12 6.8z"/></svg>
              </div>
              <h3>Expériences</h3>
              <p>Hackathons, stages et projets réels avec des partenaires locaux pour apprendre en situation.</p>
            </article>
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#B61E1B" d="M12 12a5 5 0 110-10 5 5 0 010 10zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5c0-3-4-5.5-9-5.5z"/></svg>
              </div>
              <h3>Communauté</h3>
              <p>Accès à un réseau d’anciens, de mentors et d’entreprises pour trouver des opportunités et progresser.</p>
            </article>
          </div>
        </section>

        {/* Programs */}
        <section className="wrap" id="programmes">
          <div className="section-head">
            <h2>Programmes</h2>
            <a className="btn btn-grad" href="#agenda">Voir le calendrier</a>
          </div>
          <div className="program-list">
            <div className="program">
              <span className="tag">Bootcamps IA</span>
              <h3>Construis un agent IA utile</h3>
              <p>De l’idée au prototype en 2 jours, en équipe, avec mentorat.</p>
            </div>
            <div className="program">
              <span className="tag">Hackathons</span>
              <h3>Innover pour Genève</h3>
              <p>48h pour résoudre un défi local avec des experts et des données ouvertes.</p>
            </div>
            <div className="program">
              <span className="tag">Stages</span>
              <h3>Découvrir un métier</h3>
              <p>Stages d’immersion en PME, startups et institutions partenaires.</p>
            </div>
            <div className="program">
              <span className="tag">Mentorat</span>
              <h3>Être accompagné·e</h3>
              <p>Des praticiens pour t’aider à franchir chaque étape.</p>
            </div>
            <div className="program">
              <span className="tag">Voyages</span>
              <h3>Ouvrir ses horizons</h3>
              <p>Visites d’écoles, d’entreprises et d’écosystèmes innovants.</p>
            </div>
          </div>
        </section>

        {/* Agenda + stats */}
        <section className="wrap" id="agenda">
          <div className="section-head">
            <h2>Agenda</h2>
            <a className="btn btn-ghost" href="#">S’abonner à la newsletter</a>
          </div>
          <div className="agenda">
            <div className="card" role="region" aria-label="Événements à venir">
              <ul>
                <li><strong>Septembre</strong> — Bootcamp IA « Agents utiles »</li>
                <li><strong>Octobre</strong> — Hackathon « Data pour Genève »</li>
                <li><strong>Novembre</strong> — Stages découverte (4 semaines)</li>
                <li><strong>Décembre</strong> — Voyage éducatif (Europe)</li>
              </ul>
            </div>
            <div className="stats" role="group" aria-label="Chiffres clés">
              <div className="stat"><b>53</b><br/>ateliers</div>
              <div className="stat"><b>300+</b><br/>mentors</div>
              <div className="stat"><b>9+</b><br/>domaines</div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="wrap" id="partenaires">
          <div className="section-head">
            <h2>Partenaires</h2>
            <a className="btn btn-ghost" href="#devenir-partenaire">Devenir partenaire</a>
          </div>
          <div className="partners" aria-label="Logos des partenaires (exemples)">
            <div className="partner">Ville de Genève</div>
            <div className="partner">Écoles & HES</div>
            <div className="partner">PME/Startups</div>
            <div className="partner">Fondations</div>
            <div className="partner">Associations</div>
            <div className="partner">Incubateurs</div>
          </div>
        </section>

        {/* Big CTA */}
        <section className="cta" id="soutien">
          <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:18,flexWrap:'wrap'}}>
            <div>
              <h2 style={{color:'#fff',margin:0,marginBottom:8}}>Appel à soutien</h2>
              <p style={{margin:0,opacity:.9,maxWidth:'62ch'}}>Aidez‑nous à financer des programmes accessibles et concrets pour les jeunes. Chaque contribution compte.</p>
            </div>
            <div className="actions">
              <a className="btn btn-grad" id="don" href="#">Faire un don</a>
              <a className="btn btn-primary" id="devenir-partenaire" href="#">Devenir partenaire</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div>
          <a href="#" className="logo" aria-label="Aller à l’accueil tarmaq" style={{display:'flex',alignItems:'center',gap:10}}>
              <img src="src/assets/logo.png" alt="tarmaq" style={{width:'35%',height:'45%'}} />
            </a>
            <div className="assoc" style={{marginTop:10,display:'flex',alignItems:'center',gap:10}}>
              <svg width="64" height="28" viewBox="0 0 64 28" role="img" aria-label="Perspectives Jeunesse">
                <rect x="0" y="0" width="64" height="28" rx="6" fill="#FBEAEA" />
              </svg>
              <span>Une initiative de <strong>Perspectives Jeunesse</strong>, à Genève.</span>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:info@tarmaq.ch">info@tarmaq.ch</a><br />
            <a href="#">Mentions légales</a>
          </div>
          <div>
            <h4>Réseaux</h4>
            <a href="#">Instagram</a><br />
            <a href="#">LinkedIn</a>
          </div>
          <div>
            <h4>Newsletter</h4>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Merci ! Vous êtes inscrit·e.');}}>
              <label htmlFor="nl" className="sr-only">Votre e‑mail</label>
              <input id="nl" type="email" placeholder="votre@email.ch" required style={{width:'100%',padding:'12px 14px',border:'1px solid var(--stroke)',borderRadius:12,marginBottom:8}} />
              <button className="btn btn-primary" type="submit" style={{width:'100%'}}>S’inscrire</button>
            </form>
          </div>
        </div>
        <div className="wrap fine">© <span>{year}</span> tarmaq • Genève • Tous droits réservés</div>
      </footer>
    </div>
  );
}
