export const extractTypeFromState = (
  setterFunctionString: string
): { type?: string; initialValue?: string; setter: string } | null => {
  const startAngle = setterFunctionString.indexOf("<");
  const closingAngle = setterFunctionString.indexOf(">");
  const startParen = setterFunctionString.indexOf("(");
  const closingParen = setterFunctionString.indexOf(")");

  if (setterFunctionString) {
    const type = setterFunctionString.slice(startAngle, closingAngle + 1);
    const setter = setterFunctionString
      .slice(0, startAngle)
      .match(/\w+/)
      ?.pop();
    const initialValue = setterFunctionString
      .slice(startParen, closingParen + 1)
      .match(/\w+/)
      ?.pop();

    return {
      type,
      setter: setter ?? "",
      initialValue,
    };
  }

  return null;
};
