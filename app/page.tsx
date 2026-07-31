const areas = [
  { number: "01", title: "Diritto civile", text: "Consulenza e assistenza, giudiziale e stragiudiziale, nella tutela dei diritti delle persone, delle famiglie e delle imprese." },
  { number: "02", title: "Diritto penale", text: "Difesa e assistenza in ogni fase del procedimento penale, con attenzione alla persona e alla complessità del caso." },
  { number: "03", title: "Contenzioso", text: "Valutazione preventiva, strategia processuale e gestione della controversia dinanzi agli uffici giudiziari competenti." },
  { number: "04", title: "Domiciliazioni", text: "Collaborazione professionale per attività e domiciliazioni presso gli uffici giudiziari di Oristano e Cagliari." },
];

const people = [
  { name: "Salvatore Pinna Spada", label: "Avvocato", image: "/media/salvatore.jpg", className: "salvatore", email: "studiopinnaspada@virgilio.it", description: "Patrocinante in Cassazione. Entra nello Studio nel 1966 e ne prosegue la tradizione professionale iniziata dal fondatore." },
  { name: "Antonio Pinna Spada", label: "Avvocato · Studio Associato", image: "/media/antonio.jpg", className: "antonio", email: "pinnaspada@tiscali.it", description: "Patrocinante in Cassazione. Fa parte dello Studio dal 1995 ed è associato dal 2022." },
  { name: "Renato Pinna Spada", label: "Avvocato · Studio Associato", image: "/media/renato.jpg", className: "renato", email: "renatopinnaspada@gmail.com", description: "Patrocinante in Cassazione. Fa parte dello Studio dal 1998 ed è associato dal 2022." },
];

