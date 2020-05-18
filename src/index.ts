import fs from "fs";
import path from "path";
import os from "os";

import getConfig from "./getConfig";
import getPathList from "./getPathList";
import clearNodeModules from "./clearNodeModules";
import runBackups from "./runBackups";
import { setupTestDir, removeTestDir } from "./setupDirectories";
/*
1. look at folders to be backed up
2. each folder:
    -> check last modified 
        -> if there is no existing backup for that folder || existing backup creating date is older than last modified of folder
            -> delete any node_modules folders if it contains any
            -> create backup of that folder 
 */

(async function () {
  try {
    if (process.env.MODE === "development") {
      await removeTestDir();
      await setupTestDir();
    }

    //
    // get paths to files for backup based on config
    const pathsArray = await getPathList();

    //
    // clear out any node_modules folders
    process.stdout.write("\n\nclearing node_modules folders....");
    await clearNodeModules(pathsArray);
    process.stdout.write("  done!\n");

    //
    // run backups!
    process.stdout.write("\n\nrunning backups....");
    await runBackups(pathsArray);
    process.stdout.write(" done!\n");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
