import React from 'react';
import ReactDOM from 'react-dom';

// our custom components
import App from './components/App.jsx';
import Graph from './components/Graph.jsx';

// these two CSS includes will be processed differently
// thanks to differing rulesets in webpack.config.js:
//
// the LESS file will be extracted using the ExtractTextPlugin
// and added to the end of HEAD in a <style> tag by HtmlWebpackPlugin.
import './screen.less';

// The "plain old" CSS will be emitted as Javascript at end of <BODY>,
// synchronously. HAndily, this will recursively include any nested CSS
// files @imported from plain-old.css.
// NOTE: leading ./ for CSS paths is 100% significant to webpack.
// DO NOT REMOVE IT.
import './plain-old.css'

ReactDOM.render(<App pi={Math.PI} />, document.getElementById('root'));
ReactDOM.render(<Graph />, document.getElementById('d3-version'));
