import { extractTypeFromState } from "./extractType";

export const state = (states: Record<string, string>) => {
  if (!states) return "";

  let stateString = "";

  const keys = Object.keys(states);

  keys.forEach((state) => {
    const extracted = extractTypeFromState(states[state]);
    if (extracted) {
      stateString += `const [${state}, ${extracted?.setter}] = useState${
        extracted.type || ""
      }(${extracted.initialValue || ""});`;
    }
  });

  return stateString;
};
