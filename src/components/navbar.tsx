import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <Link href="/" className="home-btn">
        HOME
      </Link>
      <nav className="nav-bar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link href="/installation_guide">Installation Guide</Link>
          </li>

          <li className="navbar-li">
            <Link href="/contributors">Contribuidores</Link>
          </li>
          <li className="navbar-li">
            <Link href="/projects">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
