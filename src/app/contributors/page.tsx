import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="card">
          <Link href="https://github.com/wellyton-xs">
            Wellyton B. Galdino (Criador do Tortoise)
          </Link>
        </div>
         <div className="card">
          <Link href="https://www.behance.net/mariacsilva19">
            Cecília Barbosa (Designer)
          </Link>
        </div>
        
      </section>
    </main>
  );
}
