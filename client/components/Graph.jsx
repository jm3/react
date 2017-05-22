import React from 'react';
const d3 = require('d3');

 export default class Graph extends React.Component {
  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <h2>
          Stare in awe as I load a vendored lib (D3 v{d3.version})
          using chunked includes!
        </h2>
      </div>
    );
  }
}
