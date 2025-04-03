import { IComponentContent } from "src/interfaces";

export default function Code(props: IComponentContent) {
  return <div className="code-block">{props.children}</div>;
}
