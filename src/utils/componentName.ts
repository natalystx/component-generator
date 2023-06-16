import { capitalize } from "lodash";

export const componentName = (name: string): string => {
  return capitalize(name);
};
