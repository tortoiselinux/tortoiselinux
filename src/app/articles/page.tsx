import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos | Tortoise",
};

export default function articles() {
  return (
    <main>
      <section className="container">
        <div className="card">
          <a href="https://github.com/wellyton-xs/aprendendo-docker">
            aprendendo docker
          </a>
          <br />
          <a href="https://github.com/wellyton-xs/NOTE-COMMANDS">
            aprendendo javascript
          </a>
        </div>
      </section>
    </main>
  );
}
