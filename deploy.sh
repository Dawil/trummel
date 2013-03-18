#!/bin/sh

echo Running deploy script. Will merge master into gh-pages, add main.js and
echo main.css and then push to gh-pages...

STATUS=`git status | grep 'nothing to commit'`
if [ -z "$STATUS" ]
then
	git status
	exit 0
else
	echo Nothing to commit, continuing.
fi

git checkout gh-pages
git merge master
grunt
git add main.css main.js
git commit
git push origin gh-pages
git checkout master
bower install
