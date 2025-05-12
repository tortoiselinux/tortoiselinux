import React from "react";
import Link from "next/link";
import Code from "src/components/code";
export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="">
          <p>
            Nessa seção você irá aprender como fazer a instalação para começar a
            experimentar tudo que o sistema tem a oferecer! Primeiro, você deve
            obter uma ISO de instalação. Para obtê-la é necessário buildar do
            profile oficial, já que atualmente não existe nenhum release oficial
            da distro. Você pode buildar seguindo as instruções do README
            em:&nbsp;
            <Link
              href="https://github.com/tortoiselinux/tortoiselinux-base"
              target="_blank"
            >
              https://github.com/tortoiselinux/tortoiselinux-base
            </Link>
            <br />
            <br />
            Após construir a ISO, você deve colocar ela em um pendrive bootavel.
            Recomendamos que utilize <Link href="">ventoy</Link>.
            <br />
            <br />
            Com o pendrive bootavel, conecte na máquina e reinicie, lembre-se de
            modificar a ordem de boot.
            <br />
            <br />
            Ao entrar no liveISO, conecte na internet usando o comando:
          </p>
          <Code>nmtui</Code>
          <p>
            Com a internet conectada, use cfdisk para formatar o disco que você
            deseja realizar a instalação.
          </p>
          <Code>cfdisk /dev/(disco/para/formatar/)</Code>
          <p>
            O processo de instalação do Tortoise é dividido em duas etapas,
            configuração e instalação. Quando você estiver conectado e o disco
            estiver formatado, é hora de configurar, para isso digite:
          </p>

          <Code>sudo configure</Code>
          <p>
            Se você já fez uma instalação anteriormente e guardou o arquivo de
            configuração gerado, ele pode ser utilizado para agilizar essa etapa
            da instalação
          </p>
          <Code>sudo configure -f /caminho/para/o/arquivo/install.conf</Code>
          <p>
            Caso não possua esse arquivo, não tem problema. O processo de
            configuração é bem simples e fácil, basta digitar o comando com
            permissões de sudo e você sera guiado a fornecer todos os dados
            necessários para instalar a distro.
            <br />
            <br />
            Por fim, para finalizar a instalação, digite:
          </p>
          <Code>sudo egginstall</Code>
          <p>
            Se o comando terminar sem erros, você deverá ver uma tela
            perguntando se deseja reiniciar, após isso se você clicar em
            aceitar, o computador irá reiniciar e você deve desplugar o
            pendrive.
            <br />
            Caso deseje cancelar a reinicialização, após terminar o que quer que
            esteja fazendo, deve reiniciar a máquina usando o comando `reboot`
            para que o sistema desmonte corretamente o sistema instalado.
            Desligamento abrupto pode causar problemas na instalação.
          </p>
        </div>
      </section>
    </main>
  );
}
