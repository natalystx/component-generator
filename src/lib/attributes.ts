export const attributes = (
  attribute: Record<string, string>,
  excludesAttributes: string[]
) => {
  return `${Object.keys(attribute)
    ?.filter((attr) => !excludesAttributes.includes(attr))
    ?.map(
      (attr) =>
        `${attr}=${
          attribute[attr].includes("{")
            ? attribute[attr]
            : `"${attribute[attr]}"`
        }`
    )
    ?.join(" ")} `;
};
