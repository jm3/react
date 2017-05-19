import React from 'react';

 export default class Graph extends React.Component {
  render() {
    let lib = "D3"; // silly example of passing a local value down into the JSX markup
    let version = this.props.version;
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Stare in awe as I load a vendored lib ({lib} v{version}) using chunked includes!</h2>
      </div>
    );
  }
}
