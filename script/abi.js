const child_process = require("child_process");
const fs = require("fs");
let ELECTRON_PATH = "../node_modules/.bin/electron";
let ELECTRON_PATH_WIN = "../node_modules/.bin/electron.cmd";
let NODE_ABI = process.versions.modules;
let ELECTRON_ABI = child_process.execSync(process.platform == 'win32' ? `call ${ELECTRON_PATH_WIN} -a` : `${ELECTRON_PATH} -a`).toString().replace(/[\n\r]/g, "")
console.log("Node ABI : " + NODE_ABI);
console.log("Electron ABI : " + ELECTRON_ABI);
(function () {
    let package = require("../package.json")
    package.iohook.targets = [
        `electron-${ELECTRON_ABI}`,
        `node-${NODE_ABI}`
    ];
    fs.writeFileSync("../package.json", JSON.stringify(package, null, 2))
})();
