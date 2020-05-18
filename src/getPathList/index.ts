import fs from "fs";
import path from "path";

import resolvePaths from "../resolvePaths";
import readDirFiles from "../readDirFiles";

import getConfig from "../getConfig";

const config = getConfig();

const getSubfolderPaths = (folders: string[]) => {
  console.log("folders: ", folders);
  return new Promise<string[]>((resolve, reject) => {
    try {
      // get subfolder paths
      const promises = folders.map((folder: string) => {
        const folderPath = resolvePaths(folder);
        // resolvePaths() can return an array...
        if (typeof folderPath === "string") {
          return readDirFiles(folderPath);
        }
      });
      Promise.all(promises).then((data) => {
        let fullArray: string[] = [];
        data.forEach((arr) => {
          fullArray = [...fullArray, ...arr];
        });
        resolve(fullArray);
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });
};

const getPathList = async () => {
  try {
    const subfolderPaths = await getSubfolderPaths(config.contentsOf);
    // console.log("subfolderPaths: ", subfolderPaths);
    const folderList = [
      // combine paths
      ...resolvePaths(config.backupsList),
      ...subfolderPaths,
    ];

    return folderList;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default getPathList;
