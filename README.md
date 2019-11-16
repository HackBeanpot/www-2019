# beta.hackbeanpot.com

HackBeanpot's website for 2018-2020. It is written in React and served using GitHub Pages. We use Gatsby to compile our files into static assets for deployment.

## Getting Set Up For Development

First and foremost, make sure you have [Node](https://nodejs.org) installed.

`git clone https://github.com/HackBeanpot/www-2019` Clone into this repository.
`cd www-2019` CD into the new local repo.
`npm install` Install dependencies.
`npm install --global gatsby-cli` Install Gatsby
`gatsby develop` Launch a hot-reloading dev environment to see the site running on your local!

## Branch Structure

The branch `master` is where our uncompiled production code lives. Whenever a new commit is made here, CI notices and builds everything inside into static assets which are then committed to the branch `gh-pages` and deployed. In general, don't commit directly to master or branch out of it.

The branch `gh-pages` is where our compiled (static) code lives. This branch is LIVE. LIVE I SAY. So we leave it up to our CI robots to manage it. Unless you know what you are doing, probably don't branch, merge, or commit to this branch.

The branch `develop` is our main branch. Branch off of here if you are starting a new feature; merge back into here if you are ready for that feature to go to prod. We'll periodically merge changes in this branch into the master branch.

All other branches are probably used for developing things. When you make one, try to give it a descriptive name!

Once your PR is approved, select the **squash and merge** option. Commits can be merged unsquashed if you feel that they are meaningful (ie if they each fulfill their own purpose). The goal is to keep the commit history organized so that it is easy to find when certain changes are made. Remember to delete your personal branches after merging to keep the repo clean.

**DO NOT SQUASH COMMITS WHEN MERGING INTO MASTER!!** This messes with the source history.

## Directory Structure

New pages will be added to the `src/pages` folder, which also represents the url of each page. Each folder `x` in the pages folder will correspond to the url path `.../x`, which will render the `index.jsx` file for that path.

Shared components belong in the `src/components` folder, and ones that are unique to certain pages can go in a `components` subdirectory of that page.

Jsonified data to be loaded into page content should be saved under `src/data`.

## Style Guide and Naming Conventions

Spaces, not tabs.
Each "tab" is 2 spaces.
And try to keep to 80 char lines.

We use Prettier for code styling. If you are using Visual Studio Code, install the prettier extension. In your user settings, add the line `"editor.formatOnSave": true` to automatically format files when you save them. Alternatively, run the format script `npm run format` before opening a PR.

Components, props and state should be named with `CapitalizedCamelCase`. Variables are `camelCased`. File names, folder names, and CSS classes should be in `dash-separated-lowercase`.

Import absolute paths rather than relative paths when possible (for subfolders of `src`).

## How to Compile

Don't. We have CI.

But the command to do so is `gatsby build` in the repo's top-level directory. Keep in mind that if you do build on your local and then view the static files, links between pages won't work. Better to use `gatsby develop` to see the changes you're working on.

## How CI Works

Forbidden magic. Basically. (Coming soon, Warren will write about it)

## Useful References

* [React](https://reactjs.org/docs/hello-world.html)
* [Gatsby Components](https://www.gatsbyjs.org/docs/building-with-components/)
* [Prettier](https://prettier.io/)
* [Icons](https://github.com/levrik/mdi-react)
