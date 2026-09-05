# README:
#   Use this script to safely open
#   obsidian in this git branch.
#   VSCode handles this properly, 
#   since it doesn't require a config file, 
#   Obsidian requires it's './obsi-
#   dian' config, w hich changes with each 
#   branch, causing system issues.
#   
#   This script ensures the branch
#   switch is smooth & non-conflicting
#   Additionally, avoiding plugins
#   like 'obsidian-git' which cause 
#   overhead.

echo -e "Opening vault in obsidian..."
echo -e "Current git branch is..."
obsidian .