import { isEmpty, intersection } from "lodash";

export const matchVariable = (
  className: string,
  props?: Record<string, string>,
  condition?: string
) => {
  if (!props) return `'${className}'`;
  const propKeys = Object.keys(props);

  const propValues: Record<string, string[]>[] = propKeys
    .filter((key) => props[key].includes(`|`))
    .map((key) => ({
      [key]: props[key].split("|").map((i) => i.replace(/\s|'|@/g, "")),
    }));

  const variablesInClassName = className.match(/{\w+}/g);

  if (
    isEmpty(variablesInClassName) ||
    !intersection(
      variablesInClassName,
      propKeys.map((i) => `{${i.replace(/\?/, "")}}`)
    )
  ) {
    return null;
  }

  let classNameTemp = "";

  variablesInClassName?.forEach((variable) => {
    propValues.forEach((valueObj) => {
      const key = Object.keys(valueObj).pop() || "";
      const normalizedKey = key.replace(/\?/, "");
      const normalizedVariable = variable.match(/\w+/)?.pop();

      if (normalizedKey === normalizedVariable) {
        valueObj[key].forEach((value) => {
          const regex = new RegExp(`{${normalizedKey}}`, "g");
          const formatted = className.replace(regex, value);
          classNameTemp += `${
            condition ? `${condition} &&` : ""
          } ${normalizedKey} === "${value}" && '${formatted}',`;
        });
      }
    });
  });

  return classNameTemp;
};
