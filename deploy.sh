#!/bin/sh

echo Running deploy script. Will merge master into gh-pages, add main.js and main.css, then push to gh-pages.
if [ -z `git status | grep 'nothing to commit'` ]
then
	echo things to commit
else
	echo nothing to commit
fi
exit 0

git checkout gh-pages
git merge master
grunt
git add main.css main.js
git commit
git push origin gh-pages
git checkout master
bower install
