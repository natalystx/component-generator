import { capitalize } from "lodash";

type PropTypeReturn = { type: string; name: string } | null;

export const propType = (
  componentName: string,
  props: Record<string, string>
): PropTypeReturn => {
  if (!props) return null;
  const propsKeys = Object.keys(props);
  const type = `type ${capitalize(componentName)}Props = {${propsKeys.map(
    (i) => `${i}: ${props[i].replace(/@/g, "")}`
  )}}`;
  const name = `${capitalize(componentName)}Props`;

  return {
    type,
    name,
  };
};
