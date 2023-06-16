import { isEmpty } from "lodash";

export const getPropsParams = (props: string[], type: string) => {
  if (isEmpty(props)) return "";
  return `{${props.map((i) => i.replace("?", "")).join(",")}}: ${type}`;
};
