/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPC, SendChannels } from "@el3um4s/ipc-for-electron";
import { version, isWindows } from "./utilities";

import { BrowserWindow } from "electron";

const nameAPI = "systemInfo";

// to Main
const validSendChannel: SendChannels = {
  requestSystemInfo: requestSystemInfo,
  requestIsWindows: requestIsWindows,
};

// from Main
const validReceiveChannel: string[] = ["getSystemInfo", "getIsWindows"];

const systemInfo = new IPC({
  nameAPI,
  validSendChannel,
  validReceiveChannel,
});

export default systemInfo;

// Enter here the functions for ElectronJS

function requestSystemInfo(
  mainWindow: BrowserWindow,
  event: Electron.IpcMainEvent,
  message: unknown
) {
  const result = version();
  mainWindow.webContents.send("getSystemInfo", result);
}

function requestIsWindows(
  mainWindow: BrowserWindow,
  event: Electron.IpcMainEvent,
  message: unknown
) {
  const result = isWindows();
  mainWindow.webContents.send("getIsWindows", result);
}
