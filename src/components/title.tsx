import { IComponentContent } from "src/interfaces";

export default function Title(props: IComponentContent) {
  return <h2 className="service-name">{props.children}</h2>;
}
