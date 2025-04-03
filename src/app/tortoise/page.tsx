import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tortoise | Welly",
};

export default function Page() {
  return (
    <main>
      <section className="container">
        <div className="card">
          <h2>O que é o tortoiselinux?</h2>
          <br />
          <p>
            O tortoise é um projeto meu, com o objetivo de criar uma
            distribuição linux que facilite o processo de configuração de um
            ambiente de desenvolvimento de forma flexível.
          </p>
          <br />
          <h2>Porque não há uma ISO para testes?</h2>
          <br />
          <p>
            Ainda há muito trabalho a ser feito na distribuição, por isso ainda
            não há uma ISO pronta para testes.
          </p>
          <br />
          Caso deseje ver mais ou contribuir com o tortoise, acesse:
          <a href="https://github.com/tortoiselinux">
            https://github.com/tortoiselinux
          </a>
        </div>
      </section>
    </main>
  );
}
