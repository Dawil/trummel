#!/bin/sh

git checkout gh-pages
git merge master
grunt
git add main.css main.js
git commit
git push origin gh-pages
git checkout master
bower install
