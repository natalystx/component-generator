import { isEmpty } from "lodash";

export const getPropsParams = (
  propKeys: string[],
  type: string,
  props?: Record<string, string>
) => {
  if (isEmpty(propKeys)) return "";
  return `{${propKeys
    .map((i) => {
      const propName = i.replace("?", "");
      if (props?.[i].includes("@") && i.includes("?")) {
        const split =
          props?.[i]
            .split("|")
            .filter((v) => v.includes("@"))
            .pop() || "";

        const value = split.replace(/\s|'|@/g, "");
        return `${propName}="${value}"`;
      }

      return propName;
    })
    .join(",")}}: ${type}`;
};
