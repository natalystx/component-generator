import { element } from "./element";

export const children = (
  node: "string" | Record<string, any>,
  props: Record<string, string>
) => {
  if (typeof node === "string") return node;
  let elementString = "";
  const childrenKeys = Object.keys(node);

  childrenKeys.forEach((tag) => {
    elementString += element(tag, node[tag]?.body, props);
  });

  return elementString;
};
