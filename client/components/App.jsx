import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>jm3 says: Hello, React!</h1>
        <h2>I can load CSS + LESS styles now.</h2>
        <h2>But can I import more than one CSS file without explicitly including them all? OH HELL YES</h2>
        <h2>Behold, I shall load an external library (d3) in a chunked include.</h2>
      </div>
    );
  }
}
