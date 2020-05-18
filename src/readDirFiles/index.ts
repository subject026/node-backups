import path from "path";
import fs from "fs";

const readDirFiles = (folderPath: string) => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(folderPath, (error, files) => {
      if (error) reject(error);
      resolve(
        files !== undefined
          ? files.map((file: string) => {
              return path.join(folderPath, file);
            })
          : []
      );
    });
  });
};

export default readDirFiles;
