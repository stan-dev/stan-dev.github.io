#!/bin/bash

bundle exec jekyll build
node ./_tools/compile_index.js searchIdx.json
node ./_tools/search_index.js  searchIdx.json

