const cli = require("cac")()

cli
  .command("<target>", "run target, vite or nextjs")
  .option("--count, -c <count>", "components count", { default: 1000 })
  .option("--depth, -d <depth>", "sub components max depth", { default: 1 })
  .action((target, {count, depth}) => {
    console.log(target, count, depth)
  })
cli.help()
cli.parse(process.argv)
