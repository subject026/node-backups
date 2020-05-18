import fs from "fs";
import path from "path";

import devConfig from "../devConfig";

const getConfig = (): TConfig => {
  if (process.env.MODE === "development") {
    return devConfig;
  }

  const configPath =
    process.env.MODE === "development"
      ? path.join(__dirname, "devConfig.json")
      : "prod not setup yet!";

  const data = fs.readFileSync(configPath);
  const config: TConfig = JSON.parse(data.toString());
  return config;
};

export default getConfig;
