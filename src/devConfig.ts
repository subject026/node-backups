import path from "path";

const devConfig: TConfig = {
  backupLocation: path.join(__dirname, "..", "dev-output"),
  backupsList: [
    path.join(__dirname, "..", "test-directory", "file1.txt"),
    path.join(__dirname, "..", "test-directory", "file2.txt"),
    path.join(__dirname, "..", "test-directory", "file3.txt"),
  ],
  contentsOf: [
    path.join(__dirname, "..", "test-directory", "work"),
    path.join(__dirname, "..", "test-directory", "personal"),
  ],
  testdirSrc: path.join(__dirname, "..", "test-directory-template"),
  testdir: path.join(__dirname, "..", "test-directory"),
};

export default devConfig;
