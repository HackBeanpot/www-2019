# beta.hackbeanpot.com
HackBeanpot's website for 2018-2019. It is written in React and served using GitHub Pages. We use Gatsby to compile our files into static assets for deployment.


## Getting Set Up For Development
First and foremost, make sure you have [Node](https://nodejs.org) installed.

`git clone https://github.com/HackBeanpot/www-2019` Clone into this repository.
`cd www-2019` CD into the new local repo.
`npm install` Install dependencies.
`gatsby develop` Launch a hot-reloading dev environment to see the site running on your local!


## Branch Structure
The branch `master` is where our uncompiled production code lives. Whenever a new commit is made here, CI notices and builds everything inside into static assets which are then committed to the branch `gh-pages` and deployed. In general, don't commit directly to master or branch out of it.

The branch `gh-pages` is where our compiled (static) code lives. This branch is LIVE. LIVE I SAY. So we leave it up to our CI robots to manage it. Unless you know what you are doing, probably don't branch, merge, or commit to this branch.

The branch `develop` is our main branch. Branch off of here if you are starting a new feature; merge back into here if you are ready for that feature to go to prod. We'll periodically merge changes in this branch into the master branch.

All other branches are probably used for developing things. When you make one, try to give it a descriptive name! And remember to delete your personal branches once your changes are merged to keep the repo clean.


## Directory Structure
Just put the code in different places until it works. (Jk, Felicia says there might be a different way (who knew??) and she will write this section.)


## Style Guide
Spaces, not tabs.
Each "tab" is 2 spaces.
And try to keep to 80 char lines.
(I just copied this from the old repo. Add to it as we write code)


## How to Compile
Don't. We have CI.

But the command to do so is `gatsby build` in the repo's top-level directory. Keep in mind that if you do build on your local and then view the static files, links between pages won't work. Better to use `gatsby develop` to see the changes you're working on.


## How CI Works
Forbidden magic. Basically. (Coming soon, Warren will write about it)


## Useful References
* [Gatsby Components](https://www.gatsbyjs.org/docs/building-with-components/)
