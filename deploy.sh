#!/bin/sh

echo Running deploy script. Will merge master into gh-pages, add main.js and main.css, then push to gh-pages.
git checkout gh-pages
git merge master
grunt
git add main.css main.js
git commit
git push origin gh-pages
git checkout master
bower install
