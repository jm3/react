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
- Entry points: where loading begins. a single {entry: 'path/file.js'} is shorthand for {entry: main: 'path/file.js'}
- seems like many or most of the packages can go into devDependencies

## JSX
extension can be either JSX or JS. React file naming convention is CamelCase.

## Loading Styles
Webpack needs a series of loaders to load CSS. I heard "PostCSS"
mentioned a few times at Active Ingredients: Web, but it didn't seem
very compatible with webpack 2, so instead I used these 3 loaders plus the less pkg:

- css-loader
- less
- less-loader
- style-loader

## Loading Images as url()'s in CSS
- uses the url-loader package for webpack

# vim:set nospell ft=markdown
