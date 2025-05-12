import Repos from "src/components/repos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Tortoise",
};

export default async function Projects() {
  return (
    <main>
      <section className="container">
        <div className="">
          <h1>Projetos do Tortoise</h1>
          <Repos />
        </div>
      </section>
    </main>
  );
}
