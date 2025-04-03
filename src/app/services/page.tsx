import { Metadata } from "next";
import Price from "src/components/price";
import Title from "src/components/title";

export const metadata: Metadata = {
  title: "Serviços | Welly",
};

export default function Services() {
  return (
    <main>
      <section className="container">
        <div className="card big-container">
          <div className="service">
            <Title>Desenvolvimento de site</Title>
            <Price>A combinar</Price>
          </div>
          <div className="service">
            <Title>Montagem de computador</Title>
            <Price>A combinar</Price>
          </div>
          <div className="service">
            <Title>Consultoria para montagem ou compra de computador</Title>
            <Price>50 R$</Price>
          </div>
          <div className="service">
            <Title>Instalação do Windows ou Linux</Title>
            <Price>30R$</Price>
          </div>
          <div className="service">
            <Title>
              Formatação de computador (qualquer sistema, com backup)
            </Title>
            <Price>50R$</Price>
          </div>
          <div className="service">
            <Title>Manutenção preventiva</Title>
            <Price>80 R$</Price>
          </div>
        </div>
      </section>
    </main>
  );
}
