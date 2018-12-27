#!/usr/bin/env nodejs

var fs = require('fs');
var lunr = require('../assets/js/lunr.js');

if (process.argv.length < 3) {
    console.log("usage:  compile_index.js <index file path>");
    process.exit(1);
}
var idxName = process.argv[2];

// read search_index.json into array "docs"
var docs = JSON.parse(fs.readFileSync('./_site/docsArray.json', 'utf8'));

var store = {};
// init lunr
var idx = lunr(function () {
    this.ref('url')
    this.field('title',3)
    this.field('content_short',2)
    this.field('content_long',2)
    for(var index in docs) {
        console.log(docs[index].title)
        this.add(docs[index])
        store[docs[index].url] = { title: docs[index].title };
    }
})

fs.writeFile(idxName,
	     JSON.stringify({
		 index: idx.toJSON(),
		 store: store
	     }),
	     function (err) {
		 if (err) throw err
		 console.log('compiled lunr.js index, file: ' + idxName)
	     });


