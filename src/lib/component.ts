import { isEmpty, capitalize } from "lodash";
import { componentName } from "./componentName";
import { element } from "./element";
import { imports } from "./imports";
import { propType } from "./propType";
import { getPropsParams } from "./props";

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

  return `
  import React from 'react';
  import {cx} from '@emotion/css';
  ${imports(importsList)}
  ${props?.type || ""}


  const ${componentName(name)} = ( ${getPropsParams(
    propsKeys,
    props?.name || "",
    currentComponent.props
  )}) => {

  return (
    ${bodyKeys.map((i) =>
      element(i, currentComponent?.body[i], currentComponent.props)
    )}
    );
  };

  export default ${capitalize(name)};`;
};
