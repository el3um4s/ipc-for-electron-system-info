import { app } from "electron";

const version = () => {
  const versionChrome = process.versions.chrome;
  const versionNode = process.versions.node;
  const versionElectron = process.versions.electron;

  const versionApp = app?.getVersion();

  return {
    chrome: versionChrome,
    node: versionNode,
    electron: versionElectron,
    app: versionApp,
  };
};

const isWindows = () => {
  return { isWindows: process.platform === "win32" };
};

export { version, isWindows };

// TO DO:
// get the dependencies from the package.json
// get the devDependencies from the package.json
