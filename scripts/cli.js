const cli = require("cac")()
const writeCode = require("./genFile")
const deleteFiles = require("./delete")

cli
  .command("<target>", "run target, vite or nextjs")
  .option("--count, -c <count>", "components count", { default: 10 })
  .option("--depth, -d <depth>", "sub components max depth", { default: 1 })
  .option("--remove, -r", "remove gen")
  .action((target, { count, depth, remove }) => {
    remove ? deleteFiles(target) : writeCode(target, count, depth)
  })
cli.help()
cli.parse(process.argv)
