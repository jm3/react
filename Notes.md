# Notes

- via: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

## Babel presets
- Babel plugins that tell Babel what to look out for and
transform into plain, vanilla Javascript.

## Webpack.config
- We require the html-webpack-plugin and then create a new instance of it, and set
our skeleton HTML as the template. filename = the name of the HTML that the
plugin will generate. inject body tells the plugin to add any JavaScript into
the bottom of the page, just before the closing body tag.
- *Entry points*: where loading begins. a single {entry: 'path/file.js'} is shorthand for {entry: main: 'path/file.js'}
- *packages*: seems like many or most of the packages can go into devDependencies
- *output*: path: __ (no space) dirname + '/build'. more on resolution: https://webpack.github.io/docs/resolving.html
- *loaders*: loaders transform files upon require()'ing or sourcing them. Loaders can transform files from one lang to another (e.g. typescript to JS, or inline images as data urls), or require CSS right into JS.

## Root HTML template
- Element nodes as mount / load poins should not be self-closing for brevity. This bit me, too: <div id="root"></div> works; <div id="root" /> does not. lol ok.

## JSX
- nice: embedded HTML markup within JS, without need for annoying double-quoting.
- file extension can be either JSX or JS. React file naming convention is CamelCase.
- *Pass values to Components*: This was sort of weird to me. Value are passed into the component in HTML attribute notation, WITHOUT quotes. <shrug>
- from within the Component, any values passed in can be accessed via this.props

## Loading Styles
Webpack needs a series of loaders to load CSS. I heard "PostCSS"
mentioned a few times at Active Ingredients: Web, but the Internet doesn't make it seem like it's very simple to integrate with webpack 2, so Google directed me to use these 3 loaders (plus the 'less' pkg):

- css-loader
- less
- less-loader
- style-loader

## Loading Images as url()'s in CSS
- the webpack 'url-loader' package makes this work

# vim:set nospell ft=markdown
