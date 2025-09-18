import Link from 'next/link'

export function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="TOFI Homepage">
          <span>🌸 TOFI</span>
        </Link>
        
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <li><Link href="/flowers">Blumen</Link></li>
            <li><Link href="/gifts">Geschenke</Link></li>
            <li><Link href="/delivery">Lieferung</Link></li>
            <li><Link href="/cart" className="button button--secondary">Warenkorb</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}