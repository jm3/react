# webpack - a module bundler
- configured via `webpack.config.js`
### Entry points
- where loading begins. a single `{entry: 'path/file.js'}` is shorthand for `{entry: main: 'path/file.js'}`
- *Outputs* path: `__dirname + '/build'`. more on resolution: https://webpack.github.io/docs/resolving.html
- *Loaders* can transform files from one lang to another (e.g. TypeScript to JS, or inline images as data urls), or require CSS right into JS.
  - Loaders are NPM modules that get added to your project like any other; they can be dev dependencies
  - for loading CSS, I'm using: `css-loader`, `less-loader`, & `style-loader`, plus `less` (the package, not a loader)
  - loaders can be specified in the webpack config or inline within a require statement, but that's ugly + hard to maintain, so please don't do it.
  - loaders take option params in a weird, url-looking format `?foo`
- *Plugins*
  - [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) generates a skeleton HTML base file to load your app. You can specify a starting template, which is what I did.

## Concepts
- [SemVer](http://semver.org/)
  - MAJOR version: making breaking API changes
  - MINOR version: adding functionality in a backwards-compatible manner
  - PATCH version: backwards-compatible bug fixes
- Code Splitting

## Loading Images as url()'s in CSS
- the webpack 'url-loader' package makes this work
- via: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
