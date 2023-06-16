import { writeFileSync, readFileSync, mkdirSync, existsSync } from "fs";
import { capitalize, isEmpty } from "lodash";
import { className } from "./utils/className";
import { componentName } from "./utils/componentName";
import { getPropsParams } from "./utils/props";
import { imports } from "./utils/imports";
import { attributes } from "./utils/attributes";
import { propType } from "./utils/propType";

const file = readFileSync("setting.json");
const bufferToString = file.toString("utf-8");
const jsonParse = JSON.parse(bufferToString || "{}") as Record<string, any>;
const keys = Object.keys(jsonParse);
let component = "";

keys.forEach((key) => {
  const currentComponent = jsonParse[key];
  if (isEmpty(currentComponent)) return;
  const props = propType(key, currentComponent.props);
  const propsKeys = Object.keys(currentComponent.props);
  const bodyKeys = Object.keys(currentComponent?.body);
  const importsList = currentComponent?.imports || {};
  const bodyExcludesAttributes = ["children", "className"];

  component += `
  import React from 'react';
  ${imports(importsList)}
  ${props?.type || ""}


  const ${componentName(key)} = ( ${getPropsParams(
    propsKeys,
    props?.name || "",
    currentComponent.props
  )}) => {

  return (
    ${bodyKeys.map(
      (i) =>
        `<${i} ${attributes(currentComponent?.body[i], bodyExcludesAttributes)} 
        className=${className(
          currentComponent?.body[i]?.className,
          currentComponent.props
        )}>
        ${currentComponent?.body[i].children}
        </${i}>`
    )}
    );
  };

  export default ${capitalize(key)};`;

  if (!existsSync(`src/demo/src/components/${capitalize(key)}`)) {
    mkdirSync(`src/demo/src/components/${capitalize(key)}`);
  }
  writeFileSync(
    `src/demo/src/components/${capitalize(key)}/index.tsx`,
    component
  );

  component = "";
});
