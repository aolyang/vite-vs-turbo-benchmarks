const fs = require("fs")
const path = require("path")
const { genSmall } = require("./template")

module.exports = (target, count, depth) => {
  const dir = path.join(__dirname, "../", target, "components")
  const app = path.join(dir, "App.jsx")

  if (!fs.existsSync(path.join(dir, "subs"))) fs.mkdirSync(path.join(dir, "subs"))

  let imports = ""
  let code = ""

  new Array(count).fill(undefined).forEach((_, index) => {
    const filepath = path.join(dir, "subs", `Comp${index}.jsx`)

    imports += `import { Comp${index} } from "./subs/Comp${index}.jsx"\r\n`
    code += `<Comp${index}/>\r\n`

    fs.writeFileSync(filepath, genSmall(index))
  })

  console.log("subs finished", Date.now())
  fs.writeFileSync(app,
  `${imports}
export default function App() {
  return (<div>
${code}
  </div>)
}`)
  console.log("App.jsx update!", Date.now())
}
