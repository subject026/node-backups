import path from "path";
import os from "os";

// console.log(path.join(os.homedir()));

const resolvePath = (input: string | string[]): string | string[] => {
  // if string starts with ~ resolve it
  const resolved = input;
  return resolved;
};

export default resolvePath;
