import rimraf from "rimraf";

const deleteFolders = (paths: string[]) => {
  paths.forEach((path) => {
    console.log(path);
    rimraf.sync(path);
  });
};

export default deleteFolders;
