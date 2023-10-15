#!/bin/bash
git checkout deploy
cd sushi
npm run build
cp -r build/ ..
git add ..
git commit -m "Deploy website"
git push
git checkout -
