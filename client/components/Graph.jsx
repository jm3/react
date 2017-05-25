import React from 'react';
const d3 = require('d3');

 export default class Graph extends React.Component {
  render() {

    return (
      <div style={{textAlign: 'center'}}>
      <svg width="480" height="480"><g transform="translate(240,240)"></g></svg>

        <h2>
          Stare in awe as I load a vendored lib (D3 v{d3.version})
          using chunked includes!
        </h2>
      </div>
    );
  }
}
