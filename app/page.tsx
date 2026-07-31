const services = [
  { n: "01", title: "Diritto civile", text: "Assistenza giudiziale e stragiudiziale per privati, imprese e professionisti." },
  { n: "02", title: "Diritto penale", text: "Difesa attenta e rigorosa in ogni fase del procedimento." },
  { n: "03", title: "Domiciliazioni", text: "Supporto per colleghi presso gli uffici giudiziari di Oristano e Cagliari." },
];

const professionals = [
  { initials: "AP", name: "Antonio Pinna Spada", role: "Avvocato · Patrocinante in Cassazione", mail: "pinnaspada@tiscali.it" },
  { initials: "RP", name: "Renato Pinna Spada", role: "Avvocato · Patrocinante in Cassazione", mail: "renatopinnaspada@gmail.com" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Studio Legale Pinna Spada, home">
          <span className="brand-mark">PS</span>
          <span><strong>Pinna Spada</strong><small>Studio Legale · dal 1934</small></span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#studio">Lo studio</a><a href="#competenze">Competenze</a><a href="#professionisti">Professionisti</a>
        </nav>
        <a className="header-cta" href="#contatti">Contattaci <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Oristano · Sardegna</p>
          <h1>La tradizione<br />incontra il <em>diritto</em><br />di oggi.</h1>
          <p className="hero-lead">Dal 1934 tuteliamo persone e imprese con competenza, ascolto e una visione concreta delle soluzioni.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:studiolegalepinnaspada@gmail.com">Richiedi un contatto <span>↗</span></a>
            <a className="text-link" href="#studio">Conosci lo studio <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div><strong>90+</strong><span>anni di esperienza</span></div>
            <div><strong>2</strong><span>generazioni oggi al tuo fianco</span></div>
            <div><strong>1934</strong><span>anno di fondazione</span></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="arch"><span className="arch-line one"/><span className="arch-line two"/><div className="seal">PS<small>1934</small></div></div>
          <p>Radici solide.<br/>Sguardo avanti.</p>
        </div>
      </section>

      <section className="statement" id="studio">
        <p className="section-tag">01 · Lo studio</p>
        <div>
          <h2>Un punto di riferimento<br />da oltre novant’anni.</h2>
          <p>Fondato dall’avvocato Antonio Pinna Spada nel 1934, lo Studio opera a pochi passi dal Tribunale di Oristano. Una storia professionale costruita sulla fiducia, oggi portata avanti dallo Studio Associato Avvocati Antonio e Renato Pinna Spada.</p>
          <a className="text-link dark" href="#storia">Scopri la nostra storia <span>→</span></a>
        </div>
      </section>

      <section className="services" id="competenze">
        <div className="section-heading"><p className="section-tag light">02 · Competenze</p><h2>Esperienza che diventa<br /><em>soluzione.</em></h2></div>
        <div className="service-grid">
          {services.map((s) => <article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#contatti" aria-label={`Contattaci per ${s.title}`}>Approfondisci <b>↗</b></a></article>)}
        </div>
      </section>

      <section className="history" id="storia">
        <div className="history-visual"><span className="date">1934</span><div className="monument">§</div><p>Oristano<br/>Sardegna</p></div>
        <div className="history-copy">
          <p className="section-tag">03 · La storia</p>
          <h2>Una storia di famiglia.<br />Una responsabilità<br />verso il futuro.</h2>
          <p>Dalla prima sede in Piazza Eleonora all’attuale studio di Via San Francesco, ogni generazione ha unito rigore professionale e presenza nel territorio.</p>
          <ol>
            <li><span>1934</span>Fondazione dello Studio</li>
            <li><span>1963</span>Antonio Pinna Spada presiede l’Ordine di Oristano</li>
            <li><span>2022</span>Nasce lo Studio Legale Associato</li>
          </ol>
        </div>
      </section>

      <section className="team" id="professionisti">
        <div className="section-heading paper"><p className="section-tag">04 · Professionisti</p><h2>Persone, prima<br />ancora che <em>avvocati.</em></h2></div>
        <div className="team-grid">
          {professionals.map((p) => <article key={p.name}><div className="portrait"><span>{p.initials}</span></div><div><h3>{p.name}</h3><p>{p.role}</p><a href={`mailto:${p.mail}`}>Scrivi all’avvocato <span>↗</span></a></div></article>)}
        </div>
      </section>

      <section className="digital">
        <div><p className="eyebrow gold"><span /> Servizi digitali</p><h2>Il tuo studio,<br />anche <em>online.</em></h2><p>Accedi agli strumenti digitali Pinna Spada: un punto unico, semplice e diretto, pensato per rendere più agevole il rapporto con lo Studio.</p><a className="button outline" href="https://pinnaspada.it" target="_blank" rel="noreferrer">Vai a PinnaSpada.it <span>↗</span></a></div>
        <div className="phone" aria-hidden="true"><div className="phone-top"/><div className="phone-brand"><b>PS</b><span>PINNA SPADA<small>AREA DIGITALE</small></span></div><div className="phone-card"><small>BENVENUTO</small><strong>Come possiamo<br/>aiutarti?</strong><i>→</i></div><div className="phone-lines"><span/><span/><span/></div></div>
      </section>

      <section className="contact" id="contatti">
        <p className="section-tag">05 · Contatti</p>
        <div><h2>Parliamone.<br /><em>Siamo qui.</em></h2><p>Raccontaci brevemente la tua esigenza. La segreteria ti ricontatterà per fissare un primo confronto.</p><a className="button primary dark-button" href="mailto:studiolegalepinnaspada@gmail.com">Scrivi allo Studio <span>↗</span></a></div>
        <address><div><small>ORISTANO</small><strong>Via San Francesco, 18</strong><span>09170 Oristano (OR)</span><a href="https://maps.google.com/?q=Via+San+Francesco+18+Oristano" target="_blank" rel="noreferrer">Apri la mappa ↗</a></div><div><small>RECAPITI</small><a href="tel:+390783775053">+39 0783 775053</a><a href="tel:+390783775000">+39 0783 775000</a><a href="mailto:studiolegalepinnaspada@gmail.com">studiolegalepinnaspada@gmail.com</a></div></address>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-mark">PS</span><span><strong>Pinna Spada</strong><small>Studio Legale · dal 1934</small></span></div><p>© 2026 Studio Legale Associato Avvocati Antonio e Renato Pinna Spada · P.IVA 01259770954</p><div><a href="mailto:studiolegalepinnaspada@pec.it">PEC</a><a href="#">Privacy</a><a href="#">Cookie</a></div></footer>
    </main>
  );
}
