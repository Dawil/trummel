#!/bin/sh

git checkout gh-pages
grunt
git add main.css main.js
git commit
git push origin gh-pages
git checkout master
bower install
