import { LoroFactory } from './factory.js'
import { runBenchmarks, writeBenchmarkResultsToFile } from '../../js-lib/index.js'

const logMemOnly = process.argv[2] === 'mem-only'

  ; (async () => {
    await runBenchmarks(new LoroFactory(), testName => false)
    writeBenchmarkResultsToFile('../results.json', testId => false)
  })()
