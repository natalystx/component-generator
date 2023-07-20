import { isEmpty, capitalize } from "lodash";
import { componentName } from "./componentName";
import { element } from "./element";
import { imports } from "./imports";
import { propType } from "./propType";
import { getPropsParams } from "./props";
import { state } from "./state";

export const component = (
  name: string,
  componentJSON: Record<string, any>
): string => {
  const currentComponent = componentJSON[name];
  if (isEmpty(currentComponent)) return "";
  const props = propType(name, currentComponent.props);
  const propsKeys = Object.keys(currentComponent.props);
  const bodyKeys = Object.keys(currentComponent?.body);
  const importsList = currentComponent?.imports || {};
  const states = currentComponent?.state;

  return `
  import React ${states ? ",{useState}" : ""} from 'react';
  import {cx} from '@emotion/css';
  ${imports(importsList)}
  ${props?.type || ""}


  const ${componentName(name)} = ( ${getPropsParams(
    propsKeys,
    props?.name || "",
    currentComponent.props
  )}) => {

    ${state(states)}

  return (
    ${bodyKeys.map((i) =>
      element(i, currentComponent?.body[i], currentComponent.props)
    )}
    );
  };

  export default ${capitalize(name)};`;
};
