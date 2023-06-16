import { isEmpty, isObject } from "lodash";

export const className = (
  className: string | Record<string, any>,
  props?: Record<string, string>
): string => {
  const propsKeys = Object.keys(props || {})?.map(
    (i) => `{${i.replace(/\?/g, "")}}`
  );

  if (typeof className === "string") return `"${className}"`;

  let classString = "";

  if (className?.default) {
    classString += `"${className?.default}",`;
  }

  const keys = Object.keys(className).filter((key) => key !== "default");

  keys.forEach((key) => {
    if (isObject(className[key])) {
      const subKeys = Object.keys(className[key]);
      subKeys.forEach((subKey) => {
        const variables = `${className[key][subKey]}`.match(/{\w+}/g);
        if (isEmpty(!variables)) {
          variables?.forEach((variable) => {
            const currentClassName = `${key} === '${subKey}' && '${className[key][subKey]}'`;
            let classNameTemp: string[] = [];
            if (propsKeys.includes(variable)) {
              const normalizedVariable = variable.match(/\w+/)?.pop() || "";
              const propsOptions =
                props?.[
                  Object.keys(props).find((i) =>
                    i.includes(normalizedVariable)
                  ) || ""
                ]?.split("|");
              propsOptions?.forEach((i) => {
                const value = i.replace(/\s|'|@/g, "");

                const regex = new RegExp(`${variable}`, "g");
                const formatted = currentClassName.replace(regex, value);
                classNameTemp.push(
                  `${normalizedVariable} === "${value}" &&  ${formatted},`
                );
              });
            }
            classString += classNameTemp.join(" ");

            return;
          });

          if (!className[key][subKey].includes(variables?.pop())) {
            classString += `${key} === '${subKey.replace(/@/g, "")}' && '${
              className[key][subKey]
            }',`;
          }
        } else {
          classString += `${key} === '${subKey.replace(/@/g, "")}' && '${
            className[key][subKey]
          }',`;
        }
      });
    }
  });

  return `{cx(${classString})}`;
};
