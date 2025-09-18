import { Header } from '@/components/Header'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1>Datenschutzerklärung</h1>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                Letzte Aktualisierung: {new Date().toLocaleDateString('de-CH')}
              </p>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>1. Verantwortliche Stelle</h2>
                <p>
                  Verantwortlich für die Datenbearbeitung auf dieser Website ist:
                </p>
                <div className="card">
                  <p>
                    <strong>TOFI AG</strong><br />
                    Musterstrasse 123<br />
                    8000 Zürich<br />
                    Schweiz
                  </p>
                  <p>
                    E-Mail: datenschutz@tofi.ch<br />
                    Telefon: +41 44 123 45 67
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>2. Grundsätze der Datenbearbeitung</h2>
                <p>
                  Wir bearbeiten Ihre Personendaten gemäss den Bestimmungen des schweizerischen 
                  Datenschutzgesetzes (DSG) und der Datenschutz-Grundverordnung der EU (DSGVO).
                </p>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li>Rechtmässigkeit, Verhältnismässigkeit und Transparenz</li>
                  <li>Zweckbindung und Datenminimierung</li>
                  <li>Richtigkeit und Aktualität</li>
                  <li>Speicherbegrenzung</li>
                  <li>Integrität und Vertraulichkeit</li>
                </ul>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>3. Welche Daten wir sammeln</h2>
                
                <h3>3.1 Bestelldaten</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li>Name und Anschrift</li>
                  <li>E-Mail-Adresse und Telefonnummer</li>
                  <li>Lieferadresse und Empfängerdaten</li>
                  <li>Bestellhistorie und Präferenzen</li>
                </ul>

                <h3>3.2 Zahlungsdaten</h3>
                <p>
                  Zahlungsdaten werden über unsere zertifizierten Partner (Stripe, TWINT) 
                  verarbeitet. Wir speichern keine vollständigen Kreditkartendaten.
                </p>

                <h3>3.3 Website-Nutzung</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li>IP-Adresse (anonymisiert)</li>
                  <li>Browser-Informationen</li>
                  <li>Besuchte Seiten und Verweildauer</li>
                  <li>Cookies (mit Ihrer Einwilligung)</li>
                </ul>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>4. Ihre Rechte</h2>
                <p>Sie haben folgende Rechte bezüglich Ihrer Personendaten:</p>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li><strong>Auskunftsrecht:</strong> Welche Daten wir über Sie haben</li>
                  <li><strong>Berichtigungsrecht:</strong> Korrektur unrichtiger Daten</li>
                  <li><strong>Löschungsrecht:</strong> Löschung Ihrer Daten (soweit möglich)</li>
                  <li><strong>Widerspruchsrecht:</strong> Gegen die Verarbeitung bestimmter Daten</li>
                  <li><strong>Datenübertragbarkeit:</strong> Export Ihrer Daten</li>
                </ul>
                
                <div className="card" style={{ marginTop: 'var(--space-3)' }}>
                  <h4>Ihre Rechte ausüben</h4>
                  <p>
                    Kontaktieren Sie uns unter <strong>datenschutz@tofi.ch</strong> oder 
                    nutzen Sie unser <a href="/dsar">Datenschutz-Portal</a>.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>5. Cookies und Tracking</h2>
                <p>
                  Wir verwenden nur technisch notwendige Cookies für den Betrieb der Website. 
                  Marketing-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
                </p>
                
                <h3>Notwendige Cookies</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li>Warenkorb-Funktionalität</li>
                  <li>Anmeldestatus</li>
                  <li>Spracheinstellungen</li>
                </ul>

                <h3>Optionale Cookies (nur mit Einwilligung)</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li>Analyse der Website-Nutzung</li>
                  <li>Personalisierte Produktempfehlungen</li>
                  <li>Marketing und Werbung</li>
                </ul>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>6. Datenübertragung</h2>
                <p>
                  Ihre Daten werden grundsätzlich in der Schweiz bzw. im EU/EWR-Raum verarbeitet. 
                  Bei Dienstleistern ausserhalb dieser Gebiete stellen wir durch geeignete 
                  Garantien sicher, dass Ihre Daten angemessen geschützt sind.
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-5)' }}>
                <h2>7. Kontakt</h2>
                <p>
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich an:
                </p>
                <div className="card">
                  <p>
                    <strong>Datenschutzbeauftragte</strong><br />
                    E-Mail: datenschutz@tofi.ch<br />
                    Telefon: +41 44 123 45 67
                  </p>
                  <p>
                    <strong>Aufsichtsbehörde:</strong><br />
                    Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)<br />
                    <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener">
                      www.edoeb.admin.ch
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                <a href="/" className="button button--secondary">
                  Zurück zur Startseite
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}