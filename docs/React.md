# Notes on Learning React

- Declarative
- Passing data through props

The distinction betwixt state and props can be useful: it makes clear what state the component owns. "It's best to keep most components stateless, and isolate state into as few places as possible."

## Concepts

- "It's not a ~~tumor~~ framework" (It's a view rendering library)
- JSX _(see [JSX.md](/docs/JSX.md))_ (which is lintable JS, not magic string-driven development — h/t [Krzysztof Jendrzyca](https://github.com/kjendrzyca))
- Unification of necessary bits: HTML, JS and often CSS for a component together
- **data down, actions up** - properties flow DOWN; actions flow UP
- _State_ flows down the components, and _events_ flow up. While properties shouldn't be changed, _state is mutable_. Properties can't be changed _because they are inherited every time the component is rendered_, so any changes will be lost.

- Immutable data
- propTypes
- Virtual DOM
- Saving state in components
- `setState()`
- Parent components that own state are termed [_container components_](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
- Hosting state up the tree
- Functional Components
- [Keys](https://facebook.github.io/react/tutorial/tutorial.html#keys) on list items:
  - sounds similar to the way [D3](https://d3js.org/) binds data to DOM or SVG elements
