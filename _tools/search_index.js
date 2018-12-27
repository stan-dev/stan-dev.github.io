#!/usr/bin/env nodejs

var fs = require('fs');
var lunr = require('../assets/js/lunr.js');

if (process.argv.length < 3) {
    console.log("usage:  search_index.js <index file path>");
    process.exit(1);
}
var idxName = process.argv[2];

// load index
var raw = fs.readFileSync(idxName, 'utf8');
console.log("load index: " + idxName);

var parsed = JSON.parse(raw);
var index = lunr.Index.load(parsed.index);

console.log("search term: Bayesian");
console.log(index.search("Bayesian")[0]);
console.log("");
console.log("search term: Python");
console.log(index.search("Python")[0]);
console.log("");
console.log("search term: baseball");
console.log(index.search("baseball")[0]);
console.log("");


