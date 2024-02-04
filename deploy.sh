#!/bin/bash
git checkout deploy
git pull origin master
cd sushi
npm run build
cp -r build/ ..
cd ..
rm -r docs
mv build docs
git add .
git commit -m "Deploy website"
git push --force origin deploy
git checkout -
