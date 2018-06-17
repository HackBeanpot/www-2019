// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Warren/www-2019/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/Warren/www-2019/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Warren/www-2019/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/Warren/www-2019/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Warren/www-2019/.cache/json/layout-index.json"),
  "404.json": require("/Users/Warren/www-2019/.cache/json/404.json"),
  "index.json": require("/Users/Warren/www-2019/.cache/json/index.json"),
  "page-2.json": require("/Users/Warren/www-2019/.cache/json/page-2.json"),
  "404-html.json": require("/Users/Warren/www-2019/.cache/json/404-html.json")
}