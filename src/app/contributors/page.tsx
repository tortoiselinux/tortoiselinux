import Link from "next/link";
import Title from "src/components/title";

export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="card big-container">
          <div>
            <Link href="https://github.com/wellyton-xs">
              <Title>Wellyton B. Galdino (Criador do tortoise)</Title>
            </Link>
            <Link href="https://www.behance.net/mariacsilva19">
              <Title>Cecília Barbosa (Designer)</Title>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
