import fs from "fs";
import path from "path";

let nmPathsArray: string[] = [];

export const getNodeModulesPaths = (
  currentDir: string,
  rootdir: string = ""
) => {
  if (rootdir === "") rootdir = currentDir;
  const files = fs.readdirSync(currentDir);
  if (files.length > 0) {
    files.forEach(async (file) => {
      if (fs.statSync(path.join(currentDir, file)).isDirectory()) {
        // if it;s a nm folder add it to the array.
        if (file === "node_modules") {
          nmPathsArray.push(path.join(currentDir, file));
        } else {
          // if it's some other folder look inside it
          getNodeModulesPaths(path.join(currentDir, file));
        }
      }
    });
  }
};

const defaultExport = async (rootdir: string) => {
  nmPathsArray = [];
  getNodeModulesPaths(rootdir);
  return nmPathsArray;
};

export default defaultExport;
