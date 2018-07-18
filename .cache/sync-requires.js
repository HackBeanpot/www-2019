// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/circleci/project/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/home/circleci/project/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/circleci/project/src/pages/index.jsx")),
  "component---src-pages-projects-index-jsx": preferDefault(require("/home/circleci/project/src/pages/projects/index.jsx")),
  "component---src-pages-stories-components-featured-projects-jsx": preferDefault(require("/home/circleci/project/src/pages/stories/components/featured-projects.jsx")),
  "component---src-pages-stories-components-project-detailed-jsx": preferDefault(require("/home/circleci/project/src/pages/stories/components/project-detailed.jsx")),
  "component---src-pages-stories-components-quote-jsx": preferDefault(require("/home/circleci/project/src/pages/stories/components/quote.jsx")),
  "component---src-pages-stories-components-stories-jsx": preferDefault(require("/home/circleci/project/src/pages/stories/components/stories.jsx")),
  "component---src-pages-stories-index-jsx": preferDefault(require("/home/circleci/project/src/pages/stories/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/home/circleci/project/.cache/json/layout-index.json"),
  "404.json": require("/home/circleci/project/.cache/json/404.json"),
  "index.json": require("/home/circleci/project/.cache/json/index.json"),
  "projects.json": require("/home/circleci/project/.cache/json/projects.json"),
  "stories-components-featured-projects.json": require("/home/circleci/project/.cache/json/stories-components-featured-projects.json"),
  "stories-components-project-detailed.json": require("/home/circleci/project/.cache/json/stories-components-project-detailed.json"),
  "stories-components-quote.json": require("/home/circleci/project/.cache/json/stories-components-quote.json"),
  "stories-components-stories.json": require("/home/circleci/project/.cache/json/stories-components-stories.json"),
  "stories.json": require("/home/circleci/project/.cache/json/stories.json"),
  "404-html.json": require("/home/circleci/project/.cache/json/404-html.json")
}