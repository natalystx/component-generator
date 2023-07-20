import { isObject } from "lodash";
import { matchVariable } from "./matchVariable";

export const className = (
  className: string | Record<string, any>,
  props?: Record<string, string>
): string | null => {
  if (!className) return null;
  if (typeof className === "string") return `"${className}"`;

  let classString = "";

  if (className?.default) {
    classString += `"${className?.default}",`;
  }

  const keys = Object?.keys(className)?.filter((key) => key !== "default");

  keys.forEach((key) => {
    if (isObject(className[key])) {
      const subKeys = Object.keys(className[key]);
      subKeys.forEach((subKey) => {
        const classNameTemp = matchVariable(
          className[key][subKey],
          props,
          `${key} === '${subKey}'`
        );
        if (!classNameTemp) {
          const isVariable = subKey.match(/{|}/)?.length;
          const replacedSubKey = subKey.replace(/@|{|}/g, "");
          classString += `${key} === ${
            isVariable ? replacedSubKey : `'${replacedSubKey}'`
          } && '${className[key][subKey]}',`;
        } else {
          classString += classNameTemp;
        }
      });

      return classString;
    } else {
      const isVariable = key.match(/{|}/)?.length;
      const replacedKey = key.replace(/{|}/g, "");
      if (isVariable) {
        classString += `${
          matchVariable(className[key], props, `${replacedKey}`) ??
          `${replacedKey} && '${className[key]}',`
        }`;
        return;
      }
      classString += matchVariable(className[key], props);
    }
  });

  return `{cx(${classString})}`;
};
