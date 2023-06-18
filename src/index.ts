import { writeFileSync, readFileSync, mkdirSync, existsSync } from "fs";
import { component } from "./lib/component";
import { componentName } from "./lib/componentName";

const file = readFileSync("setting.json");
const bufferToString = file.toString("utf-8");
const jsonParse = JSON.parse(bufferToString || "{}") as Record<string, any>;
const keys = Object.keys(jsonParse);

keys.forEach((key) => {
  if (!existsSync(`src/demo/src/components/${componentName(key)}`)) {
    mkdirSync(`src/demo/src/components/${componentName(key)}`);
  }
  writeFileSync(
    `src/demo/src/components/${componentName(key)}/index.tsx`,
    component(key, jsonParse)
  );
});
