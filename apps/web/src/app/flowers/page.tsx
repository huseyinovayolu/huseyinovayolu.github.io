import { Header } from '@/components/Header'
import Link from 'next/link'

export default function FlowersPage() {
  // Mock product data - in real app this would come from API/database
  const products = [
    {
      id: 1,
      name: 'Rote Rosen Bouquet',
      price: 'CHF 49.90',
      image: '🌹',
      description: 'Klassische rote Rosen, perfekt für romantische Anlässe'
    },
    {
      id: 2,
      name: 'Frühlings Mix',
      price: 'CHF 39.90',
      image: '🌷',
      description: 'Bunte Tulpen und Narzissen für den Frühling'
    },
    {
      id: 3,
      name: 'Sonnenblumen Strauß',
      price: 'CHF 29.90',
      image: '🌻',
      description: 'Strahlende Sonnenblumen für gute Laune'
    },
    {
      id: 4,
      name: 'Wildblumen Bouquet',
      price: 'CHF 34.90',
      image: '🌼',
      description: 'Natürliche Wildblumen direkt aus den Schweizer Alpen'
    },
    {
      id: 5,
      name: 'Hochzeits Strauß',
      price: 'CHF 89.90',
      image: '💐',
      description: 'Eleganter weißer Brautstrauß mit Pfingstrosen'
    },
    {
      id: 6,
      name: 'Geburtstags Mix',
      price: 'CHF 44.90',
      image: '🌺',
      description: 'Farbenfroher Mix für Geburtstage und Feiern'
    }
  ]

  return (
    <>
      <Header />
      
      <main id="main">
        <section className="section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <h1>Blumen & Sträusse</h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)' }}>
                Frische Blumen direkt vom Züchter. Alle Sträusse werden täglich frisch gebunden.
              </p>
            </div>

            {/* Filters */}
            <div className="card" style={{ marginBottom: 'var(--space-5)' }}>
              <h3>Filter</h3>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--space-3)' }}>
                <select className="button button--secondary" style={{ background: 'transparent' }}>
                  <option>Preis</option>
                  <option>Unter CHF 30</option>
                  <option>CHF 30-50</option>
                  <option>CHF 50-80</option>
                  <option>Über CHF 80</option>
                </select>
                <select className="button button--secondary" style={{ background: 'transparent' }}>
                  <option>Anlass</option>
                  <option>Geburtstag</option>
                  <option>Hochzeit</option>
                  <option>Valentinstag</option>
                  <option>Muttertag</option>
                </select>
                <select className="button button--secondary" style={{ background: 'transparent' }}>
                  <option>Farbe</option>
                  <option>Rot</option>
                  <option>Rosa</option>
                  <option>Gelb</option>
                  <option>Weiß</option>
                  <option>Bunt</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid--3">
              {products.map((product) => (
                <div key={product.id} className="card">
                  <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                    {product.image}
                  </div>
                  <h3>{product.name}</h3>
                  <p style={{ color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>
                    {product.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--brand)' }}>
                      {product.price}
                    </span>
                    <Link href={`/product/${product.id}`} className="button">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Info */}
            <div className="card" style={{ marginTop: 'var(--space-6)', background: 'var(--surface)' }}>
              <h3>🚚 Lieferung</h3>
              <div className="grid grid--2" style={{ marginTop: 'var(--space-3)' }}>
                <div>
                  <h4>Same-Day Lieferung</h4>
                  <p>Bestellung bis 14:00 Uhr für Lieferung am gleichen Tag in Zürich, Basel, Bern.</p>
                </div>
                <div>
                  <h4>Frische Garantie</h4>
                  <p>Alle Blumen werden am Morgen der Lieferung frisch geschnitten und gebunden.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}