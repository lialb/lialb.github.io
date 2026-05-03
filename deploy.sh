#!/bin/bash
set -e

previous_branch=$(git branch --show-current)

# Switch to deploy branch
git checkout deploy

# Update with latest changes from master
git pull origin master

# Build the site
cd sushi
npm run build
cd ..

# Remove previous build output
rm -rf docs

# Replace docs directory with new build
mv sushi/build docs

# Copy CNAME file if it exists
[ -f CNAME ] && cp CNAME docs/

# Commit and push changes
git add docs
git commit -m "Deploy website" || echo "No deploy changes to commit"
git push --force origin deploy

# Return to previous branch
git checkout "$previous_branch"

echo "Deployment complete!"