# Notes

## Languages

### Javascript
- ECMAScript - the specification, basically (TC39 group)
- move to yearly releases rather than monolithic releases
- [ES2015](https://babeljs.io/learn-es2015) (aka ES6) was the last "big" release. different browsers support different partial versions of it.

### Babel: “a compiler for the next generation of Javascript”
- [Babel](https://babeljs.io) is a _source-to-source compiler_ AKA "Transpiler"
- to support some ES2015 features, we also need [Babel-Polyfill](https://babeljs.io/docs/usage/polyfill/)
- NOTE: _Polyfill(a)_ is British English for plaster spackle: hole-fillers, IOW.
- Babel-Polyfill works at runtime, enabling new, mind-boggling features like Promises or [WeakMaps](http://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html), static methods like `Array.from` or `Object.assign`, instance methods like `Array.prototype.includes`, and generator functions (provided you use the regenerator plugin). The polyfill adds to the global scope as well as native prototypes like `String` in order to do this.
- can convert from ES6 / ES2015 or "Flow" to JS that will run in … some browser?
- *presets*: Babel plugins that tell Babel what to look out for and
transform into plain, vanilla Javascript.

## JSX
- nice: embedded HTML markup within JS, without need for annoying double-quoting.
- file extension can be either JSX or JS. React file naming convention is CamelCase.
- **Pass values into Components**: *This was sort of weird to me.* Data & options are passed into the component in HTML attribute notation, WITHOUT quotes. <shrug>
- from within the Component, any values passed in can be accessed via this.props
*Root HTML template*:
- Element nodes as mount / load poins should not be self-closing for brevity. This bit me, too: <div id="root"></div> works; <div id="root" /> does not. lol ok.
- nesting: like XML, there must be ONE root element in a JSX doc
- comments in JSX: `{/* foo */}`

## Tools
### Starter Kits
- [Create React App](https://github.com/facebookincubator/create-react-app) by Facebook (26,962 ⭐️s)
- alt (366 ⭐️s) [React Starter Kit](https://github.com/kriasoft/react-app) - CLI tool and templates for authoring React applications with a single dev dependency and zero build/run configuration.

- [React inspector for Chrome ](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## webpack - a module bundler
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

## Loading Images as url()'s in CSS
- the webpack 'url-loader' package makes this work

- via: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

_ # vim:set nospell ft=markdown _
