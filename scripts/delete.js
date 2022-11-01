const path = require("path")
const fs = require("fs");

module.exports = (target) => {
  const dir = path.join(__dirname, "../", target, "components")
  const app = path.join(dir, "App.jsx")

  fs.writeFileSync(app,
    `export default function App() {
  return <h1>hello</h1>
}
`)
  fs.rmSync(path.join(dir, "subs"), { recursive: true, force: true })
}
