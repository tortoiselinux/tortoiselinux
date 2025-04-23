import { IComponentContent } from "src/interfaces";

export default function Desc(props: IComponentContent) {
  return (
    <div>
      <p className="service-price">{props.children}</p>
    </div>
  );
}
