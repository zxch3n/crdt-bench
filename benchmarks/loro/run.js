import { LoroFactory } from "./factory.js";
import {
  runBenchmarks,
  writeBenchmarkResultsToFile,
} from "../../js-lib/index.js";

const logMemOnly = process.argv[2] === "mem-only";

(async () => {
  await runBenchmarks(
    new LoroFactory(),
    (testName) =>
      testName.startsWith("[B4x100") ||
      testName.startsWith("[B1.7") ||
      testName.startsWith("[B1.8") ||
      testName.startsWith("[B1.9") ||
      testName.startsWith("[B1.10") ||
      testName.startsWith("[B1.11") ||
      testName.startsWith("[B2") ||
      testName.startsWith("[B3") ||
      testName.includes("Array")
  );
  writeBenchmarkResultsToFile(
    "../results.json",
    (testId) => logMemOnly && testId.search("(memUsed)") < 0
  );
})();
