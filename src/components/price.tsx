import { IComponentContent } from "src/interfaces";

export default function Price(props: IComponentContent) {
  return (
    <div>
      <p className="service-price">Preço: {props.children}</p>
    </div>
  );
}
