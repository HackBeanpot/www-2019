// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": require("gatsby-module-loader?name=component---src-pages-404-jsx!/home/circleci/project/src/pages/404.jsx"),
  "component---src-pages-index-jsx": require("gatsby-module-loader?name=component---src-pages-index-jsx!/home/circleci/project/src/pages/index.jsx"),
  "component---src-pages-projects-index-jsx": require("gatsby-module-loader?name=component---src-pages-projects-index-jsx!/home/circleci/project/src/pages/projects/index.jsx"),
  "component---src-pages-stories-index-jsx": require("gatsby-module-loader?name=component---src-pages-stories-index-jsx!/home/circleci/project/src/pages/stories/index.jsx")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/circleci/project/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/circleci/project/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/circleci/project/.cache/json/index.json"),
  "projects.json": require("gatsby-module-loader?name=path---projects!/home/circleci/project/.cache/json/projects.json"),
  "stories.json": require("gatsby-module-loader?name=path---stories!/home/circleci/project/.cache/json/stories.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/circleci/project/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-jsx!/home/circleci/project/.cache/layouts/index.js")
}