#!/bin/sh

echo Running deploy script. Will merge master into gh-pages, add main.js and
echo main.css and then push to gh-pages...

STATUS=`git status | grep 'nothing to commit'`
if [ -z "$STATUS" ]
then
	echo Exiting because of uncommited changes.
	git status
	exit 0
else
	echo Nothing to commit, continuing.
fi

echo Checking out gh-pages.
git checkout gh-pages

echo Merging master branch.
git merge master

echo Running grunt to generate files.
grunt

echo Adding generated files.
git add main.css main.js

echo Committing files.
git commit

echo Pushing to origin gh-pages.
git push origin gh-pages

echo Returning to master.
git checkout master

echo Returning to development state.
bower install
