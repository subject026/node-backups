import path from "path";
import fs from "fs";
const ncp = require("ncp");
import rimraf from "rimraf";

import getConfig from "./getConfig";

const config = getConfig();

export const setupTestDir = async () => {
  process.stdout.write("setting up test directory based on ");
  process.stdout.write(`${config.testdirSrc}\n`);
  return new Promise<string>((resolve, reject) => {
    ncp.limit = 16;
    ncp(config.testdirSrc, config.testdir, (err: Error[]) => {
      if (err) {
        reject(err);
      }
      process.stdout.write("  done!\n");
      resolve(config.testdir);
    });
  });
};

export const removeTestDir = () => {
  return new Promise((resolve, reject) => {
    console.log(config.testdir);
    rimraf(config.testdir, (error) => {
      if (error) reject(error);
      resolve();
    });
  });
};
