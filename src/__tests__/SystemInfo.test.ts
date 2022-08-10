import { version, isWindows } from "../IPC/utilities";

describe("SystemInfo", () => {
  test("requestSystemInfo", async () => {
    const result = version();
    expect(result.node).toBeDefined();
  });

  test("requestIsWindows", async () => {
    const result = isWindows();
    expect(result.isWindows).toBeDefined();
  });
});
