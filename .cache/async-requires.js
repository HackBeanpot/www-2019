// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": require("gatsby-module-loader?name=component---src-pages-404-jsx!/home/circleci/project/src/pages/404.jsx"),
  "component---src-pages-code-of-conduct-index-jsx": require("gatsby-module-loader?name=component---src-pages-code-of-conduct-index-jsx!/home/circleci/project/src/pages/codeOfConduct/index.jsx"),
  "component---src-pages-index-jsx": require("gatsby-module-loader?name=component---src-pages-index-jsx!/home/circleci/project/src/pages/index.jsx"),
  "component---src-pages-projects-index-jsx": require("gatsby-module-loader?name=component---src-pages-projects-index-jsx!/home/circleci/project/src/pages/projects/index.jsx"),
  "component---src-pages-sponsors-components-sponsor-levels-jsx": require("gatsby-module-loader?name=component---src-pages-sponsors-components-sponsor-levels-jsx!/home/circleci/project/src/pages/sponsors/components/sponsor-levels.jsx"),
  "component---src-pages-sponsors-index-jsx": require("gatsby-module-loader?name=component---src-pages-sponsors-index-jsx!/home/circleci/project/src/pages/sponsors/index.jsx"),
  "component---src-pages-stories-components-featured-projects-jsx": require("gatsby-module-loader?name=component---src-pages-stories-components-featured-projects-jsx!/home/circleci/project/src/pages/stories/components/featured-projects.jsx"),
  "component---src-pages-stories-components-project-detailed-jsx": require("gatsby-module-loader?name=component---src-pages-stories-components-project-detailed-jsx!/home/circleci/project/src/pages/stories/components/project-detailed.jsx"),
  "component---src-pages-stories-components-quote-jsx": require("gatsby-module-loader?name=component---src-pages-stories-components-quote-jsx!/home/circleci/project/src/pages/stories/components/quote.jsx"),
  "component---src-pages-stories-components-stories-jsx": require("gatsby-module-loader?name=component---src-pages-stories-components-stories-jsx!/home/circleci/project/src/pages/stories/components/stories.jsx"),
  "component---src-pages-stories-index-jsx": require("gatsby-module-loader?name=component---src-pages-stories-index-jsx!/home/circleci/project/src/pages/stories/index.jsx")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/circleci/project/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/circleci/project/.cache/json/404.json"),
  "code-of-conduct.json": require("gatsby-module-loader?name=path---code-of-conduct!/home/circleci/project/.cache/json/code-of-conduct.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/circleci/project/.cache/json/index.json"),
  "projects.json": require("gatsby-module-loader?name=path---projects!/home/circleci/project/.cache/json/projects.json"),
  "sponsors-components-sponsor-levels.json": require("gatsby-module-loader?name=path---sponsors-components-sponsor-levels!/home/circleci/project/.cache/json/sponsors-components-sponsor-levels.json"),
  "sponsors.json": require("gatsby-module-loader?name=path---sponsors!/home/circleci/project/.cache/json/sponsors.json"),
  "stories-components-featured-projects.json": require("gatsby-module-loader?name=path---stories-components-featured-projects!/home/circleci/project/.cache/json/stories-components-featured-projects.json"),
  "stories-components-project-detailed.json": require("gatsby-module-loader?name=path---stories-components-project-detailed!/home/circleci/project/.cache/json/stories-components-project-detailed.json"),
  "stories-components-quote.json": require("gatsby-module-loader?name=path---stories-components-quote!/home/circleci/project/.cache/json/stories-components-quote.json"),
  "stories-components-stories.json": require("gatsby-module-loader?name=path---stories-components-stories!/home/circleci/project/.cache/json/stories-components-stories.json"),
  "stories.json": require("gatsby-module-loader?name=path---stories!/home/circleci/project/.cache/json/stories.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/circleci/project/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-jsx!/home/circleci/project/.cache/layouts/index.js")
}