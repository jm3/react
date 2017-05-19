import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>jm3 says: Hello, React!</h1>
        <h2>webpack cfg loads CSS + LESS now.</h2>
        <h2>Can I import many CSS files w/out explicitly js-including each?<div>OH HELL YES</div></h2>
        <h2>Behold, I shall load an external library (d3) in a chunked include.</h2>
      </div>
    );
  }
}
