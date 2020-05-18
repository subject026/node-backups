import fs from "fs";
import path from "path";
import chalk from "chalk";

import getNodeModulesPaths from "./getNodeModulesPaths";
import deleteFolders from "./deleteFolders";

const clearNodeModules = async (pathsArray: string[]) => {
  // console.log("pathsArray: ", pathsArray);
  const dirs = pathsArray.filter((path) => {
    return fs.statSync(path).isDirectory();
  });
  // console.log("dirs Array: ", dirs);
  const promises = dirs.map(async (dirpath) => {
    // console.log("DIRPATH: ", dirpath);
    return await getNodeModulesPaths(dirpath);
  });

  try {
    const data = await Promise.all(promises);
    // console.log("promise.all response: ", data);
    let filePaths: string[] = [];
    data.forEach((arr) => {
      filePaths = [...filePaths, ...arr];
    });
    console.log("files for deletion: ", filePaths);
    deleteFolders(filePaths);
    return;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default clearNodeModules;
