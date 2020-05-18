import path from "path";

import clearNodeModules from "./";
import getNodeModulesPaths from "./getNodeModulesPaths";
import readDirFiles from "../readDirFiles";
import getFilename from "./getFilename";

const rootpath = path.join(__dirname, "..", "..", "dummy-dir-tree");
const testDir = path.join(__dirname, "..", "..", "test-directory");

xdescribe("getFilename()", () => {
  it("should return the filename string", () => {
    const input1 = "/home/username/work";
    const result1 = getFilename(input1);
    expect(result1).toBe("work");

    const input2 = "/home/username/node_modules";
    const result2 = getFilename(input2);
    expect(result2).toBe("node_modules");

    const input3 = "/home/username/node_modules/";
    const result3 = getFilename(input3);
    expect(result3).toBe("node_modules");
  });
});

xdescribe("readDirFiles()", () => {
  it("returns an array of filename strings", async () => {
    const result = await readDirFiles(rootpath);
    expect(result).toHaveLength(8);
  });
});

xdescribe("getNodeModulesPaths()", () => {
  it("gets paths of all node_modules folders within a given directory", async () => {
    const paths = await getNodeModulesPaths(rootpath);
    expect(paths).toHaveLength(4);
  });
});

describe("fn clearNodModules", () => {
  // setup folder structure to run code against

  it("removes node_modules folders", async () => {
    const pathsBefore = await getNodeModulesPaths(testDir);
    expect(pathsBefore).toHaveLength(4);
    await clearNodeModules(pathsBefore);
    const pathsAfter = await getNodeModulesPaths(testDir);
    expect(pathsAfter).toHaveLength(0);
  });
});
