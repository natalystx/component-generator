export const imports = (importList: Record<string, string>): string => {
  return Object.keys(importList)
    ?.map((dep) => `import ${importList[dep]} from '${dep}';`)
    .join(" ");
};
