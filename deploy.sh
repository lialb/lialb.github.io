#!/bin/bash
git checkout master
git checkout -b temp-branch
cd sushi
cp -r build/* ..
git add ..
git commit -m "Deploy website"
git fetch origin gh-pages
git push origin temp-branch:gh-pages
