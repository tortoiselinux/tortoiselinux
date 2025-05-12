import { ICard } from "src/interfaces";
import Image from "next/image";
export default function MemberCard(props: ICard) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image
        className="card-img-top"
        src={props.imgURL}
        alt="Card image"
        width={332}
        height={332}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.desc}</p>
        <a href={props.link} className="btn btn-primary">
          Ver mais
        </a>
      </div>
    </div>
  );
}
