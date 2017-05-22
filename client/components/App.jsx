import React from 'react';
import ruby from '../ruby-bigfile.gif'

export default class App extends React.Component {
  render() {
    let pi = this.props.pi;
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Watch me stumble through learning webpack and React.js.</h2>
        <div className="cen round avatar"><img src={ruby} /></div>
        <h1>jm3 says: HelloReact.jsx!</h1>
        <h2>webpack cfg loads CSS + LESS now.</h2>
        <h2>Can I import many CSS files w/out explicitly js-including each?<div>OH HELL YES</div></h2>
        <h2>It is I, loader of CSS url() image paths using url-loader.</h2>
        <h2>Watch me pass a value into a React Component ({pi}) using only my bare hands and a let statement!</h2>
      </div>
    );
  }
}
