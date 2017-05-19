import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Graph from './components/Graph.jsx';

require('./screen.less');
const d3 = require('d3');

ReactDOM.render(<App pi={Math.PI} />, document.getElementById('root'));

const graphElement = <Graph version={d3.version} />;
ReactDOM.render(graphElement, document.getElementById('d3-version'));
