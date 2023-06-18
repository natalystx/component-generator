import { attributes } from "./attributes";
import { children } from "./children";
import { className } from "./className";

export const element = (
  tag: string,
  body: Record<string, any>,
  props: Record<string, string>
) => {
  const classNameString = className(body?.className, props);

  if (!body) return "";
  const bodyExcludesAttributes = ["children", "className"];
  return `<${tag} ${attributes(body, bodyExcludesAttributes)} 
       ${classNameString ? `className=${classNameString} ` : ""}>
        ${children(body.children, props)}
        </${tag}>`;
};
