#!/bin/bash

# Switch to deploy branch
git checkout deploy

# Update with latest changes from master
git pull origin master

# Build the site
cd sushi
npm run build
cd ..

# Check if docs exists and remove it appropriately
if [ -d docs ]; then
    rm -rf docs   # Remove if it's a directory
elif [ -f docs ]; then
    rm docs       # Remove if it's a file
fi

# Replace docs directory with new build
mv sushi/build docs

# Copy CNAME file if it exists
[ -f CNAME ] && cp CNAME docs

# Commit and push changes
git add .
git commit -m "Deploy website"
git push --force origin deploy

# Return to previous branch
git checkout -

echo "Deployment complete!"