import Link from "next/link";
import TortoiseASCII from "src/components/tortoiseASCII";

export default function Home() {
  return (
    <main>
      <section className=" centralized-section d-flex mt-auto mb-auto h-100 text-center text-white container">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          {/* <img
            src="/assets/logo-icones/logo-light.png"
            alt=""
            width="484px"
            height="180px"
          /> */}
          <div className="centralized-text">
            <h1 id="welcome">Bem vindo ao</h1>
            <br />
            <TortoiseASCII className="ascii-art" />
            <strong id="welcome-msg">
              <br />O tortoise é mais que uma distribuição, é um ecossistema de
              programação e nosso objetivo é integrar soluções sólidas e
              consistentes! Para saber mais sobre as filosifias do projeto e
              outros detalhes, leia a seção:&nbsp;
              <Link href="/about">Sobre</Link>
              <br />
              <br />
              Caso queira ver informações sobre a instalação, leia a
              seção:&nbsp;
              <Link href="/docs/installation_guide">Installation Guide</Link>
            </strong>
            <br />
            <br />
          </div>
        </div>
      </section>
    </main>
  );
}
