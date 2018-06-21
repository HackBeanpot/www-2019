// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/circleci/project/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/circleci/project/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/circleci/project/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/circleci/project/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/home/circleci/project/.cache/json/layout-index.json"),
  "404.json": require("/home/circleci/project/.cache/json/404.json"),
  "index.json": require("/home/circleci/project/.cache/json/index.json"),
  "page-2.json": require("/home/circleci/project/.cache/json/page-2.json"),
  "404-html.json": require("/home/circleci/project/.cache/json/404-html.json")
}