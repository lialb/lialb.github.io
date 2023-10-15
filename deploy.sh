#!/bin/bash
git checkout deploy
cd sushi
npm run build
cp -r build/ ..
cd ..
mv build docs
git add .
git commit -m "Deploy website"
git push
git checkout -