export default function Home() {
  return (
    <main>
      <div className="topline"><span>Studio Legale in Oristano dal 1934</span><div><a href="tel:+390783775053">0783 775053</a><a href="mailto:studiolegalepinnaspada@gmail.com">studiolegalepinnaspada@gmail.com</a></div></div>
      <header>
        <a className="logo" href="#home" aria-label="Studio Legale Pinna Spada, home"><span className="logo-monogram">PS</span><span><strong>Studio Legale</strong><b>Pinna Spada</b></span></a>
        <nav aria-label="Navigazione principale"><a href="#studio">Lo Studio</a><a href="#attivita">Attività</a><a href="#professionisti">Professionisti</a><a href="#storia">Storia</a><a href="#contatti">Contatti</a></nav>
        <a className="nav-button" href="mailto:studiolegalepinnaspada@gmail.com">Richiedi un appuntamento</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="kicker">Competenza · Indipendenza · Riservatezza</p>
          <h1>La tutela dei vostri diritti,<br/><em>da oltre novant’anni.</em></h1>
          <p className="intro">Lo Studio Legale Pinna Spada offre assistenza e difesa in materia civile e penale, con un approccio fondato sull’ascolto, sul rigore e sulla conoscenza del territorio.</p>
          <div className="hero-actions"><a className="btn burgundy" href="#contatti">Parla con lo Studio</a><a className="link-arrow" href="#studio">Conosci la nostra storia <span>→</span></a></div>
        </div>
        <div className="hero-image"><img src="/media/studio.jpg" alt="Toga forense e macchina da scrivere, archivio dello Studio Legale Pinna Spada"/><div className="founded"><small>FONDATO NEL</small><strong>1934</strong><span>ORISTANO</span></div></div>
      </section>

      <section className="intro-section" id="studio">
        <div className="section-label">Lo Studio</div>
        <div className="intro-main"><h2>Una tradizione professionale<br/>che attraversa le generazioni.</h2><p>Fondato dall’Avv. Antonio Pinna Spada nel 1934, lo Studio ha accompagnato l’evoluzione della giustizia e della società sarda mantenendo costanti i propri valori: preparazione, serietà e rapporto diretto con l’assistito.</p></div>
        <aside><strong>Oristano</strong><span>Via San Francesco 18</span><p>A pochi passi dal Tribunale, nel centro della città.</p><a className="link-arrow" href="https://maps.google.com/?q=Via+San+Francesco+18+Oristano" target="_blank" rel="noreferrer">Indicazioni <span>↗</span></a></aside>
      </section>

      <section className="practice" id="attivita">
        <div className="practice-head"><div><p className="eyebrow">Aree di attività</p><h2>Esperienza giuridica.<br/>Risposte concrete.</h2></div><p>Ogni questione viene esaminata personalmente, individuando con chiarezza le opzioni disponibili e il percorso più adeguato.</p></div>
        <div className="areas">{areas.map((area)=><article key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><a href="#contatti" aria-label={`Contatta lo Studio per ${area.title}`}>Richiedi informazioni →</a></article>)}</div>
      </section>

      <section className="professionals" id="professionisti">
        <div className="professional-heading"><p className="eyebrow">I professionisti</p><h2>Esperienza, continuità<br/>e responsabilità.</h2><p>Tre generazioni, un unico metodo di lavoro: attenzione personale, studio approfondito e piena trasparenza nel rapporto professionale.</p></div>
        <div className="people">{people.map((person)=><article key={person.name}><div className={`person-photo ${person.className}`}><img src={person.image} alt={`Avv. ${person.name}`}/></div><div className="person-copy"><span>{person.label}</span><h3>{person.name}</h3><p>{person.description}</p><a href={`mailto:${person.email}`}>Contatta il professionista <b>→</b></a></div></article>)}</div>
      </section>

      <section className="history" id="storia">
        <div className="history-title"><p className="eyebrow">La nostra storia</p><h2>Dal 1934,<br/>nel diritto<br/>e nel territorio.</h2></div>
        <div className="timeline">
          <article><time>1934</time><div><h3>La fondazione</h3><p>L’Avv. Antonio Pinna Spada inizia l’attività professionale con l’Avv. Francesco Sanna Randaccio nella storica sede di Piazza Municipio, oggi Piazza Eleonora.</p></div></article>
          <article><time>1963</time><div><h3>Al servizio dell’Avvocatura</h3><p>Antonio Pinna Spada assume la presidenza del Consiglio dell’Ordine degli Avvocati di Oristano, mantenendola fino al 1978.</p></div></article>
          <article><time>1966—1998</time><div><h3>La continuità</h3><p>Entrano nello Studio Salvatore Pinna Spada nel 1966, Antonio nel 1995 e Renato nel 1998.</p></div></article>
          <article><time>2022</time><div><h3>Lo Studio Associato</h3><p>Viene costituito lo Studio Legale Associato Avvocati Antonio e Renato Pinna Spada.</p></div></article>
        </div>
      </section>

      <section className="services-strip"><div><span>Per i colleghi</span><h2>Domiciliazioni presso Oristano e Cagliari</h2></div><p>Corte d’Appello di Cagliari · Tribunali di Oristano e Cagliari · Giudici di Pace di Oristano e Cagliari</p><a className="btn light" href="mailto:studiolegalepinnaspada@gmail.com?subject=Richiesta%20domiciliazione">Invia una richiesta</a></section>

      <section className="contacts" id="contatti">
        <div className="contact-title"><p className="eyebrow">Contatti</p><h2>Contattate<br/>lo Studio.</h2><p>La segreteria è a disposizione per raccogliere la richiesta e concordare un appuntamento.</p></div>
        <div className="contact-grid">
          <div><span>SEDE</span><strong>Via San Francesco 18<br/>09170 Oristano</strong><a href="https://maps.google.com/?q=Via+San+Francesco+18+Oristano" target="_blank" rel="noreferrer">Apri in Google Maps ↗</a></div>
          <div><span>TELEFONO</span><a className="large-contact" href="tel:+390783775053">0783 775053</a><a className="large-contact" href="tel:+390783775000">0783 775000</a><small>Fax 0783 775263</small></div>
          <div><span>EMAIL</span><a href="mailto:studiolegalepinnaspada@gmail.com">studiolegalepinnaspada<br/>@gmail.com</a><small>PEC</small><a href="mailto:studiolegalepinnaspada@pec.it">studiolegalepinnaspada@pec.it</a></div>
          <div className="digital-box"><span>SERVIZI DIGITALI</span><h3>PinnaSpada.it</h3><p>Accedi alla piattaforma digitale dello Studio.</p><a href="https://pinnaspada.it" target="_blank" rel="noreferrer">Vai alla piattaforma →</a></div>
        </div>
      </section>

      <footer><a className="logo inverse" href="#home"><span className="logo-monogram">PS</span><span><strong>Studio Legale</strong><b>Pinna Spada</b></span></a><p>Studio Legale Associato Avvocati Antonio e Renato Pinna Spada<br/>P.IVA 01259770954 · Codice destinatario KRRH69B</p><div><a href="#">Privacy policy</a><a href="#">Cookie policy</a><span>© 2026</span></div></footer>
    </main>
  );
}
