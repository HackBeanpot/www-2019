const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-index-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/404/index.jsx"))),
  "component---src-pages-code-of-conduct-index-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/code-of-conduct/index.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/index.jsx"))),
  "component---src-pages-sponsors-components-sponsor-kits-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/sponsors/components/sponsor-kits.jsx"))),
  "component---src-pages-sponsors-index-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/sponsors/index.jsx"))),
  "component---src-pages-stories-components-quote-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/stories/components/quote.jsx"))),
  "component---src-pages-stories-components-stories-mobile-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/stories/components/stories-mobile.jsx"))),
  "component---src-pages-stories-components-stories-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/stories/components/stories.jsx"))),
  "component---src-pages-stories-index-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/stories/index.jsx"))),
  "component---src-pages-team-index-jsx": hot(preferDefault(require("/home/circleci/project/src/pages/team/index.jsx")))
}

