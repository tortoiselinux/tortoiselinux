import Link from "next/link";
import TortoiseASCII from "src/components/tortoiseASCII";

// <a href="https://github.com/tortoiselinux">
//   <Image
//     src={profilePic}
//     alt="Icone: Tortoise Linux icon"
//     className="imageMoldure"
//     height="80"
//     width="80"
//   />
// </a>
//   </div>

export default function Home() {
  return (
    <main>
      <section className="container">
        <div className=" big-block-container">
          <div className="inline card">
            <TortoiseASCII className="logo" />
            <div className="centralized-text">
              Bem vindo ao tortoise linux, esperamos que goste da experiência
              por aqui :)
              <br />O tortoise é uma distribuição ainda em desenvolvimento e seu
              objetivo é suprir as necessidades de desenvolvedores e trazer uma
              experiência menos frustrante quando estiver montando ambientes de
              desenvolvimento.
              <br />
              <br />
              Caso queira saber como que faz a instalação, leia a seção:&nbsp;
              <Link href="/installation_guide">Installation Guide</Link>
              <br />
              <br />
              Quer saber como o Tortoise pode te ajudar em tarefas do dia-a-dia
              como programador? Veja abaixo algumas funcionalidades que estamos
              implementadas ou já implementamos!
              <br />
              <ul>
                <li>
                  Instalação rápida e reproduzível com arquivos de instalação
                  (implementado)
                </li>
                <li>
                  Ambiente de desenvolvimento pré-configurado (em constante
                  desenvolvimento)
                </li>
                <li>
                  Pré-definição de Aliases de linha de comando úteis e padrões
                  que ajudam o desenvolvedor a se manter organizado (constante
                  desenvolvimento)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
