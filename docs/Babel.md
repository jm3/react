# Babel: “a compiler for the next generation of Javascript”
- [Babel](https://babeljs.io) is a _source-to-source compiler_ AKA "Transpiler"
- to support some ES2015 features, we also need [Babel-Polyfill](https://babeljs.io/~~docs~~/usage/polyfill/)
- NOTE: _Polyfill(a)_ is British English for plaster spackle: hole-fillers, IOW.
- Babel-Polyfill works at runtime, enabling new, mind-boggling features like Promises or [WeakMaps](http://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html), static methods like `Array.from` or `Object.assign`, instance methods like `Array.prototype.includes`, and generator functions (provided you use the regenerator plugin). The polyfill adds to the global scope as well as native prototypes like `String` in order to do this.
- can convert from ES6 / ES2015 or "Flow" to JS that will run in … some browser?
- *presets*: Babel plugins that tell Babel what to look out for and
transform into plain, vanilla Javascript.
