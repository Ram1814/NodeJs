// npm - global command, comes with node
// npm -- version

// local dependency - use is only in this perticular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everthing default)

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems);