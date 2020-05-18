const createBackup = (path: string) => {
  console.log("creating backup for ", path);
};

const runBackups = (pathsArray: string[]) => {
  return new Promise((resolve, reject) => {
    pathsArray.forEach((path) => {
      // check backups dir for existing backup
      // if backup exists
      // i path target last modified date is earlier than when bakup was created
      // skip path - no need to backup
      // create backup based on path
      createBackup(path);
    });
    resolve();
  });
};

export default runBackups;
