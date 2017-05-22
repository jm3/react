# Notes

## Languages

### Javascript
- ECMAScript - the specification, basically (TC39 group)
- move to yearly releases rather than monolithic releases
- [ES2015](https://babeljs.io/learn-es2015) (aka ES6) was the last "big" release. different browsers support different partial versions of it.

### [Babel](https://babeljs.io): “a compiler for the next generation of Javascript”
- Babel is only a source to source compiler aka "Transpiler"
- to support some ES2015 features, we also need [Babel-Polyfill](https://babeljs.io/docs/usage/polyfill/)
- Polyfill(a) is British English for plaster spackle: hole-fillers, IOW.
- Babel-Polyfill works at runtime, enabling  new built-ins like Promise or WeakMap, static methods like `Array.from` or `Object.assign`, instance methods like `Array.prototype.includes`, and generator functions (provided you use the regenerator plugin). The polyfill adds to the global scope as well as native prototypes like `String` in order to do this.
- can convert from ES6 / ES2015 or "Flow" to JS that will run in … some browser?
- *presets*: Babel plugins that tell Babel what to look out for and
transform into plain, vanilla Javascript.

## JSX
- nice: embedded HTML markup within JS, without need for annoying double-quoting.
- file extension can be either JSX or JS. React file naming convention is CamelCase.
- *Pass values to Components*: This was sort of weird to me. Value are passed into the component in HTML attribute notation, WITHOUT quotes. <shrug>
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

## webpack (always lowercase, lol)
### webpack.config.js
- We require `html-webpack-plugin`, create a new instance of it, and set
our skeleton HTML as the template. `filename` = the name of the HTML that the
plugin will generate. `inject` body tells the plugin to add any JavaScript into the bottom of the page, just before the closing body tag.
- *Entry points*: where loading begins. a single `{entry: 'path/file.js'}` is shorthand for `{entry: main: 'path/file.js'}`
- *packages*: seems like many or most of the packages can go into devDependencies
- *output*: path: `__dirname + '/build'`. more on resolution: https://webpack.github.io/docs/resolving.html
- *loaders*: loaders transform files upon `require()`ing or sourcing them. Loaders can transform files from one lang to another (e.g. typescript to JS, or inline images as data urls), or require CSS right into JS.

## Loading Styles
webpack needs a series of loaders to work with CSS. **PostCSS** was
mentioned a few times at Active Ingredients: Web, but the Internet doesn't make it seem like it's very simple to integrate with webpack 2, so Google directed me to use these 3 loaders (plus the 'less' pkg):

- css-loader
- less
- less-loader
- style-loader

## Loading Images as url()'s in CSS
- the webpack 'url-loader' package makes this work

- via: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

# vim:set nospell ft=markdown
