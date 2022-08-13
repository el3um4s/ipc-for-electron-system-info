import { SystemInfo, IsWindows, NameAPI } from "./interfaces";

const nameAPI: NameAPI = "systemInfo";

const getSystemInfo = async (
  callback?: (arg0: SystemInfo) => void,
  apiKey = "ipc"
): Promise<SystemInfo> => {
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];

  return new Promise((resolve) => {
    api.receive("getSystemInfo", (data: SystemInfo) => {
      const { chrome, node, electron, app } = data;
      if (callback) {
        callback({ chrome, node, electron, app });
      }
      resolve({ chrome, node, electron, app });
    });
  });
};

const requestSystemInfo = async (
  callback?: (arg0: SystemInfo) => void,
  apiKey = "ipc"
): Promise<SystemInfo> => {
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];
  api.send("requestSystemInfo", null);
  return getSystemInfo(callback);
};

const getIsWindows = async (
  callback?: (arg0: IsWindows) => void,
  apiKey = "ipc"
): Promise<IsWindows> => {
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];

  return new Promise((resolve) => {
    api.receive("getIsWindows", (data: IsWindows) => {
      const { isWindows } = data;
      if (callback) {
        callback({ isWindows });
      }
      resolve({ isWindows });
    });
  });
};

const requestIsWindows = async (
  callback?: (arg0: IsWindows) => void,
  apiKey = "ipc"
): Promise<IsWindows> => {
  const api = globalThis[apiKey as keyof typeof globalThis][nameAPI];
  api.send("requestIsWindows", null);
  return getIsWindows(callback);
};

const systemInfo = {
  requestSystemInfo,
  requestIsWindows,
  on: {
    getSystemInfo,
    getIsWindows,
  },
};

export default systemInfo;
