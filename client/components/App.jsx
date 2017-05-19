import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>jm3 says: Hello, React!</h1>
        <h2>I can load CSS + LESS styles now.</h2>
        <h3>But can I import more than one CSS file without explicitly including them all? OH HELL YES</h3>
      </div>
    );
  }
}
