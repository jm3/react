# Notes on Learning React

## Concepts
- Declarative, a la [XSLT](https://en.wikipedia.org/wiki/XSLT); describing the end state.
- "It's not a ~~tumor~~ framework" (It's a view rendering library)
- JSX _(see [JSX.md](/docs/JSX.md))_, which is lintable JS, not magical "string-driven development" — h/t [Krzysztof Jendrzyca](https://github.com/kjendrzyca)
- Unification of necessary template-y bits: `HTML`, `JS` and often `CSS` for a component are managed together, rather than silo'd by file type.
- Passing data through props: **data down, actions up** - properties flow DOWN; actions flow UP
- `propTypes`
- _State_ flows down the components, and _events_ flow up. While properties shouldn't be changed, _state is mutable_. Properties can't be changed _because they are inherited every time the component is rendered_, so any changes will be lost.
- Immutable data
- Virtual DOM
- The distinction betwixt state and props can be useful: it makes clear what state the component owns. "It's best to keep most components stateless, and isolate state into as few places as possible."
- [Managing State](/docs/State.md)
- [Functional Components](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) - stateless, `function`-al components that behave like a React class with only a `render()` method defined
- Parent components that own state are termed [_container components_](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), and are sort of more like controllers than views, I think(?)
- Presentational components **do** contain styles, don't keep state, don't do data access or manipulation, and are generally _functional components_.
- [Keys](https://facebook.github.io/react/tutorial/tutorial.html#keys) on list items:
  - sounds similar to the way [D3](https://d3js.org/) binds data to DOM or SVG elements
