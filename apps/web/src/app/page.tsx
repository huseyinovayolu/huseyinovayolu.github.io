import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <header className="site-header" role="banner">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="TOFI Homepage">
            <span>🌸 TOFI</span>
          </Link>
          
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li><Link href="#flowers">Blumen</Link></li>
              <li><Link href="#gifts">Geschenke</Link></li>
              <li><Link href="#delivery">Lieferung</Link></li>
              <li><Link href="/cart" className="button button--secondary">Warenkorb</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #fdfaf5 0%, #f7f3ee 100%)' }}>
          <div className="container">
            <div className="grid grid--2" style={{ alignItems: 'center', minHeight: '60vh' }}>
              <div>
                <h1>Frische Blumen für die Schweiz</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: 'var(--space-4)' }}>
                  Premium Blumensträusse und Geschenke mit Lieferung am gleichen Tag in Zürich, Basel, Bern und mehr.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <Link href="#flowers" className="button">
                    Blumen entdecken
                  </Link>
                  <Link href="#delivery" className="button button--secondary">
                    Lieferzeiten prüfen
                  </Link>
                </div>
              </div>
              <div style={{ textAlign: 'center', fontSize: '8rem' }}>
                🌹
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="flowers" className="section">
          <div className="container">
            <h2>Unsere Kategorien</h2>
            <div className="grid grid--3">
              <div className="card">
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>💐</div>
                <h3>Blumensträusse</h3>
                <p>Frische, handgebundene Sträusse für jeden Anlass.</p>
                <Link href="/category/bouquets" className="button" style={{ marginTop: 'var(--space-3)' }}>
                  Sträusse ansehen
                </Link>
              </div>

              <div className="card">
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🎁</div>
                <h3>Geschenke</h3>
                <p>Schokolade, Wein und weitere Aufmerksamkeiten.</p>
                <Link href="/category/gifts" className="button" style={{ marginTop: 'var(--space-3)' }}>
                  Geschenke entdecken
                </Link>
              </div>

              <div className="card">
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-2)' }}>🏺</div>
                <h3>Topfpflanzen</h3>
                <p>Langlebige Pflanzen für Zuhause und Büro.</p>
                <Link href="/category/plants" className="button" style={{ marginTop: 'var(--space-3)' }}>
                  Pflanzen ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section id="delivery" className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <h2>Lieferung in der Schweiz</h2>
            <div className="grid grid--2">
              <div>
                <h3>Liefergebiete</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li>Zürich und Umgebung</li>
                  <li>Basel und Umgebung</li>
                  <li>Bern und Umgebung</li>
                  <li>Luzern und Umgebung</li>
                  <li>St. Gallen und Umgebung</li>
                </ul>
              </div>
              <div>
                <h3>Lieferzeiten</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li><strong>Same-Day:</strong> Bestellung bis 14:00 Uhr</li>
                  <li><strong>Express:</strong> Innerhalb 2 Stunden (Zürich)</li>
                  <li><strong>Standard:</strong> Nächster Werktag</li>
                  <li><strong>Terminlieferung:</strong> Bis zu 7 Tage im Voraus</li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginTop: 'var(--space-5)', textAlign: 'center' }}>
              <Link href="/delivery-check" className="button">
                Postleitzahl prüfen
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <h2>Warum TOFI?</h2>
            <div className="grid grid--4">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>🌱</div>
                <h3>Frische Garantie</h3>
                <p>Direkt vom Züchter zu Ihnen</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>🚚</div>
                <h3>Schnelle Lieferung</h3>
                <p>Same-Day in allen grossen Städten</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>💳</div>
                <h3>TWINT & Karten</h3>
                <p>Alle schweizer Zahlungsmethoden</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>📱</div>
                <h3>Tracking</h3>
                <p>Verfolgen Sie Ihre Bestellung live</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid--4">
            <div>
              <h3>TOFI</h3>
              <p>Premium Blumen für die Schweiz</p>
            </div>
            <div>
              <h4>Service</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/help">Hilfe</Link></li>
                <li><Link href="/delivery">Lieferung</Link></li>
                <li><Link href="/returns">Rückgabe</Link></li>
              </ul>
            </div>
            <div>
              <h4>Unternehmen</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/about">Über uns</Link></li>
                <li><Link href="/careers">Karriere</Link></li>
                <li><Link href="/sustainability">Nachhaltigkeit</Link></li>
              </ul>
            </div>
            <div>
              <h4>Rechtliches</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/privacy">Datenschutz</Link></li>
                <li><Link href="/terms">AGB</Link></li>
                <li><Link href="/imprint">Impressum</Link></li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border)' }}>
            <p>&copy; 2024 TOFI. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  )
}