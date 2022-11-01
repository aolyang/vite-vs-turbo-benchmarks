const cli = require("cac")()
const writeCode = require("./genFile")
cli
  .command("<target>", "run target, vite or nextjs")
  .option("--count, -c <count>", "components count", { default: 10 })
  .option("--depth, -d <depth>", "sub components max depth", { default: 1 })
  .action((target, {count, depth}) => writeCode(target, count, depth))
cli.help()
cli.parse(process.argv)
