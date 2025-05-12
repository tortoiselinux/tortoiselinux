import MemberCard from "src/components/memberCard";
import Title from "src/components/title";
import { ICard } from "src/interfaces";

const members: ICard[] = [
  {
    name: "Wellyton Barbosa",
    desc: "Trabalhando diariamente em tartarugas",
    imgURL:
      "https://avatars.githubusercontent.com/u/98062977?s=400&u=6345f6b9f5d1437ed2fbcc734de292677ebd3e0b&v=4",
    link: "https://github.com/wellyton-xs",
  },
  {
    name: "Cecília Barbosa",
    desc: "Olá! Meu nome é Cecília, tenho 20 anos e trabalho como designer. Produzo identidades visuais, social media, e o que o seu negócio precisar para ser definitivo no mercado. Vamos trabalhar juntos?",
    imgURL:
      "https://mir-s3-cdn-cf.behance.net/user/115/1a10fb1599260449.67eff2e57b921.jpg",
    link: "https://www.behance.net/mariacsilva19",
  },
];

export default function Sobre() {
  // const groupedMembers: ICard[][] = [];
  // for (let i = 0; i < members.length; i += 3) {
  //   groupedMembers.push(members.slice(i, i + 3));
  // }
  const groupedMembers = members.map((member) => [member]);
  return (
    <main className="container py-5">
      <section id="membros" className="mb-5">
        <Title text="Membros do Projeto" />
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {groupedMembers.map((group, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={idx}
              >
                <div className="d-flex justify-content-center gap-3">
                  {group.map((member, index) => (
                    <MemberCard key={index} {...member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </main>
  );
}
