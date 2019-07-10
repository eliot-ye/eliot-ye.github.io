// @ts-check
const fs = require("fs");

module.exports = (options, ctx) => ({
  name: "vuepress-plugin-changeVersion",
  async generated(){
    /** @type {{version:string}} */
    let fileData = JSON.parse(fs.readFileSync(`${ctx.sourceDir}/package.json`).toString());
    const versionList = fileData.version.split(".");
    fileData.version = `${versionList[0]}.${versionList[1]}.${~~versionList[2] +
      1}`;
    console.log(`v${fileData.version}`)
    const newFlieStr = JSON.stringify(fileData, null, 2) + "\n";
    fs.writeFileSync(`${ctx.sourceDir}/package.json`, newFlieStr);
  }
})