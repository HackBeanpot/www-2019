# Hack Beanpot Website version 2.0
This is the repo for the new hack beanpot website created for the 2019 season

## Tools
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Developing
[Visual Studio Code](https://code.visualstudio.com/) is the recommended editor, and it is helpful to be familiar with command line to use `git` and `npm`.  
To run the project, use `npm i` then `npm run start`.  
For debugging, download the chrome extension [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

#### Styling
In your user settings (`ctrl ,` in VSC) change the default to use 2 spaces for a tab. Use single quotes `'` instead of double quotes `"` for strings.

We use Prettier for code styling. In VSC, install the prettier extension. In your user settings, add the line `"editor.formatOnSave": true` to automatically format files when you save them.

Components, props and state should be named with `CapitalizedCamelCase`. Variables are `camelCased`. File names, folder names, and CSS classes should be in `dash-separated-lowercase`.

#### Structure
Configuration files go in the root directory.  
`/src` holds all the source code including assets, data, styling and components.  
All `.scss` files should be imported into `main.scss`.  

**Shared:** Any component that will be used in multiple places belong in `/src/shared` where each component should have its own folder holding the component and associated style sheet.

**Data:** All Jsonified content belongs in `/src/data`.

**Models:** `.ts` files defining interfaces and classes for different types of objects (ie. projects) go here.

**Assets:** Images, animations, etc

**src:** Each page should have its own folder housing all its components. If there are multiple components and style sheets within a page, they should be sorted in `/components` and `styles` subfolders.

Css constants such as colors should be added to `/src/styles/constants.scss`

## Contributing to the Repo
When developing locally, always develop on your own branch that is rebased off of `develop`.  
**To switch to a new branch:** While on `develop`, run `git pull` to get the latest version. `git checkout -b <branch-name>` to create and switch to a new branch (replacing `<branch-name>` with a relevant name).  

When your feature is done, make sure your branch is up to date, then push your branch to the remote repo.  
> `git checkout develop`  
> `git pull`  
> `git checkout <your-branch>`  
> `git rebase origin/develop`  
> fix and commit any conflicts  
> `git push origin <your-branch>`  

To merge your changes into `develop`, open a pull request and add reviewers and fill in the PR template. You will need 3 reviewers to approve your PR before merging.
**When merging, use the squash and merge option.**

## Deployment
The production version of this site is on the `master` branch.
