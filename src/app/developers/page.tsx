import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="card">
          <Link href="https://github.com/wellyton-xs">
            Wellyton B. Galdino (criador do tortoise)
          </Link>
        </div>
      </section>
    </main>
  );
}
